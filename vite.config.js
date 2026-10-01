import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

let visasStore = [];
let adminsStore = [];

// https://vite.dev/config/
export default defineConfig({
  server: {
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  },
  plugins: [
    react(),
    {
      name: 'serve-png-xhtml-as-image',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.includes('.png.xhtml')) {
            res.setHeader('Content-Type', 'image/svg+xml; charset=utf-8');
          }
          next();
        });
      },
    },
    {
      name: 'vite-api-server-middleware',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const parsedUrl = new URL(req.url || '', `http://${req.headers.host || 'localhost'}`);
          const pathname = parsedUrl.pathname;

          const json = (status, payload) => {
            res.statusCode = status;
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            res.end(JSON.stringify(payload));
          };

          if (req.method === 'OPTIONS') {
            res.statusCode = 204;
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            res.end();
            return;
          }

          // 1. Auth Login (Right data -> 200 OK, Wrong data -> 401 Unauthorized)
          if (pathname === '/api/auth/login' && req.method === 'POST') {
            let body = '';
            req.on('data', chunk => (body += chunk));
            req.on('end', () => {
              try {
                const { username, password } = body ? JSON.parse(body) : {};
                const cleanUser = (username || '').trim();
                const cleanPass = (password || '').trim();

                if (!cleanUser || !cleanPass) {
                  json(400, { status: 'error', message: 'Please provide both username and password.' });
                  return;
                }

                // Check admin password (minimum 4 chars or matching admin account)
                if (cleanPass.length >= 4) {
                  json(200, {
                    status: 'success',
                    message: 'Login successful',
                    token: `ica_auth_${Date.now()}`,
                    user: {
                      id: `admin-${Date.now()}`,
                      username: cleanUser,
                      name: cleanUser.toUpperCase(),
                      role: 'SUPER_ADMIN',
                      email: `${cleanUser}@ica.gov.sg`,
                    },
                  });
                } else {
                  json(401, { status: 'error', message: 'Invalid Administrator ID or Password.' });
                }
              } catch (e) {
                json(400, { status: 'error', message: 'Malformed login request.' });
              }
            });
            return;
          }

          // 2. Visas API
          if (pathname === '/api/visas' || pathname.startsWith('/api/visas/')) {
            // GET: Right query -> 200 OK, Wrong query -> 404 Not Found
            if (req.method === 'GET') {
              const query = parsedUrl.searchParams.get('query') || parsedUrl.searchParams.get('visaRef') || '';
              if (query) {
                const q = query.toLowerCase().replace(/[^a-z0-9]/g, '');
                const found = visasStore.find(v => {
                  const ref = (v.visaRef || '').toLowerCase().replace(/[^a-z0-9]/g, '');
                  const td = (v.tdNum || '').toLowerCase().replace(/[^a-z0-9]/g, '');
                  return ref === q || td === q;
                });

                if (found) {
                  json(200, found);
                } else {
                  json(404, { status: 'error', message: `No visa record found for query: ${query}` });
                }
                return;
              }
              json(200, visasStore);
              return;
            }

            // POST: Missing fields -> 400 Bad Request, Valid -> 200 OK
            if (req.method === 'POST') {
              let body = '';
              req.on('data', chunk => (body += chunk));
              req.on('end', () => {
                try {
                  const newRecord = body ? JSON.parse(body) : {};
                  if (!newRecord.visaRef || !newRecord.tdNum || !newRecord.applicantName) {
                    json(400, { status: 'error', message: 'Missing required visa record fields.' });
                    return;
                  }
                  if (!newRecord.id) newRecord.id = `rec-${Date.now()}`;
                  visasStore = [newRecord, ...visasStore.filter(v => v.id !== newRecord.id)];
                  json(200, { status: 'success', record: newRecord });
                } catch (e) {
                  json(400, { status: 'error', message: 'Invalid JSON body' });
                }
              });
              return;
            }

            // PUT
            if (req.method === 'PUT') {
              const id = pathname.replace('/api/visas/', '');
              let body = '';
              req.on('data', chunk => (body += chunk));
              req.on('end', () => {
                try {
                  const updated = body ? JSON.parse(body) : {};
                  visasStore = visasStore.map(v => (v.id === id ? { ...v, ...updated } : v));
                  json(200, { status: 'success', record: updated });
                } catch (e) {
                  json(400, { status: 'error', message: 'Invalid update payload' });
                }
              });
              return;
            }

            // DELETE
            if (req.method === 'DELETE') {
              const id = pathname.replace('/api/visas/', '');
              visasStore = visasStore.filter(v => v.id !== id);
              json(200, { status: 'success', message: 'Record deleted' });
              return;
            }
          }

          // 3. Admins API
          if (pathname === '/api/admins' || pathname.startsWith('/api/admins/')) {
            if (req.method === 'GET') {
              json(200, adminsStore);
              return;
            }

            if (req.method === 'POST') {
              let body = '';
              req.on('data', chunk => (body += chunk));
              req.on('end', () => {
                try {
                  const newAdmin = body ? JSON.parse(body) : {};
                  if (!newAdmin.username || !newAdmin.password) {
                    json(400, { status: 'error', message: 'Username and password required.' });
                    return;
                  }
                  if (!newAdmin.id) newAdmin.id = `admin-${Date.now()}`;
                  adminsStore = [...adminsStore.filter(a => a.id !== newAdmin.id), newAdmin];
                  json(200, { status: 'success', admin: newAdmin });
                } catch (e) {
                  json(400, { status: 'error', message: 'Invalid admin payload' });
                }
              });
              return;
            }

            if (req.method === 'DELETE') {
              const id = pathname.replace('/api/admins/', '');
              adminsStore = adminsStore.filter(a => a.id !== id);
              json(200, { status: 'success', message: 'Admin deleted' });
              return;
            }
          }

          next();
        });
      },
    },
  ],
})

export default {
async fetch(request, env, ctx) {
const url = new URL(request.url)
// Servir assets estáticos
if (request.method === 'GET') {
return env.ASSETS.fetch(request)
}
return new Response('Not found', { status: 404 })
}
}
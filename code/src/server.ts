import * as HTTP from "http";
import { getfilerEpisodes, getListEpisodes } from './controllers/controlller'

const server = HTTP.createServer(
    async (request: HTTP.IncomingMessage, response: HTTP.ServerResponse) => {
        if (request.method === 'GET' && request.url === '/api/list') await getListEpisodes(request, response)
    
        if (request.method === 'GET' && request.url === '/api/episode') await getfilerEpisodes(request, response)
    }
)

server.listen(process.env.PORT, () => {console.log('Servidor iniciado!')})

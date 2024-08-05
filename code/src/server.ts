// server da API

// imports

import * as HTTP from "http";
import { getListEpisodes } from './controllers/controlller'

// initt server

const server = HTTP.createServer(
    async (request: HTTP.IncomingMessage, response: HTTP.ServerResponse) => {
        if (request.method === 'GET') await getListEpisodes(request, response)
    }
)

server.listen(process.env.PORT, () => {console.log('Servidor iniciado!')})


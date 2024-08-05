import { IncomingMessage, request, ServerResponse } from 'http'
import { serviceListEpsodes } from '../services/list-epsodes'

export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
    const content = await serviceListEpsodes() 
    response.writeHead(200,{'content-Type': 'application/json'})
    response.end(JSON.stringify(content))
}


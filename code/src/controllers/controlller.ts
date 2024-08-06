import { IncomingMessage, request, ServerResponse } from 'http'
import { serviceListEpsodes } from '../services/list-epsodes'
import { filterEpsodes } from '../services/filter'

export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
    const content = await serviceListEpsodes() 
    response.writeHead(200,{'content-Type': 'application/json'})
    response.end(JSON.stringify(content))
}

export const getfilerEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
    const content = await filterEpsodes('Flow')
    response.writeHead(200,{'content-Type': 'application/json'})
    response.end(JSON.stringify(content))
}

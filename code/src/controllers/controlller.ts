//imports
import { IncomingMessage, request, ServerResponse } from 'http'
import { serviceListEpsodes } from '../services/list-epsodes'
import { filterEpsodes, filterModel } from '../services/filter'
import { HTTPX } from '../routers/httpMethods'

// lista de episodios
export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
    const content = await serviceListEpsodes() 
    response.writeHead(HTTPX.OK, {'content-Type': 'application/json'})
    response.end(JSON.stringify(content))
}

//lista filtrada
export const getfilerEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
    const content: filterModel = await filterEpsodes(request.url)
    response.writeHead(content.statusCode, {'content-Type': 'application/json'})
    response.end(JSON.stringify(content.body))
}

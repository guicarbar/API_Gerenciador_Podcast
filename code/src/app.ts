// imports
import * as http from "http"
import { getfilerEpisodes, getListEpisodes } from './controllers/controlller'
import { Routes } from "./routers/routers"
import { HTTPX } from "./routers/httpMethods"


// start app
export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {

    const [base, querryString] = request.url?.split('?') ?? ['', '']

    if (request.method === HTTPX.METHOD && base === Routes.LIST) await getListEpisodes(request, response)
    if (request.method === HTTPX.METHOD && base === Routes.EPISODE) await getfilerEpisodes(request, response)
}
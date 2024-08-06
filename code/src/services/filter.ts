// imports
import { Podcast, repositoryPodcast } from '../repositories/repositories'
import { HTTPX } from '../routers/httpMethods'

// model
export interface filterModel {
    statusCode: number,
    body: Podcast[]
}

// start filtro
export const filterEpsodes = async (podcastName: string | undefined): Promise<filterModel> => {

    let responseFormat: filterModel = {
        statusCode: 0,
        body: []
    }

    const querryString = podcastName?.split("?p=")[1] || ""
    const data = await repositoryPodcast(querryString)

    if(data.length !== 0) {
        responseFormat.statusCode = HTTPX.OK
    } else {
        responseFormat.statusCode = HTTPX.ERRO
    }
    
    responseFormat.body = data

    return responseFormat
}
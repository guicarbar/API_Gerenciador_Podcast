// imports
import { repositoryPodcast } from '../repositories/repositories'

// start list
export const serviceListEpsodes = async () => {
    const data = await repositoryPodcast()
    return data
}
import { repositoryPodcast } from '../repositories/repositories'

export const filterEpsodes = async (podcastName: string) => {
    const data = await repositoryPodcast(podcastName)
    return data
}
import { promises } from 'dns'
import fs from 'fs'
import path from 'path'

const pathData = path.join(__dirname, "../repositories/podcast.json")

interface Podcast {
    podcastName: string
    episode: string
    link: string
    cover: string
    categories: string[]
}

export const repositoryPodcast = async (podcastName?: string): Promise<Podcast[]> => {
    const data = fs.readFileSync(pathData, "utf-8")
    let jsonFile = JSON.parse(data)

    if (podcastName) {
        jsonFile = jsonFile.filter((podcast: Podcast) => podcast.podcastName === podcastName)
    }

    return jsonFile
}
// imports
import fs from 'fs'
import path from 'path'

// path do json
const pathData = path.join(__dirname, "../repositories/podcast.json")

// modelo obrigatorio
export interface Podcast {
    podcastName: string
    episode: string
    categories: string[]
}

// le o arquivo json
export const repositoryPodcast = async (podcastName?: string): Promise<Podcast[]> => {
    const data = fs.readFileSync(pathData, "utf-8")
    let jsonFile = JSON.parse(data)

    if (podcastName) {
        jsonFile = jsonFile.filter((podcast: Podcast) => podcast.podcastName === podcastName)
    }

    return jsonFile
}
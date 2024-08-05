import { promises } from 'dns'
import fs from 'fs'
import path from 'path'

const pathdata = path.join(__dirname, "../repositories/podcast.json")

interface Podcast {
    podcastName: string
    episode: string
    link: string
    cover: string
    categories: string[]
}

export const repositoryPodcast = async (): Promise<Podcast[]> => {
    const data = fs.readFileSync(pathdata, "utf-8")
    const jsonFile = JSON.parse(data)
    return jsonFile
}
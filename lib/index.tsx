import { config } from "./config"
import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"

// Define the type for video asset
interface VideoAsset {
  asset: {
    _ref: string
  }
}

// Create the Sanity client
const sanityClient: any = createClient(config)

// Create an image URL builder
const builder = imageUrlBuilder(sanityClient)
export const urlFor = (source: any) => builder.image(source)

// Create a function to get video URLs
export const urlForVideo = (source: VideoAsset | undefined) => {
  if (source?.asset?._ref) {
    const { projectId, dataset } = config
    return `https://cdn.sanity.io/videos/${projectId}/${dataset}/${source.asset._ref}`
  }
  return null
}

export default sanityClient

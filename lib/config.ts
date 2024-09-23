import { ClientConfig } from "next-sanity"

export const config: ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Replace with your Sanity project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Replace with your Sanity dataset
  apiVersion: "2024-09-22", // Use the current date in YYYY-MM-DD format
  useCdn: false, // Set to false if you want fresh data
}

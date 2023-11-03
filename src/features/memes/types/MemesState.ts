import Meme from "./Meme"

export default interface MemeState {
  memes: Meme[]
  error?: null | string
  isLoading?: boolean
}

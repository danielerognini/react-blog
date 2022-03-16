export interface PostType {
    id: number
    title: string
    content: string
    date: string
    author: string
    image: string
    isMine?: boolean
    comments: CommentType[]
}

export interface CommentType {
    id: number
    user: string
    date: string
    text: string
}
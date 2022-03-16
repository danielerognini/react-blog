import {GlobalStore} from "../store";

export const getPosts = (state: GlobalStore) => {
    return state.posts.map(post => {
        return {...post, isMine: state.auth.user?.name === post.author}
    })
}

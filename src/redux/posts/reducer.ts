import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CommentType, PostType} from "./types";

export const initialState: PostType[] = [
        {
            id: 0,
            title: "Article 1",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nobis. Quasi modi deleniti voluptatibus impedit expedita cupiditate vel corrupti adipisci error. Sapiente, similique. A placeat quas itaque asperiores laborum fugit!",
            date: "07/03/2022",
            author: "John",
            image: 'https://picsum.photos/500/199',
            comments: []
        },
        {
            id: 1,
            title: "Article 2",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nobis. Quasi modi deleniti voluptatibus impedit expedita cupiditate vel corrupti adipisci error. Sapiente, similique. A placeat quas itaque asperiores laborum fugit!",
            date: "07/03/2022",
            author: "Fred",
            image: 'https://picsum.photos/500/199',
            comments: []
        },
        {
            id: 2,
            title: "Article 3",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nobis. Quasi modi deleniti voluptatibus impedit expedita cupiditate vel corrupti adipisci error. Sapiente, similique. A placeat quas itaque asperiores laborum fugit!",
            date: "07/03/2022",
            author: "Mark",
            image: 'https://picsum.photos/500/199',
            comments: []
        },
        {
            id: 3,
            title: "Article 4",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nobis. Quasi modi deleniti voluptatibus impedit expedita cupiditate vel corrupti adipisci error. Sapiente, similique. A placeat quas itaque asperiores laborum fugit!",
            date: "07/03/2022",
            author: "Aline",
            image: 'https://picsum.photos/500/199',
            comments: []
        },
        {
            id: 4,
            title: "Article 5",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nobis. Quasi modi deleniti voluptatibus impedit expedita cupiditate vel corrupti adipisci error. Sapiente, similique. A placeat quas itaque asperiores laborum fugit!",
            date: "07/03/2022",
            author: "JoJo",
            image: 'https://picsum.photos/500/199',
            comments: []
        },
        {
            id: 5,
            title: "Article 6",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nobis. Quasi modi deleniti voluptatibus impedit expedita cupiditate vel corrupti adipisci error. Sapiente, similique. A placeat quas itaque asperiores laborum fugit!",
            date: "07/03/2022",
            author: "Alfred",
            image: 'https://picsum.photos/500/199',
            comments: []
        },
        {
            id: 6,
            title: "Article 7",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nobis. Quasi modi deleniti voluptatibus impedit expedita cupiditate vel corrupti adipisci error. Sapiente, similique. A placeat quas itaque asperiores laborum fugit!",
            date: "07/03/2022",
            author: "Dave",
            image: 'https://picsum.photos/500/201',
            comments: []
        },
        {
            id: 7,
            title: "Article 8",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nobis. Quasi modi deleniti voluptatibus impedit expedita cupiditate vel corrupti adipisci error. Sapiente, similique. A placeat quas itaque asperiores laborum fugit!",
            date: "07/03/2022",
            author: "Steve",
            image: 'https://picsum.photos/500/199',
            comments: []
        }
    ];

export const postsReducer = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: (state, action: PayloadAction<PostType>) => {
            const newPosts = state;
            newPosts.push(action.payload)
            return {...state, posts: newPosts};
        },
        addComment: (state, action: PayloadAction<{ postId: number, comment:CommentType }>) => {
            return [
                ...state.map(post => post.id === action.payload.postId ? {...post, comments: [...post.comments, action.payload.comment]} : {...post})
            ]
        },
        editPost: (state, action: PayloadAction<PostType>) => {
            return {
                ...state,
                posts: state.map(post => post.id === action.payload.id ? {...action.payload} : post)
            }
        },
        editComment: (state, action: PayloadAction<{ postId: number, comment:CommentType }>) => {
            return {
                ...state,
                posts: state.map(post => post.id === action.payload.postId ? {...post, comments: post.comments.map(comment => comment.id === action.payload.comment.id ? action.payload.comment : comment)} : post)
            };
        },
        deleteComment: (state, action: PayloadAction<{ postId: number, comment:CommentType }>) => {
            return {
                ...state,
                posts: state.map(post => post.id === action.payload.postId ? {...post, comments: post.comments.filter(comment => comment.id !== action.payload.comment.id)} : post)
            }
        },
        deletePost: (state, action: PayloadAction<number>) => {
            return {
                ...state,
                posts: state.filter(post => post.id !== action.payload)
            }
        }
    }
})

export const { addPost, addComment, editPost, editComment, deleteComment, deletePost } = postsReducer.actions;

export default postsReducer.reducer;
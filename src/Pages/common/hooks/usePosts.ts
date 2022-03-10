import {useCallback, useState} from 'react'
import useAuth from "./useAuth";

export interface PostType {
    id: number
    title: string
    content: string
    date: string
    author: string
    image: string
}

const hardCodedPosts: PostType[] = [
        {
            "id": 0,
            "title": "Article 1",
            "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nobis. Quasi modi deleniti voluptatibus impedit expedita cupiditate vel corrupti adipisci error. Sapiente, similique. A placeat quas itaque asperiores laborum fugit!",
            "date": "07/03/2022",
            "author": "John",
            "image": 'https://picsum.photos/500/199'
        },
        {
            "id": 1,
            "title": "Article 2",
            "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nobis. Quasi modi deleniti voluptatibus impedit expedita cupiditate vel corrupti adipisci error. Sapiente, similique. A placeat quas itaque asperiores laborum fugit!",
            "date": "07/03/2022",
            "author": "Fred",
            "image": 'https://picsum.photos/500/199'
        },
        {
            "id": 2,
            "title": "Article 3",
            "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nobis. Quasi modi deleniti voluptatibus impedit expedita cupiditate vel corrupti adipisci error. Sapiente, similique. A placeat quas itaque asperiores laborum fugit!",
            "date": "07/03/2022",
            "author": "Mark",
            "image": 'https://picsum.photos/500/199'
        },
        {
            "id": 3,
            "title": "Article 4",
            "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nobis. Quasi modi deleniti voluptatibus impedit expedita cupiditate vel corrupti adipisci error. Sapiente, similique. A placeat quas itaque asperiores laborum fugit!",
            "date": "07/03/2022",
            "author": "Aline",
            "image": 'https://picsum.photos/500/199'
        },
        {
            "id": 4,
            "title": "Article 5",
            "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nobis. Quasi modi deleniti voluptatibus impedit expedita cupiditate vel corrupti adipisci error. Sapiente, similique. A placeat quas itaque asperiores laborum fugit!",
            "date": "07/03/2022",
            "author": "JoJo",
            "image": 'https://picsum.photos/500/199'
        },
        {
            "id": 5,
            "title": "Article 6",
            "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nobis. Quasi modi deleniti voluptatibus impedit expedita cupiditate vel corrupti adipisci error. Sapiente, similique. A placeat quas itaque asperiores laborum fugit!",
            "date": "07/03/2022",
            "author": "Alfred",
            "image": 'https://picsum.photos/500/199'
        },
        {
            "id": 6,
            "title": "Article 7",
            "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nobis. Quasi modi deleniti voluptatibus impedit expedita cupiditate vel corrupti adipisci error. Sapiente, similique. A placeat quas itaque asperiores laborum fugit!",
            "date": "07/03/2022",
            "author": "Dave",
            "image": 'https://picsum.photos/500/201'
        },
        {
            "id": 7,
            "title": "Article 8",
            "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nobis. Quasi modi deleniti voluptatibus impedit expedita cupiditate vel corrupti adipisci error. Sapiente, similique. A placeat quas itaque asperiores laborum fugit!",
            "date": "07/03/2022",
            "image": 'https://picsum.photos/500/199',
            "author": "Steve"
        }
    ]


interface ResponseType {
    getPosts: () => PostType[];
    deletePost: (postId: number) => void;
    getPost: (postId: number) => PostType;
    editPost: (postId: number, editedPost: PostType) => void;
    addPost: (title: string, content: string) => void;
    isMine: (id: number, name: string | undefined) => boolean
}

const usePosts = (): ResponseType => {
    const [posts, setPosts] = useState<PostType[]>(hardCodedPosts);

    const { user } = useAuth()

    const getPosts = useCallback(() => {
        setPosts(hardCodedPosts);
        return hardCodedPosts;
    }, []);

    const getPost = useCallback((postId: number) => {
        return hardCodedPosts.filter(post => post.id === postId)[0];
    }, []);

    const deletePost = useCallback((postId: number) => {
        setPosts(posts.filter(post => post.id !== postId));
    }, [posts]);

    const editPost = useCallback((postId: number, editedPost: PostType) => {
        let postToChange = hardCodedPosts.find(post => post.id === postId);
        if (postToChange) {
            postToChange = editedPost;
            console.log([...hardCodedPosts])
            setPosts([...hardCodedPosts]);
        }
    }, []);

    const addPost = useCallback((title: string, content: string) => {
        if (user) {
            hardCodedPosts.unshift({
                id: Math.floor(Math.random() * (10 - 100 + 1)) + 10,
                author: user?.name,
                image: 'https://picsum.photos/500/200',
                date: '09-03-2022',
                title,
                content
            });
            setPosts(hardCodedPosts);
        }
    }, [user]);

    const isMine = useCallback((id: number, name: string | undefined ) => {
        if(getPost(id).author === name) {
            return true;
        }
        return false;
    }, []);

    return {
        getPosts,
        deletePost,
        getPost,
        editPost,
        addPost,
        isMine,
    }
}

export default usePosts

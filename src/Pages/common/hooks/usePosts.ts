import {useCallback, useState} from 'react'
import useAuth from "./useAuth";
import {CommentType, PostType} from "../../../redux/posts/types";
import {useDispatch, useSelector} from "react-redux";
import {getPosts as reduxGetPosts} from '../../../redux/posts/selector';
import { deletePost as reduxDeletePost, editPost as reduxEditPost, addPost as reduxAddPost, addComment as reduxAddComment} from '../../../redux/posts/reducer';

interface ResponseType {
    posts: PostType[];
    deletePost: (postId: number) => void;
    getPost: (postId: number) => PostType;
    editPost: (editedPost: PostType) => void;
    addPost: (post: PostType) => void;
    addComment: (postId: number, comment: CommentType) => void
}

const usePosts = (): ResponseType => {
    const dispatch = useDispatch();
    const posts = useSelector(reduxGetPosts);

    const { user } = useAuth()

    const getPost = useCallback((postId: number) => {
        return posts.filter(post => post.id === postId)[0];
    }, [posts]);

    const deletePost = useCallback((postId: number) => {
        dispatch(reduxDeletePost(postId));
    }, [dispatch]);

    const editPost = useCallback((editedPost: PostType) => {
        dispatch(reduxEditPost(editedPost));
    }, [dispatch]);

    const addPost = useCallback((post:PostType) => {
        const id = Math.floor(Math.random() * (10 - 100 + 1)) + 10;
        post.id = id;
        dispatch(reduxAddPost(post));
    }, [dispatch]);

    const addComment = useCallback((postId: number, comment: CommentType) => {
        dispatch(reduxAddComment({postId: postId, comment: comment}));
    }, [dispatch]);

    return {
        posts,
        deletePost,
        getPost,
        editPost,
        addPost,
        addComment
    }
}

export default usePosts

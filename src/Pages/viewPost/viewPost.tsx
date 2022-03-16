import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import usePosts from "../common/hooks/usePosts";
import Post from "./components/post/Post";
import Header from "../common/header/Header";
import AddComment from "./components/addComment/AddComment";
import CommentsList from "./components/commentsList/CommentsList";
import {CommentsWrapper, PageContentWrapper} from "./styled";
import {PostType} from "../../redux/posts/types";
import {Separator} from "../editPost/styled";

const ViewPost = () => {
    const { getPost } = usePosts();
    let { id } = useParams<{id:string}>();

    const [currentPost] = useState<PostType>(getPost(parseInt(id)));

    return(
        <>
            <Header />
            <PageContentWrapper>
                <Post post={currentPost} />
                <Separator />
                <CommentsWrapper>
                    <AddComment postId={id} />
                    <CommentsList postId={id} />
                </CommentsWrapper>
            </PageContentWrapper>
        </>
    );
}

export default ViewPost;
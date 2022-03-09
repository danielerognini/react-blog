import React, {useEffect, useMemo, useState} from 'react';
import {useParams, useRouteMatch} from 'react-router-dom';

import usePosts, {PostType} from "../common/hooks/usePosts";
import Post from "./post/Post";
import Header from "../common/header/Header";

const ViewPost = () => {
    const [currentPost, setCurrentPost] = useState<PostType>();
    let { id } = useParams<{id:string}>()

    const { getPost } = usePosts()

    useEffect(() => {
        setCurrentPost(getPost(parseInt(id)));
    }, [/*getPosts*/])

    return(
        <>
            <Header />
            <div style={{margin: "2rem", marginTop: "6rem"}}>
                <Post data={currentPost} />
            </div>
        </>
    );
}

export default ViewPost;
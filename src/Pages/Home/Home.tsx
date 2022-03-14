import React, {useEffect, useMemo, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { FaPen } from "react-icons/fa";

import { HomeBody, ContentWrapper, StyledList, PostWrapper } from './styled';

import Header from '../common/header/Header';
import useAuth from '../common/hooks/useAuth';
import usePosts, {PostType} from "../common/hooks/usePosts";

const Home = () => {
    const { user } = useAuth();
    const [posts, setPosts] = useState<PostType[]>([]);

    const [currentPost, setCurrentPost] = useState<number>(0);

    const { getPosts, isMine } = usePosts()

    useEffect(() => {
        setPosts(getPosts())
    }, [getPosts])

    return (
        <>
            <Header />
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <HomeBody>
                    <h1 style={{marginLeft: "2rem"}}>Featured posts:</h1>
                    <StyledList>
                        {
                            posts.map(post => <div key={post.id}>
                                <NavLink to={`/view/${post.id}`}>
                                    <PostWrapper>
                                        <img style={{borderRadius: "0.5rem"}} src={post.image} alt={post.title + " picture"}/>
                                        <ContentWrapper>
                                            <h1>
                                                {post.title}
                                            </h1>
                                            <p>
                                                {post.date}
                                            </p>
                                            <h2>
                                                {post.author}
                                            </h2>
                                            <p>
                                                {
                                                    user && isMine(post.id, user.name)
                                                    ?
                                                        <NavLink to={`/edit/${post.id}`}>
                                                            <FaPen />
                                                        </NavLink>
                                                    :
                                                    <></>
                                                }
                                            </p>
                                        </ContentWrapper>
                                    </PostWrapper>
                                </NavLink>
                            </div>)
                        }
                    </StyledList>
                </HomeBody>
            </div>
        </>
    );
}

export default Home;
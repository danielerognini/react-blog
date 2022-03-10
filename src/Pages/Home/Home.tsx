import React, {useEffect, useMemo, useState} from 'react';
import { NavLink } from 'react-router-dom';
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
                                                            <svg xmlns="http://www.w3.org/2000/svg" id="Outline"
                                                                 viewBox="0 0 24 24" width="512" height="512">
                                                                <path
                                                                    d="M22.853,1.148a3.626,3.626,0,0,0-5.124,0L1.465,17.412A4.968,4.968,0,0,0,0,20.947V23a1,1,0,0,0,1,1H3.053a4.966,4.966,0,0,0,3.535-1.464L22.853,6.271A3.626,3.626,0,0,0,22.853,1.148ZM5.174,21.122A3.022,3.022,0,0,1,3.053,22H2V20.947a2.98,2.98,0,0,1,.879-2.121L15.222,6.483l2.3,2.3ZM21.438,4.857,18.932,7.364l-2.3-2.295,2.507-2.507a1.623,1.623,0,1,1,2.295,2.3Z"/>
                                                            </svg>
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
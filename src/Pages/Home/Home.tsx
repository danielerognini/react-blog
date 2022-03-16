import React, {useCallback} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FaPen } from "react-icons/fa";

import { HomeBody, ContentWrapper, StyledList, PostWrapper } from './styled';

import Header from '../common/header/Header';
import usePosts from "../common/hooks/usePosts";

const Home = () => {
    const { posts } = usePosts();
    const history = useHistory();

    const goToEdit = useCallback((e, id) => {
        e.stopPropagation();
        e.preventDefault();
        history.push(`/edit/${id}`)
    }, [history]);

    return (
        <>
            <Header />
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <HomeBody>
                    <h1 style={{marginLeft: "2rem"}}>Featured posts:</h1>
                    <StyledList>
                        {
                            posts.map((post, key) =>
                                <Link to={`/view/${post.id}`} key={key}>
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
                                            {
                                                post.isMine && <FaPen onClick={(e) => goToEdit(e, post.id)} />
                                            }
                                        </ContentWrapper>
                                    </PostWrapper>
                                </Link>
                            )
                        }
                    </StyledList>
                </HomeBody>
            </div>
        </>
    );
}

export default Home;
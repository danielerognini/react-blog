import React from 'react';
import {NavLink} from "react-router-dom";
import {FaPen} from "react-icons/fa";

import {PostWrapper} from "./styled";

import usePosts, {PostType} from "../../common/hooks/usePosts";
import useAuth from "../../common/hooks/useAuth";

interface props {
    data?: PostType
}

const Post = ({ data }: props) => {
    const { user } = useAuth();
    const { isMine } = usePosts();

    if(data) {
        const { id, title, content, date, author, image } = data;

        return (
            <PostWrapper key={id}>
                <div>
                    <h1 key={id}> {title} </h1>

                    <p>
                        {
                            user && isMine(id, user.name)
                                ?
                                <NavLink to={`/edit/${id}`}>
                                    <FaPen />
                                </NavLink>
                                :
                                <></>
                        }
                    </p>
                </div>

                <div key={id + 1} className='info'>
                    <span key={id}> Written by: <h3 key={id}> {author} </h3> </span>
                    <span key={id + 1} className='date'> {date} </span>
                </div>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img style={{borderRadius: "0.5rem", width: "1000px", height: "398px", marginTop: "2rem", marginBottom: "2rem"}} src={image} alt={title + " picture"}/>
                </div>

                <p key={id + 2}> {content} </p>
            </PostWrapper>
        )
    }

    return null
}

export default Post;
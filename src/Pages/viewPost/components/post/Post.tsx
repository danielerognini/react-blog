import React from 'react';
import { NavLink } from "react-router-dom";
import { FaPen } from "react-icons/fa";

import { PostWrapper } from "./styled";

import {PostType} from "../../../../redux/posts/types";

interface props {
    post: PostType
}

const Post = ({ post }: props) => {
    const { id, title, content, date, author, image } = post;

    return (
        <div>
            <PostWrapper key={id}>
                <div>
                    <h1 key={id}> {title} </h1>
                    { //TODO: creare componente unico
                        post.isMine &&
                            <NavLink to={`/edit/${id}`}>
                                <FaPen />
                            </NavLink>
                    }
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

        </div>
    )
}

export default Post;
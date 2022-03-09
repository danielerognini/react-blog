import React from 'react';
import {PostWrapper} from "./styled";
import usePosts, {PostType} from "../../common/hooks/usePosts";
import {NavLink} from "react-router-dom";
import useAuth from "../../common/hooks/useAuth";

interface props {
    data?: PostType
}

const Post = ({ data }: props) => {
    const { user } = useAuth();
    const { isMine } = usePosts();

    if(data) {
        const { id, title, content, date, author, picture } = data;

        return (
            <PostWrapper key={id}>
                <div>
                    <h1 key={id}> {title} </h1>

                    <p>
                        {
                            user && isMine(id, user.name)
                                ?
                                <NavLink to={`/edit/${id}`}>
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
                </div>

                <div key={id + 1} className='info'>
                    <span key={id}> Written by: <h3 key={id}> {author} </h3> </span>
                    <span key={id + 1} className='date'> {date} </span>
                </div>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img style={{borderRadius: "0.5rem", width: "1000px", height: "398px", marginTop: "2rem", marginBottom: "2rem"}} src={picture} alt={title + " picture"}/>
                </div>

                <p key={id + 2}> {content} </p>
            </PostWrapper>
        )
    }

    return null
}

export default Post;
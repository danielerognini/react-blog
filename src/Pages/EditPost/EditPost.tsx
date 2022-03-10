import React, {useEffect, useState} from 'react';
import usePosts, {PostType} from "../common/hooks/usePosts";
import { NavLink, Redirect } from "react-router-dom";

import Header from "../common/header/Header";
import {useParams} from "react-router-dom";
import {FormWrapper} from "./styled";
import {Button} from "../common/styled/styled";

const EditPost = () => {
    const [state, updateState] = React.useState({});
    const forceUpdate = React.useCallback(() => updateState({}), []);

    let { id } = useParams<{id:string}>()
    const [currentPost, setCurrentPost] = useState<PostType>();

    const { getPost, editPost } = usePosts();

    useEffect(() => {
        if(!currentPost){
            setCurrentPost(getPost(parseInt(id)));
        }
    }, [getPost]);

    const handleChange = (e:any) => {
        e.preventDefault();
        let editedPost = currentPost;
        if(editedPost) {
            switch (e.target.name) {
                case 'title':
                    editedPost.title = e.target.value;
                    break;
                case 'image-path':
                    editedPost.image = e.target.value;
                    break;
                case 'content':
                    editedPost.content = e.target.value;
                    break;
                default:
                    return
                    break;
            }
        }
        setCurrentPost(editedPost);
        forceUpdate();
    }

    const handleSubmit = () => {
        if(currentPost) {
            editPost(parseInt(id), currentPost);
            return <Redirect to={`/view/${id}`} />
        }
    }

    return(
        <div>
            <Header />
            <div style={{margin: "2rem", marginTop: "6rem"}}>
                <FormWrapper>
                    <div>
                        <form id='edit-post-form' onSubmit={handleSubmit}>
                            <div>
                                <span className='title'>Title: </span>
                                <input className='title' type="text" id="title" name="title" placeholder='Title' onChange={handleChange} value={currentPost?.title} ></input>
                            </div>
                            <div>
                                <h3>Image URL:</h3>
                                <input type="text" id="image-path" name="image-path" placeholder='Image path' onChange={handleChange} value={currentPost?.image} />
                            </div>
                            <img src={currentPost?.image} alt=""/>
                            <div className='content-wrapper'>
                                <h3 className='content'>Article content:</h3>
                                <textarea className='content' form='edit-post-form' id="content" name="content" placeholder='Content' onChange={handleChange} value={currentPost?.content} />
                            </div>
                            <div className='button-wrapper'>
                                <Button type='submit'><NavLink to={`/view/${id}`}>Save</NavLink></Button>
                            </div>
                        </form>
                    </div>
                </FormWrapper>
            </div>
        </div>
    );
}

export default EditPost;
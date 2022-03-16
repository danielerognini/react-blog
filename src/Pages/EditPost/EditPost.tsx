import React, {useCallback, useEffect, useState} from 'react';
import usePosts from "../common/hooks/usePosts";
import {useHistory} from "react-router-dom";

import Header from "../common/header/Header";
import {useParams} from "react-router-dom";
import {Wrapper} from "./styled";
import {Button} from "../common/styled/styled";
import {PostType} from "../../redux/posts/types";
import {InputText} from "@fattureincloud/fic-design-system";

const EditPost = () => {
    const { getPost, editPost } = usePosts();

    const { id } = useParams<{id:string}>() //post id from the url
    const [currentPost, setCurrentPost] = useState<PostType>(getPost(parseInt(id)));

    const history = useHistory();

    useEffect(() => {
        (!currentPost || !currentPost.isMine) && history.push(`/view/${id}`)
    }, [history, currentPost]);

    const handleChange = useCallback((e:any) => {
        e.preventDefault();
        setCurrentPost({ ...currentPost, [e.target.name]: e.target.value });
    }, [currentPost]);

    const handleSubmit = useCallback(() => {
        editPost(currentPost);
        history.push(`/view/${id}`);
    }, [currentPost, history, id]);

    return(
        <div>
            <Header />
            <div style={{margin: "2rem", marginTop: "6rem"}}>
                <Wrapper>
                    <InputText required label={'Title'} value={currentPost?.title} onChange={handleChange} placeholder={'Title'} name={'title'} inputType={'text'}/>
                    <div>
                        <InputText required label={'Image path'} value={currentPost?.image} onChange={handleChange} placeholder={'Image path'} name={'path'} inputType={'text'}/>
                        <img src={currentPost?.image} alt=""/>
                    </div>
                    <InputText required label={'Post content'} value={currentPost?.content} onChange={handleChange} placeholder={'Post content'} name={'content'} inputType={'text'}/>
                    <textarea className='content' form='edit-post-form' id="content" name="content" placeholder='Content' onChange={handleChange} value={currentPost?.content} />
                    <div>
                        <Button type='submit' onClick={handleSubmit}> Save </Button>
                    </div>
                </Wrapper>
            </div>
        </div>
    );
}

/*
<FormWrapper>
                            <div>
                                <form id='edit-post-form' onSubmit={handleSubmit}>
                                    <div>
                                        <InputText required label={'Title'} value={currentPost?.title} onChange={handleChange} placeholder={'Title'} name={'title'} inputType={'text'}/>
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
                                        <NavLink to={`/view/${id}`}>
                                            <Button type='submit' onClick={handleSubmit}>
                                                Save
                                            </Button>
                                        </NavLink>
                                    </div>
                                </form>
                            </div>
                        </FormWrapper>
 */

export default EditPost;
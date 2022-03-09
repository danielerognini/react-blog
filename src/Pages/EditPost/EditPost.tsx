import React, {useEffect, useMemo, useState} from 'react';
import usePosts, {PostType} from "../common/hooks/usePosts";

import Header from "../common/header/Header";
import {useParams} from "react-router-dom";
import {FormWrapper} from "./styled";

const EditPost = () => {
    let { id } = useParams<{id:string}>()
    const [currentPost, setCurrentPost] = useState<PostType>();

    const handleChange = () => {

    }

    const handleSubmit = () => {

    }

    return(
        <div>
            <Header />
            <div style={{margin: "2rem", marginTop: "6rem"}}>
                <FormWrapper>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <input type="text" id="title" name="title" placeholder='Title' />
                            <input type="text" id="image-path" name="image-path" placeholder='Image path' />
                            <input type="text" id="content" name="content" placeholder='Content' />
                            <input type="submit" value='Save'></input>
                        </form>
                    </div>
                </FormWrapper>
            </div>
        </div>
    );
}

export default EditPost;
import React, {useEffect, useState} from "react";

import Comment from './components/Comment';
import usePosts from "../../../common/hooks/usePosts";

interface Props {
    postId: string
}

const CommentsList = (props: Props) => {
    const { postId } = props;
    const { getPost } = usePosts();

    let comments = getPost(parseInt(postId)).comments;
    //TODO: find a way to update/rerender the comments list after a comment has been added
    return(
        <div>
            {
                comments.length === 0
                ?
                    <p style={{color: '#999999', marginTop: '3rem'}}>This post has no comments</p>
                :
                    comments.map((comment, key) => <Comment key={key} user={comment.user} date={comment.date} text={comment.text}/>)
            }
        </div>
    )
}

export default CommentsList;
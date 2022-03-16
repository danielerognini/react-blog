import React from "react";
import {CommentInfo, CommentText, CommentWrapper} from "./styled";

interface Props {
    user: string
    date: string
    text: string
}

const Comment = (props:Props) => {
    const { user, date, text } = props;
    return(
        <CommentWrapper>
            <CommentInfo>
                <h3>{user}</h3>
                <span>{date}</span>
            </CommentInfo>
            <CommentText>
                <p>{text}</p>
            </CommentText>
        </CommentWrapper>
    )
}

export default Comment;
import React, {useCallback, useEffect, useState} from "react";
import {Button, Icon, InputText} from "@fattureincloud/fic-design-system";
import {buttonColors} from "@fattureincloud/fic-design-system/dist/components/buttons/button/types";
import {FormWrapper} from "./styled";
import usePosts from "../../../common/hooks/usePosts";
import useAuth from "../../../common/hooks/useAuth";

interface Props {
    postId: string
}

const AddComment = (props: Props) => {
    const { postId } = props;
    const { addComment } = usePosts();
    const { user } = useAuth();

    const [status, setStatus] = useState<string>('normal');
    const [color, setColor] = useState<buttonColors>('blue');

    const [text, setText] = useState<string>('');

    const handleChange = useCallback((e:any) => {
        setStatus('normal');
        setColor('blue');
        setText(e.target.value);
    }, []);

    const handleSubmit = useCallback(() => {
        if(user && text !== '')
        {
            let date = new Date();
            let dateString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
            //change components appearance
            setStatus('normal');
            setColor('blue');
            //add the text to the list
            const comment = {id: 0, user: user.name, date: dateString, text: text};
            addComment(parseInt(postId), comment);
            //set text state to ''
            setText('');
        }
        else {
            //set InputText status to error
            setStatus('error');
            setColor('red');
        }
    }, [text, status, color]);

    return(
        <div>
            {
                !user
                ?
                    <div>
                        Please login to leave a comment
                    </div>
                :
                    <FormWrapper>
                        <InputText required status={status} label={'Leave a comment'} onChange={handleChange} value={text}/>
                        <div style={{height: '2rem', marginLeft: '1rem', display: 'flex'}}>
                            <Button color={color} text={'Post'} onClick={handleSubmit}/>
                        </div>
                    </FormWrapper>
            }
        </div>
    )
}

export default AddComment;
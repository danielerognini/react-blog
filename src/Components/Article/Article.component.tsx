import React from 'react';
import { StyledArticle } from './Article.styles';

interface props {
    article:Article
}

interface Article {
    id:number,
    title:string,
    content:string,
    date:string,
    author:string,
}

const Article = (props: props) => {
    const { id, title, content, date, author } = props.article;
    return (
        <StyledArticle key={id}>
            <h1 key={id}> { title } </h1>
            <div key={id + 1} className='info'>
                <span key={id}> Written by: <h3 key={id}> { author } </h3> </span>
                <span key={id + 1} className='date'> { date } </span>
            </div>
            <p key={id + 2}> { content } </p>
        </StyledArticle>
    )
}

export default Article;
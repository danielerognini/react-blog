import React from 'react';
import './Article.styles.css';

interface props {
    article:Article
}

interface Article {
    id:Number,
    title:String,
    content:String,
    date:String,
    author:String,
}

const Article = (props: props) => {
    const { title, content, date, author } = props.article;
    return (
        <div>
            <h1> { title } </h1>
            <div className='info'>
                <span> Written by: <h3> { author } </h3> </span>
                <span className='date'> { date } </span>
            </div>
            <p> { content } </p>
        </div>
    )
}

export default Article;
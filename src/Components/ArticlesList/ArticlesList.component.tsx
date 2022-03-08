import React from 'react';
import { StyledList } from './ArticlesList.styles';


interface props {
    articleList:Array<any>;
    viewArticle:Function;
};

const ArticlesPreview = (props:props) => {
    const { articleList, viewArticle } = props;

    return(
        <StyledList>
            {
                articleList.map(article => <p onClick={() => viewArticle(article.id)} key={article.id}>{article.title}</p>)
            }
        </StyledList>
    );
}



export default ArticlesPreview;
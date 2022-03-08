import React from 'react';
import { StyledList } from './ArticlesList.styles';


interface props {
    articleList:Array<any>;
};

const ArticlesPreview = (props:props) => {
    const { articleList } = props;

    return(
        <StyledList>
            {
                articleList.map(article => <p key={article.key}>{article.title}</p>)
            }
        </StyledList>
    );
}



export default ArticlesPreview;
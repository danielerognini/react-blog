import React from 'react';
import './ArticlesList.styles.css';


interface props {
    articleList:Array<any>;
};

const ArticlesPreview = (props:props) => {
    const { articleList } = props;

    function getArticleList () {
        return(articleList)
    }

    return(
        <div>
            {
                articleList.map(article => <p>{article.title}</p>)
            }
        </div>
    );
}

export default ArticlesPreview;
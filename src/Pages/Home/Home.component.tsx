import React, { useState } from 'react';
import { HomeBody, LeftSection, RightSection } from './Home.styles';

import Header from '../../Components/Header/Header.component';
import ArticlesList from '../../Components/ArticlesList/ArticlesList.component';
import Article from '../../Components/Article/Article.component';

interface props {
    user:any;
    getArticles:Function;
}

const Home = (props:props) => {
    const { user, getArticles } = props;
    let list = getArticles();

    const [currentArticle, setCurrentArticle] = useState<number>(0);

    return (
        <div className="App">
            <Header user={user} />
            <HomeBody>
                <LeftSection>
                    <ArticlesList articleList={list} viewArticle={setCurrentArticle} />
                </LeftSection>
                <RightSection>
                    <Article article={list[currentArticle]} />
                </RightSection>
            </HomeBody>
        </div>
    );
}

export default Home;
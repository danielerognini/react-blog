import React, { useState, useEffect } from 'react';
import { HomeBody, LeftSection, RightSection } from './Home.styles';

import Header from '../../Components/Header/Header.component';
import ArticlesList from '../../Components/ArticlesList/ArticlesList.component';
import Article from '../../Components/Article/Article.component';

interface props {
    getData:Function
}

const Home = (props:props) => {
    const { getData } = props;
    let list;
    list = getData();
    
    return (
        <div className="App">
            <Header />
            <HomeBody>
                <LeftSection>
                    <ArticlesList articleList={list} />
                </LeftSection>
                <RightSection>
                    <Article article={list[0]} />
                </RightSection>
            </HomeBody>
        </div>
    );
}

export default Home;
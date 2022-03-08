import React, { useState, useEffect } from 'react';
//import styled from 'styled-components';

import Header from '../../Components/Header/Header.component';
import ArticlesList from '../../Components/ArticlesList/ArticlesList.component';
import Article from '../../Components/Article/Article.component';
import { data } from '../../data';

interface props {
    articlesList:Array<any>
    getData:Function
}

const Home = (props:props) => {
    const { articlesList, getData } = props;
    let list;
    list = getData();
    
    return (
        <div className="App">
            <Header />
            <div>
                <ArticlesList articleList={list} />
            </div>
        </div>
    );
}

export default Home;

/*
const AppBody = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
*/
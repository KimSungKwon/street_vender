// components > posts > SearchBar

import React from 'react';
import styled from 'styled-components';

const SearchBarBlock = styled.div``;

const SearchInput = styled.input`
    padding: 10px;
    margin-bottom: 2rem;
    border-radius: 0.25rem;
    font-size: 1rem;
    line-height: 1.5;
    border: 2px solid #BBDDFF;
    outline: none;
    background-color: #EEEEEE;
    width: 15rem;
    min-height: 2rem;
    max-height: 2rem;
`;

const SearchButton = styled.button`
    padding: 10px;
    border-radius: 0.25rem;
    font-size: 1rem;
    line-height: 1.5;
    border: none;
    color: gray;
    background: url("images/search.png") no-repeat center;
    background-size: 1rem;
    background-color: #BBDDFF;
    width: 2rem;
    min-height: 2rem;
    max-height: 2rem;
    cursor: pointer;

    position: relative;
    left: 5px;
  `;


const SearchBar = ({ onChangeSearch, posts }) => {    // module의 onChangeField 액션함수, posts 스테이트를 Container 에서 받아옴  
    const onChange = (e) => {   // onChange 이벤트 핸들러  함수 
        onChangeSearch(e.target.value) // search의 값을 e.target.value로 (검색창에 써진대로)
    }
    return (
        <SearchBarBlock class="relative">
            <SearchInput 
                placeholder="Search Tag"
                onChange={onChange}     // 검색창에 작성을 하면 onChange 실행
            />
            <SearchButton class="relative"/>    
        </SearchBarBlock>
    );
};

export default SearchBar;
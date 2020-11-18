// container > posts > SearchBarContainer

import React from 'react';
import SearchBar from '../../components/posts/SearchBar copy';
import { useSelector, useDispatch } from 'react-redux';
import { changeField } from '../../modules/posts';      // 리덕스 스토어의 search 스테이트를 변경하기 위한 함수

const SearchBarContainer = () => {
    
    const dispatch = useDispatch();

    // 검색창을 쓰기위해 목록에있는 포스트들의 정보(posts) State가 필요하다고 판단했음
    const { posts } = useSelector(({ posts, loading, user }) => ({
        posts: posts.posts, // 리덕스 스토어의 posts(State) 를 posts란 변수 이름으로 가져온다.
        search: posts.search,
    }));

    const onChangeSearch = value => {
        dispatch(
            changeField({   // 리덕스 스토어의 search 스테이트의 값을 value 로 바꿔줌
                key: 'search',
                value: value,
            })
        )
    }

    return <SearchBar onChangeSearch={onChangeSearch} posts={posts}  />; // SearchBar 컴포넌트에 onChangeSearch함수 보내줌
};

export default SearchBarContainer;
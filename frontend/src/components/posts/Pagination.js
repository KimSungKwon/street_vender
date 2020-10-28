import React from 'react';
import styled from 'styled-components';
import qs from 'qs';
import Button from '../common/Button';

const PaginationBlock = styled.div`
    width: 320px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
`;
const PageNumber = styled.div``;

// 링크 만들기 (페이지이동 링크)
const buildLink = ({ username, tag, page }) => {
    const query = qs.stringify({ tag, page });
    return username ? `/@${username}?${query}`  : `/?${query}`;
};

const Pagination = ({ page, lastPage, username, tag }) => { // 현재선택된계정명, 태그, 현재페이지, 마지막페이지
    return (
        <PaginationBlock>
            <Button
                disabled={page===1}
                to={page ===1 ? undefined : buildLink({ username, tag, page: page - 1})}
            >
                이전    
            </Button>
            <PageNumber>{page}</PageNumber>
            <Button
                disabled={page===lastPage}
                to={page===lastPage ? undefined : buildLink({ username, tag, page: page + 1})}
            >
                다음
            </Button>
        </PaginationBlock>
    );
};

export default Pagination;
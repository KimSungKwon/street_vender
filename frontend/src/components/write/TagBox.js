import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const TagBoxBlock = styled.div`
    width: 100%;
    border-top: 1px solid ${palette.gray[2]};
    padding-top: 2rem;

    h4 {
        color: ${palette.gray[8]};
        margin-top: 0;
        margin-bottom: 0.5rem;
    }
`;

const TagForm = styled.form`
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    width: 255px;
    border: 1px solid ${palette.gray[9]};   /* 스타일 초기화 */
    
    input, button {
        outline: none;
        border: none;
        font-size: 1rem;
    }

    input {
        padding: 0.5rem;
        flex: 1;
        min-width: 0;
    }
    button {
        cursor: pointer;
        padding-right: 1rem;
        padding-left: 1rem;
        border: none;
        background: ${palette.gray[8]};
        color: white;
        font-weight: bold;
        &:hover {
            background: ${palette.gray[6]};
        }
    }
`;

const Tag = styled.div`
    margin-right: 0.5rem;
    color: ${palette.gray[6]};
    cursor: pointer;
    &:hover {
        opacity: 0.5;
    }
`;

const TagListBlock = styled.div`
    display: flex;
    margin-top: 0.5rem;
`;

//  React.memo 로 tag값이 바뀔때만 리렌더링 되도록 처리 
const TagItem = React.memo(({ tag, onRemove }) => (     // <TagItem tags={} onRemove={} />
    <Tag onClick={() => onRemove(tag)}>#{tag}</Tag>
));

// React.memo로 tags값이 바뀔때만 리렌더링
const TagList = React.memo(({ tags, onRemove }) => (    // <TagList tags={} onRemove={} />
    <TagListBlock>
        {tags.map(tag => <TagItem key={tag} tag={tag} onRemove={onRemove} />)}
    </TagListBlock>
));

const TagBox = ({ onChangeTags, tags }) => {
    const [input, setInput] = useState('');
    const [localTags, setLocalTags] = useState([]);

    const insertTag = useCallback(
        tag => {
            if (!tag) return;   // 공백이면 추가하지 않음
            if (localTags.includes(tag)) return;    // 이미 존재하면 추가안함
            const nextTags = [...localTags, tag];
            setLocalTags(nextTags); //  웹페이지에 태그 추가됨
            onChangeTags(nextTags); //  리덕스 스토어에 태그값 추가됨
        },
        [localTags, onChangeTags],
    );

    const onRemove = useCallback(
        tag => {
            const nextTags = localTags.filter(t => t !== tag);  // 특정태그 t를 제외한 localTags.
            setLocalTags(nextTags); 
            onChangeTags(nextTags);
        },
        [localTags, onChangeTags],
    );

    const onChange = useCallback(e => {
        setInput(e.target.value);
    }, []);

    const onSubmit = useCallback(e => {
        e.preventDefault();
        insertTag(input.trim());    // 앞 뒤 공백 없애고 등록
        setInput('');   // input 초기화
        },
        [input, insertTag],
    );
    
    // tags 값이 바뀔 때
    useEffect(() => {
        setLocalTags(tags);
    }, [tags])

    return (
        <TagBoxBlock>
            <h4>태그</h4>
            <TagForm onSubmit={onSubmit}>
                <input
                    placeholder="태그를 입력하세요"
                    value={input}
                    onChange={onChange}
                />
                <button type="submit">추가</button>
            </TagForm>
            <TagList tags={localTags} onRemove={onRemove} />
        </TagBoxBlock>
    );
};

export default TagBox;
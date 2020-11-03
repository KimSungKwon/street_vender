import React from 'react';
import Responsive from '../components/common/Responsive';
import EditorContainer from '../containers/write/EditorContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import WriteActionButtonsContainer from '../containers/write/WriteActionButtonsContainer';
import GoogleMapWriteContainer from '../containers/write/GoogleMapWriteContainer';
import { Helmet } from 'react-helmet-async';

const WritePage = () => {
    return (
        <Responsive>
            <Helmet>
                <title>글쓰기 - Street Vender</title>
            </Helmet>
            <EditorContainer />
            <GoogleMapWriteContainer />
            <TagBoxContainer />
            <WriteActionButtonsContainer />
        </Responsive>
    );
};

export default WritePage;
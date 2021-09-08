import React from 'react';
import RepositoryItem from '../repository-item';
import * as S from "./styled";

const Repositories = () => {
    return (
        <S.WrapperTabs
            selectedTabClassName="is-selected"
            selectedTabPanelClassName="is-selected"
        >
            <S.WrapperTabList>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTabList>
            <S.WrapperTabPanel>
                <RepositoryItem
                    name="front-page-instagram"
                    linkToRepo="https://github.com/arthur94a/front-page-instagram"
                    fullName="arthur94a/front-page-instagram"
                />
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>
                <RepositoryItem
                    name="frontendMentor-FAQcard"
                    linkToRepo="https://github.com/arthur94a/frontendMentor-FAQcard"
                    fullName="arthur94a/frontendMentor-FAQcard"
                />
            </S.WrapperTabPanel>
        </S.WrapperTabs>
    );
};

export default Repositories;
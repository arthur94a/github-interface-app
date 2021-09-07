import React from 'react';
import * as S from './styled';

const Profile = () => {
    return (
        <S.Wrapper>
            <S.WrapperImage
                src="https://avatars.githubusercontent.com/u/39008435?v=4"
                alt="User Avatar"
            />
            <div>
                <S.WrapperInfoUser>
                    <h1>Arthur Araujo</h1>
                    <S.WrapperUserName>
                        <h3>Username:</h3>
                        <span>arthur94a</span>
                    </S.WrapperUserName>
                </S.WrapperInfoUser>
                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>5</span>
                    </div>
                    <div>
                        <h4>Starreds</h4>
                        <span>5</span>
                    </div>
                    <div>
                        <h4>Followings</h4>
                        <span>5</span>
                    </div>
                </S.WrapperStatusCount>
            </div>
        </S.Wrapper>
    );
}

export default Profile;
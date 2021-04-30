import React from "react";
import styled from "styled-components";
import { FollowButton as FB } from "../search/ResultArtist";
import { mixin } from "../../styles";

const WorkPlaceProfile = (props) => {
  const {
    userName,
    userId,
    major,
    imageUrl,
    follow,
    followerCount,
    type,
  } = props;
  return (
    <ProfileWrapper>
      <ProfileDetails>
        <ProfileImage>
          <img src={imageUrl} />
        </ProfileImage>
        <Profile>
          <ProfileInformation>
            <Name>{userName || "김따미"}</Name>
            <Id>@{userId || "idid12"}</Id>
            <Major>{major || "영상 디자인 · 그래픽 디자인"}</Major>
          </ProfileInformation>
          <ProfileFollow>
            팔로워 11 ・ 팔로잉 20
            {!type && !follow && <FollowButton>+Follow</FollowButton>}
            {!type && follow && <FollowButton>+Follow</FollowButton>}
            {type && <ModifyButton>Modify</ModifyButton>}
          </ProfileFollow>
        </Profile>
      </ProfileDetails>
      <Introduction>
        <IntroductionText>
          안녕하세요 김따미입니다 :) 작품 구경하고 가세요 팔로우도
          부탁드립니다...
        </IntroductionText>
      </Introduction>
    </ProfileWrapper>
  );
};

export default WorkPlaceProfile;

const ProfileWrapper = styled.div`
  ${mixin.flexColumn}
  padding: 5px 16px;
  font-size: 13px;
  color: #3c3c3c;
  border-radius: 0px 0px 0px 16px;
  background-color: #ffffff;
`;

const ProfileDetails = styled.div`
  display: flex;
  margin-bottom: 23px;
`;

const ProfileImage = styled.div`
  & > img {
    width: 75px;
    height: 75px;
    background-color: #f0f0f0;
    border-radius: 100%;
    box-shadow: 0px 3px 5px #f0f0f0;
  }
`;

const Profile = styled.div`
  ${mixin.flexColumn}
  padding-left: 19px;
  padding-top: 5px;
`;

const ProfileInformation = styled.div`
  width: calc(100vw - 140px);
  padding-bottom: 10px;
`;

const Name = styled.span`
  font-size: 16px;
  font-weight: 800;
`;

const Id = styled.span`
  margin-left: 5px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.gray};
`;

const Major = styled.div`
  margin-top: 10px;
  font-size: 11px;
  color: ${({ theme }) => theme.colors.maingray};
`;

const ProfileFollow = styled.div`
  margin-top: 15px;
  position: relative;
`;

const FollowButton = styled(FB)`
  top: -8px;
  right: 7px;
`;

const ModifyButton = styled(FB)`
  top: -69px;
  right: 0px;
`;

const Introduction = styled.div`
  padding: 14px 3px;
  border-top: 1px solid #f0f0f0;
`;

const IntroductionText = styled.div`
  margin-right: 40px;
  padding: 0 3px;
  line-height: 22px;
`;

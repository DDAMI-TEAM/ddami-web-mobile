import React from "react";
import styled from "styled-components";

export default (props) => {
  const { history, myPieces } = props;
  const handleClickImage = (id) => history.push(`work/${id}`);

  return (
    <ListWrapper>
      {myPieces?.length > 0 ? (
        <ImageList>
          {myPieces.map((piece) => {
            const { _id, fileUrl } = piece;
            return (
              <Image
                key={_id}
                src={fileUrl[0]}
                onClick={() => handleClickImage(_id)}
              />
            );
          })}
        </ImageList>
      ) : (
        <EmptyText>작업실을 채워보세요!</EmptyText>
      )}
    </ListWrapper>
  );
};

const ListWrapper = styled.section`
  display: flex;
  min-height: 480px;
  margin-top: 8px;
  background-color: ${({ theme }) => theme.colors.white}; ;
`;

const ImageList = styled.section`
  display: grid;
  padding: 18px;
  grid-template-columns: 1fr 1fr;
`;

const Image = styled.img`
  width: 155px;
  height: 155px;
  border-radius: 0px 16px 16px 16px;
  margin-bottom: 14px;
  background-color: #61dafb;
`;

const EmptyText = styled.span`
  margin: auto;
  font-size: 16px;
`;

import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import WorkPlaceProfile from "../WorkplaceProfile";
import WorkplaceList from "../WorkplaceList";
import {
  postWorkplace,
  postWorkplaceMy,
  setFooterVisible,
} from "../../store/actions";

const WorkplaceBody = styled.section`
  background-color: ${({ theme }) => theme.colors.background}; ;
`;

const WorkPlace = ({ match: { params }, ...props }) => {
  const {
    type,
    workplace: { user },
  } = useSelector((store) => {
    return store.workplace;
  });
  const myPieces = user ? user.myPieces : [];
  const { ArtistId } = params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFooterVisible(false));
    return () => dispatch(setFooterVisible(true));
  }, [dispatch]);

  useEffect(() => {
    if (ArtistId === "my") dispatch(postWorkplaceMy({}));
    else dispatch(postWorkplace({ id: ArtistId }));
  }, [ArtistId, dispatch]);

  return (
    <WorkplaceBody>
      <WorkPlaceProfile {...props} type={type} {...user} />
      <WorkplaceList {...props} myPieces={myPieces} />
    </WorkplaceBody>
  );
};

export default WorkPlace;

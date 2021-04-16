import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import WorkPlaceProfile from "../workplaceProfile";
import WorkplaceList from "./WorkplaceList";
import { postWorkplace, postWorkplaceMy } from "../../store/actions";

const WorkplaceBody = styled.section`
  background-color: #f0f0f6;
`;

const WorkPlace = (props) => {
  const {
    type,
    workplace: { user },
  } = useSelector((store) => {
    return store.workplace;
  });
  const myPieces = user ? user.myPieces : [];
  const dispatch = useDispatch();
  const {
    match: { params },
  } = props;
  const { ArtistId } = params;
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

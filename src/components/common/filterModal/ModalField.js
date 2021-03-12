import React, { useState } from "react";
import styled from "styled-components";
import ModalFieldSelect, { FILTER_TYPE } from "./ModalFieldSelect";
import { mixin } from "../../../styles";

const ModalField = ({ title, data }) => {
  const [activeFilters, setActiveFilters] = useState([]);

  const setActive = (id) => {
    if (data.length === activeFilters.length) return setActiveFilters([id]);
    if (!activeFilters.includes(id)) setActiveFilters([...activeFilters, id]);
    else setActiveFilters(activeFilters.filter((activeId) => activeId !== id));
  };

  const setActiveAllFilter = () => {
    if (data.length === activeFilters.length) setActiveFilters([]);
    else setActiveFilters(data.map(({ id }) => id));
  };

  return (
    <Wrapper>
      <Title>{title}</Title>
      <SelectList>
        <ModalFieldSelect
          type={FILTER_TYPE.ALL}
          name="전체"
          activeAll={data.length === activeFilters.length}
          setActive={setActiveAllFilter}
        />
        {data.map(({ id, name }) => (
          <ModalFieldSelect
            key={id}
            type={FILTER_TYPE.SPECIFIC}
            id={id}
            name={name}
            active={activeFilters.includes(id)}
            activeAll={data.length === activeFilters.length}
            setActive={setActive}
          />
        ))}
      </SelectList>
    </Wrapper>
  );
};

export default ModalField;

const Wrapper = styled.section`
  margin-bottom: 32px;
`;

const Title = styled.h1`
  margin-bottom: 6px;
  font-size: 15px;
  font-weight: bold;
`;

const SelectList = styled.div`
  ${mixin.flexGrid("start")}
`;

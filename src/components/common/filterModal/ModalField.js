import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ModalFieldSelect, { FILTER_TYPE } from "./ModalFieldSelect";
import { mixin } from "../../../styles";

const ModalField = ({ id, title, data, filter, setFilter }) => {
  const [activeFilters, setActiveFilters] = useState([]);

  const isActive = (id) => {
    return activeFilters.some((filter) => filter.id === id);
  };

  const setActive = (id, name) => {
    if (data.length === activeFilters.length)
      return setActiveFilters([{ id, name }]);
    if (isActive(id)) {
      const removedFilters = activeFilters.filter(
        (activeFilter) => activeFilter.id !== id
      );
      setActiveFilters(removedFilters);
    } else setActiveFilters([...activeFilters, { id, name }]);
  };

  useEffect(() => {
    if (filter[id] !== activeFilters) {
      setFilter({
        ...filter,
        [id]: activeFilters,
      });
    }
  }, [activeFilters, filter, id, setFilter]);

  const setActiveAllFilter = () => {
    if (data.length === activeFilters.length) setActiveFilters([]);
    else setActiveFilters(data.map(({ id, name }) => ({ id, name })));
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
            active={isActive(id)}
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

import React from 'react';
import styled from 'styled-components';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const InputSearchBar = styled.input`
  width: 294px;
  min-width: 294px;
  height: 100%;
  padding: 0;
  margin: 0;
  font-size: 20px;

  &:focus {
    outline: none;
  }

  &::-webkit-input-placeholder {
    text-align: center;
    color: gray;
    font-size: 16px;
  }

  &:-moz-placeholder {
    /* Firefox 18- */
    text-align: center;
    color: gray;
    font-size: 16px;
  }

  &::-moz-placeholder {
    /* Firefox 19+ */
    text-align: center;
    color: gray;
    font-size: 16px;
  }

  &:-ms-input-placeholder {
    text-align: center;
    color: gray;
    font-size: 16px;
  }

  &:focus::-webkit-input-placeholder {
    color: transparent;
  }
  &:focus:-moz-placeholder {
    color: transparent;
  } /* FF 4-18 */
  &:focus::-moz-placeholder {
    color: transparent;
  } /* FF 19+ */
  &:focus:-ms-input-placeholder {
    color: transparent;
  } /* IE 10+ */
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const CareerSearchBar = props => {
  return (
    <>
      <InputSearchBar
        type='search'
        placeholder='Search'
        results='0'
        name='searchText'
        value={props.searchText}
        onChange={e => props.setCareerSearchResults(e)}
      />
    </>
  );
};

export default CareerSearchBar;

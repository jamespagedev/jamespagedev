import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { Colors } from '../../../globals/CssMixins';
import CareerSearchBar from './CareerSearchBar';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 55px;
  background-color: ${Colors.Woodsmoke2};
  border-top: 2px solid ${Colors.Tundora};
  border-bottom: 2px solid ${Colors.Tundora};
  top: 60px;
  position: sticky;
`;

const DivLineSeperator = styled.div`
  border: 3px solid ${Colors.Tundora};
`;

const DivNavItems = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

const LinkNavItem = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 30px;
  text-decoration: none;
  font-size: 24px;
  color: ${Colors.Gallary};

  &:hover {
    background: linear-gradient(
      to bottom,
      #cc0000 0%,
      #cc0000 20%,
      #821c1a 100%
    );
  }
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const CareerNav = props => {
  return (
    <DivWrapper>
      <CareerSearchBar
        searchText={props.searchText}
        setCareerSearchResults={props.setCareerSearchResults}
      />
      <DivLineSeperator />
      <DivNavItems>
        <LinkNavItem to='#'>Main</LinkNavItem>
        <LinkNavItem to='#'>Work&nbsp;History</LinkNavItem>
        <LinkNavItem to='#'>Education</LinkNavItem>
        <LinkNavItem to='#'>Skills</LinkNavItem>
        <LinkNavItem to='#'>Projects</LinkNavItem>
      </DivNavItems>
    </DivWrapper>
  );
};

// CareerNav.propTypes = {
//   propertyName: PropTypes.string
// }

export default CareerNav;

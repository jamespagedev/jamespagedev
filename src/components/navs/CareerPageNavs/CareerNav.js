import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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

const DivNavItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  height: 100%;
`;

const DivSelectedBar = styled.div`
  border-bottom: 2px solid red;
  margin-bottom: -2px;
  display: ${props => (props.selectedNavItem === 'true' ? 'block' : 'none')};
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
    background: linear-gradient(to bottom, #cc0000 0%, #cc0000 20%, #821c1a 100%);
  }
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const CareerNav = props => {
  console.log(props);
  console.log(props.selectedNavItems['main']);
  return (
    <DivWrapper>
      <CareerSearchBar
        searchText={props.searchText}
        setCareerSearchResults={props.setCareerSearchResults}
      />
      <DivLineSeperator />
      <DivNavItems>
        <DivNavItem>
          <LinkNavItem to='#' onClick={ev => props.selectNavItem(ev, 'main')}>
            Main
          </LinkNavItem>
          <DivSelectedBar selectedNavItem={props.selectedNavItems['main']} />
        </DivNavItem>
        <DivNavItem>
          <LinkNavItem to='#' onClick={ev => props.selectNavItem(ev, 'work_history')}>
            Work&nbsp;History
          </LinkNavItem>
          <DivSelectedBar selectedNavItem={props.selectedNavItems['work_history']} />
        </DivNavItem>
        <DivNavItem>
          <LinkNavItem to='#' onClick={ev => props.selectNavItem(ev, 'education')}>
            Education
          </LinkNavItem>
          <DivSelectedBar selectedNavItem={props.selectedNavItems['education']} />
        </DivNavItem>
        <DivNavItem>
          <LinkNavItem to='#' onClick={ev => props.selectNavItem(ev, 'skills')}>
            Skills
          </LinkNavItem>
          <DivSelectedBar selectedNavItem={props.selectedNavItems['skills']} />
        </DivNavItem>
        <DivNavItem>
          <LinkNavItem to='#' onClick={ev => props.selectNavItem(ev, 'projects')}>
            Projects
          </LinkNavItem>
          <DivSelectedBar selectedNavItem={props.selectedNavItems['projects']} />
        </DivNavItem>
      </DivNavItems>
    </DivWrapper>
  );
};

export default CareerNav;

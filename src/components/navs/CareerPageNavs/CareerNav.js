import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Components
import CareerSearchBar from './CareerSearchBar.js';
import WorkHistoryDropdown from './dropdowns/WorkHistoryDropdown.js';

// Globals
import { Colors } from '../../../globals/CssMixins.js';

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
  background: ${props =>
    props.wh_navbg === 'true' &&
    'linear-gradient(to bottom, #cc0000 0%, #cc0000 20%, #821c1a 100%)'};
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
        <DivNavItem
          onPointerEnter={ev => (props.set_wh_dropdown(ev, true), props.set_wh_navbg(ev, true))}
          onPointerLeave={ev => (props.set_wh_dropdown(ev, false), props.set_wh_navbg(ev, false))}
        >
          <LinkNavItem
            to='#'
            wh_navbg={props.wh_navbg.toString()}
            onClick={ev => props.selectNavItem(ev, 'work_history')}
          >
            Work&nbsp;History&nbsp;
            <i
              style={{ fontSize: '16px', marginRight: '-10px', marginLeft: '10px' }}
              className='fas fa-chevron-down'
            />
          </LinkNavItem>
          <DivSelectedBar selectedNavItem={props.selectedNavItems['work_history']} />
          <div>
            <WorkHistoryDropdown {...props} />
          </div>
        </DivNavItem>
        <DivNavItem>
          <LinkNavItem to='#' onClick={ev => props.selectNavItem(ev, 'education')}>
            Education
            <i
              style={{ fontSize: '16px', marginRight: '-10px', marginLeft: '10px' }}
              className='fas fa-chevron-down'
            />
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
            <i
              style={{ fontSize: '16px', marginRight: '-10px', marginLeft: '10px' }}
              className='fas fa-chevron-down'
            />
          </LinkNavItem>
          <DivSelectedBar selectedNavItem={props.selectedNavItems['projects']} />
        </DivNavItem>
      </DivNavItems>
    </DivWrapper>
  );
};

export default CareerNav;

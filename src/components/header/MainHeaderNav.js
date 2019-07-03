// Libraries
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Colors } from '../../globals/CssMixins';

// Actions
import { resetState } from '../../reduxstore/actions/index.js'

// Globals
const { MainPageTitles, ClientUrlLinks } = require('../../globals/Variables.js');



/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  display: flex;
  margin: 0;
  background: transparent;
  width: 600px;
  height: 54px;
  justify-content: space-between;
`;

const Nav = styled.nav`
  display: flex;
  width: 500px;
  height: 100%;
`;

const LinkHome = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  padding: 0 10.9px;
  color: ${props => (props.selectedmainheaderpage === 'true' ? `blue` : `white`)};
  text-decoration: ${props => (props.selectedmainheaderpage === 'true' ? `underline` : `none`)};
  text-shadow: ${props => (props.selectedmainheaderpage === 'true' ? `none` : `2px 3px rgba(0, 0, 0, 0.4);`)};

  &:hover {
    transition: all 0.2s ease-in;
    color: blue;
    background-color: ${Colors.Rhino};
  }
`;

const LinkCareer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  padding: 0 10.9px;
  color: ${props => (props.selectedmainheaderpage === 'true' ? `red` : `white`)};
  text-decoration: ${props => (props.selectedmainheaderpage === 'true' ? `underline` : `none`)};
  text-shadow: ${props => (props.selectedmainheaderpage === 'true' ? `none` : `2px 3px rgba(0, 0, 0, 0.4);`)};

  &:hover {
    transition: all 0.2s ease-in;
    color: red;
    background-color: ${Colors.Rhino};
  }
`;

const LinkHobbies = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  padding: 0 10.9px;
  color: ${props => (props.selectedmainheaderpage === 'true' ? `green` : `white`)};
  text-decoration: ${props => (props.selectedmainheaderpage === 'true' ? `underline` : `none`)};
  text-shadow: ${props => (props.selectedmainheaderpage === 'true' ? `none` : `2px 3px rgba(0, 0, 0, 0.4);`)};

  &:hover {
    transition: all 0.2s ease-in;
    color: green;
    background-color: ${Colors.Rhino};
  }
`;

const LinkAbout = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  padding: 0 10.9px;
  color: ${props => (props.selectedmainheaderpage === 'true' ? `orange` : `white`)};
  text-decoration: ${props => (props.selectedmainheaderpage === 'true' ? `underline` : `none`)};
  text-shadow: ${props => (props.selectedmainheaderpage === 'true' ? `none` : `2px 3px rgba(0, 0, 0, 0.4);`)};

  &:hover {
    transition: all 0.2s ease-in;
    color: orange;
    background-color: ${Colors.Rhino};
  }
`;

const LinkContact = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  padding: 0 10.9px;
  color: ${props => (props.selectedmainheaderpage === 'true' ? `brown` : `white`)};
  text-decoration: ${props => (props.selectedmainheaderpage === 'true' ? `underline` : `none`)};
  text-shadow: ${props => (props.selectedmainheaderpage === 'true' ? `none` : `2px 3px rgba(0, 0, 0, 0.4);`)};

  &:hover {
    transition: all 0.2s ease-in;
    color: brown;
    background-color: ${Colors.Rhino};
  }
`;

const DivLineDivider = styled.div`
  margin: 0;
  border: 2px solid ${Colors.Rhino};
`;

const LinkSignIn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  text-decoration: none;
  color: white;
  padding: 0 17px;

  &:hover {
    transition: all 0.2s ease-in;
    color: ${Colors.GoldTips};
    background-color: ${Colors.Rhino};
  }
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const MainHeaderNav = props => {
  return (
    <DivWrapper>
      <Nav>
        <LinkHome
          selectedmainheaderpage={(props.pathname === ClientUrlLinks.home).toString()}
          mainheaderpage={`${MainPageTitles.home}`}
          to={`${props.home}`}
        >
          Home
        </LinkHome>
        <LinkCareer
          selectedmainheaderpage={props.pathname.includes(ClientUrlLinks.career).toString()}
          mainheaderpage={`${MainPageTitles.career}`}
          to={`${props.careerLink}`}
          onClick={props.resetState}
        >
          Career
        </LinkCareer>
        <LinkHobbies
          selectedmainheaderpage={props.pathname.includes(ClientUrlLinks.hobbies).toString()}
          mainheaderpage={`${MainPageTitles.hobbies}`}
          to={`${props.hobbiesLink}`}
        >
          Hobbies
        </LinkHobbies>
        <LinkAbout
          selectedmainheaderpage={props.pathname.includes(ClientUrlLinks.about).toString()}
          mainheaderpage={`${MainPageTitles.about}`}
          to={`${props.aboutLink}`}
        >
          About
        </LinkAbout>
        <LinkContact
          selectedmainheaderpage={props.pathname.includes(ClientUrlLinks.contact).toString()}
          mainheaderpage={`${MainPageTitles.contact}`}
          to={`${props.contactLink}`}
        >
          Contact
        </LinkContact>
      </Nav>
      <DivLineDivider />
      <LinkSignIn to='#'>Sign In</LinkSignIn>
    </DivWrapper>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(
  mapStateToProps,
  { resetState }
)(MainHeaderNav);

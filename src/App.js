import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

// Components
import Modals from './components/Modals/Modals.js';
import MainHeader from './components/header/MainHeader';
import HomePage from './pageviews/HomePage.js';
import CareerPage from './pageviews/CareerPages/CareerPage';
import AboutPage from './pageviews/AboutPage.js';
import ContactPage from './pageviews/ContactPage.js';
import UnderConstruction from './pageviews/UnderConstruction';

// Globals
import { Colors } from './globals/CssMixins';
const { ClientUrlLinks } = require('./globals/Variables.js');

/***************************************************************************************************
 ********************************************** Styles **********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  display: flex;
  min-height: 100%;
`;

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif, cursive;
    background-color: ${Colors.Vulcan};
    height: 100%;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }

  img {
    width: 100%;
  }
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerScrolledOpacity: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenHeaderScrollEvent);
  }

  listenHeaderScrollEvent = ev => {
    ev.preventDefault();
    if (window.scrollY > 291) {
      this.setState({ headerScrolledOpacity: true });
    } else {
      this.setState({ headerScrolledOpacity: false });
    }
  };

  render() {
    return (
      <DivWrapper>
        <GlobalStyle />
        <Modals />
        <MainHeader
          home={`${ClientUrlLinks.home}`}
          careerLink={`${ClientUrlLinks.home}${ClientUrlLinks.career}`}
          hobbiesLink={`${ClientUrlLinks.home}${ClientUrlLinks.hobbies}`}
          aboutLink={`${ClientUrlLinks.home}${ClientUrlLinks.about}`}
          contactLink={`${ClientUrlLinks.home}${ClientUrlLinks.contact}`}
          mainPageTitles={this.props.mainPageTitles}
          selectedMainPageTitle={this.props.selectedMainPageTitle}
          setSelectedMainPageTitle={this.props.setSelectedMainPageTitle}
          pathname={this.props.location.pathname}
          headerScrolledOpacity={this.state.headerScrolledOpacity}
        />
        <Route exact path={`${ClientUrlLinks.home}`} render={() => <HomePage {...this.props} contactLink={`${ClientUrlLinks.home}${ClientUrlLinks.contact}`} />} />
        <Route exact path={`${ClientUrlLinks.home}${ClientUrlLinks.career}`} render={() => <CareerPage {...this.props} />} />
        <Route exact path={`${ClientUrlLinks.home}${ClientUrlLinks.hobbies}`} component={UnderConstruction} />
        <Route exact path={`${ClientUrlLinks.home}${ClientUrlLinks.about}`} component={AboutPage} />
        <Route exact path={`${ClientUrlLinks.home}${ClientUrlLinks.contact}`} component={ContactPage} />
      </DivWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    mainPageTitles: state.mainPageTitles
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(App)
);

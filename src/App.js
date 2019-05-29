import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import MainHeader from './components/header/MainHeader';
import CareerPage from './pageviews/CareerPages/CareerPage';
import UnderConstruction from './pageviews/UnderConstruction';
import { ClientUrlLinks } from './globals/Variables';
import { Colors } from './globals/CssMixins';

// local variables
const origSelNavItems = {
  main: 'false',
  work_history: 'false',
  education: 'false',
  skills: 'false',
  projects: 'false'
};

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
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerScrolledOpacity: false,
      selectedNavItems: origSelNavItems,
      wh_navbg: false,
      wh_dropdown: false,
      wh_dropdown_non_tech: false,
      wh_dropdown_tech: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  listenScrollEvent = ev => {
    ev.preventDefault();
    if (window.scrollY > 291) {
      this.setState({ headerScrolledOpacity: true });
    } else {
      this.setState({ headerScrolledOpacity: false });
    }
  };

  selectNavItem = (ev, item) => {
    ev.preventDefault();
    const localSelectedNavItems = Object.assign({}, origSelNavItems);
    localSelectedNavItems[item] = 'true';

    // set selected item to true
    this.setState({ selectedNavItems: localSelectedNavItems });
  };

  set_wh_navbg = (ev, status) => {
    ev.preventDefault();
    this.setState({ wh_navbg: status });
  };

  set_wh_dropdown = (ev, status) => {
    ev.preventDefault();
    this.setState({ wh_dropdown: status });
  };

  set_wh_dropdown_non_tech = (ev, status) => {
    ev.preventDefault();
    this.setState({ wh_dropdown_non_tech: status });
  };

  set_wh_dropdown_tech = (ev, status) => {
    ev.preventDefault();
    this.setState({ wh_dropdown_tech: status });
  };

  render() {
    return (
      <DivWrapper>
        <GlobalStyle />
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
        <Route exact path={`${ClientUrlLinks.home}`} component={UnderConstruction} />
        <Route
          exact
          path={`${ClientUrlLinks.home}${ClientUrlLinks.career}`}
          render={() => (
            <CareerPage
              {...this.props}
              selectedNavItems={this.state.selectedNavItems}
              selectNavItem={this.selectNavItem}
              set_wh_navbg={this.set_wh_navbg}
              set_wh_dropdown={this.set_wh_dropdown}
              set_wh_dropdown_non_tech={this.set_wh_dropdown_non_tech}
              set_wh_dropdown_tech={this.set_wh_dropdown_tech}
              wh_navbg={this.state.wh_navbg}
              wh_dropdown={this.state.wh_dropdown}
              wh_dropdown_non_tech={this.state.wh_dropdown_non_tech}
              wh_dropdown_tech={this.state.wh_dropdown_tech}
            />
          )}
        />
        <Route
          exact
          path={`${ClientUrlLinks.home}${ClientUrlLinks.hobbies}`}
          component={UnderConstruction}
        />
        <Route
          exact
          path={`${ClientUrlLinks.home}${ClientUrlLinks.about}`}
          component={UnderConstruction}
        />
        <Route
          exact
          path={`${ClientUrlLinks.home}${ClientUrlLinks.contact}`}
          component={UnderConstruction}
        />
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

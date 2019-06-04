import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import CareerSearchBar from './CareerSearchBar.js';
import WorkHistoryDropdown from './dropdowns/WorkHistoryDropdown.js';
// import EducationDropdown from './dropdowns/EducationDropdown.js';

// Globals
import { Colors } from '../../../globals/CssMixins.js';

// actions
import { selectCareerNavItem } from '../../../reduxstore/actions/index.js';

/***************************************************************************************************
 ********************************************** Styles **********************************************
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
  background: ${props => props.wh_navbg === 'true' && 'linear-gradient(to bottom, #cc0000 0%, #cc0000 20%, #821c1a 100%)'};
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
class CareerNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wh_navbg: false,
      wh_dropdown: false,
      wh_dropdown_non_tech: false,
      wh_dropdown_tech: false
    };
  }

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
    console.log('CareerNav', this.props);
    console.log('CareerNav', this.state);
    return (
      <DivWrapper>
        <CareerSearchBar searchText={this.props.searchText} setCareerSearchResults={this.props.setCareerSearchResults} />
        <DivLineSeperator />
        <DivNavItems>
          <DivNavItem>
            <LinkNavItem to='#' onClick={ev => this.props.selectCareerNavItem(ev, 'main')}>
              Main
            </LinkNavItem>
            <DivSelectedBar selectedNavItem={this.props.selNavItems['main']} />
          </DivNavItem>
          <DivNavItem
            onPointerEnter={ev => {
              this.set_wh_dropdown(ev, true);
              this.set_wh_navbg(ev, true);
            }}
            onPointerLeave={ev => {
              this.set_wh_dropdown(ev, false);
              this.set_wh_navbg(ev, false);
            }}
          >
            <LinkNavItem
              to='#'
              wh_navbg={this.state.wh_navbg.toString()}
              onClick={ev => this.props.selectCareerNavItem(ev, 'work_history')}
            >
              Work&nbsp;History&nbsp;
              <i style={{ fontSize: '16px', marginRight: '-10px', marginLeft: '10px' }} className='fas fa-chevron-down' />
            </LinkNavItem>
            <DivSelectedBar selectedNavItem={this.props.selNavItems['work_history']} />
            <div>
              <WorkHistoryDropdown
                set_wh_navbg={this.set_wh_navbg}
                set_wh_dropdown={this.set_wh_dropdown}
                set_wh_dropdown_tech={this.set_wh_dropdown_tech}
                set_wh_dropdown_non_tech={this.set_wh_dropdown_non_tech}
                wh_dropdown={this.state.wh_dropdown}
                wh_dropdown_non_tech={this.state.wh_dropdown_non_tech}
                wh_dropdown_tech={this.state.wh_dropdown_tech}
                {...this.props}
              />
            </div>
          </DivNavItem>
          <DivNavItem>
            <LinkNavItem to='#' onClick={ev => this.props.selectCareerNavItem(ev, 'education')}>
              Education
              <i style={{ fontSize: '16px', marginRight: '-10px', marginLeft: '10px' }} className='fas fa-chevron-down' />
            </LinkNavItem>
            <DivSelectedBar selectedNavItem={this.props.selNavItems['education']} />
          </DivNavItem>
          <DivNavItem>
            <LinkNavItem to='#' onClick={ev => this.props.selectCareerNavItem(ev, 'skills')}>
              Skills
            </LinkNavItem>
            <DivSelectedBar selectedNavItem={this.props.selNavItems['skills']} />
          </DivNavItem>
          <DivNavItem>
            <LinkNavItem to='#' onClick={ev => this.props.selectCareerNavItem(ev, 'projects')}>
              Projects
            </LinkNavItem>
            <DivSelectedBar selectedNavItem={this.props.selNavItems['projects']} />
          </DivNavItem>
        </DivNavItems>
      </DivWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    selNavItems: state.career.selectedCareerNavItems
  };
};

export default connect(
  mapStateToProps,
  { selectCareerNavItem }
)(CareerNav);

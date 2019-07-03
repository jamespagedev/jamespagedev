import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// Components
import CareerPageMain from './CareerPageMain.js';
import CareerPageWorkHistory from './CareerPageWorkHistory.js';
import CareerPageTechSkills from './CareerPageTechSkills.js';
import CareerNav from '../../components/navs/CareerPageNavs/CareerNav';
import CareerSideNav from '../../components/navs/CareerPageNavs/SideNavs/CareerSideNav';
import IpsumH1 from '../../components/IpsumH1.js';

// Globals
import { Colors } from '../../globals/CssMixins';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  flex-direction: column;
`;

const DivCareerHeaderNav = styled.div``;

const DivPageContent = styled.div`
  display: flex;
  height: 100%;
`;

const ImgHeaderBackground = styled.img`
  width: 100%;
  height: 350px;
`;

const DivTestBody = styled.div`
  margin: 0 auto;
  max-width: 800px;
  min-width: 800px;
  background: ${Colors.Woodsmoke};
  color: white;
  padding: 25px 20px;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
class CareerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  setCareerSearchResults = e => {
    e.preventDefault();
    this.handleChange(e);
  };

  render() {
    return (
      <DivWrapper>
        <DivCareerHeaderNav>
          <ImgHeaderBackground src={require('../../globals/headerimages/NormalCloudsTopHeader.gif')} alt='' />
        </DivCareerHeaderNav>
        <CareerNav {...this.props} setCareerSearchResults={this.setCareerSearchResults} searchText={this.state.searchText} />
        <DivPageContent>
          <CareerSideNav />
          <DivTestBody>
            {this.props.selNavItems.main === 'true' && <IpsumH1 />}
            {this.props.selNavItems.resume === 'true' && <CareerPageMain />}
            {this.props.selNavItems.work_history === 'true' && <CareerPageWorkHistory />}
            {this.props.selNavItems.education === 'true' && <IpsumH1 />}
            {this.props.selNavItems.skills === 'true' && <CareerPageTechSkills />}
            {this.props.selNavItems.projects === 'true' && <IpsumH1 />}
          </DivTestBody>
        </DivPageContent>
      </DivWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    mainPageTitles: state.mainPageTitles,
    selectedMainPageTitle: state.selectedMainPageTitle,
    selNavItems: state.career.selectedCareerNavItems
  };
};

export default connect(
  mapStateToProps,
  {}
)(CareerPage);

import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// Components
import { Colors } from '../../globals/CssMixins';
import CareerNav from '../../components/navs/CareerPageNavs/CareerNav';
import CareerSideNav from '../../components/navs/CareerPageNavs/SideNavs/CareerSideNav';
import IpsumH1 from '../../components/IpsumH1.js';

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
  padding: 75px 20px;

  h1 {
    margin: 0;
  }
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
    console.log(this.props);
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
            <IpsumH1 />
          </DivTestBody>
        </DivPageContent>
      </DivWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    mainPageTitles: state.mainPageTitles,
    selectedMainPageTitle: state.selectedMainPageTitle
  };
};

export default connect(
  mapStateToProps,
  {}
)(CareerPage);

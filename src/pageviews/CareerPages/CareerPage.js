import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { setSelectedMainPageTitle } from '../../reduxstore/actions';
import { Colors } from '../../globals/CssMixins';
import CareerNav from '../../components/navs/CareerPageNavs/CareerNav';
import CareerSideNav from '../../components/navs/CareerPageNavs/SideNavs/CareerSideNav';

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
    let scrollPosition = Math.round(window.scrollY);
    console.log(scrollPosition);
    return (
      <DivWrapper>
        <DivCareerHeaderNav>
          <ImgHeaderBackground
            src={require('../../globals/headerimages/NormalCloudsTopHeader.gif')}
            alt=''
          />
        </DivCareerHeaderNav>
        <CareerNav
          setCareerSearchResults={this.setCareerSearchResults}
          searchText={this.state.searchText}
        />
        <DivPageContent>
          <CareerSideNav />
          <DivTestBody>
            <h1>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </h1>
          </DivTestBody>
        </DivPageContent>
      </DivWrapper>
    );
  }
}

// CareerPage.propTypes = {
//   propertyName: PropTypes.string
// }

const mapStateToProps = state => {
  return {
    mainPageTitles: state.mainPageTitles,
    selectedMainPageTitle: state.selectedMainPageTitle
  };
};

export default connect(
  mapStateToProps,
  { setSelectedMainPageTitle }
)(CareerPage);

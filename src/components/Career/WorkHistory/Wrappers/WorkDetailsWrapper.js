import React from 'react';
import styled from 'styled-components';

// Globals
import { Colors } from '../../../../globals/CssMixins.js';

/********************************************** Styles ********************************************/
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 25px;

  h3 {
    margin: 0 0 10px 0;
  }
`;

const SpanPosition = styled.span`
  font-weight: normal;
  font-size: 14px;
  &:first-child {
    margin-left: 51px;
  }
`;

const SpanPayrate = styled.span`
  font-weight: normal;
  font-size: 14px;
  &:first-child {
    margin-left: 103px;
  }
`;

const SpanDuriation = styled.span`
  font-weight: normal;
  font-size: 14px;
  margin-left: 108px;
`;

const SpanLocation = styled.span`
  font-weight: normal;
  font-size: 14px;
  &:first-child {
    margin-left: 86px;
  }
`;

const SpanManager = styled.span`
  font-weight: normal;
  font-size: 14px;
  &:first-child {
    margin-left: 91px;
  }
`;

const SpanPhoneNumber = styled.span`
  font-weight: normal;
  font-size: 14px;
  margin-left: 57px;
`;

const AWebsite = styled.a`
  font-weight: normal;
  font-size: 14px;
  &:first-child {
    margin-left: 99px;
  }
`;

const SpanNonWebsite = styled.span`
  font-weight: normal;
  font-size: 14px;
  margin-left: 98px;
`;

const SpanReasonForLeaving = styled.span`
  font-weight: normal;
  font-size: 14px;
  margin-left: 25px;
`;

const DivWorkResponsibilities = styled.div`
  background-color: ${Colors.darkerCodGray};
  border-radius: 25px;
  padding-right: 10px;

  h2 {
    text-decoration: underline;
    text-align: center;
  }

  ul {
    li {
      margin-bottom: 10px;
    }
  }
`;

/********************************************* Component ******************************************/
const WorkDetailsWrapper = props => {
  console.log('props =', props)
  return (
    <DivWrapper>
      <h3>Position(s) Held: {props.workDetails.positions.map((position, i) => i === props.workDetails.positions.length - 1 ? <SpanPosition key={i}>{position}</SpanPosition> : <SpanPosition key={i}>{position} | </SpanPosition>)}</h3>
      <h3>Payrate(s): {props.workDetails.payrates.map((payrate, i) => i === props.workDetails.payrates.length - 1 ? <SpanPayrate key={i}>{payrate}</SpanPayrate> : <SpanPayrate key={i}>{payrate} | </SpanPayrate>)}</h3>
      <h3>Duriation: <SpanDuriation>{props.workDetails.duriation}</SpanDuriation></h3>
      <h3>Locations(s): {props.workDetails.locations.map((location, i) => i === props.workDetails.locations.length - 1 ? <SpanLocation key={i}>{location}</SpanLocation> : <SpanLocation key={i}>{location} | </SpanLocation>)}</h3>
      <h3>Manager(s): {props.workDetails.managers.map((manager, i) => i === props.workDetails.managers.length - 1 ? <SpanManager key={i}>{manager}</SpanManager> : <SpanManager key={i}>{manager} | </SpanManager>)}</h3>
      <h3>Phone Number: <SpanPhoneNumber>{props.workDetails.phonenumber}</SpanPhoneNumber></h3>
      {props.workDetails.websites[0].includes("http") ? (
        <h3>Website(s): {props.workDetails.websites.map((website, i) => i === props.workDetails.websites.length - 1 ? <AWebsite href={website} target="_blank" rel="noopener noreferrer" key={i}>{website}</AWebsite> : <AWebsite href={website} target="_blank" rel="noopener noreferrer" key={i}>{website} | </AWebsite>)}</h3>
      ) : (
        <h3>Website(s): <SpanNonWebsite>{props.workDetails.websites[0]}</SpanNonWebsite></h3>
      )}
      <h3>Reason for Leaving: <SpanReasonForLeaving>{props.workDetails.reasonforleaving}</SpanReasonForLeaving></h3>
      <DivWorkResponsibilities>
        <h2>Work&nbsp;Responsibilities</h2>
        <ul>
        {props.workDetails.workresponsibilities.map((responsibility, i) => <li key={i}>{responsibility}</li>)}
        </ul>
      </DivWorkResponsibilities>
    </DivWrapper>
  );
};

export default WorkDetailsWrapper;
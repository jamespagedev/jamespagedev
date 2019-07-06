import React from 'react';
import styled from 'styled-components';

/********************************************** Styles ********************************************/
const ImgProjectModal = styled.img`
  width: 80%;
  transform: scale(.6);
`;

/********************************************* Component ******************************************/
const DivProjectImgModal = props => {
  return (
    <ImgProjectModal src={require(`../../assets/img/${props.projectImgName}.png`)} />
  );
};

export default DivProjectImgModal;
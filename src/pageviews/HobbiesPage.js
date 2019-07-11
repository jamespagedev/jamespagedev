import React from 'react';
import styled from 'styled-components';
import { Colors } from '../globals/CssMixins.js';

/********************************************** Styles ********************************************/
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const DivHeaderBackground = styled.div`
  height: 58px;
  width: 100%;
  background-color: ${Colors.Vulcan};
  position: fixed;
  z-index: 10;
  top: 2px
`;

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px auto 0;
  padding: 25px;
  width: 800px;
  min-height: 100%;
  background-color: ${Colors.Woodsmoke2};
  color: white;
`;

const DivColumn = styled.div`
  display: flex;
  width: 100%;
  height: 40%;
  flex-direction: column;
  align-items: center;
`;

const Table = styled.table`
  border: 1px solid white;
  font-size: 14px;
  line-height: normal;
  border-collapse: collapse;
  width: 100%;
`;

const TableBody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
  width: 100%;
`;

const TableRow = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border: 1px solid white;
  border-collapse: collapse;
  width: 100%;
  color: white;
  font-size: ${props => props.title === 'true' ? '18px' : '14px'};
`;

const TableData = styled.td`
  display: table-cell;
  vertical-align: top;
  padding: 5px;
  border: 1px solid white;
  border-collapse: collapse;
`;

/********************************************* Component ******************************************/
const HobbiesPage = props => {
  return (
    <DivWrapper>
      <DivHeaderBackground />
      <DivContainer>
      <DivColumn>
        <h1>Hobbies&nbsp;and&nbsp;Activities</h1>
        <h4>I enjoy get togethers with friends from time to time, but mostly I'm a home personality. I also like both dogs (choice for house with large back yard) and cats (choice for apartments). Another thing I enjoy doing from time to time is getting out and doing some volunteer work to help out society. These days I spend most of my free time learning new tech stacks and practicing keeping my dev skills sharp. But I also do like to take a few hours out of the week to do some of the activities below...</h4>
      </DivColumn>
      <Table>
        <TableBody>
          <TableRow title='true'>
            <TableData>
              <font>
                <b>Activities&nbsp;or&nbsp;Interest</b>
              </font>
            </TableData>
            <TableData>
              <font>
                <b>Details</b>
              </font>
            </TableData>
          </TableRow>
          <TableRow>
            <TableData>
              <font>
                <b>Internet&nbsp;Things</b>
              </font>
            </TableData>
            <TableData>
              <font>
                <b>I enjoy browsing through the internet and seeing what new information I can find. I like watching how-to video's and learning new things by watching it put into practice. Meme's are also always fun to help lighten things up.</b>
              </font>
            </TableData>
          </TableRow>
          <TableRow>
            <TableData>
              <font>
                <b>Get&nbsp;Togethers</b>
              </font>
            </TableData>
            <TableData>
              <font>
                <b>During the holidays or special occasions, I enjoy get togethers with friends. It can be at a bar, or someone hosting a get together at their house. I usually get around 1-2 beers, and enjoy a few games of pool.</b>
              </font>
            </TableData>
          </TableRow>
          <TableRow>
            <TableData>
              <font>
                <b>Movies</b>
              </font>
            </TableData>
            <TableData>
              <font>
                <b>Usually an hour or two before bed, I will get off the computer to get my brain to try to shut off, so I can get a good nights rest. During this time, I enjoy watching streamed videos/series with Amazon Prime. I also like going to the movie theaters on the weekends from time to time. The subject of movies I enjoy watching are action, comedy, drama, and thrillers. I'm not picky and enjoy a variety.</b>
              </font>
            </TableData>
          </TableRow>
          <TableRow>
            <TableData>
              <font>
                <b>Gaming</b>
              </font>
            </TableData>
            <TableData>
              <font>
                <b>Ever since I was 5yrs old and got my hands on a Nintendo, I loved it. Mostly my favorite games are of the era between SNES - PS1. The genre I enjoy playing is JRPG. I like to try and challenge myself with different progression rates and I enjoy the grinding of leveling. These days I don't have much time to play, but I do like playing pass-time browser games as a pomodoro technique that you play for like 5mins every 4-6 hours.</b>
              </font>
            </TableData>
          </TableRow>
          <TableRow>
            <TableData>
              <font>
                <b>Coding/Programming/Development</b>
              </font>
            </TableData>
            <TableData>
              <font>
                <b>Ever since I wrote my first automation script to remove a tedious sequence of command inputs, I've found my love for programming. I love reading about and watching the philosophies and evolution on clean code that spawned over the last several decades. I really like watching the speeches Robert C. Martin gives to developers, and have enjoyed his books also. I also like going through language books that teaches concepts through small projects, and trying out those projects with the supporting compiler. I also enjoy learning new coding patterns to come up with better quality architectures to avoid the spaghetti code issue (currently plaguing our industry).</b>
              </font>
            </TableData>
          </TableRow>
        </TableBody>
      </Table>
      </DivContainer>
    </DivWrapper>
  );
};

export default HobbiesPage;
import React from "react";
import styled from "styled-components";
import Link from 'next/link'

import { zdSpacingXxs } from "@zendeskgarden/css-variables";
import { mediaQuery } from "@zendeskgarden/react-theming";
import { Row, Col } from "@zendeskgarden/react-grid";
import { Tiles } from "@zendeskgarden/react-forms";
import moment from 'moment';

const { Tile: _Tile } = Tiles;

export const JobListItemWrapper = styled(Col)`
  cursor: default;
  padding: 10px 10px 10px 10px;
  ${(p) => mediaQuery("down", "xs", p.theme)} {
    margin-top: ${(p) => p.theme.space};
  }
  border-radius: ${zdSpacingXxs};
  &:nth-of-type(odd) {
    padding-right: 4px;
  }
  &:nth-of-type(even) {
    padding-left: 4px;
  }
  &:nth-of-type(even) {
    padding-top: 4px;
  }
  &:nth-of-type(even) {
    padding-bottom: 4px;
  }
  `;
    
export const JobTileMain = styled(_Tile)`
  min-height: 100px;
  display: flex;
  flex-direction: column;
  cursor: default;
  align-content: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 60em;
`;
export const JobTile = styled(_Tile)`
  min-height: 100px;
  display: flex;
  flex-direction: column;
  cursor: default;
`;

export const JobTileLabel = styled(Tiles.Label)`
  color: blue;
  cursor: default;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  cursor: default;
`;

export const StyledHeader = styled.h4`
  display: block;
  color: grey;
  align-content: center;
  justify-content: center;
  margin-top: 1px;
  margin-bottom: 1px;
  margin-left: 0;
  margin-right: 1px;
  cursor: default;
  font-weight: lighter;
`
export const StyledHeaderJobTitle = styled.h3`
  display: block;
  align-content: center;
  justify-content: center;
  margin-top: 1px;
  margin-bottom: 1px;
  margin-left: 0;
  margin-right: 1px;
  font-weight: bold;
`

export const StyledTiledMain = ({ allJobs }) => (
  <JobTileMain name="Job">
    <Row>
      {allJobs.map((job, idx) => {
        const { 
          id,
          company_logo, 
          company,
          created_at, 
          type, 
          title, 
          location,
        } = job

          const reworkCreated_At = moment(created_at).format('llll');
          const reworkTheNewDate = moment().format('llll');
          const theMathAttemp = moment(reworkTheNewDate).diff(moment(reworkCreated_At))
          const humanize = moment.duration(theMathAttemp).humanize()
          
        return (
        <JobListItemWrapper sm={4} key={idx}>
          <Link href={`/jobs/${id}`}>
          <JobTile name='job' value="Job">   
            <img src={company_logo} width={35} height={35} />
            <div>
              <div>
                <StyledHeader>{humanize} ago <span>&#183;</span> {type}</StyledHeader>
                <StyledHeaderJobTitle>{title}</StyledHeaderJobTitle>
                <StyledHeader>{company}</StyledHeader>
                <JobTileLabel>
                {location}
                </JobTileLabel>
              </div>
            </div>
          </JobTile>
          </Link>
        </JobListItemWrapper>
      )})}
    </Row>
  </JobTileMain>
);

export default StyledTiledMain;

import React from "react";
import styled from "styled-components";

import {
  zdSpacingXs,
  zdSpacingXxs,
} from "@zendeskgarden/css-variables";
import { mediaQuery } from "@zendeskgarden/react-theming";
import { Row, Col } from "@zendeskgarden/react-grid";
import { Tiles } from "@zendeskgarden/react-forms";

const { Tile: _Tile } = Tiles;

export const JobListItemWrapper = styled(Col)`
  cursor: none;
  padding: 10px 10px 10px 10px;
  ${(p) => mediaQuery("down", "xs", p.theme)} {
    margin-top: ${(p) => p.theme.space};
  }
  border-radius: ${zdSpacingXxs};
  &:nth-of-type(odd) {
    padding-right: 2px;
  }
  &:nth-of-type(even) {
    padding-left: 2px;
  }
  &:nth-of-type(even) {
    padding-top: 2px;
  }
  &:nth-of-type(even) {
    padding-bottom: 2px;
  }
  `;
    
export const JobTile = styled(_Tile)`
  min-height: 60px;
  padding: ${zdSpacingXs};
  margin-bottom: ${zdSpacingXxs};
  display: flex;
  flex-direction: column;
  cursor: none;
`;

export const JobTileLabel = styled(Tiles.Label)`
  font-size: 1rem;
  border-style: solid;
  border-width: .15rem;
  border-color: gray;
  color: blue;
  cursor: none;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
`;

export const StyledHeader = styled.h4`
  display: block;
  color: grey;
  align-content: center;
  justify-content: center;
  font-size: .5em;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 1em;
  font-weight: bold;
`
export const StyledHeaderJobTitle = styled.h2`
  display: block;
  align-content: center;
  justify-content: center;
  font-size: .5em;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 1em;
  font-weight: bold;
`

export const StyledTiledMain = ({ allJobs }) => (
  <JobTile name="Job">
    <Row>
      {allJobs.map((job, idx) => (
        <JobListItemWrapper sm={4} key={idx}>
          <Tiles.Tile name='job' value="Job">   
            <img src={job.company_logo} width={35} height={35} />
            <div>
              <div>
                <StyledHeader>{job.created_at} <span>&#183;</span> {job.type}</StyledHeader>
                <StyledHeaderJobTitle>{job.title}</StyledHeaderJobTitle>
                <StyledHeader>{job.company}</StyledHeader>
                <JobTileLabel>
                {job.location}
                </JobTileLabel>
              </div>
            </div>
          </Tiles.Tile>
        </JobListItemWrapper>
      ))}
    </Row>
  </JobTile>
);

export default StyledTiledMain;

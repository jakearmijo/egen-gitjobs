import React from "react";
import styled from "styled-components";
import Link from 'next/link'

import {
  zdSpacingXs,
  zdSpacingXxs,
} from "@zendeskgarden/css-variables";
import { mediaQuery } from "@zendeskgarden/react-theming";
import { Row, Col } from "@zendeskgarden/react-grid";
import { Tiles } from "@zendeskgarden/react-forms";

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
    
export const JobTile = styled(_Tile)`
  min-height: 100px;
  display: flex;
  flex-direction: column;
  cursor: default;
`;

export const JobTileLabel = styled(Tiles.Label)`
  border-style: solid;
  border-width: 1px;
  border-color: gray;
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
  font-weight: bold;
  cursor: default;
`
export const StyledHeaderJobTitle = styled.h2`
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
  <JobTile name="Job">
    <Row>
      {allJobs.map((job, idx) => (
        <JobListItemWrapper sm={4} key={idx}>
          <Link href={`/jobs/${job.id}`}>
          <JobTile name='job' value="Job">   
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
          </JobTile>
          </Link>
        </JobListItemWrapper>
      ))}
    </Row>
  </JobTile>
);

export default StyledTiledMain;

import React from 'react';
import styled from 'styled-components'
import { Row, Col } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';


export const StyledButton = styled(Button)`
  color: white;
  cursor: default;
  background-color: #5865E0;
  border-color: #5865E0;
`;


const ButtonTemplate = ({ name }) => (
  <Row>
    <Col textAlign="center">
      <StyledButton className='btnapplynow'>{name}</StyledButton>
    </Col>
  </Row>
);

export default ButtonTemplate;
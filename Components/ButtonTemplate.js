import React from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';

const ButtonTemplate = ({ name }) => (
  <Row>
    <Col textAlign="center">
      <Button>{name}</Button>
    </Col>
  </Row>
);

export default ButtonTemplate;
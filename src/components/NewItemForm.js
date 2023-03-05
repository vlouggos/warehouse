import React from "react";
import { WarehouseItemsCreateForm } from "../ui-components";
import Container from 'react-bootstrap/Container';
import { Col } from "react-bootstrap";

function NewItemForm() {
  return (
    <Container>
        <Col sm={4}><WarehouseItemsCreateForm /></Col>
        
    </Container>
      
    
  );
}

export default NewItemForm;

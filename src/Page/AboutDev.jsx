import React from 'react';
import { Input, Form, Row, Col, Button, Table } from 'reactstrap';

const AboutDev = () => {
  return (
    <Row className="form" style={{ padding: '20px 100px' }}>
      <Col>
        <h1 style={{ textAlign: 'center' }}>AboutDev</h1>

        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
            </tr>
          </tbody>
        </Table>

        <Form>
          <Input bsSize="lg-3" className="mb-3" placeholder="Title" />
          <Input className="mb-3" placeholder="Description" />
          <Input
            id="exampleText"
            name="text"
            type="textarea"
            placeholder="Information"
          />
        </Form>
        <div>
          <Button color="primary" href="#" tag="a" className="mt-3">
            Update
          </Button>{' '}
        </div>
      </Col>

      <Col>
        <h1 style={{ textAlign: 'center' }}>RoadToBe</h1>
        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
            </tr>
          </tbody>
        </Table>
        <Button color="primary" href="#" tag="a" className="mb-3">
          Get
        </Button>{' '}
        <Form>
          <Input bsSize="lg-3" className="mb-3" placeholder="RoadToBe" />
        </Form>
        <div>
          <Button color="primary" href="#" tag="a">
            Update
          </Button>{' '}
          <Button
            color="primary"
            tag="input"
            type="submit"
            value="Delete"
            style={{ backgroundColor: 'red' }}
          />{' '}
          <Button
            color="primary"
            tag="input"
            type="reset"
            value="Add New"
            style={{ backgroundColor: 'green' }}
          />{' '}
        </div>
      </Col>
    </Row>
  );
};

export default AboutDev;

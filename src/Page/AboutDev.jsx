import React from 'react';
import { Input, Form, Row, Col, Button, Table } from 'reactstrap';
import { useEffect, useState } from 'react';
import AboutDevService from '../Service/AboutDevService';
import RoadToBeService from '../Service/RoadToBeService';

const AboutDev = () => {
  const [aboutDev, setAboutDev] = useState([]);
  const [roadToBe, setRoadToBe] = useState([]);
  const [titleAbout, setTitleAbout] = useState('');
  const [subTitleAbout, setSubTitleAbout] = useState('');
  const [contentAbout, setContentAbout] = useState('');
  const [addNew, setAddNew] = useState('');

  const [title, setTitle] = useState('');

  const getRoadToBe = () => {
    RoadToBeService.getRoadToBe()
      .then((res) => {
        setRoadToBe(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    AboutDevService.getAboutDev()
      .then((res) => {
        res.data.map((item) => setAboutDev(item));
      })
      .catch((err) => console.log(err));

    getRoadToBe();
  }, []);

  const Update = (id) => {
    AboutDevService.postAboutDev(id, { listContentItem: title }).then((res) => {
      console.log(res);
    });
  };
  console.log(addNew);
  const handleAddNew = async () => {
    await AboutDevService.addRoadTobe({ listContentItem: addNew });
    getRoadToBe();
  };

  const handleDelete = (id) => {
    console.log(id);
    const confirm = window.confirm('Bạn muốn xóa hàng này?', id);
    if (confirm) {
      AboutDevService.deleteAboutDev(id);
      setRoadToBe(roadToBe.filter((item) => item._id !== id));
    }
  };

  return (
    <Row className="form" style={{ width: '80%', margin: 'auto' }}>
      <Col>
        <h1 style={{ textAlign: 'center' }}>AboutDev</h1>

        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Sub Title</th>
              <th>Content</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="row">1</th>
              <td
                onChange={(e) => {
                  console.log(e.target.value);
                  setTitleAbout(e.target.value);
                }}
              >
                {aboutDev.title}
              </td>
              <td
                onChange={(e) => {
                  console.log(e.target.value);
                  setSubTitleAbout(e.target.value);
                }}
              >
                {aboutDev.subTitle}
              </td>
              <td
                onChange={(e) => {
                  console.log(e.target.value);
                  setContentAbout(e.target.value);
                }}
              >
                {aboutDev.content}
              </td>
            </tr>
          </tbody>
        </Table>

        <Form>
          <Input bsSize="lg-3" className="mb-3" placeholder="Title" />
          <Input className="mb-3" placeholder="SubTitle" />
          <Input
            id="exampleText"
            name="text"
            type="textarea"
            placeholder="Content"
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
              <th>Actions</th>
            </tr>
            {roadToBe.map((item, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>
                  {' '}
                  <input
                    defaultValue={item.listContentItem}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setTitle(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <Button
                    onClick={() => Update(item._id)}
                    color="primary"
                    href="#"
                    tag="a"
                    className="mt"
                  >
                    Update
                  </Button>{' '}
                  <Button
                    onClick={() => handleDelete(item._id)}
                    style={{ backgroundColor: 'red' }}
                    color="primary"
                    href="#"
                    tag="a"
                    className="mt"
                  >
                    Delete
                  </Button>{' '}
                </td>
              </tr>
            ))}
          </thead>
        </Table>

        <Form>
          <Input
            bsSize="lg-3"
            className="mb-3"
            placeholder="RoadToBe"
            onChange={(e) => {
              setAddNew(e.target.value);
            }}
          />
        </Form>
        <div>
          <Button
            color="primary"
            tag="input"
            type="reset"
            value="Add New"
            style={{ backgroundColor: 'green' }}
            onClick={() => handleAddNew()}
          />{' '}
        </div>
      </Col>
    </Row>
  );
};

export default AboutDev;

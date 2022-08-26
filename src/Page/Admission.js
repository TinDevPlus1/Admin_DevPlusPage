import { React, useState, useEffect } from "react";
import {
  Table,
  Collapse,
  Button,
  CardBody,
  Card,
  FormGroup,
  Input,
  Label,
  Form,
} from "reactstrap";
import AdmissionService from "../Service/AdmissionService";

const Concerns = () => {
  const [admission, setAdmission] = useState([]);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [buttonContent, setButtonContent] = useState("");
  const [fileName, setFileName] = useState(null);
  let a = admission._id;

  const fetchData = async () => {
    await AdmissionService.getAllAdmission()
      .then((res) => {
        res.data.map((item) => setAdmission(item));
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const updateData = async () => {
    const formData = new FormData();
    formData.append("image", fileName);
    formData.append("title", title);
    formData.append("text", subTitle);
    formData.append("text_button", buttonContent);
    await AdmissionService.updateAdmission(a, formData);
  };

  function handleOnClickSaveButton() {
    updateData();
    setTimeout(fetchData, 5000);
  }
  return (
    <div style={{ margin: "0px 0px 0px 250px" }} className="content-wrapper">
      <div className="container mt-3" style={{ margin: "0px 0px 0px 20px" }}>
        <h2>Banner</h2>
        <Table bordered>
          <thead>
            <tr>
              <th>Left Image</th>
              <th>Title</th>
              <th>Text Button</th>
              <th> Content</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <img
                  src={admission.imageSection}
                  alt="image bg"
                  width="150px"
                  height="150px"
                />
              </th>
              <td>{admission.title}</td>
              <td>{admission.text_button}</td>
              <td>{admission.text}</td>
            </tr>
          </tbody>
        </Table>
        <Button
          color="primary"
          onClick={toggle}
          style={{ marginBottom: "1rem" }}
        >
          Update Admission
        </Button>
        <Collapse isOpen={isOpen}>
          <Card>
            <CardBody>
              <Form encType="multipart/form-data">
                <FormGroup>
                  <Label for="exampleText">Title</Label>
                  <Input
                    id="title"
                    name="text"
                    type="textarea"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                  <Label for="exampleText">Text</Label>
                  <Input
                    id="subTitle"
                    name="subTitle"
                    type="textarea"
                    onChange={(e) => {
                      setSubTitle(e.target.value);
                    }}
                  />
                  <Label for="exampleText">Text Button</Label>
                  <Input
                    id="buttonContent"
                    name="subTitle"
                    type="text"
                    onChange={(e) => {
                      setButtonContent(e.target.value);
                    }}
                  />
                  <Label for="exampleFile">Left Image</Label>
                  <Input
                    id="exampleFile"
                    name="file"
                    type="file"
                    onChange={(e) => setFileName(e.target.files[0])}
                  />
                  <Button
                    color="primary"
                    style={{ marginTop: "1rem" }}
                    onClick={() => handleOnClickSaveButton()}
                  >
                    Save
                  </Button>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    </div>
  );
};

export default Concerns;

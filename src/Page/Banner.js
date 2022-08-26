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
import BannerService from "../Service/BannerService";

const Banner = () => {
  const [banners, setBanner] = useState([]);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [buttonContent, setButtonContent] = useState("");
  const [fileName, setFileName] = useState(null);
  let a = banners._id;
  useEffect(() => {
    BannerService.getBanner()
      .then((res) => {
        res.data.map((item) => setBanner(item));
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(a);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  function handleOnClickSaveButton() {
    const formData = new FormData();
    formData.append("image", fileName);
    formData.append("title", title);
    formData.append("subTitle", subTitle);
    formData.append("buttonContent", buttonContent);
    BannerService.updateBanner(a, formData);
    BannerService.getBanner()
      .then((res) => {
        res.data.map((item) => setBanner(item));
      })
      .catch((err) => console.log(err));
  }

  return (
    <div style={{ margin: "0px 0px 0px 250px" }} className="content-wrapper">
      <div className="container mt-3" style={{ margin: "0px 0px 0px 20px" }}>
        <h2>Banner</h2>
        <Table bordered>
          <thead>
            <tr>
              <th>Background Image</th>
              <th>Title</th>
              <th>SubTitle</th>
              <th>Button Content</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <img
                  src={banners.backgroundImage}
                  alt="image bg"
                  width="150px"
                  height="150px"
                />
              </th>
              <td>{banners.title}</td>
              <td>{banners.subTitle}</td>
              <td>{banners.buttonContent}</td>
            </tr>
          </tbody>
        </Table>
        <Button
          color="primary"
          onClick={toggle}
          style={{ marginBottom: "1rem" }}
        >
          Update Banner
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
                  <Label for="exampleText">SubTitle</Label>
                  <Input
                    id="subTitle"
                    name="subTitle"
                    type="textarea"
                    onChange={(e) => {
                      setSubTitle(e.target.value);
                    }}
                  />
                  <Label for="exampleText">Button Content</Label>
                  <Input
                    id="buttonContent"
                    name="subTitle"
                    type="text"
                    onChange={(e) => {
                      setButtonContent(e.target.value);
                    }}
                  />
                  <Label for="exampleFile">Background Image</Label>
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

export default Banner;

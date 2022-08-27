import React, { useEffect, useState } from "react";
import CarouselService from "../../Service/CarouselService";
import "./Carousel.css";

const Carousel = () => {
  const [cards, setCards] = useState([]);
  const [title, setTitle] = useState("");
  const [subtitle, setSubTitle] = useState("");
  const [content, setContent] = useState("");
  const [fileName, setFileName] = useState(null);

  useEffect(() => {
    getCard();
  }, []);

  const getCard = () => {
    CarouselService.getAllCard()
      .then((res) => {
        setCards(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    console.log(id);
    const confirm = window.confirm("Bạn muốn xóa hàng này?", id);
    if (confirm) {
      CarouselService.delCardById(id);
      setCards(cards.filter((item) => item._id != id));
    }
  };

  const handleAdd = async () => {
    try {
      const formData = new FormData();
      formData.append("carouselName", title);
      formData.append("sub_text", subtitle);
      formData.append("contentItem", content);
      formData.append("image", fileName);
      await CarouselService.postCard(formData);
      getCard();
    } catch (err) {
      alert(err);
    }
  };

  const handleUpdate = async (id) => {
    const formData = new FormData();
    formData.append("carouselName", title);
    formData.append("sub_text", subtitle);
    formData.append("contentItem", content);
    formData.append("image", fileName);
    await CarouselService.updateCard(id, formData);
    getCard();
  };

  return (
    <div style={{ margin: "0px 0px 0px 250px" }} className="content-wrapper">
      <div className="container mt-3" style={{ margin: "0px 0px 0px 20px" }}>
        <form class="row gy-2 gx-3 align-items-center">
          <div class="col-auto">
            <input
              type="text"
              class="form-control"
              id="autoSizingInput"
              placeholder="Name"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div class="col-auto">
            <input
              type="text"
              class="form-control"
              id="autoSizingInput"
              placeholder="Content"
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div class="col-auto">
            <input
              type="text"
              class="form-control"
              id="autoSizingInput"
              placeholder="Sub title"
              onChange={(e) => setSubTitle(e.target.value)}
            />
          </div>
          <div class="col-auto">
            <input
              type="file"
              class="form-control"
              style={{ padding: "0", height: "100%" }}
              onChange={(e) => setFileName(e.target.files[0])}
            />
          </div>
          <div class="col-auto">
            <div
              type="submit"
              class="btn btn-primary"
              onClick={() => handleAdd()}
            >
              Add
            </div>
          </div>
        </form>
      </div>
      <table id="table-skillbox" class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Avatar</th>
            <th scope="col">Name</th>
            <th scope="col">Sub title</th>
            <th scope="col">Content</th>
          </tr>
        </thead>
        {cards.map((item, index) => (
          <tbody>
            <tr>
              <th scope="row">{index}</th>
              <td>
                <img id="icon" src={item.carouselImage} alt="icon" />
              </td>
              <td>{item.carouselName}</td>
              <td>{item.sub_text}</td>
              <td>{item.contentItem}</td>
              <td className="button-handle">
                <div
                  onClick={() => handleUpdate(item._id)}
                  class="btn btn-primary"
                >
                  Update
                </div>
                <div
                  onClick={() => handleDelete(item._id)}
                  class="btn btn-danger"
                >
                  Delete
                </div>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Carousel;

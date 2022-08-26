import React, { useEffect, useState } from "react";
import ConcernsService from "../../Service/ConcernsService";
import "./Concerns.css";

const Concerns = () => {
  const [cards, setCards] = useState([]);
  const [name, setName] = useState('');
  const [content, setContent] = useState('')


  useEffect(() => {
    getCard();
  }, []);

  const getCard = () => {
    ConcernsService.getAllCard()
      .then((res) => {
        setCards(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    console.log(id);
    const confirm = window.confirm("Bạn muốn xóa hàng này?", id);
    if (confirm) {
      ConcernsService.delCardById(id);
      setCards(cards.filter((item) => item._id != id));
    }
  };

  const handleAdd = async () => {
    await ConcernsService.postCard({
      titleItem: name,
      descriptionItem: content
    })
    getCard()
  };

  const handleUpdate = async (id) => {
    await ConcernsService.updateCard(id,{
      titleItem: name,
      descriptionItem: content
    })
    getCard()
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
              placeholder="Title"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class="col-auto">
            <input
              type="text"
              class="form-control "
              id="autoSizingInput"
              placeholder="Content"
              onChange={(e) => setContent(e.target.value)}
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
            <th scope="col">Title</th>
            <th scope="col">Content</th>
          </tr>
        </thead>
        {cards.map((item, index) => (
          <tbody>
            <tr>
              <th scope="row">{index}</th>
              <td>{item.titleItem}</td>
              <td>{item.descriptionItem}</td>
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

export default Concerns;

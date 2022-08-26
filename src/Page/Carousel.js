import React from 'react'

const Carousel = () => {
  return (
    <div style={{margin: "0px 0px 0px 250px"}} className="content-wrapper">
      <div className="container mt-3" style={{margin: "0px 0px 0px 20px"}}>
          <h2>Custom File</h2>
          <form action="/action_page.php">
            <input type="file" id="myFile" name="filename2" />
            <div className="mt-3">
              <button type="submit" className="btn btn-primary">Add</button>
              <button type="button" class="btn btn-danger">Delete</button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default Carousel
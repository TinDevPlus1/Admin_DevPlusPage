import React from 'react'

const Banner = () => {
  return (
    <div style={{margin: "20px 0px"}}>
      <div className="container mt-3">
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

export default Banner
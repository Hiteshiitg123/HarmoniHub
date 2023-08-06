import React, { useState } from 'react'
import SearchBar from './searchBar'

export default function Canvas(props) {
  const [dataFromChild, setDataFromChild] = useState("");
  const handleDataFromChild = (data) => {
    setDataFromChild(data);
    // Pass the data further to the ParentComponent
    props.onDataSent(data);
    console.log(data);

  };
  return (
    <>
      <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div>
            <ul className="nav flex-column">
              <li className="nav-item">
                <SearchBar onDataSent={handleDataFromChild} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

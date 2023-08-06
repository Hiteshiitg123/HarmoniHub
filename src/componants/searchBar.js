import React, { useState } from "react";

export default function SearchBar(props) {
  const [searchKey, setSearchKey] = useState("");

  // const handleDataFromGrandChild = (data) => {
  //   // Pass the data further to the ChildComponent
  //   props.onDataSent(data);
  //   setSearchKey("")
  // };

  const handleSearch = (e) => {
    e.preventDefault();
    props.onDataSent(searchKey);
    setSearchKey("");
  };
  return (
    <div>
      <form className="d-flex" role="search" onSubmit={handleSearch}>
        <input
          className="form-control me-2"
          type="text"
          placeholder="Search"
          aria-label="Search"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

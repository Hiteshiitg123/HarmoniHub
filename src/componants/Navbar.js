import React,{useState} from 'react'
import logo from '../logo.png'
import SearchBar from './searchBar'

export default function Navbar(props) {
  const [dataFromChild, setDataFromChild] = useState("");
  const handleDataFromChild = (data) => {
    setDataFromChild(data);
    // Pass the data further to the ParentComponent
    props.onDataSent(data);
    console.log(data);

  };
  const handleLogin = () => {
    window.location.href = `${props.auth_endpoint}?client_id=${props.client_id}&redirect_uri=${props.redirect_uri}/callback&response_type=${props.response_type}`;
  };
  const handleLogout = () => {
    props.setaccessToken("");
    window.localStorage.removeItem("token");
    window.location.href = `${props.redirect_uri}`;
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item me-2">
                <a
                  className="btn btn-primary "
                  data-bs-toggle="offcanvas"
                  href="#offcanvasExample"
                  role="button"
                  aria-controls="offcanvasExample"
                >
                  Menu
                </a>
              </li>
              <li className="nav-item me-2">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <center>
                <SearchBar onDataSent={handleDataFromChild} />
              </center>
            </ul>
            <a className="navbar-brand" href="#">
              <img
                src={logo}
                alt="Logo"
                width="70"
                height="40"
                className="d-inline-block align-text-top"
              />
            </a>
            {!props.accessToken && (
              <div>
                <button type="button" className="btn btn-success me-3" >Sign Up</button>
                <button type="button" className="btn btn-danger me-3" onClick={handleLogin}>Login</button>
              </div>
            )}
            {props.accessToken && (
              <div>
                <button type="button" className="btn btn-danger me-3" onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

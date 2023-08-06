import "./App.css";
import Navbar from "./componants/Navbar";
import Canvas from "./componants/Canvas";
import RunningText from "./componants/RunningText";
import Discover from "./componants/Discover";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./componants/Modal";
import SearchBar from './componants/searchBar'


function App() {

  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const [token, setToken] = useState("")
  const [searchResults, setSearchResults] = useState([]);
  const [searchKey, setSearchKey] = useState("");


  const handleDataFromGrandChild = async (d) => {
    setSearchKey(d);
    console.log(d);
  };

  const searchSongs = async () => {
    try {
      const response = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
          Authorization: `Bearer ${token}`, // Replace with your actual access token
        },
        params: {
          q: searchKey,
          type: "track",
        },
      });

      setSearchResults(response.data.tracks.items);
      console.log(response.data);
    } catch (error) {
      console.error("Error searching songs:", error);
    }
  };

  useEffect(() => {
    // Call searchSongs whenever searchKey changes
    if (searchKey) {
      searchSongs();
    }
  }, [searchKey]);


  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    // getToken()

    if (!token && hash) {
      token = hash.substring(1).split("&").find((elem) => elem.startsWith("access_token")).split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);

  }, []);

  return (
    <>
      <Navbar
        client_id={process.env.CLIENT_ID}
        redirect_uri={REDIRECT_URI}
        auth_endpoint={AUTH_ENDPOINT}
        response_type={RESPONSE_TYPE}
        accessToken={token}
        setaccessToken={setToken}
        onDataSent={handleDataFromGrandChild}
      />
      <Canvas
         />
      <RunningText />
      {!token && (
        <Modal />
      )}
      {token && (
        <Discover songs={searchResults} />
      )
      }
    </>
  )
}

export default App;

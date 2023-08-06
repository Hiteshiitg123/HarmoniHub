import React from 'react'
import SongCard from './SongCard';
import "./Discover.css";

export default function Discover(props) {
    console.log(props.songs);
    return (
        <div>
            <center>
                <h1>Discover</h1>
            </center>
            <div className="app-container">
                <div className="cards-container">
                    {props.songs.map((song) => {
                        return (
                            <SongCard  
                            title = {song.name}
                            singer = {song.artists[0].name}
                            image = {song.album.images[0].url}
                            url = {song.external_urls.spotify}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

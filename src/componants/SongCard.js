import React from 'react';

export default function SongCard(props) {
  const cardStyle = {
    width: '18rem',
  };



  return (
    <div className="card" style={cardStyle}>
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">Singer : {props.singer}</p>
        <a href={props.url} className="btn btn-primary" target='_blank'>
        Play
      </a>
    </div>
      </div >
    );
}


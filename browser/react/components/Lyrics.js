import React from 'react';

//props are text, setArtist, artistQuery, setSong, songQuery, handleSubmit
const Lyrics = (props) => {
  const artistChange = (event)=>{
    props.setArtist(event.target.value);
  };
  const songChange = (event)=>{
    props.setSong(event.target.value);
  };
  return (
    <div id="lyrics">
      <form onSubmit={props.handleSubmit} >
        <div>
          <input type="text" onChange={artistChange} value={props.artistQuery} placeholder="Artist" />
          <input type="text" onChange={songChange} value={props.songQuery} placeholder="Song" />
        </div>
        <pre >{props.text || "search above"} </pre>
        <button type = "submit" > Search for Lyrics </button>
      </form>
    </div>
  );
};

export default Lyrics;

import React from 'react';
import Redux from 'redux';
import store from '../store';
import Lyrics from '../components/Lyrics.js';
import {setLyrics} from '../action-creators/lyrics';
import axios from 'axios';


export default class lyricsContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = Object.assign({artistQuery: '', songQuery: ''}, store.getState());

    this.handleArtistInput = this.handleArtistInput.bind(this);
    this.handleSongInput = this.handleSongInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  handleArtistInput(artist){
    this.setState({artistQuery: artist});
  }
  handleSongInput(song){
    this.setState({songQuery: song});
  }
  handleSubmit(){
    if (this.state.artistQuery && this.state.songQuery){
      axios.get(`/api/lyrics/${this.state.artistQuery}/${this.state.songQuery}`)
      .then(res => {
        store.dispatch(setLyrics(res.data.lyric));
      });
    }
  }
  render(){
    return (
      <Lyrics
        text = {this.state.text}
        setArtist = {this.handleArtistInput}
        artistQuery = {this.state.artistQuery}
        setSong = {this.handleSongInput}
        songQuery = {this.state.songQuery}
        handleSubmit = {this.handleSubmit}
      />
    );
  }
}

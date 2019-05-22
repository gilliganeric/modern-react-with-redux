import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return <div> Select a song... </div>;
  }

  return (
    <div>
      <h2>Song Details</h2>
      <p>
        <strong>Title:</strong> {song.title}
        <br />
        <strong>Artist:</strong> {song.artist}
        <br />
        <strong>Duration:</strong> {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);

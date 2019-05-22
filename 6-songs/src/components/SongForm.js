import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSong } from '../actions';

class SongForm extends Component {
  state = { title: '', artist: '', duration: '' };

  render() {
    return (
      <div className="ui segment">
        <h2>Add a Song</h2>
        <form className="ui form">
          <div className="field">
            <label>Title</label>
            <input
              type="text"
              name="song-title"
              placeholder="Song Title"
              value={this.state.title}
              onChange={e => this.setState({ title: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Artist</label>
            <input
              type="text"
              name="song-artist"
              placeholder="Song Artist"
              value={this.state.artist}
              onChange={e => this.setState({ artist: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Duration</label>
            <input
              type="text"
              name="song-duration"
              placeholder="Song Duration"
              value={this.state.duration}
              onChange={e => this.setState({ duration: e.target.value })}
            />
          </div>
          <button
            className="ui button"
            type="button"
            onClick={e => {
              this.setState({ title: '', artist: '', duration: '' });
              return this.props.addSong(this.state);
            }}
          >
            Add Song
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { addSong }
)(SongForm);

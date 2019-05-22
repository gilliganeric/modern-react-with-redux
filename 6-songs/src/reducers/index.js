import { combineReducers } from 'redux';

const DEFAULT_SONGS = [
  { artist: 'No Doubt', title: 'No Scrubs', duration: '4:05' },
  { artist: 'Smash Mouth', title: 'All Star', duration: '2:30' },
  { artist: 'Backstreet Boys', title: 'I Want It That Way', duration: '3:45' },
  { artist: 'John Mayer', title: 'Heart of Life', duration: '5:05' }
];

const songsReducer = (songList = DEFAULT_SONGS, action) => {
  if (action.type === 'DELETE_SONG') {
    return songList.filter(song => song.title !== action.payload.title);
  }

  if (action.type === 'ADD_SONG') {
    return [...songList, action.payload];
  }

  return songList;
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});

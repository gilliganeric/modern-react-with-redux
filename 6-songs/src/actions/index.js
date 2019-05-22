// Action creator
export const selectSong = song => {
  // return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};

export const deleteSong = title => {
  return {
    type: 'DELETE_SONG',
    payload: { title }
  };
};

export const addSong = song => {
  return {
    type: 'ADD_SONG',
    payload: song
  };
};

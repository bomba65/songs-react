import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Numb 1', duration: '1:16' },
        { title: 'Numb 2', duration: '2:16' },
        { title: 'Numb 3', duration: '3:16' },
        { title: 'Numb 4', duration: '4:16' },
        { title: 'Numb 5', duration: '5:16' },
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SELECTED_SONG') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
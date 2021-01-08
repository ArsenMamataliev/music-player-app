import React,{ useState } from 'react';
import data from './data';
import './index';
import MusicList from './components/MusicList';
import Photo from './components/Photo';
import WaveForm from './components/WaveForm';


function App() {
  const [index, setIndex] = useState(5);
  const {id, author, musicUrl, photo} = data[index];
  const [showListOfSongs,setShowListOfSongs] = useState(true);
  const [playList, setPlayList] = useState();
 
  return (
    <div className="App">
      <div className="container">
        <h3> Singer: {author}</h3>
        <Photo photo = {photo} index = {index}/>
        <WaveForm musicUrl = {musicUrl} index = {index} setIndex= {setIndex} 
        id = {id} showListOfSongs= {showListOfSongs}  setShowListOfSongs = {setShowListOfSongs}
        data = {data} playList = {playList}/>
        {showListOfSongs && <MusicList data = {data} setIndex = {setIndex} setPlayList = {setPlayList}/>}
      </div>
    </div>
  );
}

export default App;

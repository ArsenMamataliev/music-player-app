import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faForward, faBackward, faSyncAlt, faRandom, 
        faCaretSquareDown, faCaretSquareUp } from '@fortawesome/free-solid-svg-icons'
import WaveSurfer from 'wavesurfer.js';

const param = {
    barWidth: 2,
    cursorWidth: 2,
    container: '#waveform',
    backend: 'MediaElement',
    height: 40,
    progressColor: '#FFCE00',
    responsive: true,
    waveColor: '#ccc'
}

function WaveForm({musicUrl, index, setShowListOfSongs, showListOfSongs , id, setIndex, data, playList}) {
    let wavesurfer;
    const [playBtn, setPlayBtn] = useState(false);
    const [autoLoop, setAutoLoop] = useState(false);
    const [destroy, setDestroy] = useState(false);

    useEffect(() => { 
        wavesurfer = WaveSurfer.create(param);  
        wavesurfer.load(musicUrl);
        
        //AutoLoop
        // wavesurfer.on('finish', function () {
        //     (autoLoop &&  wavesurfer.play())
        // });
        
     
    }, 
        []
    );

    useEffect(() =>{
        wavesurfer.play();
    }, [destroy]
    );

    useEffect(() =>{
    wavesurfer.destroy();
    wavesurfer.load(musicUrl);
    wavesurfer.play();
    }, [playList]
    );


    //Play and Pause
    const playPause = () => {
        wavesurfer.playPause();
        
    };

    //Destroy and replay 
    const desReplay = ()=> {
        wavesurfer.destroy();
        setDestroy(!destroy);
    }

    //Previous button 
    const prevSong = () => {
        if (id >= 2){
            setIndex(index => index - 1); 
        }else{
            setIndex(index => index = 0);
        }
        desReplay();
    };

    //Next button
    const nextSong = () => {
        if (id < data.length){
            setIndex(index => index + 1);
        }else{
            setIndex(0);
        }
        desReplay();
    };

    //Random number generator 
    const randomSong = () => {
        const randomNumber = Math.floor((Math.random() * 7) + 1);
        if(index === randomNumber){ 
            setIndex(index => index = randomNumber + 1);
        }else{
            setIndex(randomNumber);
        }
        
        desReplay();
    };

    //AutooLoop on 
    const autoLoopOn = () =>{
        setAutoLoop(!autoLoop);
    }; 

    return (
        <div>
            <div id="waveform" className ="waveForm"/>
            <div className="c-player--controls">
                <button className={autoLoop? "active-btn": "skip-btn"} onClick = {autoLoopOn}>
                    <FontAwesomeIcon icon={faSyncAlt} />
                </button>
                <button className="skip-btn" onClick={prevSong}>
                    <FontAwesomeIcon icon={faBackward} />
                </button>
                <button className="play-btn" onClick={playPause}>
                    <FontAwesomeIcon icon={playBtn? faPause : faPlay}/>
                </button>
                <button className="skip-btn" onClick={nextSong}>
                    <FontAwesomeIcon icon={faForward} />
                </button>
                <button className="skip-btn" onClick={randomSong}>
                    <FontAwesomeIcon icon={faRandom} />
                </button>
                <button className="skip-btn" onClick={()=> setShowListOfSongs(pre => !pre)}>
                    <FontAwesomeIcon icon={showListOfSongs? faCaretSquareUp: faCaretSquareDown} />
                </button>
            </div>
        </div>
    );
}
export default WaveForm;
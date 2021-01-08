import React from 'react';

function MusicList({data, setIndex, setPlayList}) {
    return (
        <div className = "music-list">
            {data.map(item =>{
                return(
                    <p key= {item.id}
                        onClick = {()=>{setIndex(item.id-1)
                            setPlayList(item.id);  
                        }}
                    >
                        {item.id}. {item.musicTitle}
                    </p>
                )
            })}
        </div>
    );
}

export default MusicList;
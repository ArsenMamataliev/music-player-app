import React from 'react';

function Photo({photo}) {
    return (
        <div>
            <img  src = {photo} alt = {photo} />
        </div>
    );
}

export default Photo;
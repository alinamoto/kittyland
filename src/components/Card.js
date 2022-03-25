import React from 'react';

const Card = ({id, name, username, email}) => {
     return(
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
            <img src={`https://robohash.org/${id}.png?set=set4`} alt='kitty.jpg' />
            <div >
                <h3>{name}</h3>
                <h1 className='userName'>{username}</h1>
                <p>{email}</p>
             </div>
        </div>
    );   
}

export default Card;

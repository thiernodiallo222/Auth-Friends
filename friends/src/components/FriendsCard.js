import React from 'react'
import './Style.css';

const FriendsCard = (props) => {
    return (
        <div className="friends-card">
            <p>Name:{props.name}</p>
             <p>Age:{props.age}</p>
             <p>Email:{props.email}</p>
        </div>
    )
}

export default FriendsCard

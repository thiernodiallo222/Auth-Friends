import React from 'react'

const FriendsCard = (props) => {
    return (
        <div>
            <p>Name:{props.name} Age:{props.age} Email:{props.email}</p>
        </div>
    )
}

export default FriendsCard

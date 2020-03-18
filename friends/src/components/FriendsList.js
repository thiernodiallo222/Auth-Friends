import React, { Component } from 'react'
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendsCard from './FriendsCard';
import './Style.css';

 class FriendsList extends Component {
    state = {
        friends:[]
    }

    componentDidMount() {
        this.getFriends();
    }

     getFriends = () => {
         axiosWithAuth()
             .get("/friends")
             .then(res => {
                 console.log(res);
                 this.setState({
                     friends: res.data.data
                 })
             }).catch(err => {
                 console.log('error', err);
             })
     };
    render() {
        return (
            <div>
                <h3>LIST OF FRIENDS</h3>
                {this.state.friends.map(friend => 
                    <FriendsCard
                           id={friend.id}
                           name={friend.name}
                           age={friend.age}
                            email={friend.email} />
                       
                 )}
           </div>
        )
    }
}
export default FriendsList;

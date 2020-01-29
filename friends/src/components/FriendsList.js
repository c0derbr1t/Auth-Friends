import React from 'react';
import Loader from 'react-loader-spinner';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
            .get("/friends")
            .then(res => {
                // console.log(res.data);
                this.setState({
                    friends: res.data,
                })
            })
            .catch(err => console.log(err));
            
    }
    

    render() {
        return (
            <div>
                <div className="title">Friends List</div>
                <div className="list">
                    {this.props.fetchingData && (
                    <div className="load-spinner">
                        <Loader type="Puff" color="#204963" height="60" widht="60" /> 
                        <p>Loading...</p>
                    </div>
                    )}
                    {this.state.friends.map(friend => (
                        <div className="friend">
                            <h3>{friend.name} - {friend.age}</h3>
                            <h4>{friend.email}</h4>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default FriendsList;
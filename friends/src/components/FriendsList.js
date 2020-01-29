import React from 'react';
// import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import { axiosWithAuth } from '../utils/axiosWithAuth';
// import EditFriend from './EditFriend';
// import PrivateRoute from './PrivateRoute';

import { List, Friend, H2, Symbol } from './Styles';

class FriendsList extends React.Component {
    state = {
        fetchingData: false,
        friends: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        this.setState({
            fetchingData: true
        })
        axiosWithAuth()
            .get("/friends")
            .then(res => {
                // console.log(res.data);
                this.setState({
                    friends: res.data,
                    fetchingData: false
                })
            })
            .catch(err => console.log(err));
    }



    render() {
        localStorage.setItem("localFriends", JSON.stringify(this.state.friends));

        const localFriends = JSON.parse(localStorage.getItem("localFriends"));
        console.log("localFriends", localFriends);
        return (
            // <Router>
                <div>
                    <List>
                        {this.state.fetchingData && (
                        <div className="load-spinner">
                            <Loader type="Puff" color="#204963" height="60" width="60" /> 
                            <p>Loading...</p>
                        </div>
                        )}
                        {localFriends && localFriends.map(friend => (
                            <Friend>
                                <H2>{friend.name}</H2>
                                <h3>{friend.email}</h3>
                                <h3>{friend.job}</h3>
                                <h4>Age: {friend.age}</h4>
                                {/* <Link to="/edit"> */}
                                    <Symbol>✐</Symbol>
                                {/* </Link> */}
                            </Friend> 
                        ))}
                    </List>
                </div>
            // </Router>
        )
    }
}

export default FriendsList;
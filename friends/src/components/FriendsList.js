import React from 'react';
// import { BrowserRouter as Router, Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import { axiosWithAuth } from '../utils/axiosWithAuth';
// import EditFriend from './EditFriend';
// import PrivateRoute from './PrivateRoute';

import { List, Friend } from './Styles';

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
                                <h3>{friend.name} - {friend.age}</h3>
                                <h4>{friend.email}</h4>
                                {/* <Link to="/edit"><span>✐</span></Link>
                                // <PrivateRoute path="/edit" component={() => <EditFriend friend={friend} />}
                                //  /> */}
                            </Friend> 
                        ))}
                    </List>
                </div>
            // </Router>
        )
    }
}

export default FriendsList;
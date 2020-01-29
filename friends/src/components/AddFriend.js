import React from 'react';
// import Loader from 'react-loader-spinner';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class AddFriend extends React.Component {
    state = {
        friend: {
            name: '',
            age: '',
            email: ''
        }
    };

    handleChange = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        });
    }

    add = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/friends", this.state.friend)
            .then(res => {
                this.props.history.push("/protected");
            })
            .catch(err => console.log("Add Error", err));
    }

    render() {
        return (
            <div>
                <form onSubmit={this.add}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={this.state.friend.name}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Age:
                        <input
                            type="number"
                            name="age"
                            value={this.state.friend.age}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={this.state.friend.email}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default AddFriend;
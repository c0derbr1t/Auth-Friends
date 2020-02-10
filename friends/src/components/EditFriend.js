import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class EditFriend extends React.Component {
    state = {
        friend: {
            id: this.props.friend.id,
            name: this.props.friend.name,
            age: this.props.friend.age,
            email: this.props.friend.email
        }
    };

    handleChange = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        })
    }

    edit = e => {
        e.preventDefault();
        axiosWithAuth()
            .put(`/friends/${this.state.friend.id}`, this.state.friend)
            .then(res => {
                this.props.history.push("/protected");
            })
            .catch(err => console.log("Edit Error", err));
    }

    render() {
        return (
            <div>
                <form onSubmit={this.edit}>
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
                    <button>Edit</button>
                </form>
            </div>
        )
    }
}

export default EditFriend;
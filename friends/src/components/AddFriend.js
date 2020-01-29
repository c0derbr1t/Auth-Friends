import React from 'react';
// import Loader from 'react-loader-spinner';

import { Form, Label, Input, Button } from './Styles';

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
                <Form onSubmit={this.add}>
                    <Label>
                        Name:
                        <Input
                            type="text"
                            name="name"
                            value={this.state.friend.name}
                            onChange={this.handleChange}
                        />
                    </Label>
                    <Label>
                        Age:
                        <Input
                            type="number"
                            name="age"
                            value={this.state.friend.age}
                            onChange={this.handleChange}
                        />
                    </Label>
                    <Label>
                        Email:
                        <Input
                            type="email"
                            name="email"
                            value={this.state.friend.email}
                            onChange={this.handleChange}
                        />
                    </Label>
                    <Button>Add</Button>
                </Form>
            </div>
        )
    }
}

export default AddFriend;
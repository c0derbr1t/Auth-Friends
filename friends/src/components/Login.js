import React from 'react';
import axios from 'axios';

import { Form, Label, Input, Button } from './Styles';

class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axios
            .post("http://localhost:5000/api/login", this.state.credentials)
            .then(res => {
                // console.log(res.data.payload);
                localStorage.setItem("token", res.data.payload);
                this.props.history.push("/protected");
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <Form onSubmit={this.login}>
                    <Label>
                        Username:
                        <Input
                            type="text"
                            name="username"
                            value={this.state.credentials.username}
                            onChange={this.handleChange}
                        />
                    </Label>
                    <Label>
                        Password:
                        <Input
                            type="password"
                            name="password"
                            value={this.state.credentials.password}
                            onChange={this.handleChange}
                        />
                    </Label>
                    <Button>Login</Button>
                </Form>
            </div>
        );
    }
}

export default Login;
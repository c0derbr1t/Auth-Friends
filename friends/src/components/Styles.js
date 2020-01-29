import styled from 'styled-components';
import { Link } from 'react-router-dom';

// App
export const Title = styled.h1`
    margin: 3% auto;
    padding: 1%;
    border-radius: 15px;
    border: 8px outset #00d8d8;
    font-size: 3rem;
    width: 48%;
    background: #004646;
    color: white;
`;

export const Nav = styled.div`
    display: flex;
    justify-content: space-around;
    width: 60%;
    margin: 0 auto 3%;
`;

export const Linked = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    color: teal;
    font-weight: bold;
`;

// Login & Add
export const Form = styled.form`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    margin: 0 auto;
`;

export const Label = styled.label`
    font-size: 1.2rem;
    color: #004646;
    font-weight: bold;
    margin: 1%;
`;

export const Input = styled.input`
    font-size: 1.25rem;
    padding: 1%;
    text-align: center;
    border-radius: 15px;
    border: 3px outset #00d8d8;
    color: #004646;
    font-weight: bold;
    margin: 0 3%;
    width: 25%;
`;

export const Button = styled.button`
    font-size: 1.25rem;
    padding: 1%;
    text-align: center;
    border-radius: 15px;
    border: 3px outset #00d8d8;
    background: #004646;
    color: white;
    margin: 0 2%;
    width: 15%;
    margin: 0 auto;
`;

// FriendsList
export const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 95%;
    margin: 0 auto;
`;

export const Friend = styled.div`
    width: 23%;
    margin: 3%;
    border: 8px outset #00d8d8;
    border-radius: 15px;
    background: #004646;
    color: white;
    padding: 1%;
`;

// AddFriend
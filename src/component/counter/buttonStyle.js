import styled from "styled-components";

const Button = styled.button`
cursor : pointer;
background : transparent;
font-size:20px;
border-radius : 10px;
color : #ccc;
border : 2px solid #777;
margin : 10px;
padding : 0.25em 1em;
transition:0.5s all ease-out;
& : hover{
background-color: #fff;
    color: white}`;

export default Button
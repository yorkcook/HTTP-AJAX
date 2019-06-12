import React from "react";
import axios from "axios";

class Friends extends React.Component {
    constructor(){
        super();
        this.state={
            friends =[]
        }
    }
}

componentDidMount() {
    axios.get('http://localhost:5000')
    .then(res => {
        console.log(res)
    })
    .catch( err => {
        console.log(err)
    })
}

export default Friends;

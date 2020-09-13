import React from 'react';
import { Link } from "react-router-dom";

this.state = {
    id = "",
    password = ""
}
idhandle = (e) =>{
    this.setstate({
        id:e.target.value
    });
}
passwordhandle = (e) =>{
    this.setstate({
        password:e.target.value
    });
}
submithandle = (e) => {
    e.preventDefault();
​}


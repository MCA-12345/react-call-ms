import React from 'react';
import axios from 'axios';
import callApi from '../../request/callApi';


export function Button(props) {

    //axios.defaults.withCredentials = true;

    return (
        <button onClick={props.clickFunction}>Fetch data</button>
    );

}
import {React, useState} from 'react';
import './App.css';
import metadataList from './metadata.json';
//import {Table} from "./components/Table/table";
import {Table2} from "./components/Table/table";
//import {List} from "./components/List/list";
import {Button} from "./components/Button/button";
import callApi from './request/callApi';
import axios from "axios";


function App() {

    const [metadataListApi, setData] = useState([]);

    const readData = () => {
        console.log("Calling API1");
        let data = null;
        callApi.callMs2(data);
        console.log(data);
        setData(data);
    }

    const readData2 = async () => {
        console.log("Calling API2");
        let res = callApi.callMs2();
        console.log(res);
        setData(res.data);
    }

    const readData3 = () => {
        console.log("Calling API Hardcoded");
        let data = callApi.callHardcoded();
        console.log(data);
        setData(data);
    }

    //Funkar
    const readData4 = async () => {
        console.log("Calling API 4");
        let res =  await axios.get('http://localhost:8080/customer');
        console.log(res);
        setData(res.data);
    }

    //Funkar
    const readData5 = () => {
        console.log("Calling API 5");
        callApi.callMs5(setData);
    }

    return (
        <div className="App">
            <h1 className="mch1">mc hello3</h1>
            {/*<Table/>*/}
            {/* <List metadataList={metadataList} / >*/}
            <Table2 metadataList={metadataListApi} />
            <Button clickFunction={readData5}/>
        </div>
    );
}

export default App;

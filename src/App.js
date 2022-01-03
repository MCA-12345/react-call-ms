import './App.css';
import metadataList from './metadata.json';
import {Table} from "./Components/Table/table";
import {Table2} from "./Components/Table/table";
import {List} from "./Components/List/list";


function App() {
    return (
        <div className="App">
            <h1 className="mch1">mc hello3</h1>
            <Table/>
            <List metadataList={metadataList} />
            <Table2 metadataList={metadataList} />
        </div>
    );
}

export default App;

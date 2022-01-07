import axios from 'axios';
import metadataList from '../metadata.json';

const url = 'http://localhost:3004/documents';

const callApi = {
    callMs : (data) => {
        axios.get(url).then(res =>{
            console.log(res.data[0].personNumber);
            data = res.data;
        });
        return data;
    },
    callMs2 : async () => {
        let res =  await axios.get(url);
        return res;

    },
    callHardcoded: () => {
        return metadataList;
    },
    callMs5: async (setDataFunction) => {
        let res =  await axios.get(url);
        setDataFunction(res.data);
    }


}
export default callApi;
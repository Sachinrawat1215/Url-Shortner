import axios from 'axios';

const url = process.env.NODE_ENV === "development" ? process.env.REACT_APP_STAGING_SERVER_URL : process.env.REACT_APP_PRODUCTION_SERVER_URL;

const sendUrl = async (urlData) => {
    try{
        return await axios.post(`${url}`, urlData);
    }catch(error){
        console.log(`Failed to run sendUrl due to ${error}`);
    }
};

const sendId = async (id) => {
    try{
       return await axios.get(`${url}/${id}`)
    }catch(error){
        console.log('Failed to send id due to', error);
    }
}

export { sendUrl, sendId };
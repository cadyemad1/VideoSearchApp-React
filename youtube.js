import axios from 'axios';

const KEY='AIzaSyAaVDiiiBI6MlwWSNfHDblX9U3wXLhuwLg';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
});
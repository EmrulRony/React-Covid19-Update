import axios from 'axios';

const FETCH_URL = "https://covid19.mathdro.id/api/";
export const fetchData = async () => {
    try {
        const { data } = await axios.get(FETCH_URL);
        const modifiedData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate
        }
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}

export default fetchData;
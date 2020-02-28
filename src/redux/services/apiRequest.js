import axios from "axios";
axios.defaults.baseURL = "http://newsapi.org";
const apiKey = 'a34900e46a5f4b999e43deb5f1931cc6';
const todayDate = new Date()
    .toJSON()
    .slice(0, 10)
    .replace(/-/g, "-");

export const getApiRequest = async category => {
    try {
        const { data } = await axios.get(
            `v2/everything?q=${category}&from=${todayDate}&apiKey=${apiKey}`);
        if (data.status !== "ok") {
            throw data.message;
        }
        return data;
    } catch (err) {
        console.error(err);
        throw new Error(err);
    }
};
import axios from "axios";

const axiosAPI = axios.create({
    baseURL: "https://api.thecatapi.com/v1/"
});

export const getPicture = async () => {
    try {
        let { data } = await axiosAPI.get("images/search")
        return data
    } catch (error) {
        console.error(error)
        return null
    }
}

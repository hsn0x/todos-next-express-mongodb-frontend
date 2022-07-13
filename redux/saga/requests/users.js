import axios from "axios";

export const requestGetUser = () => {
    return axios.request({
        method: "get",
        url: "https://jsonplaceholder.typicode.com/users/1",
    });
};

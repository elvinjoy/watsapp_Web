import axios from "axios";

const url = 'http://localhost:8000';

export const addUser = async (data) => {
    try {
        await axios.post(`${url}/add`, data);
    } catch (error) {
        console.log("error on addUser API", error.message);
    }
}

export const getUsers = async () => {
    try {
       let response =  await axios.get(`${url}/users`);
       return response.data;
    } catch (error) {
        console.log("error owhile calling getUser API", error.message);
    }
}
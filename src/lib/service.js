import axios from "axios";
let baseEndpoint = "https://jsonplaceholder.typicode.com";
export const getData = async (userId) => {
  try {
    let result=[];
    const userInfo= await (await axios.get(`${baseEndpoint}/users/${userId}`)).data;
    const userPost= await (await axios.get(`${baseEndpoint}/posts?userId=${userId}`)).data;
    return {userInfo,userPost};
    // result.push(await (await axios.get(`${baseEndpoint}/users/${userId}`)).data);
    // result.push(await (await axios.get(`${baseEndpoint}/posts?userId=${userId}`)).data);
    // return {result};
  } catch (error) {}
};

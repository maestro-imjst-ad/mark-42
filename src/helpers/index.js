import axios from "axios"

const getUserDetails = (data) => {

    // const userData = await axios.post('/sign-in', data);
    const userData = { email: "imajst@gmail.com", name: "howlaj" }
    return userData
}


export { getUserDetails }

import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'https://devplus-batman-backend.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/json',
    // Authorization: Bearer ${localStorage.getItem("token")},
  },
  //   withCredentials: true,
})

export default axiosClient

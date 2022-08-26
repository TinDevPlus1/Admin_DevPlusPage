import axiosClient from './axios-client'

const AboutDevService = {
  getAboutDev() {
    return axiosClient.get('/aboutDev')
  },
}

export default AboutDevService

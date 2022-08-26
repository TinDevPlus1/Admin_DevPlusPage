import axiosClient from './axios-client'

const AboutDevService = {
  getAboutDev() {
    return axiosClient.get('/aboutDev')
  },

  postAboutDev(id, data) {
    return axiosClient.put('/roadToBe/' + id, data);
  },

  deleteAboutDev(id) {
    return axiosClient.delete('/roadToBe/' + id);
  },

  addRoadTobe(data) {
    return axiosClient.post('/roadToBe/', data);
  },

  addAboutDev(data) {
    return axiosClient.post('/aboutDev', data);
  },
  updateAboutDev(id, data) {
    return axiosClient.put('/aboutDev/' + id, data);
  }
};

export default AboutDevService

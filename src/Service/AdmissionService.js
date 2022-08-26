import axiosClient from './axios-client'

class AdmissionService {
  getAllAdmission() {
    return axiosClient.get('/admission')
  }
  updateAdmission(id, data) {
    return axiosClient.put("/admission/" + id, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

export default new AdmissionService()

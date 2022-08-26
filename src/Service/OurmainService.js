import axiosClient from './axios-client'

class OurMainService {
  getAllCard() {
    return axiosClient.get('/campus')
  }

  delCardById(id){
    return axiosClient.delete('/campus/' + id)
  }

  postCard(data){
    return axiosClient.post('/campus',data)
  }

  updateCard(id,data){
    return axiosClient.put('/campus/' + id, data)
  }
}

export default new OurMainService()

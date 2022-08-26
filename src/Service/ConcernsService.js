import axiosClient from './axios-client'

class ConcernsService {
  getAllCard() {
    return axiosClient.get('/concerns')
  }

  delCardById(id){
    return axiosClient.delete('/concerns/' + id)
  }

  postCard(data){
    return axiosClient.post('/concerns',data)
  }

  updateCard(id,data){
    return axiosClient.put('/concerns/' + id, data)
  }
}

export default new ConcernsService()

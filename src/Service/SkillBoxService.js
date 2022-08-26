import axiosClient from './axios-client'

class SkillBoxService {
  getAllCard() {
    return axiosClient.get('/skillbox')
  }

  delCardById(id){
    return axiosClient.delete('/skillbox/' + id)
  }

  postCard(data){
    return axiosClient.post('/skillbox',data)
  }

  updateCard(id,data){
    return axiosClient.put('/skillbox/' + id, data)
  }
}

export default new SkillBoxService()

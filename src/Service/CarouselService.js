import axiosClient from './axios-client'

class CarouselService {
  getAllCard() {
    return axiosClient.get('/carousel')
  }

  delCardById(id){
    return axiosClient.delete('/carousel/' + id)
  }

  postCard(data){
    return axiosClient.post('/carousel',data)
  }

  updateCard(id,data){
    return axiosClient.put('/carousel/' + id, data)
  }
}

export default new CarouselService()

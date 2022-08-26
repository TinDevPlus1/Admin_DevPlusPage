import axiosClient from './axios-client';

const RoadToBeService = {
  getRoadToBe() {
    return axiosClient.get('/roadToBe');
  },
};

export default RoadToBeService;

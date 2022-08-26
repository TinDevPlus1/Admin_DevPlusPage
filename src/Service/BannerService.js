import axiosClient from "./axios-client";

const BannerService = {
  getBanner() {
    return axiosClient.get("/banner");
  },
  updateBanner(id, data) {
    return axiosClient.put("/banner/" + id, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};

export default BannerService;

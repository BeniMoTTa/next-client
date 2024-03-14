import { apiUazapi } from "../services/api";







const createAd = async (data: object) => {
    try {
    await apiUazapi.post("/ads", data);

   } catch (err) {
      console.log(err);
    }
  };
import axios from "axios";
class ReviewService {
  getAll = () => {
    return axios.get(`http://localhost:8080/api/review/all`);
  };
  save = (item) => {
    return axios
      .post(`http://localhost:8080/api/review`, item)
      .catch(function (error) {
        if (error.response) {
        } else if (error.request) {
        } else {
          console.log("Error", error.message);
        }
      });
  };
}

export default new ReviewService();

import axios from "axios";
class CommentService {
  getAll = () => {
    return axios.get(`http://localhost:8080/api/comment/all`);
  };
  save = (item) => {
    return axios
      .post(`http://localhost:8080/api/comment`, item)
      .catch(function (error) {
        if (error.response) {
        } else if (error.request) {
        } else {
          console.log("Error", error.message);
        }
      });
  };
}

export default new CommentService();

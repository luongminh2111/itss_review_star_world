import axios from "axios";
class USerService {
  getAll = () => {
    return axios.get(`http://localhost:8080/api/user/all`);
  };
  getById = (id) => {
    return axios.get(`http://localhost:8080/api/user/${id}`);
  };
  getByUsernameAndPassword = (username, password) => {
    return axios.get(
      `http://localhost:8080/api/user/name=${username}/pass=${password}`
    );
  };
  save = (item) => {
    return axios
      .post(`http://localhost:8080/api/user`, item)
      .catch(function (error) {
        if (error.response) {
        } else if (error.request) {
        } else {
          console.log("Error", error.message);
        }
      });
  };
}

export default new USerService();

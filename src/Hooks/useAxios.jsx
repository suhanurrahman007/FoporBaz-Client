import axios from "axios";
import useAuth from "./useAuth";

const instance = axios.create({
  baseURL: "https://fopor-baz-server.vercel.app/api/v1",
  withCredentials: true,
});
const useAxios = () => {
  const {logout} = useAuth()
  instance.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      if (error.response.status === 401 || error.response.status === 403) {
        logout()
      }
    }
  )
  return instance;
};

export default useAxios;

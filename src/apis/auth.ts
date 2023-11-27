import axios, { AxiosResponse } from "axios";
const Url = import.meta.env.VITE_APP_APP_URL;

const register = async (data: object): Promise<AxiosResponse> => {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url:
        "http://localhost:8080/auth/register?emailid=" +
        data.email +
        "&password=" +
        data.password +
        "&username=" +
        data.username,
    })
      .then((response: any) => {
        resolve(response);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};

const verification = async (data: object): Promise<AxiosResponse> => {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: "http://localhost:8080/api/auth/signin",
      data: data,
    })
      .then((response: any) => {
        resolve(response);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};

export { register, verification };

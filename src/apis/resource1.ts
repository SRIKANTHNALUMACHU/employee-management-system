import axios, { AxiosResponse } from "axios";

const fetchData = async (): Promise<AxiosResponse> => {
  return new Promise((resolve) => {
    axios({
      method: "GET",
      url: "https://8473-2600-6c5a-7f-a54c-3552-5e6c-20af-c494.ngrok-free.app/empdata/getAllEmployees",
      headers: {
        "Content-Type": "application/json",
        accept: "*/*",
      },
    })
      .then((response) => {
        console.log("dfere", response);
        resolve(response.data);
      })
      .catch((error) => {
        console.log("Error is", error);
      });
  });
};

// const addEmployee = async (data: Object): Promise<AxiosResponse> => {
//   return new Promise((resolve) => {
//     axios({
//       method: "POST",
//       url: "https://8473-2600-6c5a-7f-a54c-3552-5e6c-20af-c494.ngrok-free.app/empdata/create",
//       headers: {
//         "Content-Type": "application/json",
//         accept: "*/*",
//       },
//       data: data,
//     })
//       .then((response) => {
//         resolve(response);
//       })
//       .catch((error) => {
//         console.log("error is", error);
//       });
//   });
// };

export { fetchData };

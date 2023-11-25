import axios, { AxiosResponse } from "axios";

const getAllEmployees = async (): Promise<AxiosResponse> => {
  return new Promise((resolve) => {
    axios({
      method: "GET",
      url: "http://localhost:8080/empdata/getAllEmployees",
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

const deleteEmployee  = async (id:number): Promise<AxiosResponse> =>{
  console.log("id is",id)
  return new Promise((resolve) => {
    axios({
      method: "DELETE",
      url: "http://localhost:8080/empdata/delete/"+id,
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
}

const addEmployee = async (data: Object): Promise<AxiosResponse> => {
  return new Promise((resolve) => {
    axios({
      method: "POST",
      url: "http://localhost:8080/empdata/create",
      headers: {
        "Content-Type": "application/json",
        accept: "*/*",
      },
      data: data,
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log("error is", error);
      });
  });
};


const editEmployee = async (data: Object, id: number): Promise<AxiosResponse> => {
  return new Promise((resolve) => {
    axios({
      method: "POST",
      url: "http://localhost:8080/empdata/update/"+id,
      headers: {
        "Content-Type": "application/json",
        accept: "*/*",
      },
      data: data,
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log("error is", error);
      });
  });
};
export { getAllEmployees, addEmployee ,deleteEmployee, editEmployee};

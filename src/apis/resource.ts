import axios, { AxiosResponse } from "axios";
const Url = import.meta.env.VITE_APP_APP_URL;
console.log("url is", Url);

const getAllEmployees = async (): Promise<AxiosResponse> => {
  return new Promise((resolve) => {
    axios({
      method: "GET",
      url: Url + "/empdata/getAllEmployees",
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

const deleteEmployee = async (id: number): Promise<AxiosResponse> => {
  console.log("id is", id);
  return new Promise((resolve) => {
    axios({
      method: "DELETE",
      url: Url + "/empdata/delete/" + id,
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

const addEmployee = async (data: Object): Promise<AxiosResponse> => {
  return new Promise((resolve) => {
    axios({
      method: "POST",
      url: Url + "/empdata/create",
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

const editEmployee = async (
  data: Object,
  id: number
): Promise<AxiosResponse> => {
  return new Promise((resolve) => {
    axios({
      method: "POST",
      url: Url + "/empdata/update/" + id,
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

const getAllDepartments = async (): Promise<AxiosResponse> => {
  return new Promise((resolve) => {
    axios({
      method: "GET",
      url: Url + "/departments/getDepartments",
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

const getAllPayrollRecords = async (): Promise<AxiosResponse> => {
  return new Promise((resolve) => {
    axios({
      method: "GET",
      url: Url + "/payroll/getAllRecords",
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
const getBankAccountDetailsByEmployeeId = async (
  empId: number
): Promise<AxiosResponse> => {
  return new Promise((resolve) => {
    axios({
      method: "GET",
      url: Url + "/bankdetails/getBankAccountDetails?empId=" + empId,
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

const addPayroll = async (data: Object): Promise<AxiosResponse> => {
  return new Promise((resolve) => {
    axios({
      method: "POST",
      url: Url + "/payroll/createPayroll",
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

const addBankAccount = async (data: Object): Promise<AxiosResponse> => {
  return new Promise((resolve) => {
    axios({
      method: "POST",
      url: Url + "/bankdetails/update",
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

const editPayroll = async (data: Object): Promise<AxiosResponse> => {
  return new Promise((resolve) => {
    axios({
      method: "POST",
      url: Url + "/payroll/edit",
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

const addDepartment = async (data: Object): Promise<AxiosResponse> => {
  return new Promise((resolve) => {
    axios({
      method: "POST",
      url: Url + "/departments/createdepartment",
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

const getAllTimeSheets = async (): Promise<AxiosResponse> => {
  return new Promise((resolve) => {
    axios({
      method: "GET",
      url: Url + "/timesheet/getAllTimeSheets",
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

const addTimesheet = async (data: Object): Promise<AxiosResponse> => {
  return new Promise((resolve) => {
    axios({
      method: "POST",
      url: Url + "/timesheet/punch",
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

const getEmployeeDetailsById = async (
  empId: number
): Promise<AxiosResponse> => {
  return new Promise((resolve) => {
    axios({
      method: "GET",
      url: Url + "/empdata/getEmployeeById/" + empId,
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
const getPayrollById = async (empId: number): Promise<AxiosResponse> => {
  return new Promise((resolve) => {
    axios({
      method: "GET",
      url: Url + "/payroll/getByEmpId/" + empId,
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

const getTimeSheetsById = async (empId: number): Promise<AxiosResponse> => {
  return new Promise((resolve) => {
    axios({
      method: "GET",
      url: Url + "/timesheet/getTimesheets/" + empId,
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

export {
  getAllEmployees,
  addEmployee,
  deleteEmployee,
  editEmployee,
  getAllPayrollRecords,
  getAllDepartments,
  addPayroll,
  addBankAccount,
  getBankAccountDetailsByEmployeeId,
  editPayroll,
  addDepartment,
  getAllTimeSheets,
  addTimesheet,
  getEmployeeDetailsById,
  getPayrollById,
  getTimeSheetsById,
};

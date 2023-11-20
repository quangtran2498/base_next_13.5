import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import isEmpty from "lodash/isEmpty";

class Services {
  axios: AxiosInstance;

  constructor() {
    this.axios = axios;
    this.axios.defaults.withCredentials = false;

    const { accessToken } = this.getToken() || {};
    if (!isEmpty(accessToken)) {
      this.attachTokenToHeader(accessToken);
    }

    //! Interceptor request
    this.axios.interceptors.request.use(
      function (config) {
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    //! Interceptor response
    this.axios.interceptors.response.use(
      function (config) {
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
  }

  attachTokenToHeader(token: string) {
    this.axios.interceptors.request.use(
      function (config) {
        if (config && config.headers) {
          // Do something before request is sent
          // config.headers[`Authorization`] = `Bearer ${token}`;
          config.headers[`Authorization`] = config.headers[`Authorization`] || `token ${token}`;
        }
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
  }

  get(url: string, config?: AxiosRequestConfig) {
    return this.axios.get(url, config);
  }

  post(url: string, data: any, config?: AxiosRequestConfig) {
    return this.axios.post(url, data, config);
  }

  delete(url: string, config?: AxiosRequestConfig) {
    return this.axios.delete(url, config);
  }

  put(url: string, data: any, config?: AxiosRequestConfig) {
    return this.axios.put(url, data, config);
  }

  patch(url: string, data: any, config?: AxiosRequestConfig) {
    return this.axios.patch(url, data, config);
  }

  getToken(): { accessToken: string } {
    if (typeof localStorage == "undefined") return { accessToken: "" };
    const dataUser = localStorage.getItem("auth");
    if (!!dataUser) {
      return JSON.parse(dataUser);
    }
    return { accessToken: "" };
  }
  postFormData(url: string, data: any) {
    return this.axios.post(url, data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
  }

  getStorageByKeys(keys: string[]) {
    const values: any = {};
    keys.forEach((key) => {
      const value = localStorage.getItem(key);
      if (!!value) {
        values[key] = JSON.parse(value);
      }
    });
    return values;
  }
}

export default new Services();

import { useCookies } from "@vueuse/integrations/useCookies.mjs";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const { get, set, remove } = useCookies();

const REFRESH_TOKEN = get("refresh_auth");
const REMEMBER_TOKEN = get("remember_auth");
const is_refreshing = ref<boolean>(false);

class HttpClient {
  private readonly client: AxiosInstance;

  public static new = () => new HttpClient();

  constructor() {
    this.client = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });

    if (get("auth")) {
      this.client.defaults.headers.common["Authorization"] = `Bearer ${get(
        "auth"
      )}`;
    }

    const refreshToken = async () => {
      this.client.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${REFRESH_TOKEN}`;
      const response = await this.client.post(
        "/refresh-token",
        {},
        { baseURL: import.meta.env.VITE_CASINO_URL }
      );
      return response;
    };

    const removeAuthentication = () => {
      is_refreshing.value = false;
      remove("auth", { path: "/" });
      remove("refresh_auth", {
        path: "/",
      });
      remove("remember_auth", {
        path: "/",
      });
      window.location.reload();
    };

    this.client.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const originalRequest = error.config;
        if (get("auth")) {
          if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            if (REMEMBER_TOKEN && !is_refreshing.value) {
              try {
                is_refreshing.value = true;
                const res = await refreshToken();
                set("auth", res.data.token, { path: "/" });
                originalRequest.headers.Authorization = `Bearer ${res.data.token}`;
                return this.client(originalRequest);
              } catch (error) {
                removeAuthentication();
                throw error;
              } finally {
                is_refreshing.value = false;
              }
            } else if (!REMEMBER_TOKEN) {
              removeAuthentication();
            }
          }
        }
        return Promise.reject(error);
      }
    );
  }

  async get(url: string, config = {}): Promise<AxiosResponse> {
    try {
      const response = await this.client.get(url, config);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async post(url: string, data = {}, config = {}): Promise<AxiosResponse> {
    try {
      const response = await this.client.post(url, data, config);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async put(url: string, data = {}, config = {}): Promise<AxiosResponse> {
    try {
      const response = await this.client.put(url, data, config);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async delete(url: string, config = {}): Promise<AxiosResponse> {
    try {
      const response = await this.client.delete(url, config);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default HttpClient;

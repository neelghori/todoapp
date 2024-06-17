import axios from "axios";

export default async function ApiCall(
  url: string,
  method: "POST" | "GET" | "PUT" | "PATCH" | "DELETE",
  body?: unknown,
  header?: unknown
) {
  try {
    const instance = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
    });

    switch (method) {
      case "GET":
        return await instance
          .get(url)
          .then((data) => data.data)
          .catch((error) => error.response.data);

      case "POST":
        return await instance
          .post(url, body, header)
          .then((data) => data.data)
          .catch((error) => error.response.data);

      case "PUT":
        return await instance
          .put(url, body, header)
          .then((data) => data.data)
          .catch((error) => error.response.data);

      case "DELETE":
        return await instance
          .delete(url, header)
          .then((data) => data.data)
          .catch((error) => error.response.data);
      default:
        return null;
    }
  } catch (error) {
    return {
      status: {
        code: error.status,
        status: false,
      },
      message: error.message,
      data: null,
      errors: true,
    };
  }
}

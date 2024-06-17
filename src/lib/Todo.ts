import ApiCall from "./api";

const headerForImage = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

export const ListTodo = async () => {
  const response = await ApiCall("/todo/", "GET");
  return response;
};

export const AddTodo = async (body) => {
  const response = await ApiCall("/todo/create", "POST", body, headerForImage);
  return response;
};

export const DeleteTodo = async (id) => {
  const response = await ApiCall(`/todo/delete/${id}`, "DELETE");
  return response;
};
export const UpdateTodo = async (id, body) => {
  const response = await ApiCall(
    `/todo/update/${id}`,
    "PUT",
    body,
    headerForImage
  );
  return response;
};

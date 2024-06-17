import { useEffect, useState } from "react";
import { ListTodo } from "../lib/Todo";
import { toast } from "sonner";
import { socket } from "../lib/socket";

const usePrimaryData = () => {
  const [open, setOpen] = useState({
    status: false,
    modalCategory: "Add",
  });
  const [loader, setLoader] = useState(false);
  const [todoData, setTodoData] = useState([]);

  const getListofTodo = async () => {
    setLoader(true);
    const response = await ListTodo();
    if (response) {
      setTodoData(response.data);
    } else {
      toast.error(response.message);
    }
    setLoader(false);
  };
  useEffect(() => {
    getListofTodo();
  }, []);

  useEffect(() => {
    socket.on("newtodo", (todo) => {
      setTodoData(todo);
    });
    socket.on("deleteTodoEmit", (todo) => {
      setTodoData(todo);
    });
  }, []);

  return {
    open,
    setOpen,
    todoData,
    setTodoData,
    loader,
  };
};

export default usePrimaryData;

import Input from "./Input";
import Button from "./Button";
import Badge from "./Badge";
import Dialog from "./Dialog";
import { AddUpdateModalProps } from "../../Types/Modal";
import { AddTodo, UpdateTodo } from "../../lib/Todo";
import { useState } from "react";
import Loader from "./Loader";
import { socket } from "../../lib/socket";
import { toast } from "sonner";

const AddUpdateModal: React.FC<AddUpdateModalProps> = (props) => {
  const [loader, setLoader] = useState(false);
  const AddEditTodo = async () => {
    setLoader(true);
    const formData = new FormData();
    formData.append("title", props?.open?.editData?.title);
    formData.append("date", props?.open?.editData?.date);
    formData.append("status", props?.open?.editData?.status);
    formData.append("image", props?.open?.editData?.image);
    if (props?.open?.modalCategory == "Edit") {
      const Updateresponse = await UpdateTodo(
        props?.open?.editData?._id,
        formData
      );
      if (Updateresponse?.status?.status) {
        props?.setOpen({
          ...props?.open,
          status: !props?.open?.status,
          modalCategory: "Add",
          editData: {
            title: "",
            date: "",
            image: "",
            status: "",
            _id: "",
          },
        });
        toast.success(Updateresponse.message);
      }
    } else {
      const Addresponse = await AddTodo(formData);

      if (Addresponse?.status.status) {
        socket.emit("addtodo", "todo added successfully");
        props?.setOpen({
          ...props?.open,
          modalCategory: "Add",
          status: !props?.open?.status,
          editData: {
            title: "",
            date: "",
            image: "",
            status: "",
            _id: "",
          },
        });
        toast.success(Addresponse.message);
      }
    }
    setLoader(false);
  };

  const handleChange = (
    e: React.FormEvent<HTMLInputElement>,
    title: string,
    value?: string
  ) => {
    props?.setOpen({
      ...props?.open,
      editData: {
        ...props?.open?.editData,
        [title]:
          title == "image"
            ? e
            : title == "status"
            ? value
            : e.currentTarget.value,
      },
    });
  };

  const clearonClose = () => {
    props?.setOpen({
      ...props?.open,
      status: !props?.open?.status,
      editData: {
        title: "",
        date: "",
        image: "",
        status: "",
        _id: "",
      },
    });
  };
  return (
    <Dialog
      open={props?.open}
      setOpen={props?.setOpen}
      onCloseModal={clearonClose}
      title={props?.open?.modalCategory == "Edit" ? "Edit Todo" : "Create Todo"}
    >
      <div className="flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Input
            type="text"
            label="Task Title"
            placeholder="Enter Task Title"
            value={props?.open?.editData?.title}
            onChange={(e) => {
              handleChange(e, "title");
            }}
          />
          <Input
            type="date"
            label="Task Date"
            value={props?.open?.editData?.date}
            placeholder="Select Date"
            onChange={(e) => {
              handleChange(e, "date");
            }}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* <ImageUploader
            data={props?.open}
            setOpen={props?.setOpen}
            imageurl={props?.open?.editData?.image}
            onChange={(e) => handleChange(e, "image")}
          /> */}
          <div className="flex flex-col gap-3">
            <label>Status</label>
            <div className="flex flex-wrap gap-3">
              <Badge
                classnames={`${
                  props?.open?.editData?.status == "todo"
                    ? "!bg-gray-600 !text-white"
                    : ""
                }`}
                onClick={() => {
                  handleChange(null, "status", "todo");
                }}
              >
                Todo
              </Badge>
              <Badge
                classnames={`${
                  props?.open?.editData?.status == "inprogress"
                    ? "!bg-yellow-400 !text-white"
                    : ""
                }`}
                onClick={() => {
                  handleChange(null, "status", "inprogress");
                }}
              >
                In Progress
              </Badge>
              <Badge
                classnames={`${
                  props?.open?.editData?.status == "completed"
                    ? "!bg-green-500 !text-white"
                    : ""
                }`}
                onClick={() => {
                  handleChange(null, "status", "completed");
                }}
              >
                Completed
              </Badge>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            classnames="!px-4 !py-3"
            disabled={loader}
            onClick={AddEditTodo}
          >
            {loader ? <Loader /> : "Submit"}
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default AddUpdateModal;

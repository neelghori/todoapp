import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import AddIcon from "../UI/Icons/Add";
import EditIcon from "../UI/Icons/EditIcon";
import { BoardProps } from "../../Types/Modal";
import { TodoStatusData } from "../../data/constant";
import moment from "moment";
import Trash from "../UI/Icons/Trash";
import { DeleteTodo } from "../../lib/Todo";
import { toast } from "sonner";
import { socket } from "../../lib/socket";

const Board: React.FC<BoardProps> = (props) => {
  const DeleteTodoFunc = async (id: string) => {
    const Updateresponse = await DeleteTodo(id);
    if (Updateresponse?.status?.status) {
      toast.success(Updateresponse.message);
      socket.emit("deleteTodo", "delete todo");
    } else {
      toast.error(Updateresponse.error);
    }
  };
  return (
    <div className="flex top-28 absolute">
      <DragDropContext onDragEnd={() => {}} onDragStart={() => {}}>
        <Droppable droppableId="todoapp">
          {(prov) => {
            return (
              <div
                {...prov.droppableProps}
                ref={prov.innerRef}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-28 z-10"
              >
                {TodoStatusData.map((element, index) => {
                  const filterStatusData =
                    props.tododata &&
                    props.tododata.length > 0 &&
                    props.tododata.filter((ele) => ele.status == element.value);
                  return (
                    <Draggable
                      draggableId={element.value}
                      index={index}
                      key={index}
                    >
                      {(provided) => {
                        return (
                          <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            className="flex flex-col gap-2 bg-[#f0efed] p-3 rounded-[10px] overflow-hidden"
                          >
                            <Droppable
                              droppableId={index.toString()}
                              type="card"
                            >
                              {(provided) => {
                                return (
                                  <>
                                    <div className="flex flex-col gap-2">
                                      <div className="flex py-2 justify-between items-center">
                                        <h3>{element.label} </h3>
                                        <span className="py-1 px-2 ml-1 text-xs bg-[#d2d3db] rounded-full">
                                          {filterStatusData &&
                                          filterStatusData.length > 0
                                            ? filterStatusData.length
                                            : 0}
                                        </span>
                                      </div>
                                      <div
                                        className="border border-dashed p-[7px] cursor-pointer border-[#d2d3db] flex justify-center items-center"
                                        onClick={() =>
                                          props?.setOpen({
                                            ...props?.open,
                                            editData: {
                                              ...props?.open?.editData,
                                              status: element.value,
                                            },
                                            status: !props?.open.status,
                                            modalCategory: "Add",
                                          })
                                        }
                                      >
                                        <AddIcon />
                                      </div>
                                    </div>
                                    <div
                                      {...provided.droppableProps}
                                      ref={provided.innerRef}
                                      className="flex flex-col gap-5 mt-2 pr-2"
                                    >
                                      {filterStatusData &&
                                        filterStatusData.length > 0 &&
                                        filterStatusData.map((ele, key) => {
                                          return (
                                            <Draggable
                                              key={element.value}
                                              draggableId={element.value}
                                              index={key}
                                            >
                                              {(draggleProvided) => {
                                                return (
                                                  <div
                                                    {...draggleProvided.dragHandleProps}
                                                    {...draggleProvided.draggableProps}
                                                    ref={
                                                      draggleProvided.innerRef
                                                    }
                                                  >
                                                    <div className="bg-white p-[14px] flex cursor-pointer flex-col gap-4 group rounded-md w-[320px]">
                                                      <div className="flex justify-between">
                                                        <div className="flex flex-col gap-1">
                                                          <p>{ele.title}</p>
                                                          <p className="text-xs">
                                                            {moment(
                                                              ele?.date
                                                            ).format("DD MMM")}
                                                          </p>
                                                        </div>
                                                        <div className="flex gap-2">
                                                          <EditIcon
                                                            className="!size-5 cursor-pointer group-hover:flex hidden transition-all duration-1000 ease-in-out"
                                                            onClick={() => {
                                                              props?.setOpen({
                                                                status:
                                                                  !props?.open
                                                                    .status,
                                                                modalCategory:
                                                                  "Edit",
                                                                editData: ele,
                                                              });
                                                            }}
                                                          />
                                                          <Trash
                                                            onClick={() =>
                                                              DeleteTodoFunc(
                                                                ele._id
                                                              )
                                                            }
                                                            className="!size-5 cursor-pointer group-hover:flex hidden transition-all duration-1000 ease-in-out"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                );
                                              }}
                                            </Draggable>
                                          );
                                        })}
                                    </div>
                                  </>
                                );
                              }}
                            </Droppable>
                          </div>
                        );
                      }}
                    </Draggable>
                  );
                })}
              </div>
            );
          }}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Board;

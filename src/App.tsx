import AddUpdateModal from "./components/UI/Modal";
import Header from "./components/Layout/Header";
import "./App.css";
import Board from "./components/Board/Board";
import usePrimaryData from "./hooks/usePrimaryData";
import SkeletonLoaderContainer from "./components/SkeletonLoaderContainer/SkeletonLoaderContainer";
import { useEffect } from "react";
import { socket } from "./lib/socket";

function App() {
  const { open, setOpen, todoData, loader } = usePrimaryData();
  useEffect(() => {
    function onConnect() {
      console.log("connection");
    }
    function onDisconnect() {
      console.log("disconnect");
    }
    socket.on("connection", onConnect);
    socket.on("disconnect", onDisconnect);
    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);
  return (
    <div className="w-screen h-screen flex justify-center items-center relative overflow-x-hidden">
      <Header />
      {!loader ? (
        <Board open={open} setOpen={setOpen} tododata={todoData} />
      ) : (
        <SkeletonLoaderContainer />
      )}
      <AddUpdateModal open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;

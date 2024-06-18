import React from "react";
import Close from "./Icons/Close";
import { ModalProps } from "../../Types/Modal";

const Dialog: React.FC<ModalProps> = (props) => {
  return (
    <dialog
      open={props?.open?.status}
      className={`bg-black/40 w-screen h-screen z-[9999] fixed`}
    >
      <div className="flex justify-center items-center h-full">
        <div className="w-[800px] h-full md:h-[350px] flex flex-col gap-4 px-5 py-6 bg-white rounded-none md:rounded-xl transition-all duration-700">
          <div className="flex justify-between">
            <p className="text-xl font-bold">{props.title}</p>
            <Close
              onClick={() => {
                props?.onCloseModal();
              }}
            />
          </div>
          {props.children}
        </div>
      </div>
    </dialog>
  );
};

export default Dialog;

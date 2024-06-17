export interface ModalProps {
  open: Open;
  setOpen: (val: Open) => void;
  title: string;
  children: React.ReactNode;
  onCloseModal?: () => void;
}

export interface Open {
  status: boolean;
  modalCategory: string;
  editData?: TodoData;
}

export type AddUpdateModalProps = {
  editData?: TodoData;
} & Pick<ModalProps, "open" | "setOpen">;

export type BoardProps = Pick<ModalProps, "open" | "setOpen"> & {
  tododata: TodoData[];
};

export interface TodoData {
  _id: string;
  title: string;
  status: string;
  date: string;
  created_at?: string;
  updated_at?: string;
  image?: string;
}

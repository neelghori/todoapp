import { ChangeEvent, useEffect, useRef, useState } from "react";
import ImageUploadSvg from "./Icons/ImageUploadSvg";
import Close from "./Icons/Close";
import { ImageUploaderProps } from "../../Types/ImageUploader";

const ImageUploader: React.FC<ImageUploaderProps> = (props) => {
  const [selectedImage, setSelectedImage] = useState<
    string | null | ArrayBuffer
  >(props.imageurl ?? "");
  useEffect(() => {
    setSelectedImage(props.imageurl);
  }, [props.imageurl]);
  const inputFile = useRef<HTMLInputElement>(null);
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (!props.error || props.error.trim() !== "") {
          setSelectedImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
      //@ts-ignore
      props.onChange?.(file);
    }
  };
  return (
    <label
      htmlFor="uploadFile"
      onClick={() => inputFile.current!.click()}
      className="bg-white text-gray-500 font-semibold  relative text-base rounded h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed font-[sans-serif]"
    >
      <ImageUploadSvg />
      Upload Task Image
      <input
        type="file"
        ref={inputFile}
        onChange={(e) => handleImageChange(e)}
        className="hidden"
        accept="image/*"
      />
      <p className="text-xs font-medium text-gray-400 mt-2">
        PNG, JPG SVG, WEBP are Allowed.
      </p>
      {selectedImage && !props.error ? (
        <div
          className="absolute top-2 right-2 z-50"
          onClick={(e) => {
            e.stopPropagation();

            if (inputFile.current) {
              inputFile!.current!.value = "";
            }
            setSelectedImage("");
            props?.setOpen({
              ...props?.data,
              editData: {
                ...props?.data?.editData,
                image: "",
              },
            });
          }}
        >
          <Close classnames="!size-6" />
        </div>
      ) : null}
      {selectedImage && !props.error && (
        <div className="w-full absolute  h-full overflow-hidden bg-gray-200 rounded-md">
          <img
            src={
              (props?.imageurl == ""
                ? `${import.meta.env.VITE_API_URL}/images/${selectedImage}`
                : selectedImage) as string
            }
            alt="no Image"
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
    </label>
  );
};

export default ImageUploader;

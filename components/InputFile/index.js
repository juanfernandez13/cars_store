import { Add } from "@mui/icons-material";
import React from "react";

const InputFile = ({ onChange }) => {
  return (
    <div className="w-[250px] h-[250px] sm:h-[400px] sm:w-[400px] border-2 border-slate-300 relative bg-orange-600 hover:bg-orange-400 transition-all duration-300">
      <input
        type="file"
        multiple
        className="opacity-0 h-full w-full absolute top-0 z-10 cursor-pointer"
        onChange={onChange}
      />
      <div className=" w-full h-full flex justify-center items-center flex-col gap-4 text-white">
        <Add sx={{ fontSize: 60 }} />
        Adicionar nova imagem
      </div>
    </div>
  );
};

export default InputFile;

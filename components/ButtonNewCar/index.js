import { Create } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const ButtonNewCarComponent = () => {
  return (
    <div>
      <a href="/administracao/new">
      <Button className="bg-orange-800 font-medium text-white p-4 h-10 hover:bg-orange-400 gap-2">
        Cadastrar carro
        <Create />
      </Button>
      </a>
    </div>
  );
};

export default ButtonNewCarComponent;

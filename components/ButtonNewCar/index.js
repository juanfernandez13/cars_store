import { Create } from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const ButtonNewCarComponent = () => {
  return (
    <div>
      <Link href="/administracao/new">
      <Button className="bg-orange-800 font-medium text-white p-4 h-10 hover:bg-orange-400 gap-2">
        Cadastrar carro
        <Create />
      </Button>
      </Link>
    </div>
  );
};

export default ButtonNewCarComponent;

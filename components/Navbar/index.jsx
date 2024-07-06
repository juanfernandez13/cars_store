import { People, Search } from "@mui/icons-material";
import { colors } from "@mui/material";
import { AppBar, Button } from "@mui/material";
import Link from "next/link";

const NavbarComponent = () => {
  return (
    <div>
      <AppBar
        className={
          "py-6 px-4 bg-gradient-to-l from-orange-400 to-orange-800 flex justify-between flex-row"
        }
      >
        <h1 className={"text-2xl font-bold"}>Cars store</h1>
        <div>
          <Button className="lg:mr-4">
            <a href={'/search'} className="gap-4 flex flex-row">
              <Search sx={{ color: "#ffffff" }} />
              <span className="hidden lg:flex text-white font-medium font-4xl">
                Buscar
              </span>
            </a>
          </Button>
          <Button className="cursor-pointer">
            <a href={"/administracao"} className="gap-4 flex flex-row">
              <People sx={{ color: "#ffffff" }} />
              <span className="hidden lg:flex text-white font-medium font-4xl">
                Administração
              </span>
            </a>
          </Button>
        </div>
      </AppBar>
    </div>
  );
};

export default NavbarComponent;

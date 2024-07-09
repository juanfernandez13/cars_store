import { People, Search } from "@mui/icons-material";
import { AppBar, Button } from "@mui/material";

const NavbarComponent = () => {
  return (
    <div>
      <AppBar
        className={
          "py-6 px-12 bg-gradient-to-l from-orange-400 to-orange-800 flex justify-between flex-row"
        }
      >
        <a href="/"><h1 className={"text-2xl font-bold"}>Cars store</h1></a>
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

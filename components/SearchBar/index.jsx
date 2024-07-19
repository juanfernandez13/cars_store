import { People, Search } from "@mui/icons-material";
import { Button, InputAdornment, TextField } from "@mui/material";
import Link from "next/link";
import React from "react";

const SearchBarComponent = (props) => {
  const { value, onChange } = props;
  return (
    <div>
      <div className="w-full bg-gradient-to-l from-orange-400 to-orange-800 flex justify-between py-4 px-12 flex-wrap">
        <div className="w-full flex flex-row justify-between items-center">
          <Link href="/">
            <h1 className={"text-2xl font-bold text-white sm:text-nowrap"}>
              Cars store
            </h1>
          </Link>
          <div className="w-full flex justify-center hidden sm:flex">
            <TextField
              value={value}
              onChange={onChange}
              variant="standard"
              className="w-4/5 p-2 lg:w-3/5 lg:p-4"
              placeholder="Pesquise por um carro"
              sx={{ background: "#ffffff", borderRadius: 4, border: 0 }}
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="flex flex-row">
            <Button className="lg:mr-4">
              <Link href={"/search"} className="gap-4 flex flex-row">
                <Search sx={{ color: "#ffffff" }} />
                <span className="hidden lg:flex text-white font-medium font-4xl">
                  Buscar
                </span>
              </Link>
            </Button>
            <Button className="cursor-pointer">
              <Link href={"/administracao"} className="gap-4 flex flex-row">
                <People sx={{ color: "#ffffff" }} />
                <span className="hidden lg:flex text-white font-medium font-4xl">
                  Administração
                </span>
              </Link>
            </Button>
          </div>
        </div>
        <div className="w-full flex justify-center flex sm:hidden my-4">
          <TextField
            value={value}
            onChange={onChange}
            variant="standard"
            className="w-full p-2"
            placeholder="Pesquise por um carro"
            sx={{ background: "#ffffff", borderRadius: 4, border: 0 }}
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBarComponent;

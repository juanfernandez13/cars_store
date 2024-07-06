import { Search } from '@mui/icons-material'
import { InputAdornment, TextField } from '@mui/material'
import React from 'react'

const SearchBarComponent = (props) => {
  const {value, onChange} = props 
  return (
    <div>
      <div className="w-full bg-gradient-to-l from-orange-400 to-orange-800 flex justify-center p-4">
        <TextField
        value={value}
        onChange={onChange}
        variant="standard"
          className="w-4/5 p-2 lg:w-3/5 lg:p-4"
          placeholder="Pesquise por um carro"
          sx={{background: '#ffffff', borderRadius: 4, border: 0}}
          InputProps={{
            disableUnderline:true,
            startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
            ),
          }}
        />
      </div>
    </div>
  )
}

export default SearchBarComponent

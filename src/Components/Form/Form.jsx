import { useState } from "react";
import styles from "./Form.module.css";
import { Button, TextField, Switch, FormControlLabel } from "@mui/material";
const Form = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  return (
    <form action="">
      <TextField
        label="Nome"
        id="nome"
        variant="outlined"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => {
          setName(e.currentTarget.value.substring(0, 3));
        }}
      />
      <TextField
        label="Sobrenome"
        id="sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
        value={surname}
        onChange={(e) => {
          setSurname(e.currentTarget.value);
        }}
      />
      <TextField
        label="CPF"
        id="cpf"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <FormControlLabel
        label="Promoções"
        control={<Switch name="promocoes" defaultChecked />}
      />
      <FormControlLabel
        label="Novidades"
        control={<Switch name="novidades" defaultChecked />}
      />
      <Button type="submit" color="primary" variant="contained" fullWidth>
        Cadastrar
      </Button>
    </form>
  );
};

export { Form };

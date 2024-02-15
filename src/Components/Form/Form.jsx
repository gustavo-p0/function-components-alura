import styles from "./Form.module.css";
import { Button, TextField, Switch, FormControlLabel } from "@mui/material";
const Form = () => {
  return (
    <form action="">
      <TextField
        label="Nome"
        id="nome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Sobrenome"
        id="sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
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

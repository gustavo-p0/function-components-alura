import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Form.module.css";
import { Button, TextField, Switch, FormControlLabel } from "@mui/material";
const Form = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [cpf, setCpf] = useState("");
  const [wantPromotions, setWantPromotions] = useState(true);
  const [wantNewsletter, setWantNewsletter] = useState(true);

  const [errors, setErrors] = useState({
    cpf: { valid: true, helperText: "" },
  });

  const validateCPF = (cpf) => {
    if (cpf.length !== 11) {
      return { valid: false, helperText: "CPF deve ter 11 dígitos" };
    }

    return { valid: true, helperText: "" };
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ name, surname, cpf, wantPromotions, wantNewsletter });
      }}
      action=""
    >
      <TextField
        label="Nome"
        id="nome"
        variant="outlined"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => {
          setName(e.currentTarget.value);
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
        error={!errors.cpf.valid}
        helperText={errors.cpf.helperText}
        margin="normal"
        value={cpf}
        onBlur={() => {
          setErrors({
            cpf: validateCPF(cpf),
          });
        }}
        onChange={(e) => {
          setCpf(e.currentTarget.value);
        }}
      />
      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            name="promocoes"
            checked={wantPromotions}
            onChange={(e) => {
              setWantPromotions(e.currentTarget.checked);
            }}
          />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            name="novidades"
            checked={wantNewsletter}
            onChange={(e) => {
              setWantNewsletter(e.currentTarget.checked);
            }}
          />
        }
      />
      <Button type="submit" color="primary" variant="contained" fullWidth>
        Cadastrar
      </Button>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export { Form };

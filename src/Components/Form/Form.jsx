import styles from "./Form.module.css";
import Button from "@mui/material/Button";
const Form = () => {
  return (
    <form action="">
      <label htmlFor="">Nome</label>
      <input type="text" name="" id="" />
      <label htmlFor="">Sobrenome</label>
      <input type="text" name="" id="" />
      <label htmlFor="">CPF</label>
      <input type="text" name="" id="" />
      <label htmlFor="">Promoções</label>
      <input type="checkbox" name="" id="" />
      <label htmlFor="">Novidades</label>
      <input type="checkbox" name="" id="" />
      <Button type="submit" color="primary" variant="contained">
        Cadastrar
      </Button>
    </form>
  );
};

export { Form };

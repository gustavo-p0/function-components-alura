// import { Component } from "react";
import { Container, Typography } from "@mui/material";
import { Form } from "./Components/Form";
import "fontsource-roboto";
const App = () => {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component={"h1"} align="center">
        Formulário de cadastro
      </Typography>
      <Form />
    </Container>
  );
};

// class App extends Component {
//   render() {
//     return (
//       <>
//         <h1>Hello, World!</h1>
//       </>
//     );
//   }
// }
export { App };

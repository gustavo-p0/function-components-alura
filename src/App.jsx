// import { Component } from "react";
import { Container, Typography } from "@mui/material";
import { Form } from "./Components/Form";
import "fontsource-roboto";

const handleFormSubmit = (data) => {
  console.log(data);
};

const App = () => {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component={"h1"} align="center">
        Formulário de cadastro
      </Typography>
      <Form onSubmit={handleFormSubmit} />
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

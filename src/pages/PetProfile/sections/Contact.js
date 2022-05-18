import { useState } from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import MKAlert from "components/MKAlert";

function Contact() {
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = (event) => {
    event.preventDefault();
    setShowAlert(true);
  };

  return (
    <MKBox component="section" py={{ xs: 0, lg: 6 }}>
      <Container>
        <Grid container item>
          <MKBox
            width="100%"
            bgColor="white"
            borderRadius="xl"
            shadow="xl"
            mb={6}
            sx={{ overflow: "hidden" }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                lg={5}
                position="relative"
                px={0}
                sx={{
                  backgroundImage: ({
                    palette: { gradients },
                    functions: { rgba, linearGradient },
                  }) =>
                    `${linearGradient(
                      rgba(gradients.dark.main, 0.0),
                      rgba(gradients.dark.state, 0.0)
                    )}, url(https://www.amigonaosecompra.com.br/unsafe/1200x0/0d0d7fe5-b177-4b74-98ba-1d3293885c84/89783254-5be4-4b33-863b-d8a63c24cfa1/1c584dfe-1cf9-4ff0-bf49-395b586f37f1.jpeg?v=63819961476)`,
                  backgroundSize: "cover",
                }}
              />
              <Grid item xs={12} lg={7}>
                <MKBox component="form" p={2} onSubmit={handleShowAlert}>
                  <MKBox px={3} py={{ xs: 2, sm: 6 }}>
                    <MKTypography variant="h2" mb={1}>
                      Formulário de Adoção
                    </MKTypography>
                    <MKTypography variant="body1" color="text" mb={2}>
                      Após o preenchimento e envio nossa equipe entrara em contato para dar
                      continuidade.
                    </MKTypography>
                  </MKBox>
                  <MKBox pt={0.5} pb={3} px={3}>
                    <Grid container>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="Nome"
                          placeholder="Nome Completo"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="E-mail"
                          placeholder="Informe um e-mail para contato"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="Localização"
                          placeholder="Informe a cidade e estado onde mora"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      md={6}
                      justifyContent="flex-end"
                      textAlign="right"
                      ml="auto"
                    >
                      <MKButton type="submit" variant="gradient" color="info">
                        Enviar Pedido
                      </MKButton>
                    </Grid>
                    {showAlert ? (
                      <>
                        <br />
                        <MKAlert color="success" dismissible>
                          Pedido enviado com Sucesso !!!
                        </MKAlert>
                      </>
                    ) : null}
                  </MKBox>
                </MKBox>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Contact;

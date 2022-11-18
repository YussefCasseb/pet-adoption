import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import Card from "components/Card";

function PetList() {
  const [animais, setAnimais] = useState([]);

  useEffect(() => {
    fetch("http://localhost/pet-adoption-backend/animal/listar")
      .then((response) => response.json())
      .then((response) => {
        setAnimais(response);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err.message);
      });
  }, []);

  const renderData = (
    <Grid container spacing={3} sx={{ mb: 10 }}>
      <Grid item xs={12} lg={12}>
        <Grid container spacing={3}>
          {animais.map(({ image, name, route, location }) => (
            <Grid item xs={12} md={4} sx={{ mb: 2 }} key={name}>
              <Link to={route}>
                <Card image={image} name={name} location={location} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <MKBox component="section" my={6} py={6}>
      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
}

export default PetList;

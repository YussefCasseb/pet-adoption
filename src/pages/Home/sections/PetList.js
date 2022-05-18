import { Link } from "react-router-dom";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import Card from "components/Card";

function PetList() {
  const data = [
    {
      title: "Pets",
      items: [
        {
          image:
            "https://www.amigonaosecompra.com.br/unsafe/460x440/0d0d7fe5-b177-4b74-98ba-1d3293885c84/89783254-5be4-4b33-863b-d8a63c24cfa1/89783254-5be4-4b33-863b-d8a63c24cfa1.jpeg?v=63819961411",
          name: "Bóris",
          route: "/pages/pet-profile",
          location: "São Paulo, São Paulo",
        },
        {
          image:
            "https://www.amigonaosecompra.com.br/unsafe/460x440/474e3b6a-f091-4be5-839b-d887f36e3158/e7cdc469-c648-460e-93aa-f9b72ec59ff6/e7cdc469-c648-460e-93aa-f9b72ec59ff6.jpg?v=63819959286",
          name: "Merlin",
          route: "/pages/pet-profile",
          location: "Rio de Janeiro, Rio de Janeiro",
        },
        {
          image:
            "https://www.amigonaosecompra.com.br/unsafe/460x440/65e3a96d-e3cd-4431-90a2-b34140bef53f/64f1938b-a722-4f66-bad6-fbbb499672b2/64f1938b-a722-4f66-bad6-fbbb499672b2.jpeg?v=63819955681",
          name: "Floquinho",
          route: "/pages/pet-profile",
          location: "Guarulhos, São Paulo",
        },
        {
          image:
            "https://www.amigonaosecompra.com.br/unsafe/460x440/879dcc7a-6bf2-4bc9-8bcc-14aa468ff666/e1ce6fa5-7b2f-4ec2-8f11-6e826c78444a/e1ce6fa5-7b2f-4ec2-8f11-6e826c78444a.jpeg?v=63819950292",
          name: "Diego",
          route: "/pages/pet-profile",
          location: "São Paulo, São Paulo",
        },
        {
          image:
            "https://www.amigonaosecompra.com.br/unsafe/460x440/879dcc7a-6bf2-4bc9-8bcc-14aa468ff666/afdbd453-6124-43eb-bd4a-4c55092bd9ea/afdbd453-6124-43eb-bd4a-4c55092bd9ea.jpeg?v=63819950131",
          name: "Luiza",
          route: "/pages/pet-profile",
          location: "Rio de Janeiro, Rio de Janeiro",
        },
        {
          image:
            "https://www.amigonaosecompra.com.br/unsafe/460x440/879dcc7a-6bf2-4bc9-8bcc-14aa468ff666/079ef9e3-9822-41b2-92a1-ae7abdeba36d/079ef9e3-9822-41b2-92a1-ae7abdeba36d.jpeg?v=63819949997",
          name: "Bruna",
          route: "/pages/pet-profile",
          location: "São Paulo, São Paulo",
        },
      ],
    },
  ];

  const renderData = data.map(({ title, items }) => (
    <Grid container spacing={3} sx={{ mb: 10 }} key={title}>
      <Grid item xs={12} lg={12}>
        <Grid container spacing={3}>
          {items.map(({ image, name, route, location }) => (
            <Grid item xs={12} md={4} sx={{ mb: 2 }} key={name}>
              <Link to={route}>
                <Card image={image} name={name} location={location} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ));

  return (
    <MKBox component="section" my={6} py={6}>
      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
}

export default PetList;

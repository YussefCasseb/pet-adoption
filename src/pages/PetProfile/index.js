import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Card from "@mui/material/Card";

import MKBox from "components/MKBox";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

import Profile from "pages/PetProfile/sections/Profile";
import Contact from "pages/PetProfile/sections/Contact";

import bgImage from "assets/images/bg.jpg";

function PetProfile() {
  const { id } = useParams();
  const [perfil, setPerfil] = useState({
    id: "",
    nome: "",
    idade: "",
    genero: "",
    tipo: "",
    porte: "",
    descricao: "",
    cidade: "",
    imagens: [],
    vacinas: [],
  });

  useEffect(() => {
    fetch(`http://localhost:90/pet-adoption-backend/animal/perfil/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setPerfil(response);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <Navbar sticky />
      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Profile {...perfil} />
        </Card>
        <Contact {...perfil} />
        <Footer />
      </MKBox>
    </>
  );
}

export default PetProfile;

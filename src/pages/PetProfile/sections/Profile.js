import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "components/MKTypography";

function Profile(props) {
  // eslint-disable-next-line react/prop-types
  const { nome, idade, genero, tipo, porte, descricao, imagens } = props;

  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar
              // eslint-disable-next-line react/prop-types
              src={imagens.length > 0 ? imagens[0].img_url : ""}
              alt={nome}
              size="xxl"
              shadow="xl"
            />
          </MKBox>
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">{nome}</MKTypography>
              </MKBox>
              <Grid container mb={3}>
                <Grid item>
                  <MKTypography component="span" variant="body2" color="text">
                    {tipo} | {genero === "M" ? "Macho" : "Fêmea"} | {`${idade} Anos`} |{" "}
                    {`Porte ${porte}`}
                  </MKTypography>
                </Grid>
              </Grid>
              <MKTypography variant="body1" fontWeight="light" color="text">
                {descricao}
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;

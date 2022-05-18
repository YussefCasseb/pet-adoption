import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";

function DefaultFooter() {
  return (
    <MKBox component="footer">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sx={{ textAlign: "center", my: 3 }}>
            <MKTypography variant="button" fontWeight="regular">
              All rights reserved. Copyright &copy; {new Date().getFullYear()} Pet Adoption by{" "}
              <MKTypography
                component="a"
                href="https://github.com/YussefCasseb"
                target="_blank"
                rel="noreferrer"
                variant="button"
                fontWeight="regular"
              >
                Yussef Casseb
              </MKTypography>
              .
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default DefaultFooter;

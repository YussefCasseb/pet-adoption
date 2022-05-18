import MKBox from "components/MKBox";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

import Contact from "pages/PetRegister/sections/Contact";

import bgImage from "assets/images/bg.jpg";

function PetRegister() {
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
        <Contact />
        <Footer />
      </MKBox>
    </>
  );
}

export default PetRegister;

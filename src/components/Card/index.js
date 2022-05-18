import PropTypes from "prop-types";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Card({ image, name, location, ...rest }) {
  const imageTemplate = (
    <MKBox
      bgColor="white"
      borderRadius="xl"
      shadow="lg"
      minHeight="10rem"
      sx={{
        overflow: "hidden",
        transform: "perspective(999px) rotateX(0deg) translate3d(0, 0, 0)",
        transformOrigin: "50% 0",
        backfaceVisibility: "hidden",
        willChange: "transform, box-shadow",
        transition: "transform 200ms ease-out",

        "&:hover": {
          transform: "perspective(999px) rotateX(7deg) translate3d(0px, -4px, 5px)",
        },
      }}
      {...rest}
    >
      <MKBox component="img" src={image} alt={name} width="100%" my="auto" opacity={1} />
    </MKBox>
  );

  return (
    <MKBox position="relative">
      {imageTemplate}
      <MKBox mt={1} ml={1} lineHeight={1}>
        <MKTypography variant="h6" fontWeight="bold">
          {name}
        </MKTypography>
        <MKTypography variant="button" fontWeight="regular" color="secondary">
          {location}
        </MKTypography>
      </MKBox>
    </MKBox>
  );
}

Card.defaultProps = {
  name: "",
  location: "",
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string,
  location: PropTypes.string,
};

export default Card;

import PropTypes from "prop-types";

import Collapse from "@mui/material/Collapse";
import Icon from "@mui/material/Icon";

import MKBox from "components/MKBox";
import NavbarItem from "components/Navbar/NavbarItem";

function NavbarMobile({ open }) {
  return (
    <Collapse in={Boolean(open)} timeout="auto" unmountOnExit>
      <MKBox width="calc(100% + 1.625rem)" my={2} ml={-2}>
        <NavbarItem key="Inicio" name="Inicio" icon={<Icon>home</Icon>} route="/" />
        <NavbarItem
          key="Registrar Pet"
          name="Registrar Pet"
          icon={<Icon>article</Icon>}
          route="/pages/pet-register"
        />
      </MKBox>
    </Collapse>
  );
}

NavbarMobile.propTypes = {
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
};

export default NavbarMobile;

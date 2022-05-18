import Icon from "@mui/material/Icon";

import PetRegister from "pages/PetRegister";
import PetProfile from "pages/PetProfile";

const routes = [
  {
    name: "Registrar Pet",
    icon: <Icon>article</Icon>,
    route: "/pages/pet-register",
    component: <PetRegister />,
  },
  {
    name: "Pet Perfil",
    route: "/pages/pet-profile",
    component: <PetProfile />,
  },
];

export default routes;

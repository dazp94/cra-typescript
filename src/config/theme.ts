const WHITE = "white";
const BLACK = "black";

const base = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  padding: "20px",
  fontFamily: "Lato"
};

export const light = {
  ...base,
  background: WHITE,
  color: BLACK
};

export const dark = {
  ...base,
  background: BLACK,
  color: WHITE
};

const theme = { dark, light };

export default theme;

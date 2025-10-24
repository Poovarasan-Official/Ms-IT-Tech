import { Box } from "@mui/material";

export default function Logo() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        m: 1,
        maxWidth: { xs: 120, sm: 160, md: 184 }, // responsive widths
        "& img": {
          width: "100%",
          height: "auto",
        },
      }}
    >
      <img src="./BrandLogo.svg" alt="Brand Logo" />
    </Box>
  );
}

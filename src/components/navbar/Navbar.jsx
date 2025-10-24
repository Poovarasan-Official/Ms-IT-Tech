import { AppBar, Toolbar, Box, IconButton, Badge, Slide } from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import Logo from "../logo/Logo";
import NavMenu from "./NavMenu";
import MobileMenu from "./MobileMenu";
import MUIButton from "../button/MUIButton";

export default function Navbar() {
  return (
    <AppBar position="fixed" color="default" sx={{ boxShadow: "none" }}>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          boxShadow: "none",
          gap: { xs: 1, md: 2 },
          px: { xs: 1, md: 2 },
        }}
      >
        {/* Left: Logo + Mobile Menu */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <MobileMenu />
          <Logo />
        </Box>

        {/* Right: Nav + Icons + Button */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <NavMenu />
          </Box>

          <IconButton>
            <Badge
              badgeContent={2}
              color="error"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <LocalMallOutlinedIcon />
            </Badge>
          </IconButton>
          <MUIButton
            variant="contained"
            sx={{ width: "126px", height: "42px" }}
          >
            Login
          </MUIButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

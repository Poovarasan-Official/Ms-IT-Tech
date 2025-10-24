import { useState } from "react";
import { Button, Stack, Menu, MenuItem, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const navItems = ["Home", "Category", "About Us", "Contact"];
const categoryItems = ["ListItems", "Clothing", "Accessories"];

export default function NavMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => setAnchorEl(event.currentTarget);
  const handleCloseMenu = () => setAnchorEl(null);

  return (
    <Stack direction="row" spacing={2}>
      {navItems.map((item) =>
        item === "Category" ? (
          <div key={item}>
            <Button
              color="inherit"
              endIcon={<KeyboardArrowDownIcon />}
              onClick={handleOpenMenu}
              sx={{
                fontWeight: 600,
                textTransform: "none",
                "&:hover": { color: "primary.main" },
              }}
            >
              {item}
            </Button>

            {/* Dropdown Menu */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
            >
              {categoryItems.map((cat) => (
                <MenuItem key={cat} onClick={handleCloseMenu}>
                  <Typography>{cat}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </div>
        ) : (
          <Button
            key={item}
            color="inherit"
            sx={{
              fontWeight: 600,
              textTransform: "none",
              "&:hover": { color: "primary.main" },
            }}
          >
            {item}
          </Button>
        )
      )}
    </Stack>
  );
}

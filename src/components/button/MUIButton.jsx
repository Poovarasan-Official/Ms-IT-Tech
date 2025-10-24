import { Button } from "@mui/material";

export default function MUIButton({
  children,
  variant = "contained",
  color = "primary",
  onClick,
  sx = {},
  ...props
}) {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      sx={{
        textTransform: "none",
        borderRadius: 2,
        fontWeight: 600,
        px: 2.5,
        py: 1,
        boxShadow: "none",
        "&:hover": {
          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        },
        ...sx, // allow overrides from parent
      }}
      {...props}
    >
      {children}
    </Button>
  );
}

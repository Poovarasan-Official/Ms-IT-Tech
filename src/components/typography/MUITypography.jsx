import { Typography } from "@mui/material";

export default function MUITypography({
  children,
  variant = "body1", // default variant
  color = "textPrimary",
  fontWeight,
  align,
  sx = {},
  ...props
}) {
  // Define responsive font sizes using clamp (example)
  const fontSizes = {
    h1: "clamp(2rem, 5vw, 3.5rem)",
    h2: "clamp(1.75rem, 4.5vw, 2.5rem)",
    h3: "clamp(1.5rem, 4vw, 2rem)",
    h4: "clamp(1.25rem, 3.5vw, 1.75rem)",
    h5: "clamp(1rem, 3vw, 1.5rem)",
    h6: "clamp(0.875rem, 2.5vw, 1.25rem)",
    body1: "clamp(0.875rem, 2vw, 1rem)",
    body2: "clamp(0.75rem, 1.8vw, 0.875rem)",
    caption: "clamp(0.625rem, 1.5vw, 0.75rem)",
  };

  return (
    <Typography
      variant={variant}
      color={color}
      align={align}
      sx={{
        fontWeight: fontWeight,
        fontSize: fontSizes[variant] || "1rem",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
}

import { Box, Grid, Typography, Link } from "@mui/material";
import ServiceScrollSection from "./ServiceScrollSection";

export default function BookedServices() {
  return (
    <Box
      component="section"
      sx={{
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 4, md: 12 },
      }}
    >
      <Grid container alignItems="center" justifyContent="space-between">
        {/* Left Title */}
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h5"
            fontWeight={700}
            sx={{
              fontSize: { xs: "1.25rem", md: "1.75rem" },
              color: "#111",
            }}
          >
            Most Booked Service
          </Typography>
        </Grid>

        {/* Right Link */}
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            justifyContent: { xs: "flex-start", sm: "flex-end" },
            mt: { xs: 1, sm: 0 },
          }}
        >
          <Link
            href="#"
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              fontWeight: 600,
              fontSize: { xs: "0.95rem", md: "1rem" },
              color: "#007AFF",
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            See all
          </Link>
        </Grid>
      </Grid>
      <ServiceScrollSection />
    </Box>
  );
}

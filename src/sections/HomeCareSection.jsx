import { Box, Grid, Typography } from "@mui/material";
import MUIButton from "../components/button/MUIButton";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import ServiceCardsSection from "./ServiceCardsSection";

export default function HomeCareSection() {
  return (
    <Box
      component="section"
      sx={{
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 4, md: 12 },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AutoAwesomeOutlinedIcon />

        <MUIButton
          variant="outlined"
          sx={{
            color: "#111", // Text color
            borderColor: "#111", // Outline color
            borderRadius: 8,
            m: 2,
            "&:hover": {
              borderColor: "#111", // Keep border black on hover
              backgroundColor: "transparent", // Optional: prevent hover bg color
            },
          }}
        >
          Our Service
        </MUIButton>
      </Box>

      <Grid container spacing={4} alignItems="flex-start">
        {/* Column 1: Title */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="h3"
            fontWeight={700}
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              lineHeight: 1.2,
            }}
          >
            Home care
            <br /> essentials
          </Typography>
        </Grid>

        {/* Column 2: Description */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
              lineHeight: 1.7,
              color: "#181818",
              maxWidth: 520, 
            }}
          >
            Explore Space home care essentials — expert cleaning, plumbing, AC
            maintenance, painting, and more. Fast, reliable doorstep service.
          </Typography>
        </Grid>
      </Grid>
      <ServiceCardsSection />
    </Box>
  );
}

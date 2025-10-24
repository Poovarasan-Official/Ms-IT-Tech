import { Box, Grid } from "@mui/material";
import MUITypography from "../components/typography/MUITypography";
import ImageGridSection from "./ImageGridSection";

export default function HeroSection() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 12 }}>
          <Box
            sx={{
              marginTop: { xs: 3, md: 7 },
              position: "relative",
              height: { xs: "300px", md: "433px" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 1,
              }}
            />

            {/* Main text content */}
            <Box
              sx={{
                position: "relative",
                zIndex: 2,
                px: { xs: 2, md: 4 },
                mt: { xs: 2, md: 3 },
              }}
            >
              <MUITypography
                variant="h1"
                fontWeight={600}
                sx={{ fontSize: { xs: "2rem", md: "6rem" } }}
              >
                Home Experts at
                <br />
                {/* Image Icon replacing emoji */}
                <Box
                  component="span"
                  sx={{ display: "inline-flex", alignItems: "center", gap: 2 }}
                >
                  Your
                  {/* Icon placed after "Your" */}
                  <Box
                    component="img"
                    src="/house.svg" // replace with your icon path
                    sx={{
                      width: { xs: 28, md: 54 },
                      height: "auto",
                    }}
                  />
                  Door
                </Box>
              </MUITypography>
              <MUITypography
                variant="body1"
                sx={{ fontSize: { xs: "0.9rem", md: "1.25rem" }, mt: 1 }}
              >
                Expert home services, delivered to your doorstep - get reliable
                handyman solution
                <br />
                with ease. Fast, professional, and tailored to your needs.
              </MUITypography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <ImageGridSection />
    </Box>
  );
}

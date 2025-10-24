import React from "react";
import { Box, Grid, Card, CardMedia, Typography } from "@mui/material";

// Import local images (place your images inside /src/assets/)
import KitchenImg from "../assets/kitchen.png";
import BathroomImg from "../assets/bathroom.png";
import CleaningImg from "../assets/cleaning.png";
import HomeImg from "../assets/home S.png";

const services = [
  { title: "Cleaning Services", img: CleaningImg },
  { title: "Kitchen Services", img: KitchenImg },
  { title: "Bathroom Services", img: BathroomImg },
  { title: "Home Services", img: HomeImg },
];

export default function ServiceCardsSection() {
  return (
      <Grid container spacing={2} justifyContent="center">
        {services.map((service, index) => (
          <Grid size={{ xs: 12, sm:6, md: 3 }} key={index}>
            <Card
              sx={{
                boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
                borderRadius: 3,
                overflow: "hidden",
                textAlign: "center",
                p: 2,
                mt:6
              }}
            >
              {/* Title at the top */}
              <Typography
                variant="h6"
                fontWeight={600}
                sx={{
                  mb: 2,
                  fontSize: { xs: "1rem", md: "1.125rem" },
                  color: "#111",
                }}
              >
                {service.title}
              </Typography>

              {/* Image */}
              <CardMedia
                component="img"
                image={service.img}
                alt={service.title}
                sx={{
                  width: "100%",
                  height: { xs: 200, sm: 230, md: 257 }, // responsive height
                  objectFit: "cover",
                  borderRadius: 2,
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
   
  );
}

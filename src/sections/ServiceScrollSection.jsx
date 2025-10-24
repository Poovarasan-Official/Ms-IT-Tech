import React, { useRef, useEffect, useState } from "react";
import { Box, Card, CardMedia, IconButton } from "@mui/material";
import Rating from "@mui/material/Rating";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { getRequest } from "/src/api/makeApiCall";
import MUITypography from "../components/typography/MUITypography";

export default function ServiceScrollSection() {
  const scrollRef = useRef(null);
  const [services, setServices] = useState([]);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -260, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 260, behavior: "smooth" });
  };

  useEffect(() => {
    async function fetchServices() {
      try {
        const data = await getRequest("/services"); // endpoint from db.json
        setServices(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchServices();
  }, []);

  return (
    <Box sx={{ mt: 6, position: "relative" }}>
      {/* Left Scroll Button */}
      <IconButton
        onClick={scrollLeft}
        sx={{
          position: "absolute",
          top: "50%",
          left: -8,
          transform: "translateY(-50%)",
          bgcolor: "#fff",
          boxShadow: 1,
          zIndex: 2,
          "&:hover": { bgcolor: "#eee" },
          display: { xs: "none", sm: "flex" }, // Hide on small mobile
        }}
      >
        <ChevronLeft sx={{ color: "black" }} />
      </IconButton>

      {/* Scroll Row */}
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          scrollBehavior: "smooth",
          pb: 1,
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {services.map((service, index) => (
          <Card
            key={index}
            sx={{
              minWidth: 260,
              borderRadius: 3,
              boxShadow: "0 0 8px rgba(41, 40, 40, 0.4)",
              flexShrink: 0,
            }}
          >
            <CardMedia
              component="img"
              height="180"
              image={service.img}
              alt={service.title}
              sx={{ objectFit: "cover", borderRadius: 4 }}
            />

            <Box sx={{ p: 2 }}>
              <MUITypography fontWeight={600} fontSize="1rem" mb={0.5}>
                {service.title}
              </MUITypography>

              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
              >
                <Rating
                  value={service.rating}
                  precision={0.1}
                  readOnly
                  size="small"
                />
                <MUITypography variant="body2" color="text.secondary">
                  {service.rating}
                </MUITypography>
              </Box>
              <MUITypography variant="body2" sx={{ color: "grey", mt: 2 }}>
                starts at
              </MUITypography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <MUITypography
                  variant="body2"
                  sx={{ textDecoration: "line-through", color: "#111" }}
                >
                  ₹{service.oldPrice}
                </MUITypography>
                <MUITypography fontWeight={600} fontSize="1rem" color="primary">
                  ₹{service.price}
                </MUITypography>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>

      {/* Right Scroll Button */}
      <IconButton
        onClick={scrollRight}
        sx={{
          position: "absolute",
          top: "50%",
          right: -8,
          transform: "translateY(-50%)",
          bgcolor: "#fff",
          boxShadow: 1,
          zIndex: 2,
          "&:hover": { bgcolor: "#eee" },
          display: { xs: "none", sm: "flex" }, // Hide on small mobile
        }}
      >
        <ChevronRight sx={{ color: "black" }} />
      </IconButton>
    </Box>
  );
}

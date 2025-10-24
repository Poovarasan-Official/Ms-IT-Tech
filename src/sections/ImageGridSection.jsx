import { Box, Grid, Card, CardMedia, Typography } from "@mui/material";

import Rect1 from "../assets/Rectangle 1.png";
import Rect2 from "../assets/Rectangle 2.png";
import Rect3 from "../assets/Group 3.png";
import Rect4 from "../assets/Rectangle 4.png";

const cards = [
  { img: Rect1, title: ["Skilled Experts,", "Reliable Service"], height: 387 },
  { img: Rect2, title: ["Fast Booking", "Instant Help"], height: 247 },
  { img: Rect3, title: [""], height: 124 },
  { img: Rect4, title: ["Safe, Easy,", "On-Demand"], height: 387 },
];

export default function ImageGridSection() {
  return (
    <Box component="section" sx={{ px: { xs: 2, md: 3 }, py: { xs: 4} }}>
      <Grid container spacing={2} alignItems="flex-start">
        {/* Column 1: Card 1 */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ position: "relative", overflow: "hidden", height: { xs: 200, md: 387 } }}>
            <CardMedia
              component="img"
              image={cards[0].img}
              alt={cards[0].title.join(" ")}
              sx={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 2 }}
            />
            <Box sx={{ position: "absolute", bottom: 0, width: "100%", color: "#fff", px: 2, py: 1 }}>
              {cards[0].title.map((line, idx) => (
                <Typography key={idx} variant="h6" fontWeight={600}>
                  {line}
                </Typography>
              ))}
            </Box>
          </Card>
        </Grid>

        {/* Column 2: Card 2 & 3 stacked */}
        <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {[cards[1], cards[2]].map((card, idx) => (
            <Card key={idx} sx={{ position: "relative", overflow: "hidden", height: { xs: 150, md: card.height } }}>
              <CardMedia
                component="img"
                image={card.img}
                alt={card.title.join(" ")}
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <Box sx={{ position: "absolute", bottom: 0, width: "100%", color: "#fff", px: 2, py: 0.5 }}>
                {card.title.map((line, idx) => (
                  <Typography key={idx} variant="subtitle1" fontWeight={600}>
                    {line}
                  </Typography>
                ))}
              </Box>
            </Card>
          ))}
        </Grid>

        {/* Column 3: Card 4 */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ position: "relative", overflow: "hidden", height: { xs: 200, md: 387 } }}>
            <CardMedia
              component="img"
              image={cards[3].img}
              alt={cards[3].title.join(" ")}
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <Box sx={{ position: "absolute", bottom: 0, width: "100%", color: "#fff", px: 2, py: 1 }}>
              {cards[3].title.map((line, idx) => (
                <Typography key={idx} variant="h6" fontWeight={600}>
                  {line}
                </Typography>
              ))}
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

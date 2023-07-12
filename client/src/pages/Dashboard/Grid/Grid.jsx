import React from "react";
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";

const GridComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        ml: "240px",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          width: "70%",
          minHeight: "50vh",
          margin: "0 auto",
          justifyContent: "center",
          "@media (max-width: 600px)": {
            width: "100%",
          },
          "& > *": {
            minWidth: "20em", // Set a minimum width for grid items
          },
        }}
      >
        {/* Grid items */}
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: "12px",
              backgroundColor: "#fdec8d",
            }}
          >
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="button">Events</Typography>
              <Typography variant="body1" sx={{ fontSize: "16px" }}>
                Search for fun local events and meet new friends
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: "12px",
              backgroundColor: "#ffd7e1",
            }}
          >
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="h6">Schedule a playdate</Typography>
              <Typography variant="body2">
                Plan your next playdate with new friends!
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: "12px",
              backgroundColor: "#d0e6ff",
            }}
          >
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="h6">Learning Resources</Typography>
              <Typography variant="body2">
                Find out how to play safe with other dogs and more
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: "12px",
              backgroundColor: "#d5ebb3",
            }}
          >
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="h6">News</Typography>
              <Typography variant="body2">
                Keep up to date with the latest in dog news
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GridComponent;

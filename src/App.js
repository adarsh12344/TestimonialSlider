import React from "react";
import Testimonials from "./Testimonials";
import reviews from "./data";
import { Box, Typography } from "@mui/material";

const App = () => {
  return (
    <Box textAlign="center" mt={5}>
      <Typography variant="h3" component="h1" gutterBottom>
        Our Testimonials
      </Typography>
      <Testimonials reviews={reviews} />
    </Box>
  );
};

export default App;

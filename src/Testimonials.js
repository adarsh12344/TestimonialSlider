import React, { useState, useEffect } from "react";
import Card from "./Card";
import { Box, Button } from "@mui/material";

function Testimonials({ reviews }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 2000); // Slide every 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [index]);

  function handleNext() {
    let newIndex = index + 1;
    if (newIndex > reviews.length - 1) {
      newIndex = 0;
    }
    setIndex(newIndex);
  }

  function handlePrev() {
    let newIndex = index - 1;
    if (newIndex < 0) {
      newIndex = reviews.length - 1;
    }
    setIndex(newIndex);
  }

  function handleSurpriseMe() {
    let newIndex = Math.floor(Math.random() * reviews.length);
    if (newIndex === index) {
      newIndex = (index + 1) % reviews.length;
    }
    setIndex(newIndex);
  }

  return (
    <Box mt={4}>
      <Card review={reviews[index]} />
      <Box display="flex" justifyContent="center" mt={2}>
        <Button variant="contained" color="primary" onClick={handlePrev}>
          {"<"}
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          sx={{ ml: 2 }}
        >
          {">"}
        </Button>
      </Box>
      <Box mt={2}>
        <Button variant="outlined" onClick={handleSurpriseMe}>
          Surprise Me
        </Button>
      </Box>
    </Box>
  );
}

export default Testimonials;

import React from "react";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
import { Box, Typography, Avatar, Paper } from "@mui/material";

function Card({ review }) {
  return (
    <Paper
      elevation={3}
      sx={{ p: 3, maxWidth: 600, maxheight: 200, mx: "auto" }}
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box
          sx={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <Avatar
            src={review.image}
            alt={review.name}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />{" "}
        </Box>
        <Typography variant="h6" component="p" sx={{ mt: 2 }}>
          {review.name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {review.job}
        </Typography>
        <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
          <FaQuoteLeft size={30} />
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              mb: 2,
              fontStyle: "initial",
              textAlign: "center",
              maxWidth: "80%",
            }}
          >
            {review.text}
          </Typography>
          <FaQuoteRight size={30} />
        </Box>
      </Box>
    </Paper>
  );
}

export default Card;

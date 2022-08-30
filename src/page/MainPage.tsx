import { Paper, Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import CountUp from "react-countup";
import { useNavigate } from "react-router";

export const MainPage = () => {
  const navigation = useNavigate();
  return (
    <Box
      sx={(theme) => ({
        mt: 5,
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
      })}
    >
      <Box
        sx={{
          display: "flex",
          flexFlow: "column",

          mb: 5,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CountUp start={100} end={1000000000} duration={2} />
        </Typography>
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          총 환불금액
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-evenly",
          mb: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexFlow: "column",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CountUp start={100} end={100 + 100} duration={2} />
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            구글스토어 환불금액
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexFlow: "column",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CountUp start={100} end={100 + 100} duration={2} />
          </Typography>
          <Typography
            sx={{
              display: "flex",
              flexFlow: "column",
            }}
          >
            애플스토어 환불금액
          </Typography>
        </Box>
      </Box>

      <Button
        variant="contained"
        onClick={() => {
          navigation("/submit-repayment");
        }}
        size="large"
      >
        환불런 동참
      </Button>
    </Box>
  );
};

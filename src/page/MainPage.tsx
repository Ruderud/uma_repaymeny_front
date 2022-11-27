import { styled } from "@mui/system";
import { Paper, Box, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useNavigate } from "react-router";
import KAKAO_TALK_ICON from "../icons/kakaoTalkIcon.svg";
import axiosInstance from "../query/axiosInstance";

export const MainPage = () => {
  const navigation = useNavigate();
  const [repayment, setRepayment] = useState({
    total: 0,
    apple: 0,
    google: 0,
  });

  const test = async () => {
    try {
      const { data } = await axiosInstance().get("/uma-repayment");

      setRepayment({
        total: data.total,
        apple: data.apple,
        google: data.google,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    test();
  }, []);

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
          <CountUp end={repayment.total} duration={2} />
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
            variant="h4"
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CountUp end={repayment.google} duration={2} />
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
            variant="h4"
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CountUp end={repayment.apple} duration={2} />
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

      <SignInByKakaoTalk
        href={`${import.meta.env.VITE_APP_BASEURL}/oauth/kakao`}
      >
        <img src={KAKAO_TALK_ICON} alt="kakaoIcon" />
        <SignInByKakaoTalkText>
          카카오 로그인 후 환불런 동참 (주작방지)
        </SignInByKakaoTalkText>
      </SignInByKakaoTalk>
    </Box>
  );
};

const SignInByKakaoTalk = styled("a")(({ theme }) => ({
  display: "flex",
  backgroundColor: "#F7E600",
  textDecoration: "none",
  color: "#000000",
  borderRadius: theme.spacing(1),
  height: theme.spacing(5),
  alignItems: "center",
  fontWeight: "bold",
  position: "relative",
  width: "auto",

  "& > img": {
    width: theme.spacing(4),
    marginLeft: theme.spacing(0.5),
  },
}));

const SignInByKakaoTalkText = styled("div")(({ theme }) => ({
  // position: "absolute",
  // display: "flex",
  // left: "50%",
  width: theme.spacing(18),
  // transform: "translate(-50%,0%)",
}));

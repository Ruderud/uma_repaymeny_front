import {
  Paper,
  Button,
  Box,
  Typography,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { useNavigate } from "react-router";
import { postRepayment } from "../query/postRepayment";
import { getCookieValue } from "../utils/handleCookieValue";

export const SubmitRepaymentPage = () => {
  const navigation = useNavigate();
  const [checkGoogle, setCheckGoogle] = useState<boolean>(false);
  const [checkApple, setCheckApple] = useState<boolean>(false);

  const [googleAmount, setGoogleAmount] = useState("");
  const [appleAmount, setAppleAmount] = useState("");

  const { enqueueSnackbar } = useSnackbar();

  return (
    <Paper
      elevation={5}
      sx={{
        p: 3,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          display: "flex",
          justifyContent: "center",
          fontWeight: "bold",
          mb: 3,
        }}
      >
        환불신청내역 보내기
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexFlow: "column",
        }}
      >
        <Box>
          <FormControlLabel
            label="구글스토어"
            control={
              <Checkbox
                checked={checkGoogle}
                onChange={() => {
                  setCheckGoogle(!checkGoogle);
                }}
              />
            }
          />
          {checkGoogle ? (
            <FormControl sx={{ m: 1 }}>
              <OutlinedInput
                value={googleAmount}
                onChange={(e) => {
                  setGoogleAmount(e.target.value);
                }}
                startAdornment={
                  <InputAdornment position="start">₩</InputAdornment>
                }
              />
            </FormControl>
          ) : null}
        </Box>
        <Box>
          <FormControlLabel
            label="애플스토어"
            control={
              <Checkbox
                checked={checkApple}
                onChange={() => {
                  setCheckApple(!checkApple);
                }}
              />
            }
          />
          {checkApple ? (
            <FormControl sx={{ m: 1 }}>
              <OutlinedInput
                value={appleAmount}
                onChange={(e) => {
                  setAppleAmount(e.target.value);
                }}
                startAdornment={
                  <InputAdornment position="start">₩</InputAdornment>
                }
              />
            </FormControl>
          ) : null}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-evenly",
          pt: 5,
        }}
      >
        <Button
          variant="contained"
          onClick={() => {
            navigation("/");
          }}
          size="large"
          color="error"
        >
          뒤로가기
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            const accessToken = getCookieValue("accessToken");
            if (accessToken === undefined) {
              enqueueSnackbar("로그인 후 사용해 주세요.", {
                variant: "warning",
              });
              return;
            }

            if (isNaN(Number(googleAmount)) || isNaN(Number(appleAmount))) {
              enqueueSnackbar("숫자만 입력해야합니다.", {
                variant: "warning",
              });
              return;
            }

            postRepayment({
              token: accessToken,
              googleAmount,
              appleAmount,
            });
            enqueueSnackbar("정상적으로 제출되었습니다!", {
              variant: "success",
            });
          }}
          size="large"
        >
          제출하기
        </Button>
      </Box>
    </Paper>
  );
};

export default SubmitRepaymentPage;

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
import { useState } from "react";
import { useNavigate } from "react-router";

export const SubmitRepaymentPage = () => {
  const navigation = useNavigate();
  const [checkGoogle, setCheckGoogle] = useState<boolean>(false);
  const [checkApple, setCheckApple] = useState<boolean>(false);
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
                id="outlined-adornment-amount"
                // value={values.amount}
                // onChange={handleChange("amount")}
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
                id="outlined-adornment-amount"
                // value={values.amount}
                // onChange={handleChange("amount")}
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
        <Button variant="contained" onClick={() => {}} size="large">
          제출하기
        </Button>
      </Box>
    </Paper>
  );
};

export default SubmitRepaymentPage;

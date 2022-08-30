import { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { styled } from "@mui/system";
import { CircularProgress, Modal, Typography } from "@mui/material";

import { getCookieValue, saveValuesToCookie } from "../utils/handleCookieValue";
import { useGetUserProfileQuery, usePostAuthCodeQuery } from "../query/Auth";
import { RootContext } from "../hook/context/RootContext";

export const OauthPage = (): JSX.Element => {
  const navigation = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { setRootContext } = useContext(RootContext);
  const [accessToken, setAccessToken] = useState<string | undefined>(
    getCookieValue("accessToken")
  );

  const authCodeQuery = usePostAuthCodeQuery(
    searchParams.get("code") || undefined
  );
  const userProfileQuery = useGetUserProfileQuery(accessToken);

  useEffect(() => {
    if (authCodeQuery.status !== "success") return;
    saveValuesToCookie({
      accessToken: authCodeQuery.data.accessToken,
      refreshToken: authCodeQuery.data.refreshToken,
    });
    setAccessToken(authCodeQuery.data.accessToken);
  }, [authCodeQuery.data, authCodeQuery.status]);

  useEffect(() => {
    if (userProfileQuery.status !== "success") return;
    setRootContext({
      userId: userProfileQuery.data.userId,
    });
    navigation("/submit-repayment");
  }, [userProfileQuery.data, userProfileQuery.status]);

  return (
    <Modal open={true}>
      <ModalContainer>
        <Typography variant="h6" component="h2">
          카카오계정 확인 중...
        </Typography>
        <Typography
          variant="h6"
          component="h2"
          sx={{
            mb: 2,
          }}
        >
          잠시만 기다려주세요
        </Typography>
        <CircularProgress />
      </ModalContainer>
    </Modal>
  );
};

const ModalContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  backgroundColor: "#ffffff",
  border: `2px solid black`,
  padding: theme.spacing(2, 4, 3, 4),
}));

export default OauthPage;

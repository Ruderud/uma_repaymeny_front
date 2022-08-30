import { Route, Routes } from "react-router-dom";

import { MainPage } from "./page/MainPage";
import OauthPage from "./page/OauthPage";
import { SubmitRepaymentPage } from "./page/SubmitRepaymentPage";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/submit-repayment" element={<SubmitRepaymentPage />} />
        <Route path="/oauth" element={<OauthPage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </>
  );
};

export default App;

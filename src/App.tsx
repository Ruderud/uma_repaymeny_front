import { Route, Routes } from "react-router-dom";

import { MainPage } from "./page/MainPage";
import { SubmitRepaymentPage } from "./page/SubmitRepaymentPage";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<MainPage />} />
        <Route path="submit-repayment" element={<SubmitRepaymentPage />} />
      </Routes>
    </>
  );
};

export default App;

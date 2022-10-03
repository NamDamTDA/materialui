import * as React from "react";
import DefaultFooter from "./components/Footer/Footer";
import Footer from "./components/Footer/Footer";
import MKBox from "./components/MKBox";
import Navbar from "./components/Navbar/Navbar";
import StyleTest from "./components/Style/StyleTest";
import footerRoutes from "./footer.routes";
function App() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <StyleTest/> */}
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </div>
  );
}
export default App;

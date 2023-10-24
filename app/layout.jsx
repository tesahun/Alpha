import Footer from "@components/Footer";
import Navbar from "@components/Navbar";

import "@styles/global.css";

export const metadata = {
  title: "Hawassa Haike poly meduim clinic ",
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  description: "Clinic in Hawassa",
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;

import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ScrollToTop from "../../../utilities/ScrollToTop";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";
import ExpandYourHorizons from "../ExpandYourHorizons/ExpandYourHorizons";
import Topbar from "../Navbar/TopBar";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Topbar></Topbar>

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          // exit="exit"
          transition={{ duration: 1 }}
        >
          <Navbar />
          <WhatsAppButton />
          <Outlet />
          <ExpandYourHorizons />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Layout;

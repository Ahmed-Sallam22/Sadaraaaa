import { useBlogStore } from "./store/blogStore";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/common/Layout/Layout";
import Home from "./pages/Home/Home";
import BlogDetails from "./pages/Blog/BlogDetails";
import BlogsPage from "./pages/Blog/BlogsPage";
import Contact from "./pages/contact/Contact";
import FAQSection from "./pages/Faq/Faq";
import EstablishCompany from "./pages/EstablishCompany/EstablishCompany";
import LicensesInvestment from "./pages/LicensesInvestment/LicensesInvestment";
import Service from "./pages/Service/Service";
import AccountingServices from "./pages/AccountingServices/AccountingServices";
import DisclaimerPage from "./pages/Disclaimer/Disclaimer";
import CopyrightPage from "./pages/Copyright/CopyrightPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicy/PrivacyPolicyPage";
import Career from "./pages/Career/Career";
import Comment from "./pages/Comment/Comment";
import MinistryInvestment from "./pages/MinistryInvestment/MinistryInvestment";
import MinistryDevelopment from "./pages/MinistryDevelopment/MinistryDevelopment";
import MechanicalServicesPage from "./components/MechanicalServices/MechanicalServicesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "blog/:id", element: <BlogDetails /> },
      { path: "blog", element: <BlogsPage /> },
      { path: "contact", element: <Contact /> },
      { path: "AccountingServices", element: <AccountingServices /> },
      { path: "Disclaimer", element: <DisclaimerPage /> },
      { path: "Career", element: <Career /> },
      { path: "PrivacyPolicy", element: <PrivacyPolicyPage /> },
      { path: "Copyright", element: <CopyrightPage /> },
      { path: "Comment", element: <Comment /> },
      { path: "MinistryDevelopment", element: <MinistryDevelopment /> },
      { path: "MinistryInvestment", element: <MinistryInvestment /> },
      { path: "services", element: <Service /> },
      { path: "faq", element: <FAQSection /> },
      { path: "establish-company", element: <EstablishCompany /> },
      { path: "Maintenance-Services", element: <MechanicalServicesPage /> },
      { path: "licenses-and-investment", element: <LicensesInvestment /> },
    ],
  },
]);

function App() {
  const { i18n } = useTranslation();
  const fetchPosts = useBlogStore((state) => state.fetchPosts);

  useEffect(() => {
    const direction = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", direction);
  }, [i18n.language]);

  useEffect(() => {
    const lang = i18n.language === "ar" ? "ar" : "en";
    fetchPosts(lang);
  }, [i18n.language, fetchPosts]); // لما تتغير اللغة

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

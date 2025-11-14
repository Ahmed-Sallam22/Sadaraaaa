import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo2 from "../../../assets/Sadara_Business_Services_page-0001__1_-removebg-preview.png";

const Navbar = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const navItems = [
    {
      label: t("companyFormation"),
      submenu: [
        { label: t("MaintenanceServices"), to: "/Maintenance-Services" },
      ],
    },
    {
      label: t("trackingServices"),
      to: "/Comment",
      submenu: [
        { label: t("establishCompany"), to: "/establish-company" },
        { label: t("licenseRenewal"), to: "/AccountingServices" },
      ],
    },
    {
      label: t("investmentLicense"),
      to: "/licenses-and-investment",
    },
    {
      label: t("ourServices"),
      to: "/services",
    },
    {
      label: t("blog"),
      to: "/blog",
    },
    {
      label: t("faq"),
      to: "/faq",
    },
    {
      label: t("contactUs"),
      to: "/contact",
    },
  ];

  return (
    <>
      <nav className=" border-gray-200  w-full  border-b ">
        <div className="  flex items-center justify-between w-[90%] mx-auto  px-4 md:px-8">
          <Link to="/">
            <img
              src={Logo2}
              alt="Logo"
              className="w-full h-22 object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center lg:gap-x-10 gap-x-6">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => item.submenu && setOpenDropdown(index)}
                onMouseLeave={() => item.submenu && setOpenDropdown(null)}
              >
                {item.submenu ? (
                  <>
                    {item.to ? (
                      <Link
                        to={item.to}
                        className="flex items-center gap-1 cursor-pointer text-[#111111] hover:text-[#f7941d] transition"
                      >
                        {item.label}
                        <svg
                          className="w-4 h-4 mt-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </Link>
                    ) : (
                      <span className="flex items-center gap-1 cursor-default text-[#111111]">
                        {item.label}
                        <svg
                          className="w-4 h-4 mt-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    )}

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-[98%] right-0 flex-col bg-white text-[#111111] text-center rounded-md py-2 min-w-[300px] z-30 shadow-lg ${
                        openDropdown === index ? "flex" : "hidden"
                      }`}
                      onMouseEnter={() => setOpenDropdown(index)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.to}
                          className="block px-4 py-2 hover:text-[#f7941d] transition"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `hover:text-[#f7941d] transition ${
                        isActive ? "font-bold text-[#f7941d]" : "text-[#111111]"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}
          </div>

          <div></div>
          {/* Mobile - Hamburger / Close */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleMenu}
              className="text-[#00246E]"
              aria-label="Toggle Menu"
            >
              {menuOpen ? (
                // Close icon
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00246E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00246E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white px-6 py-4 flex flex-col gap-2 border-t border-gray-200">
            {navItems.map((item, index) => (
              <div key={index} className="flex flex-col">
                {item.submenu ? (
                  <details className="group">
                    <summary className="flex justify-between items-center py-2 cursor-pointer text-[#00246E] hover:text-[#00B0FB] text-lg ">
                      {item.label}
                      <svg
                        className="w-4 h-4 transform group-open:rotate-180 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <div className="flex flex-col pl-4 mt-2 gap-2">
                      {item.submenu.map((subItem, subIndex) => (
                        <NavLink
                          key={subIndex}
                          to={subItem.to}
                          onClick={() => setMenuOpen(false)} // Close menu when link clicked
                          className={({ isActive }) =>
                            `flex items-center gap-2 px-2 py-2  rounded-md transition hover:bg-[#EBF9FF] hover:text-[#00B0FB] ${
                              isActive ? "text-[#00B0FB]" : "text-[#00246E]"
                            }`
                          }
                        >
                          {subItem.label}
                        </NavLink>
                      ))}
                    </div>
                  </details>
                ) : (
                  <NavLink
                    to={item.to}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-2 text-lg transition hover:text-[#00B0FB] ${
                        isActive ? "font-bold text-[#00B0FB]" : "text-[#00246E]"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

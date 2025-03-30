import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

let navigation = [
  { name: "Home", to: "/home", current: true },
  {
    name: "Our Services",
    current: false,
    children: [
      {
        name: "Revenue Base Financing",
        to: "/services/revenue",
        current: false,
      },
      { name: "Finance Management", to: "/services/finance", current: false },
      {
        name: "Digital Transformation",
        to: "/services/digital",
        current: false,
      },
    ],
  },
  { name: "About Us", to: "/about", current: false },
  { name: "Contact Us", to: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  let [user, setUser] = useState("");
  let [img,setImg]=useState(null);
  let handleNavigationClick = (name) => {
    navigation = navigation.map((item) =>
      item.name === name
        ? { ...item, current: true }
        : { ...item, current: false }
    );
  };
  let handleLogout=()=>{
    sessionStorage.removeItem("user");
    setUser(null);
  }
  useEffect(() => {
    try {
      const data = sessionStorage.getItem("user");
      if (data) {
        const parsedData = JSON.parse(data);
        if (parsedData.username) {
          setUser(parsedData.username);
        }
        if(parsedData.image){
          setImg(parsedData.image);
        }
      }
    } catch (e) {
      console.error("Error parsing user data:", e);
      sessionStorage.removeItem("user");
    }
  }, []);
  return (
    <Disclosure
      as="nav"
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-900 dark:to-black lg:px-2"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-3">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link to={"/"}>
                <img
                  alt="Your Company"
                  src="/image/LogoText.png"
                  className="h-9 w-30 pl-2 cursor-pointer"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item, idx) =>
                  item.children ? (
                    <Menu as="div" key={idx} className="relative">
                      <MenuButton
                        className={`${
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        } rounded-md px-3 py-2 text-sm font-medium`}
                      >
                        {item.name}
                      </MenuButton>
                      <MenuItems
                        transition
                        className="absolute left-0 z-10 mt-2 bg-gray-900 w-48 origin-top-left rounded-md py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                      >
                        {item.children.map((child, childIdx) => (
                          <MenuItem key={childIdx}>
                            <Link
                              to={child.to}
                              className="block px-4 py-2 text-sm text-white data-focus:bg-gray-800 data-focus:outline-hidden"
                            >
                              {child.name}
                            </Link>
                          </MenuItem>
                        ))}
                      </MenuItems>
                    </Menu>
                  ) : (
                    <Link
                      to={item.to}
                      key={idx}
                      aria-current={item.current ? "page" : undefined}
                      className={`
                        
                     text-gray-300 hover:bg-gray-700 hover:text-white
                      rounded-md px-3 py-2 text-sm font-medium`}
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>

            {/* Profile dropdown */}
            {user ? (
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt="ProImage"
                      src={img}
                      className="size-8 rounded-full"
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <MenuItem>
                    <Link
                      to={"/user/profile"}
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    >
                      Your Profile
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to={"/user/setting"}
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    >
                      Settings
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <p
                      onClick={handleLogout}
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    >
                      Sign out
                    </p>
                  </MenuItem>
                </MenuItems>
              </Menu>
            ) : (
              <Link to={"/user/login"}>
                <button className="text-white px-4 py-2 rounded-lg mx-3 bg-blue-600">Log in</button>
              </Link>
            )}
          </div>
        </div>
      </div>
      {/* Navbar for the sm devices */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3 z-50">
          {navigation.map((item) =>
            item.children ? (
              <div key={item.name}>
                <DisclosureButton
                  as="div"
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2   text-base font-medium"
                  )}
                >
                  {item.name}
                </DisclosureButton>
                {item.children.map((child) => (
                  <DisclosureButton
                    key={child.name}
                    as={Link}
                    to={child.to}
                    onClick={() => handleNavigationClick(child.name)}
                    className="block pl-6 pr-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    {child.name}
                  </DisclosureButton>
                ))}
              </div>
            ) : (
              <DisclosureButton
                key={item.name}
                as={Link}
                to={item.to}
                onClick={() => handleNavigationClick(item.name)}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            )
          )}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}

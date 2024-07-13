import { Logo } from "../assets";
import { NavbarItems } from "../constant";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="w-full  flex items-center justify-between py-4 max-w-[1440px] mx-auto px-4 md:px-0">
      <div className="flex">
        <img src={Logo} alt="logo" className="w-5" />
        <h2 className="font-bold text-purple-600">MRK</h2>
      </div>
      <ul className="md:flex gap-8 hidden">
        {NavbarItems.map((nav, i) => (
          <li key={i} className="hover:text-purple-700">
            {nav.name}
          </li>
        ))}
      </ul>
      <Button
        text="Start Free Trial"
        customStyles="text-purple-500"
        isIcon={true}
        icon={Logo}
        purpleBorder={true}
        background={false}
      />
    </nav>
  );
};

export default Navbar;

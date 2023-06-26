import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomeButton from "./CustomeButton";

const Navbar = () => {
  const handleScroll = () => {};
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px mx-auto flex justify-between items-center sm:px-16 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="car log"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustomeButton
          title="Sign UP"
          btnType="button"
          containerStyles="bg-white text-primary-blue rounded-full min-w-[130px"
        />
      </nav>
    </header>
  );
};

export default Navbar;

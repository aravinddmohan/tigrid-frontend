const Navbar = () => {
  return (
    <nav
      className="
        absolute top-6 left-1/2 -translate-x-1/2
        w-[90%] max-w-360
        px-12 py-3
        rounded-[20px]
        bg-black/30 backdrop-blur-md
        flex items-center justify-between
        text-white
      "
    >
      {/* Logo */}
      <div className="text-xl font-extrabold tracking-wider">
        <img src="/assets/images/tigrid-logo.png" alt="TiGrid Logo" className="h-6 w-auto" />
      </div>

      {/* Nav links */}
      <ul className="hidden md:flex gap-10">
        <li className="font-extrabold text-white text-[16px] tracking-widest capitalize">
          Home
        </li>
        {["About Us", "Services", "Works", "Blogs", "Careers"].map((item) => (
          <li
            key={item}
            className="
              font-normal
              text-[16px]
              tracking-widest
              capitalize
              text-[#C7C4C4]
              hover:text-white
              transition
              cursor-pointer
            "
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Contact Us */}
      <button
        className="
          px-6 py-2
          rounded-[20px]
          bg-[rgba(241,89,37,0.13)]
          shadow-[
            0_-4px_7.7px_rgba(180,67,30,0.3),
            0_2px_6px_rgba(241,89,37,0.2),
            inset_0_4px_16.5px_rgba(221,81,35,0.18)
          ]
          text-[16px]
          tracking-widest
          font-medium
          hover:bg-[rgba(241,89,37,0.2)]
          transition
        "
      >
        Contact Us
      </button>
    </nav>
  );
};

export default Navbar;
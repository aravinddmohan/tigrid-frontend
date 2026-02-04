import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-4 left-1/2 -translate-x-1/2 z-50
        w-[92%] max-w-360
        px-4 sm:px-6 md:px-10 py-3
        rounded-[20px]
        flex items-center justify-between
        bg-black/30 backdrop-blur-xl
        border border-white/10
        shadow-lg
        transition-all duration-300
        will-change-[backdrop-filter]
        ${isScrolled ? "border-white/20" : "border-white/0"}
      `}
    >
      {/* LEFT : LOGO */}
      <div className="flex-shrink-0">
        <img
          src="/assets/images/tigrid-logo.png"
          alt="TiGrid Logo"
          className="h-6 w-auto"
        />
      </div>

      {/* CENTER : DESKTOP NAV (SHOW LATE) */}
      <ul className="hidden lg:flex gap-6 xl:gap-10">
        <li className="font-extrabold text-white text-[16px] tracking-widest">
          Home
        </li>

        {["About Us", "Services", "Works", "Blogs", "Careers"].map((item) => (
          <li
            key={item}
            className="
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

      {/* RIGHT : CTA (DESKTOP) + HAMBURGER (MOBILE/TABLET) */}
      <div className="flex items-center gap-4 flex-shrink-0">
        {/* DESKTOP CTA */}
        <button
          className="
            hidden lg:block
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
            hover:bg-[rgba(241,89,37,0.25)]
            transition
          "
        >
          Contact Us
        </button>

        {/* MOBILE / TABLET HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-white" />
          <span className="w-6 h-[2px] bg-white" />
          <span className="w-6 h-[2px] bg-white" />
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="
            absolute top-full mt-4 left-0 w-full
            rounded-[20px]
            bg-black/60 backdrop-blur-xl
            border border-white/10
            flex flex-col items-center gap-6 py-6
            lg:hidden
          "
        >
          {["Home", "About Us", "Services", "Works", "Blogs", "Careers"].map(
            (item) => (
              <span
                key={item}
                onClick={() => setOpen(false)}
                className="
                  text-[16px]
                  tracking-widest
                  text-[#C7C4C4]
                  hover:text-white
                  transition
                  cursor-pointer
                "
              >
                {item}
              </span>
            )
          )}

          <button
            className="
              mt-2
              px-6 py-2
              rounded-[20px]
              bg-[rgba(241,89,37,0.18)]
              text-[15px]
              tracking-widest
              hover:bg-[rgba(241,89,37,0.3)]
              transition
            "
          >
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

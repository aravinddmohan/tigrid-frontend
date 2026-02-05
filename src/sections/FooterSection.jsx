const Footer = () => {
  return (
    <footer className="relative bg-black text-white pt-12 pb-6 overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,120,0,0.06),transparent_60%)] pointer-events-none"/>

      {/* container */}
      <div className="relative max-w-[1400px] mx-auto px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-20">

          {/* LEFT SIDE */}
          <div className="max-w-[420px]">

            {/* LOGO */}
            <img
              src="/assets/images/tigrid-logo.png"
              alt="TiGrid"
              className="h-7 mb-7"
            />

            {/* DESCRIPTION */}
            <p className="
              text-white/70
              text-[11px]
              leading-[1.9]
              tracking-[0.12em]
              max-w-[370px]
              mb-10
            ">
              We Believe In Being Remarkable Every Day. Our Commitment
              To Excellence Drives Us To Deliver Innovative IT Solutions
              That Transform Businesses. Let’s Work Together To Achieve
              Remarkable Results.
            </p>

            {/* NEWSLETTER */}
            <h3 className="text-[15px] tracking-[0.18em] font-medium mb-5">
              Newsletter
            </h3>

            <div className="flex items-center bg-[#0b0b0b] border border-white/15 rounded-full overflow-hidden w-full max-w-[320px] h-[46px]">

              <input
                type="email"
                placeholder="Enter Your Email..."
                className="
                  flex-1 bg-transparent px-5
                  text-[12px] text-white
                  outline-none
                  placeholder:text-white/30
                  tracking-[0.12em]
                "
              />

              <button className="
                px-5 h-[36px] mr-[5px]
                text-[11px]
                tracking-[0.18em]
                text-white
                bg-gradient-to-r from-orange-400 to-orange-800
                rounded-full
                hover:shadow-[0_0_14px_rgba(255,110,0,0.55)]
                transition
              ">
                Subscribe Us
              </button>
            </div>

          </div>

          {/* QUICK LINKS */}
          <div className="min-w-[170px]">
            <h3 className="mb-6 text-[15px] tracking-[0.18em] font-medium">
              Quick Links
            </h3>

            <ul className="space-y-4 text-[13px] tracking-[0.12em] leading-[1.9] text-white/70">
              <li className="hover:text-orange-400 cursor-pointer">Gallery</li>
              <li className="hover:text-orange-400 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-orange-400 cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-orange-400 cursor-pointer">Refund Policy</li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div className="min-w-[170px]">
            <h3 className="mb-6 text-[15px] tracking-[0.18em] font-medium">
              Social
            </h3>

            <ul className="space-y-4 text-[13px] tracking-[0.12em] leading-[1.9] text-white/70">
              <li className="hover:text-orange-400 cursor-pointer">Instagram</li>
              <li className="hover:text-orange-400 cursor-pointer">LinkedIn</li>
              <li className="hover:text-orange-400 cursor-pointer">Facebook</li>
              <li className="hover:text-orange-400 cursor-pointer">Behance</li>
              <li className="hover:text-orange-400 cursor-pointer">YouTube</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="min-w-[170px]">
            <h3 className="mb-6 text-[15px] tracking-[0.18em] font-medium">
              Contact
            </h3>

            <div className="space-y-4 text-[13px] tracking-[0.12em] leading-[1.9] text-white/70">
              <p>
                TiGRID TECHNOLOGIES PVT LTD <br/>
                1st floor, M squared building,<br/>
                Technopark. Trivandrum – 695581.
              </p>

              <p>+91 790 7726 557</p>
              <p>+91 4713545920</p>
              <p>hello@tigrid.in</p>
            </div>
          </div>

        </div>

        {/* bottom */}
        <div className="border-t border-white/10 mt-16 pt-6 text-center text-white/40 text-[12px] tracking-[0.25em]">
          © All Rights Reserved | Designed And Developed By TiGRID
        </div>

      </div>
    </footer>
  );
};

export default Footer;

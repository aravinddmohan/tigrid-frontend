const Footer = () => {
  return (
    <footer className="relative bg-black text-white pt-16 pb-6 overflow-hidden">

      {/* glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,120,0,0.06),transparent_60%)] pointer-events-none"/>

      <div className="relative max-w-[1400px] mx-auto px-6">

        {/* MAIN GRID */}
        <div className="
        grid
        grid-cols-1
        md:grid-cols-3
        xl:grid-cols-[1.4fr_1fr_1fr_1fr]
        gap-12
        items-start
        ">

          {/* LEFT: logo + desc + newsletter */}
          <div className="md:col-span-3 xl:col-span-1">

            <img
              src="/assets/images/tigrid-logo.png"
              className="h-7 mb-6"
            />

            <p className="
            text-white/60
            text-[13px]
            leading-[1.7]
            tracking-[0.04em]
            max-w-[320px]
            mb-8
            ">
              We believe in being remarkable every day. Our commitment
              to excellence drives us to deliver innovative IT solutions
              that transform businesses. Let's work together to achieve
              remarkable results.
            </p>

            <h3 className="text-[15px] tracking-[0.18em] mb-4">
              Newsletter
            </h3>

            {/* newsletter capsule */}
            <div className="
            flex items-center
            w-full
            max-w-[360px]
            md:max-w-[480px]
            xl:max-w-[360px]
            h-[48px]
            rounded-full
            border border-white/20
            bg-[#0b0b0b]
            overflow-hidden
            ">

              <input
                placeholder="Enter your email"
                className="
                flex-1
                bg-transparent
                px-6
                text-[13px]
                outline-none
                placeholder:text-white/40
                "
              />

              <button className="
              shrink-0
              px-6
              h-[34px]
              mr-[6px]
              rounded-full
              text-[12px]
              bg-gradient-to-r from-orange-400 to-orange-700
              hover:shadow-[0_0_12px_rgba(255,120,0,0.6)]
              transition
              ">
                Subscribe Us
              </button>
            </div>
          </div>


          {/* QUICK LINKS */}
          <div>
            <h3 className="mb-6 text-[15px] tracking-[0.18em]">Quick Links</h3>

            <ul className="space-y-4 text-[13px] text-white/70">
              <li className="hover:text-orange-400 cursor-pointer">Gallery</li>
              <li className="hover:text-orange-400 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-orange-400 cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-orange-400 cursor-pointer">Refund Policy</li>
            </ul>
          </div>


          {/* SOCIAL */}
          <div>
            <h3 className="mb-6 text-[15px] tracking-[0.18em]">Social</h3>

            <ul className="space-y-4 text-[13px] text-white/70">
              <li className="hover:text-orange-400 cursor-pointer">Instagram</li>
              <li className="hover:text-orange-400 cursor-pointer">LinkedIn</li>
              <li className="hover:text-orange-400 cursor-pointer">Facebook</li>
              <li className="hover:text-orange-400 cursor-pointer">Behance</li>
              <li className="hover:text-orange-400 cursor-pointer">YouTube</li>
            </ul>
          </div>


          {/* CONTACT */}
          <div>
            <h3 className="mb-6 text-[15px] tracking-[0.18em]">Contact</h3>

            <div className="space-y-4 text-[13px] text-white/70">
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
        <div className="border-t border-white/10 mt-14 pt-6 text-center text-white/40 text-[12px] tracking-[0.25em]">
          © All Rights Reserved | Designed And Developed By TiGRID
        </div>

      </div>
    </footer>
  );
};

export default Footer;
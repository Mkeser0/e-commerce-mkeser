import React from "react";

function FooterHome2() {
  return (
    <div>
      <div className="flex flex-col items-center py-[50px]">
        <div className="flex flex-col md:flex-row items-start justify-center md:justify-between w-[414px] md:w-[1041px] pl-10 md:pl-0 gap-[30px]">
          <FooterColumn
            title="Company Info"
            links={[
              { to: "/aboutus", title: "About us" },
              { to: "/carrier", title: "Carrier" },
              { to: "/hiring", title: "We are hiring" },
              { to: "/blog", title: "Blog" },
            ]}
          />
          <FooterColumn
            title="Legal"
            links={[
              { to: "/aboutus", title: "About us" },
              { to: "/carrier", title: "Carrier" },
              { to: "/hiring", title: "We are hiring" },
              { to: "/blog", title: "Blog" },
            ]}
          />
          <FooterColumn
            title="Features"
            links={[
              { to: "/marketing", title: "Business Marketing" },
              { to: "/analytic", title: "User Analytic" },
              { to: "/livechat", title: "Live Chat" },
              { to: "/support", title: "Unlimited Support" },
            ]}
          />
          <FooterColumn
            title="Resources"
            links={[
              { to: "/iosandroid", title: "IOS & Android" },
              { to: "/demo", title: "Watch a Demo" },
              { to: "/customers", title: "Customers" },
              { to: "/api", title: "API" },
            ]}
          />
          <div className="flex flex-col items-start gap-[20px]">
            <h5 className="text-[16px] text-[#252B42] font-bold">
              Get In Touch
            </h5>
            <div className="flex items-center w-[321px] justify-between gap-0 border border-[#E6E6E6]">
              <input
                type="email"
                placeholder="Your email"
                className="text-sm placeholder-[#737373] pl-2 placeholder:pl-3 focus:outline-none focus:ring-0"
              />
              <button className="bg-[#23A6F0] w-[117px] h-[30px] text-[14px] text-white cursor-pointer hover:text-[15px]">
                Subscribe
              </button>
            </div>
            <p className="text-[12px] text-[#737373]">
              Lore imp sum dolor Amit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterHome2;

function FooterColumn({ title, links }) {
  return (
    <div className="flex flex-col items-start justify-center gap-[20px]">
      <h5 className="text-[16px] text-[#252B42] font-bold">{title}</h5>
      {links.map((link, idx) => (
        <CustomLink key={idx} to={link.to} title={link.title}>
          {link.title}
        </CustomLink>
      ))}
    </div>
  );
}

function CustomLink({ to, children, title }) {
  return (
    <a href={to} title={title} className="text-[14px] font-bold text-[#737373]">
      {children}
    </a>
  );
}

import { Link } from "react-router-dom";
import { footerContact, footerItem, socialIcons } from "../data/Data";
import Newsletter from "../home/Newsletter";

export default function Footer() {
  return (
    <>
      <Newsletter />
      <div
        className="container-fluid text-light footer wow fadeIn"
        data-wow-delay="0.1s"
        style={{ backgroundColor: "#002800" }}
      >
        <div className="container pb-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-4">
              <div
                className="rounded p-4"
                style={{ backgroundColor: "#ffffff" }}
              >
                <Link to="/">
                  <h4 className=" mb-3" style={{ color: "#002800" }}>
                    Resort Nampien
                  </h4>
                </Link>
                <p className=" mb-0" style={{ color: "#002800" }}>
                  Build a professional website for your hotel business and grab
                  the attention of new visitors upon your site’s launch.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <h6 className="section-title text-start text-white text-uppercase mb-4">
                Contact
              </h6>
              {footerContact.map((val, index) => (
                <p className="mb-2" key={index}>
                  {val.icon} {val.name}
                </p>
              ))}
              <div className="d-flex pt-2">
                {socialIcons.slice(0, 4).map((val, index) => (
                  <a className="btn btn-outline-light btn-social" href="">
                    {val.icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="row gy-5 g-4">
                {footerItem.map((section, sectionIndex) => (
                  <div className="col-md-6" key={sectionIndex}>
                    <h6 className="section-title text-start text-white text-uppercase mb-4">
                      {section.header}
                    </h6>
                    {section.UnitItem.map((item, itemIndex) => (
                      <a className="btn btn-link" href="" key={itemIndex}>
                        {item.name}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

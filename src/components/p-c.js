import React from "react";
import "../styles/p-c.css";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const PartClients = () => {
  return (
    <>
      <section className="part-clients">
        <div>
          <div className="h1-pc">
            <h1 className="h1-tag">Partners & Clients</h1>
          </div>
          <div className="container">
            <div className="rows">
              <div className="img1 image">
                <img src="/images/p-c/MLS.png" alt="Description" />
              </div>
              <div className="img2 image">
                <img src="/images/p-c/giz.png" alt="Description" />
              </div>
              <div className="img3 image">
                <img src="/images/p-c/mc-logo.png" alt="Description" />
              </div>
              <div className="img4 image">
                <img src="/images/p-c/icas.png" alt="Description" />
              </div>
              <div className="img5 image">
                <img src="/images/p-c/world_bank.png" alt="Description" />
              </div>
              <div className="img6 image">
                <img src="/images/p-c/abc.png" alt="Description" />
              </div>
              <div className="img7 image">
                <img src="/images/p-c/UKAID.png" alt="Description" />
              </div>
              <div className="img8 image">
                <img src="/images/p-c/oxford.png" alt="Description" />
              </div>
              <div className="img9 image">
                <img src="/images/p-c/EIC.png" alt="Description" />
              </div>
              <div className="img10 image">
                <img src="/images/p-c/savechild.png" alt="Description" />
              </div>
              <div className="img11 image">
                <img src="/images/p-c/DAI.png" alt="Description" />
              </div>
              <div className="img12 image">
                <img src="/images/p-c/oxford.png" alt="Description" />
              </div>
              <div className="img13 image">
                <img src="/images/p-c/mastercard.png" alt="Description" />
              </div>
              <div className="img14 image">
                <img src="/images/p-c/snv.png" alt="Description" />
              </div>
              <div className="img15 image">
                <img src="/images/p-c/consult.png" alt="Description" />
              </div>
              <div className="img16 image">
                <img src="/images/p-c/USAID.png" alt="Description" />
              </div>
              <div className="img17 image">
                <img src="/images/p-c/DFID.png" alt="Description" />
              </div>
              <div className="img18 image">
                <img src="/images/p-c/BMZ.png" alt="Description" />
              </div>
              <div className="img19 image">
                <img src="/images/p-c/HPR.png" alt="Description" />
              </div>
              <div className="img20 image">
                <img src="/images/p-c/sida.png" alt="Description" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="contact-page">
          <div className="row-contact">
            <div className="address-map">
              <div>
                <h1 className="h1-address">
                  Get <br />
                  in touch<span className="dot"> . </span>
                </h1>

                <p className="para-contact">
                  <p>
                    <Phone size={23} className="inline-block text-green-500" />{" "}
                    <span className="para-each ">+251944255318</span>
                  </p>
                  <p>
                    <Phone size={23} className="inline-block text-green-500" />{" "}
                    <span className="para-each ">+251944255318</span>
                  </p>
                  <p>
                    <Mail size={23} className="inline-block text-red-500" />{" "}
                    <span className="para-each ">info@minabtech.com</span>
                  </p>
                  <p>
                    <MapPin size={23} className="inline-block text-blue-500" />{" "}
                    <span className="para-each ">Addis Ababa, Ethiopia</span>
                  </p>
                  <p>
                    <span className="add">
                      Bole, Behind DH-geda Tower, Afomi Building 3rd floor,
                      Addis Ababa
                    </span>
                  </p>
                </p>
                <div className="geolocation"></div>
              </div>
            </div>
            <div className="contact-form">
              <div>
                <form className="contact-form">
                  <div className="contact-container">
                    <div className="h1-contact">
                      <h1 className="h1-contact-us">Contact Us</h1>
                    </div>
                    <div className="name g-input">
                      <div className="label-mbm">
                        <label className="label-all">Name</label>
                      </div>
                      <div>
                        <input
                          type="text"
                          className="input"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>
                    <div className="phone g-input">
                      <div className="label-mbm">
                        <label className="label-all">Phone number</label>
                      </div>
                      <div>
                        <input
                          type="text"
                          className="input"
                          placeholder="Enter your phone"
                        />
                      </div>
                    </div>
                    <div className="email g-input">
                      <div className="label-mbm">
                        <label className="label-all">Email</label>
                      </div>
                      <div>
                        <input
                          type="email"
                          className="input"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    <div className="message g-input">
                      <div className="label-mbm">
                        <label className="label-all">Message</label>
                      </div>
                      <div>
                        <textarea
                          type="textArea"
                          className="textarea-input"
                          placeholder="Enter your message"
                        />
                      </div>
                      <div className="mgnl-btn">
                        <button className="sub-btn">Submit</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <section>
        <div>
          <div className="separator"></div>
          <div className="nav-btns">
            <div className="rows-footer">
              <span className="nav-items">
                <Link to="/" className="nav-link" aria-current="page" href="#">
                  About
                </Link>
              </span>
              <span className="nav-items">
                <Link to="/" className="nav-link" aria-current="page" href="#">
                  Service
                </Link>
              </span>
              <span className="nav-items">
                <Link to="/" className="nav-link" aria-current="page" href="#">
                  Projects
                </Link>
              </span>
              <span className="nav-items">
                <Link to="/" className="nav-link" aria-current="page" href="#">
                  Partners
                </Link>
              </span>
              <span className="nav-items">
                <Link to="/" className="nav-link" aria-current="page" href="#">
                  Privacy policy
                </Link>
              </span>
            </div>
          </div>
          <div className="socials">
            <span className="socials-each">
              <a href="https://twitter.com" target="_blank" title="Twitter">
                <i class="fab fa-twitter"></i>
              </a>
            </span>
            <span className="socials-each">
              <a href="https://facebook.com" target="_blank" title="Facebook">
                <i class="fab fa-facebook"></i>
              </a>
            </span>
            <span className="socials-each">
              <a href="https://linkedin.com" target="_blank" title="Linked in">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </span>
          </div>
          <div className="cpy-rgt">
            <p>© 2022 Minab IT Solutions. All rights reserved.</p>
            {/* © {new Date().getFullYear()} Minab IT Solutions. All rights reserved.*/}
          </div>
        </div>
      </section>
    </>
  );
};

export default PartClients;
//npm install lucide-react
// npm i google-map-react

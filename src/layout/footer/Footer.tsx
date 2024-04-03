import Link from "next/link";
import React from "react";
interface classType{
  customeClass:string;
}
const Footer = ({customeClass}:classType) => {
  return (
    <>
      <footer className={customeClass}>
        <div className="bd-footer-top pt-100 pb-30">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="bd-footer-widget-wrapper mb-60">
                  <div className="bd-footer-widget-title">
                    <h5>Useful Links</h5>
                  </div>
                  <div className="bd-footer-link">
                    <ul>
                      <li>
                        <Link href="/room-one">Accommodation</Link>
                      </li>
                      <li>
                        <Link href="/about">About Hotel</Link>
                      </li>
                      <li>
                        <Link href="/dining">Dining</Link>
                      </li>
                      <li>
                        <Link href="/contact">Location</Link>
                      </li> 
                      <li>
                        <Link href="/about">Experience</Link>
                      </li>
                      <li>
                        <Link href="">Jobs &amp; Career</Link>
                      </li>
                      <li>
                        <Link href="/event">Occasions</Link>
                      </li>
                      <li>
                        <Link href="/contact">Get In Touch</Link>
                      </li>
                      <li>
                      <Link href="/dining">DINING</Link>
                      </li>
                      <li>
                        <Link href="/faq">FAQ</Link>
                      </li>
                      <li>
                        <Link href="/event">Events</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="bd-footer-widget-wrapper bd-footer-contact-wrapper mb-60">
                  <div className="bd-footer-widget-title">
                    <h5>Get in Touch</h5>
                  </div>
                  <div className="bd-footer-contact">
                    <ul>
                      <li>
                        <i className="fas fa-paper-plane"></i> Reception:
                        <Link href="tel:99411123456"> + 99 4 11 123 456</Link>
                      </li>
                      <li>
                        <i className="fas fa-phone"></i>Office:{" "}
                        <Link href="tel:99411123456"> + 99 4 11 123 456</Link>
                      </li>
                      <li>
                        <i className="fas fa-envelope"></i> E-mail:{" "}
                        <Link href="mailto:info@theroyelpalace.com">
                          info@theroyelpalace.com
                        </Link>
                      </li>
                      <li>
                        <i className="fas fa-map-marker-alt"></i> Address:
                        Passeig de Gracia 21
                      </li>
                    </ul>
                  </div>
                  <div className="bd-footer-btn">
                    <Link href="/room-one" className="bd-btn fill-btn">
                      Reserve Now{" "}
                      <span>
                        <i className="fa-regular fa-arrow-right-long"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12">
                <div className="bd-footer-widget-wrapper mb-60">
                  <div className="bd-footer-widget-title">
                    <h5>Subscribe Newsletter</h5>
                  </div>
                  <div className="bd-footer-newsletter__form">
                    <form action="#">
                      <div className="bd-footer-newsletter__input is-black">
                        <input type="text" placeholder="Your Email" />
                        <button type="submit">
                          subscribe now{" "}
                          <i className="fa-regular fa-arrow-right-long"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="payment-methods mt-30">
                    <strong>We accept</strong>
                    <div className="payment-methods-icons">
                      <span>
                        <i className="fa-brands fa-cc-paypal"></i>
                      </span>
                      <span>
                        <i className="fa-brands fa-cc-mastercard"></i>
                      </span>
                      <span>
                        <i className="fa-brands fa-cc-visa"></i>
                      </span>
                      <span>
                        <i className="fa-brands fa-cc-amex"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bd-footer-bottom d-flex align-items-center">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="bd-footer-copyright">
                  <p>
                    Copyright &amp; Design By{" "}
                    <span>
                      ©{" "}
                      <Link href="https://themeforest.net/user/bdevs/portfolio">
                        Bdevs
                      </Link>
                    </span>{" "}
                    - 2023
                  </p>
                </div>
              </div>
              <div className="col-md-6 text-md-end">
                <div className="bd-footer__list">
                  <div className="bd-footer__social-wrapper justify-content-center justify-content-md-end">
                    <div className="bd-footer__social is-black">
                      <Link href="https://www.facebook.com/" target="_blank">
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                    </div>
                    <div className="bd-footer__social is-black">
                      <Link href="https://twitter.com/" target="_blank">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </div>
                    <div className="bd-footer__social is-black">
                      <Link href="https://youtube.com/" target="_blank">
                        <i className="fa-brands fa-youtube"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

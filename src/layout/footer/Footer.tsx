import Link from "next/link";
import React from "react";
interface classType {
  customeClass: string;
}
const Footer = ({ customeClass }: classType) => {
  return (
    <>
      <footer className={customeClass} >
        <div className="bd-footer-top pt-100 pb-30 bg-gray-100">
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
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/news">News</Link>
                      </li>
                      <li>
                        <Link href="/">Research Reports</Link>
                      </li>
                      <li>
                        <Link href="/analyst-bios">Analyst Bios</Link>
                      </li>
                      <li>
                        <Link href="/contact-us">Contact us</Link>
                      </li>
                      <li>
                        <Link href="/tickers-list">Tickers</Link>
                      </li>
                      <li>
                        <Link href="/our-partners">Our Partners</Link>
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
                        <i className="fas fa-paper-plane"></i>
                        <Link href="/contact-us"> + 99 4 11 123 456</Link>
                      </li>
                      <li>
                        <i className="fas fa-phone"></i>
                        <Link href="/contact-us"> + 99 4 11 123 456</Link>
                      </li>
                      <li>
                        <i className="fas fa-envelope"></i>
                        <Link href="/contact-us">
                          info@InvestorRadar.com
                        </Link>
                      </li>
                      <li>
                        <i className="fas fa-map-marker-alt"></i>
                        <Link href="/contact-us">
                          Passeig de Gracia 21
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12">
                <div className="bd-footer-widget-wrapper mb-60">
                  <div className="bd-footer-widget-title">
                    <h5>Subscribe Newsletter</h5>
                  </div>
                  <div className="bd-footer-contact">
                    <ul>
                      <li>
                        <Link href="/subscribe/free-digest">
                          Free Digest
                        </Link>
                      </li>
                      <li>
                        <Link href="/subscribe/premium-digest">
                          Investor Radar Premium
                        </Link>
                      </li>
                      <li>
                        <Link href="/subscribe/cancel-subscription">
                          Unsubscribe
                        </Link>
                      </li>
                    </ul>
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
                  <p>© 2024 Investor Radar. All rights reserved.</p>
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

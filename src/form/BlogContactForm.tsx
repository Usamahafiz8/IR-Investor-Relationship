import React from "react";

const BlogContactForm = () => {
  return (
    <>
      <div className="bd-comment-form">
        <h3 className="bd-contact-form-title mb-25">Leave a replay</h3>
        <form action="#">
          <div className="row">
            <div className="col-md-12">
              <div className="bd-contact-input mb-20">
                <label htmlFor="textarea">
                  Comments
                  <sup>
                    <i className="fa-solid fa-star-of-life"></i>
                  </sup>
                </label>
                <textarea
                  name="textarea"
                  id="textarea"
                  className="theme-bg-2"
                ></textarea>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bd-contact-input mb-30">
                <label htmlFor="name">
                  Name
                  <sup>
                    <i className="fa-solid fa-star-of-life"></i>
                  </sup>
                </label>
                <input id="name" type="text" className="theme-bg-2" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="bd-contact-input mb-30">
                <label htmlFor="email">
                  Email
                  <sup>
                    <i className="fa-solid fa-star-of-life"></i>
                  </sup>
                </label>
                <input id="email" type="text" className="theme-bg-2" />
              </div>
            </div>
            <div className="col-md-12 mb-30">
              <div className="bd-contact-agree d-flex align-items-center">
                <input className="ryl-cp" type="checkbox" id="check-agree" />
                <label className="check-label ryl-cp" htmlFor="check-agree">
                  Save Data for Next Comment
                </label>
              </div>
            </div>
            <div className="col-md-12">
              <div className="bd-blog__btn mb-15">
                <button type="submit" className="bd-btn">
                  Post Comment
                  <span>
                    <i className="fa-regular fa-arrow-right-long"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default BlogContactForm;

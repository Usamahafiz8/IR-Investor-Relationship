


import React, { useState } from "react";
import thumb2 from "../../../public/assets/img/bg/room-view.jpg";
import Image from "next/image";
import blogs from "@/data/blogs-letest-news";
import ModalVideo from "react-modal-video";
import Link from "next/link";
interface propsType {
  search: string;
  id:number |undefined;
}
const DetailsDynamic = ({ search,id }: propsType) => {
  const [isOpen, setIsOpen] = useState(false);
  const openVideoModal = () => {
   setIsOpen((prevIsOpen) => !prevIsOpen);
 };
  const item = blogs.find(blog=> blog.title?.toLowerCase().includes(search.toLowerCase()))
  const blog = blogs.find(item=> item.id == id)

  return (
    <>
      {search === " " ? (
        <div className="bd-blog-3-details mb-50">
        <div className="bd-blog-3-details-thumb">
          <Image
            src={blog?.img}
            style={{ width: "100%", height: "100%" }}
            alt="blog image"
          />
        </div>
        <div className="bd-blog-3-details-meta">
          <span>
            <i className="fas fa-user"></i> by <Link href="/blog">Jhon</Link>
          </span>
          <span>
            <i className="fas fa-calendar-days"></i> 27 Oct 2023
          </span>
          <span>
            <i className="fa-solid fa-comment-dots"></i>
            <Link href="/blog-details">0 Comments</Link>
          </span>
        </div>
        <div className="bd-blog-3-details-content">
          <h3 className="bd-blog-3-details-title mt-5 mb-15">
            {blog?.title}
          </h3>
          <p>
            Cairo, the spectacular capital city of Egypt, lies on terrains
            connecting Africa and Asia. It is the seventh most populous city in
            the world and serves as a contemporary centre of commerce, culture,
            art, and tourism. Cairo means victorious in Arabic and features rich
            cultural beliefs and prolonged historical background.
          </p>
          <p>
            Other interesting services to enjoy here are spa and wellness
            facilities, especially hot tubs and saunas to rejuvenate the
            {`guests’.`} The property is in proximity to iconic attractions,
            including Tahrir Square which is 4.4 km, whereas the Egyptian Museum
            is 5 km.
          </p>
        </div>
        <div className="bd-blog-3-details-quote">
          <blockquote className="bd-blog-3-quote">
            <div className="bd-blog-3-quote-icon">
              <i className="flaticon-quote"></i>
            </div>
            <div className="bd-blog-3-quote-content">
              <p>
                Always keep a positive mindset, it will improve your outlook on
                the world.
              </p>
              <span>Roald Dahl</span>
            </div>
          </blockquote>
        </div>
        <p>
          The guest experience {` doesn’t`} begin at check-in anymore; with engaging
          blog content, hotels can start offering value to guests before they
          even start thinking about booking a room. By the time these guests
          start considering which property to book at, {` you’ve `} already got a leg
          up on the competition.
        </p>
        <div className="bd-blog-3-topic">
          <h4 className="bd-blog-3-topic-title">Know More About Royel</h4>
          <p>
            A 21st-century hotel must have a website, social media profiles, and
            a blog - right? Not so fast. Though a blog might seem like a
            necessary part of a {`hotel’s`} online presence, no benefit comes from
            blogging for {`blogging’s`} sake. In fact, cranking out a multitude of
            posts may do more harm than good without carefully choosing topics
            and producing high-quality content. When it comes to hotel blogs,
            choose quality over quantity - or choose not to have a blog at all,
            such as the Maven Hotel in Denver.
          </p>
          <div className="bd-blog-3-topic-video p-relative mt-30 mb-35">
            <div className="bd-blog-3-topic-thumb">
              <Image
                src={thumb2}
                style={{ width: "100%", height: "100%" }}
                alt="img not found!"
              />
            </div>
            <div className="bd-blog-3-topic-video-btn bd-pulse-btn">
            <button
                className="popup-video"
                onClick={() => {
                  openVideoModal();
                }}
                
              >
                <i className="fa-solid fa-play"></i>
              </button>
            </div>
          </div>
          <div className="bd-blog-3-topic-list theme-bg-2">
            <ul>
              <li>
                Hoteliers see many faces come through their hotels, which is
                great because {`it’s`} a sign of steady business.
              </li>
              <li>
                The downside is that it can make it harder to remember who your
                repeat guests are.
              </li>
              <li>
                How can you, as an independent hotelier on trivago, increase
                traffic to your website to boost direct bookings
              </li>
              <li>
                There are different ways they can be implemented according to
                your management plan
              </li>
            </ul>
          </div>
        </div>
        <div className="bd-blog-3-topic">
          <h4 className="bd-blog-3-topic-title">Conclusion of This Blog</h4>
          <p>
            But creating a blog is only half of the journey; partnering with a
            digital marketing agency like NextGuest Digital will provide the
            expertise and exposure necessary to put your blog in front of the
            right readers. A hotel digital marketing agency like NextGuest will
            even help develop content for your website that is purpose built to
            bring in prospective guests.
          </p>
        </div>
        <div className="bd-blog-3-share d-flex justify-content-between align-items-center flex-wrap">
          <div className="bd-blog-3-tag">
            <ul>
              <li>
                <Link href="/blog">Luxury</Link>
              </li>
              <li>
                <Link href="/blog">Deals</Link>
              </li>
              <li>
                <Link href="/blog">Booking</Link>
              </li>
            </ul>
          </div>
          <div className="bd-blog-3-social">
            <ul>
              <li>
                <Link target="_blank" href="https://www.facebook.com/">
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link target="_blank" href="https://twitter.com/">
                  <i className="fa-brands fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link target="_blank" href="https://www.youtube.com/">
                  <i className="fa-brands fa-youtube"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="bd-blog-3-details-nav">
          <div className="bd-blog-3-details-nav-prev">
            <Link href="/blog-details">
              
              <i className="fa-regular fa-angle-left"></i>
            </Link>
            <Link href="/blog-details">Previous Post</Link>
          </div>
          <span className="d-none d-md-block">
            <i className="flaticon-menu"></i>
          </span>
          <div className="bd-blog-3-details-nav-next">
            <Link href="/blog-details">Next Post</Link>
            <Link href="/blog-details">
              <i className="fa-regular fa-angle-right"></i>
            </Link>
          </div>
        </div>
      </div>
      ) : (
        <>
         {
            item ?
             <>
              <div className="bd-blog-3-details mb-50">
        <div className="bd-blog-3-details-thumb">
          <Image
            src={item.img}
            style={{ width: "100%", height: "100%" }}
            alt="blog image"
          />
        </div>
        <div className="bd-blog-3-details-meta">
          <span>
            <i className="fas fa-user"></i> by <Link href="/blog">Jhon</Link>
          </span>
          <span>
            <i className="fas fa-calendar-days"></i> {item.date} {item.month} 2023
          </span>
          <span>
            <i className="fa-solid fa-comment-dots"></i>
            <Link href="/blog-details">0 Comments</Link>
          </span>
        </div>
        <div className="bd-blog-3-details-content">
          <h3 className="bd-blog-3-details-title mt-5 mb-15">
            {item.title}
          </h3>
          <p>
            Cairo, the spectacular capital city of Egypt, lies on terrains
            connecting Africa and Asia. It is the seventh most populous city in
            the world and serves as a contemporary centre of commerce, culture,
            art, and tourism. Cairo means victorious in Arabic and features rich
            cultural beliefs and prolonged historical background.
          </p>
          <p>
            Other interesting services to enjoy here are spa and wellness
            facilities, especially hot tubs and saunas to rejuvenate the
            {`guests’.`} The property is in proximity to iconic attractions,
            including Tahrir Square which is 4.4 km, whereas the Egyptian Museum
            is 5 km.
          </p>
        </div>
        <div className="bd-blog-3-details-quote">
          <blockquote className="bd-blog-3-quote">
            <div className="bd-blog-3-quote-icon">
              <i className="flaticon-quote"></i>
            </div>
            <div className="bd-blog-3-quote-content">
              <p>
                Always keep a positive mindset, it will improve your outlook on
                the world.
              </p>
              <span>Roald Dahl</span>
            </div>
          </blockquote>
        </div>
        <p>
          The guest experience {`doesn’t`} begin at check-in anymore; with engaging
          blog content, hotels can start offering value to guests before they
          even start thinking about booking a room. By the time these guests
          start considering which property to book at, {`you’ve`} already got a leg
          up on the competition.
        </p>
        <div className="bd-blog-3-topic">
          <h4 className="bd-blog-3-topic-title">Know More About Royel</h4>
          <p>
            A 21st-century hotel must have a website, social media profiles, and
            a blog - right? Not so fast. Though a blog might seem like a
            necessary part of a {`hotel’s`} online presence, no benefit comes from
            blogging for {`blogging’s`} sake. In fact, cranking out a multitude of
            posts may do more harm than good without carefully choosing topics
            and producing high-quality content. When it comes to hotel blogs,
            choose quality over quantity - or choose not to have a blog at all,
            such as the Maven Hotel in Denver.
          </p>
          <div className="bd-blog-3-topic-video p-relative mt-30 mb-35">
            <div className="bd-blog-3-topic-thumb">
              <Image
                src={thumb2}
                style={{ width: "100%", height: "100%" }}
                alt="img not found!"
              />
            </div>
            <div className="bd-blog-3-topic-video-btn bd-pulse-btn">
              <button
                className="popup-video"
                onClick={() => {
                  openVideoModal();
                }}
                
              >
                <i className="fa-solid fa-play"></i>
              </button>
            </div>
          </div>
          <div className="bd-blog-3-topic-list theme-bg-2">
            <ul>
              <li>
                Hoteliers see many faces come through their hotels, which is
                great because {`it’s`} a sign of steady business.
              </li>
              <li>
                The downside is that it can make it harder to remember who your
                repeat guests are.
              </li>
              <li>
                How can you, as an independent hotelier on trivago, increase
                traffic to your website to boost direct bookings
              </li>
              <li>
                There are different ways they can be implemented according to
                your management plan
              </li>
            </ul>
          </div>
        </div>
        <div className="bd-blog-3-topic">
          <h4 className="bd-blog-3-topic-title">Conclusion of This Blog</h4>
          <p>
            But creating a blog is only half of the journey; partnering with a
            digital marketing agency like NextGuest Digital will provide the
            expertise and exposure necessary to put your blog in front of the
            right readers. A hotel digital marketing agency like NextGuest will
            even help develop content for your website that is purpose built to
            bring in prospective guests.
          </p>
        </div>
        <div className="bd-blog-3-share d-flex justify-content-between align-items-center flex-wrap">
          <div className="bd-blog-3-tag">
            <ul>
              <li>
                <Link href="/blog">Luxury</Link>
              </li>
              <li>
                <Link href="/blog">Deals</Link>
              </li>
              <li>
                <Link href="/blog">Booking</Link>
              </li>
            </ul>
          </div>
          <div className="bd-blog-3-social">
            <ul>
              <li>
                <Link target="_blank" href="https://www.facebook.com/">
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link target="_blank" href="https://twitter.com/">
                  <i className="fa-brands fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link target="_blank" href="https://www.youtube.com/">
                  <i className="fa-brands fa-youtube"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="bd-blog-3-details-nav">
          <div className="bd-blog-3-details-nav-prev">
            <Link href="/blog-details">
              
              <i className="fa-regular fa-angle-left"></i>
            </Link>
            <Link href="/blog-details">Previous Post</Link>
          </div>
          <span className="d-none d-md-block">
            <i className="flaticon-menu"></i>
          </span>
          <div className="bd-blog-3-details-nav-next">
            <Link href="/blog-details">Next Post</Link>
            <Link href="/blog-details">
              <i className="fa-regular fa-angle-right"></i>
            </Link>
          </div>
        </div>
      </div>
            </>
            :
            <>
            <h2>No Blogs Found {`" ${search} "`} Title </h2>
            </>
         }
        </> 
      )}
      <ModalVideo
    channel="youtube"
    isOpen={isOpen}
    videoId="4K6Sh1tsAW4"
    onClose={() => {
      openVideoModal();
    }}
  />
    </>
  );
};

export default DetailsDynamic;


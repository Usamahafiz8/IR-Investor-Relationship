import roomAndSuites from "@/data/roomAndSuitesData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Rooms = () => {
  return (
    <>
      <section className="bd-room-area p-relative theme-bg-2 pt-150 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <div className="bd-section__title-wrapper ">
                <p className="bd-section__subtitle mb-20">you may also like</p>
                <h2 className="bd-section__title mb-55 ">Similar Properties</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {roomAndSuites.slice(0, 3).map((item) => (
              <div key={item.id} className="col-xxl-4 col-xl-6 col-lg-6">
                <div className="bd-room mb-30">
                  <div className="bd-room__content">
                    <h4 className="bd-room__title mb-20">
                      <Link href={`/room-details/${item.id}`}>
                        {item.title}
                      </Link>
                    </h4>
                    <div className="bd-room__price mb-30">
                      <p>
                        ${item.price} <span>/{item.time}</span>
                      </p>
                    </div>
                    <div className="bd-room__thumb-wrap mb-30">
                      <div className="bd-room__thumb">
                        <Image src={item.img} alt="room image" />
                      </div>
                      <div className="bd-room__details">
                        <p> {item.details} </p>
                        <div className="bd-room__list">
                          <div className="bd-room__list-item">
                            <i className="flaticon-taxi"></i>
                            <p> {item.list1} </p>
                          </div>
                          <div className="bd-room__list-item">
                            <i className="flaticon-garage"></i>
                            <p> {item.list2} </p>
                          </div>
                          <div className="bd-room__list-item">
                            <i className="flaticon-breakfast"></i>
                            <p> {item.list3} </p>
                          </div>
                          <div className="bd-room__list-item">
                            <i className="flaticon-swimming-pool"></i>
                            <p> {item.list4} </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bd-room__btn">
                      <Link href={`/room-details/${item.id}`}>
                        <span>book now</span>
                        <i className="fa-regular fa-arrow-right-long"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Rooms;

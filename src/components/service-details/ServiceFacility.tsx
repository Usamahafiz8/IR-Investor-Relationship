import { roomsFacilitys } from '@/data/room-details-static-data';
import React from 'react';

const ServiceFacility = () => {
    return (
        <>
      {roomsFacilitys?.slice(0,2)?.map((item) => (
        <div
          key={item.id}
          className={`bd-room-details__widget  pb-30 mb-30 ${
            item.id === 1 ? "mt-65" : " "
          }`}
        >
          <h4 className="bd-room-details__widget-title mb-20">
            
            {item.title}
          </h4>
          <div className="bd-room-details__list">
            <ul>
              {item?.features?.map((data) => (
                <li key={data.id}>
                  <i className="flaticon-check-circle"></i>
                  {data.feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
    );
};

export default ServiceFacility;
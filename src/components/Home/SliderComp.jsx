import React from "react";
import Slider from "react-slick";

export default function SliderComp() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
      };
      
  return (
   <div className="container mx-auto mt-8 rounded bg-gray-100 px-6">
      <Slider {...settings}>
        <div className="!flex  mt-20 justify-center bg-gray items-center">
          <div className="mx-auto">
            <div className="text-5xl font-bold">En Kaliteli Ayakkabılar</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              quia asperiores, cupiditate similique vero natus esse voluptates
              consequuntur sit ipsa.
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex justify-center bg-gray-200 mt-4 hover:bg-gray-300 transition-all items-center">İncele</div>          </div>
          <img
          
            src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/e26f0e3b-b064-455d-9663-bcaeefad1df3/air-force-1-gen%C3%A7-ayakkab%C4%B1s%C4%B1-zvkc5q.png"
            alt=""
            className="w-[500px] object-contain h-full"
          />
        </div>
        <div  className="!flex  mt-20 justify-center bg-gray items-center">
        <div className="mx-auto">
            <div className="text-5xl font-bold">Nike Airforce 1</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              quia asperiores, cupiditate similique vero natus esse voluptates
              consequuntur sit ipsa.
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex justify-center bg-gray-200 mt-4 hover:bg-gray-300 transition-all items-center">İncele</div>
          </div>
          <img
            src="	https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/0a588d2e-8d93-4937-8091-ec1270a953cf/air-force-1-shadow-ayakkab%C4%B1s%C4%B1-fNw903.png"
            alt="" 
            className="w-[500px] h-full object-contain"
          />
        </div>
      </Slider>
    </div>
  );
}

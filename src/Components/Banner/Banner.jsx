//import React from 'react';
////import BannerImg from "../../assets/1photo.jpg";
//import BannerImg from "../../assets/1photo.jpg";
//import {GrSecure} from "react-icons/gr";
//import {IoFastFood} from "react-icons/io5";
//import {GiFoodTruck} from "react-icons/gi";
//const Banner = () => {
//  return (
//	<div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 ">
//		<div className="container">
//			<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
//				<div data-aos="zoom-in">
//					<img className="max-w-[400px] h-[350px] w-full-auto object-cover" src={BannerImg} alt="Banner img" />
//				</div>
//				<picture>
//					<source media="(min-width: )" srcset="" />
//					<img src="" alt="" />
//				</picture>
//				<div className="flex flex-col justipy-center gap-6 sm:pt-0">
//					<h1 data-aos="fade-up" 
//					className="text-3xl sm:text-4xl font-bold">Winter Sale upto 50% off</h1>
//					<p data-aos="fade-up" className="text-sm text-gray-500 tracking-wide leading-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, facilis! Labore saepe neque voluptate magnam!
//					</p>
//					<div className="flex flex-cold gap-4">
//						<div data-aos="fade-up" className='flex items-center gap-4'>
//							<GrSecure className="text-4x1 h-12 w-12 shdow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400"/>
//							<p>Quality Products</p>					
//						</div>
//						<div data-aos="Fade-up" className="flex items-center gap-4">
//								<IoFastFood className="text-4x1 h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400"/>
//								<p>Fast Delivery</p>
//							</div>
//							<div data-aos="Fade-up" className="flex items-center gap-4">
//								<GiFoodTruck className="text-4x1 h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400"/>
//								<p>Easy Payment Method</p>
//							</div>
//							<div data-aos="Fade-up" className="flex items-center gap-4">
//								<GiFoodTruck className="text-4x1 h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400"/>
//								<p>Get Offers</p>
//							</div>
//					</div>
//				</div>
//			</div>
//		</div>
//	</div>
//  );
//};

//export default Banner;


import React from "react";
import BannerImg from "../../assets/1photo.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* Image Section */}
          <div data-aos="zoom-in">
            <img
              className="max-w-[400px] h-[350px] w-full object-cover"
              src={BannerImg}
              alt="Banner img"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-4xl font-bold"
            >
              Winter Sale up to 50% off
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-5"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus,
              facilis! Labore saepe neque voluptate magnam!
            </p>

            {/* Feature Icons */}
            <div className="flex flex-col gap-4">
              <div
                data-aos="fade-up"
                className="flex items-center gap-4"
              >
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Quality Products</p>
              </div>

              <div
                data-aos="fade-up"
                className="flex items-center gap-4"
              >
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Fast Delivery</p>
              </div>

              <div
                data-aos="fade-up"
                className="flex items-center gap-4"
              >
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Easy Payment Method</p>
              </div>

              <div
                data-aos="fade-up"
                className="flex items-center gap-4"
              >
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

//import React from 'react'
//import Img1 from "../../assets/women.jpg";
//import Img2 from "../../assets/womenn.jpg";
//import Img3 from "../../assets/women3.jpg";
//import Img4 from "../../assets/women4.jpg";
//import {faStar} from "react-icons/fa";
//import { BiColor } from 'react-icons/bi';

//const ProductsData = [
//	{
//		id: 1,
//		img: Img1,
//		title: "Women Ethnic",
//		rating:5.0,
//		color: "white",
//		aosDelay: "0",
//	},
//	{
//		id: 2,
//		img: Img2,
//		title: "Women Western",
//		rating:4.0,
//		color: "Red",
//		aosDelay: "200",
//	},
//	{
//		id: 3,
//		img: Img3,
//		title: "Women Goggles",
//		rating:4.5,
//		color: "Brown",
//		aosDelay: "400",
//	},
//	{
//		id: 4,
//		img: Img4,
//		title: "Women Ethnic",
//		rating:4.2,
//		color: "Yellow",
//		aosDelay: "600",
//	},
	
//]
//const Prodects = () => {
//  return <div className="mt-14 mb-12">
//	<div className="container">
//		<div className="text-center mb-10 max-w-[600px] mx-auto">
//			<p data-aos="fade-up" className="text-sm text-primary">Top Selling Products for you</p>
//			<h1 data-aos="fade-up" className="text-3xl font-bold">
//				Products
//			</h1>
//			<p data-aos="fade-up" className="text-x5 text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic saepe incidunt sunt!	
//			</p>
//		</div>
//		<div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
//			{ProductsData.map((data)=>(
//				<div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.img} alt="Cover image" className="h-[220px] w-[150px] object-cover rounded-md">
//					<div>
//						<h3 className="font-semibold"> {data.title}</h3>
//						<p className="text-sm text-gray-600">{data.color}</p>
//						<div className="flex items-center gap-1" >
//							<faStar className="text-yello-400"/>
//							<span>{data.rating}</span>
//						</div>
//					</div>
//				</div>
//			))}
//		</div>
//		<div className="flex justify-center">
//			<button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">View All button</button>
//		</div>
//	</div>
//  </div>
  
//};

//export default Prodects;

import React from 'react';
import Img1 from "../../assets/women.jpg";
import Img2 from "../../assets/womenn.jpg";
import Img3 from "../../assets/women3.jpg";
//import Img4 from "../../assets/women4.jpg";
import { FaStar } from "react-icons/fa"; // Correct capitalization
//import { BiColor } from 'react-icons/bi';
const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "White",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women Western",
    rating: 4.0,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Women Goggles",
    rating: 4.5,
    color: "Brown",
    aosDelay: "400",
  },
//  {
//    id: 4,
//    img: Img4,
//    title: "Women Ethnic",
//    rating: 4.2,
//    color: "Yellow",
//    aosDelay: "600",
//  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container mx-auto">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
          <p data-aos="fade-up" className="text-sm text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic saepe incidunt sunt!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              className="p-4 bg-white rounded-md shadow-md w-full max-w-[200px]"
            >
              <img
                src={data.img}
                alt={`${data.title} image`}
                className="h-[180px] w-full object-cover rounded-md mb-3"
              />
              <h3 className="font-semibold text-lg">{data.title}</h3>
              <p className="text-sm text-gray-600">{data.color}</p>
              <div className="flex items-center gap-1 text-yellow-400">
                <FaStar />
                <span className="text-gray-700">{data.rating}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="text-center mt-10 bg-primary text-white py-2 px-6 rounded-md hover:bg-primary-dark transition-all">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;


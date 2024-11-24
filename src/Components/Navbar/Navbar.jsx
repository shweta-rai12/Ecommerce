import React from 'react'
import {IoMdSearch} from "react-icons/io";
import { FaShoppingCart } from 'react-icons/fa';
import { FaCaretDown } from 'react-icons/fa';
import {FiShoppingBag} from "react-icons/fi";
import DarkMode from './DarkMode';

const Menu = [
	{
	id: 1,
	name: "Home",
	link:"/#",
	},
	{
		id: 2,
		name: "Top Rated",
		link:"/#services",
	},
	{
		id: 3,
		name: "Kids Wear",
		link:"/#",
	},
	{
		id: 3,
		name: "Mens Wear",
		link:"/#",
	},
	{
		id: 1,
		name: "Electronics",
		link:"/#",
	},

];

const Dropdownlist = [
	{
		id: 1,
		name: "Tranding Products",
		link:"/#",
	},
	{
		id: 1,
		name: "Best Selling",
		link:"/#",
	},
]

const Navbar = ({HandleOrderPopup}) => {
  return (
	<div className="Shadow-md bg-white dark:bg-text-white duration-200 relative z-40">
		<div className="bg-primary/40 py-2">
		<div className="container flex justify-between items-center">
			<div>
				<a href="#" className="font-bold" text-xl items-center flex gap-1>
				<FiShoppingBag size="30"/>
				ShopMe
				</a>
			</div>

			<div className="flex justify-between items-center gap-4">
				<div className="relative group hidden sm:block">
					<input type="text" placeholder="Search" className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-lg border border-gray-300 py-1 px-2 text-sm focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-slate-800"/>
					
					<IoMdSearch className="text-slate-800 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3"/>
				</div>
				<button onClick={() => {
					HandleOrderPopup();
				}}
				className="bg-gradient-to-t from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
				>
					<span className="group-hover:block hidden transition-all duration-200">Order</span>
					<FaShoppingCart className="text-xl text- drop-shadow-sm cursor-pointer"/>
					<div>
						<DarkMode/>
					</div>
					
				</button>
			</div>
		</div>
		</div>
		<div data-aos="zoom-in" className="flex justify-center">
			<ul className='sm:flex hidden items-center gap-4'>
				{Menu.map((data)=>(
					<li key={data.id}>
						<a href={data.link} className="inline-block px-4 hover:text-primary duration-200">
							{data.name}
						</a>
					</li>
				))}
				
				<li className="group relative cursor-pointer">
					<a href="#" className="flex items-center gap-[2px] py-2">
						Tranding Products
						<span>
						<FaCaretDown className="transition-all duration-200 group-hover:rotate-180"/>
						</span>
					</a>
					<div className="absolute z-[9999]hidden group-hover:block w-[200px] rounded-md  p-2 text-black shadow-md">  {/* bg-white */}
						<ul>
							{Dropdownlist.map((data)=>{
								<li key={data.id}>
									<a href={data.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/20">
									{data}
									</a>
								</li>
							})}
						</ul>
					</div>
				</li>
			</ul>
		</div>
	</div>
  )
};

export default Navbar;

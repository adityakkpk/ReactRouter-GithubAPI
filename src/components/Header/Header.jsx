import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {

    const [isHide, setIsHide] = useState(true)

    const handleClick = () => {
        setIsHide(!isHide);
    }

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/ReactRouter-GithubAPI/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>

                    {/* Menu Button  */}
                    <button 
                        class="lg:hidden focus:outline-none"
                        onClick={handleClick}
                    >
                        <svg class="h-6 w-10 ml-20 text-gray-800" fill="none" viewBox="0 0 24 22" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                    
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/ReactRouter-GithubAPI/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/ReactRouter-GithubAPI/user/aditya"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                    {/* Menu */}
                    <div class={` ${ isHide ? "hidden" : "block" } lg:hidden w-full lg:w-auto lg:order-1`} id='menu'>
                        <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Link activeclassname="text-orange-700" class="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0" to="/ReactRouter-GithubAPI/">Home</Link>
                            </li>
                            <li>
                                <Link activeclassname="text-orange-700" aria-current="page" class="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 active" to="/ReactRouter-GithubAPI/user/aditya">GitHub</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}



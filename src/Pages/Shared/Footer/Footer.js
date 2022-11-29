import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="footer bg-[#b14666] py-8">
            <div className="container mx-auto mb-5">
                <div className="footer__section grid md:grid-cols-3 gap-10">
                    <div className="item">
                        <div className="logo__section">
                            <div className="logo__section w-80 flex justify-between items-center mb-4">
                                <Link to={"/"}>
                                    <Link to='/'><h1 className="bg-[#b5bdcf]">Easy-Resale</h1></Link>
                                </Link>
                            </div>
                            <div>
                                <p className="text-slate-300 text-sm">
                                    This website Build ReactJs, ExpressJS, NodeJS, MongoDB &
                                    Tailwind CSS. If you have any question you can visit linkdin:<ul>{"https://www.linkedin.com/in/fahim-numan-1587a3161/ "}</ul> or call :
                                    {"01918647966 "}
                                    or email: fahiomnuman87@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="logo__section">
                            <h3 className="text-slate-100 text-lg font-semibold">
                                Important Link
                            </h3>
                            <ul className="mt-3">
                                <li className="text-slate-300 text-sm">
                                    <Link to={"/"} className="inline-block py-1">
                                        <BsFillArrowRightCircleFill className="inline text-[#FBBF24] mb-1 mr-2" />
                                        Home
                                    </Link>
                                </li>
                                <li className="text-slate-300 text-sm">
                                    <Link to={"/showproduct"} className="inline-block py-1">
                                        <BsFillArrowRightCircleFill className="inline text-[#FBBF24] mb-1 mr-2" />
                                        All Ads
                                    </Link>
                                </li>

                                <li className="text-slate-300 text-sm">
                                    <Link to={"/blog"} className="inline-block py-1">
                                        <BsFillArrowRightCircleFill className="inline text-[#FBBF24] mb-1 mr-2" />
                                        Blog
                                    </Link>
                                </li>
                                <li className="text-slate-300 text-sm">
                                    <Link to={"/login"} className="inline-block py-1">
                                        <BsFillArrowRightCircleFill className="inline text-[#FBBF24] mb-1 mr-2" />
                                        My Account
                                    </Link>
                                </li>
                                <div className="footer__copywriter">
                                    <div className="container mx-auto">
                                        <div className="flex justify-center items-center mt-5">
                                            <p className="text-slate-300 text-sm">
                                                © 2022 easy-resale. Design & developed with by

                                                Fahim Numan

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className="item">
                        <div className="logo__section">
                            <h3 className="text-slate-100 text-lg font-semibold ">
                                Newsletter
                            </h3>
                            <p className="text-slate-300 text-sm mt-3">
                                Sign up and receive the latest tips via email.
                            </p>
                            <label class="block mt-2">
                                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-300">
                                    Email
                                </span>
                                <input
                                    type="email"
                                    name="email"
                                    class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                    placeholder="you@example.com"
                                />
                            </label>

                            <Link
                                href=""
                                className="btn-primary inline-block py-2 px-8 rounded-lg bg-[#7e22ce] text-slate-200 hover:text-slate-50"
                            >
                                Subscribe
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <hr />


        </div>
    );
};

export default Footer;
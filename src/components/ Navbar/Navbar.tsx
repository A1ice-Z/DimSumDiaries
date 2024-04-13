import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import SearchBox from "../Search /SearchBox";

const Navbar = () => {
    const [visibleSearch, setVisibleSearch] = useState<boolean>(false);

    return (
        <>
            {visibleSearch && (
                <div>
                    <div
                        onClick={() => setVisibleSearch(false)}
                        className="absolute z-50 w-full h-full bg-black bg-opacity-50 overflow-hidden"
                    ></div>
                    <div className="flex justify-center top-[20%] w-full absolute z-50">
                        <SearchBox closeFunc={setVisibleSearch} />
                    </div>
                </div>
            )}
            <nav className="w-full h-[150px] px-[4%] justify-center flex">
                <div className="flex justify-start w-full">
                    <Link to={"/"}>
                        <div className="flex h-full items-center">
                            <img
                                className="w-[100px] h-[100px]"
                                src="/DimSum.svg"
                                alt="DimSum"
                                draggable="false"
                            />
                            <p className="font-palatino text-[24px]">
                                DimSumDiaries
                            </p>
                        </div>
                    </Link>
                </div>
                <div>
                    <FiSearch
                        onClick={() => setVisibleSearch(true)}
                        className="text-black text-[38px] h-full items-center cursor-pointer"
                    />
                </div>
            </nav>
        </>
    );
};

export default Navbar;

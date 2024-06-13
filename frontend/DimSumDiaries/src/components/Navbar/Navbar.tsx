import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import SearchBox from "../Search/SearchBox";
import useOnclickOutside from "react-cool-onclickoutside";

const Navbar = () => {
    const [visibleSearch, setVisibleSearch] = useState<boolean>(false);
    const ref = useOnclickOutside(() => {
        setScrollLock("visible");
        setVisibleSearch(false);
    });

    const setScrollLock = (overflow: "hidden" | "visible") => {
        document.body.style.overflow = overflow;
    };

    const onClickSearch = () => {
        setScrollLock("hidden");
        setVisibleSearch(true);
    };

    return (
        <>
            {visibleSearch && (
                <div>
                    <div className="absolute z-50 w-full h-[100vh] bg-black bg-opacity-80 overscroll-contain"></div>
                    <div className="flex justify-center top-[20%] w-full absolute z-50">
                        <div ref={ref}>
                            <SearchBox />
                        </div>
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
                        onClick={() => onClickSearch()}
                        className="text-black text-[38px] h-full items-center cursor-pointer"
                    />
                </div>
            </nav>
        </>
    );
};

export default Navbar;

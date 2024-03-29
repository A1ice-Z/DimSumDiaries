import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
    return (
        <>
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
                    <FiSearch className="text-black text-[38px] h-full items-center" />
                </div>
            </nav>
        </>
    );
};

export default Navbar;

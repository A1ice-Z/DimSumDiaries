import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";

const Footer = () => {
    return (
        <>
            <footer className="w-full h-[150px] px-[4%] justify-center flex font-palatino">
                <div className="flex justify-start w-full">
                    <Link to={"/"}>
                        <div className="flex h-full items-center">
                            <img
                                className="w-[100px] h-[100px]"
                                src="/DimSum.svg"
                                alt="DimSum"
                                draggable="false"
                            />
                            <p className=" text-[24px]">DimSumDiaries</p>
                        </div>
                    </Link>
                </div>
                <div className=" h-full">
                    <div className="flex h-full items-center">
                        <div className="w-[120px]">
                            <div className="flex gap-1 items-center">
                                <p className="">Made with</p>
                                <FiHeart className="-" />
                            </div>
                            <p>
                                By{" "}
                                <span className="font-bold">Alice Zheng</span>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;

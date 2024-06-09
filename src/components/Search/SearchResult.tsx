import { Link } from "react-router-dom";

interface SearchResult {
    id: string;
    imageSrc: string;
    recipeName: string;
}

const SearchResult = ({ id, imageSrc, recipeName }: SearchResult) => {
    return (
        <>
            <Link to={`/recipe/${id}`}>
                <div className="w-[850px] h-[180px] rounded-md overflow-hidden group font-palatino">
                    <div className="flex">
                        <div className="flex justify-start h-full z-[50] px-2 py-2">
                            <img
                                className="w-[50px] h-[50px]"
                                src="/DimSum.svg"
                                alt="DimSum"
                                draggable="false"
                            />
                        </div>
                        <div className="flex justify-end w-full">
                            <p className="group-hover:text-[25px] text-gray font-bold text-2xl text-end px-4 pt-4 z-50 relative">
                                <span className="bg-cream px-8 py-2 group-hover:bg-opacity-95 transition-all">
                                    {recipeName}
                                </span>
                            </p>
                        </div>
                    </div>

                    <img
                        className="-translate-y-[200px] w-[850px] relative group-hover:scale-105 filter-none transition-all delay-75 object-cover"
                        src={imageSrc}
                        alt="image"
                    />
                </div>
            </Link>
        </>
    );
};

export default SearchResult;

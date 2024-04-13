import { Link } from "react-router-dom";

interface SearchResult {
    imageSrc: string;
    recipeName: string;
    closeFunc: Function;
}

const SearchResult = ({ imageSrc, recipeName, closeFunc }: SearchResult) => {
    return (
        <>
            <Link onClick={() => closeFunc(false)} to={`/recipe/${recipeName}`}>
                <div className="w-[850px] h-[160px] rounded-md overflow-hidden object-cover group">
                    <p className="text-white font-extrabold text-3xl text-end px-4 pt-2 z-50 relative">
                        <span className="drop-shadow-lg ">{recipeName}</span>
                    </p>
                    <img
                        className="-translate-y-[140px] relative group-hover:filter-none grayscale transition-all delay-75"
                        src={imageSrc}
                        alt="image"
                    />
                </div>
            </Link>
        </>
    );
};

export default SearchResult;

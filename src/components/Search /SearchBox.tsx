import { useEffect, useState } from "react";
import Field from "../Field/Field";
import SearchResult from "./SearchResult";

interface SearchBoxProps {
    closeFunc: Function;
}

const SearchBox = ({ closeFunc }: SearchBoxProps) => {
    const [fieldValue, setFieldValue] = useState<string>("");
    const [results, setResults] = useState<Array<string>>([""]);

    useEffect(() => {
        if (fieldValue.length <= 0) {
            return;
        }
    }, [fieldValue]);

    return (
        <>
            <div className="z-50 w-[900px] h-fit bg-white shadow-lg rounded-md pt-8 pb-6">
                <div className="w-full">
                    <Field
                        placeholder="Search for a recipe..."
                        value={fieldValue}
                        setValue={setFieldValue}
                    />
                    <div className="flex flex-row justify-center py-2">
                        <div className="w-[94%] h-[2px] bg-gray-default "></div>
                    </div>
                    {fieldValue.length > 0 && (
                        <div className="flex flex-row justify-center">
                            <div className="flex flex-col gap-y-[40px] mt-2 max-h-[400px] overflow-y-scroll">
                                {results.map((series) => (
                                    <SearchResult
                                        closeFunc={closeFunc}
                                        key={series}
                                        recipeName={series}
                                        imageSrc={""}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default SearchBox;

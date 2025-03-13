import { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";
interface SearchInputProps {
    onChange: (searchTerm: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onChange }) => {
    const [inputValue, setInputValue] = useState("");
    const debouncedValue = useDebounce(inputValue, 300);

    useEffect(() => {
        onChange(debouncedValue);
    }, [debouncedValue, onChange]);

    return (
        <input
            type="text"
            className="search-input"
            placeholder="Search..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        />
    );
};

export default SearchInput;

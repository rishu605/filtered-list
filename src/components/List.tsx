import { useState } from "react";
import { User } from "../data/data";
import SearchInput from "./SearchInput";
import SortOptions from "./SortOptions";
import FilterOptions from "./FilterOptions";
import ActiveFilterOptions from "./ActiveFilterOptions";
import Table from "./Table";
import useFilteredList from "../hooks/useFilteredList";

type SortKey = {
    field: string;
    order: "asc" | "desc";
};

const List = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [filterKey, setFilterKey] = useState<string>("");
    const [sortKey, setSortKey] = useState<SortKey | null>(null);
    const [activeState, setActiveState] = useState<string>("");

    // Use custom hook to get filtered and sorted list
    const listData: User[] = useFilteredList(searchTerm, filterKey, sortKey, activeState);

    return (
        <div>
            <h1>Users</h1>
            <SearchInput onChange={setSearchTerm} />
            <SortOptions onChange={setSortKey} />
            <FilterOptions onChange={setFilterKey} />
            <ActiveFilterOptions onChange={setActiveState} />
            <Table listData={listData} />
        </div>
    );
};

export default List;

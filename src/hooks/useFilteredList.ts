import { useEffect, useState } from "react";
import { users, User } from "../data/data";

type SortKey = {
    field: keyof User;
    order: "asc" | "desc";
};

const useFilteredList = (
    searchTerm: string,
    filterKey: string,
    sortKey: SortKey | null,
    activeState: string
) => {
    const [filteredList, setFilteredList] = useState<User[]>(users);

    useEffect(() => {
        let newList: User[] = [...users];

        if (searchTerm) {
            newList = newList.filter((item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (filterKey) {
            newList = newList.filter((item) => item.role.toLowerCase() === filterKey);
        }

        if (activeState) {
            newList = newList.filter((item) => String(item.isActive) === activeState);
        }

        if (sortKey) {
            newList.sort((a, b) => {
                const { field, order } = sortKey;
                if (a[field] < b[field]) return order === "asc" ? -1 : 1;
                if (a[field] > b[field]) return order === "asc" ? 1 : -1;
                return 0;
            });
        }

        setFilteredList(newList);
    }, [searchTerm, sortKey, filterKey, activeState]);

    return filteredList;
};

export default useFilteredList;

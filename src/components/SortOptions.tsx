interface SortOptionsProps {
    onChange: (value: { field: string; order: "asc" | "desc" }) => void;
}

const SortOptions: React.FC<SortOptionsProps> = ({ onChange }) => {
    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const [field, order] = e.target.value.split("_");
        onChange({ field, order: order as "asc" | "desc" });
    };

    return (
        <select onChange={handleSortChange}>
            <option value="">Sort by</option>
            <option value="name_asc">Name (A-Z)</option>
            <option value="name_desc">Name (Z-A)</option>
            <option value="age_asc">Age (Ascending)</option>
            <option value="age_desc">Age (Descending)</option>
            <option value="role_asc">Role (A-Z)</option>
            <option value="role_desc">Role (Z-A)</option>
        </select>
    );
};

export default SortOptions;

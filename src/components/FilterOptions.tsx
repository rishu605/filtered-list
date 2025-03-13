interface FilterOptionsProps {
    onChange: (value: string) => void;
}

const FilterOptions: React.FC<FilterOptionsProps> = ({ onChange }) => {
    return (
        <select onChange={(e) => onChange(e.target.value)}>
            <option value="">Filter by Role</option>
            <option value="engineer">Engineer</option>
            <option value="designer">Designer</option>
            <option value="manager">Manager</option>
            <option value="hr">HR</option>
        </select>
    );
};

export default FilterOptions;

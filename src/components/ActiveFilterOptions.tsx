interface ActiveFilterOptionsProps {
    onChange: (value: string) => void;
}

const ActiveFilterOptions: React.FC<ActiveFilterOptionsProps> = ({ onChange }) => {
    return (
        <select onChange={(e) => onChange(e.target.value)}>
            <option value="">Filter by Active Status</option>
            <option value="true">Is Active</option>
            <option value="false">Is Not Active</option>
        </select>
    );
};

export default ActiveFilterOptions;

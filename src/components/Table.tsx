import { User } from "../data/data";

interface TableProps {
    listData: User[];
}

const Table: React.FC<TableProps> = ({ listData }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Role</th>
                    <th>Is Active</th>
                </tr>
            </thead>
            <tbody>
                {listData.map(({ id, name, age, role, isActive }) => (
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{age}</td>
                        <td>{role}</td>
                        <td>{isActive ? "Yes" : "No"}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;

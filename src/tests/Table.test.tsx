import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Table from "../components/Table";
import { User } from "../data/data";

const mockUsers: User[] = [
    { id: 1, name: "Alice", age: 25, role: "engineer", isActive: true },
    { id: 2, name: "Bob", age: 30, role: "designer", isActive: false },
];

describe("Table Component", () => {
    test("renders table with correct headers", () => {
        render(<Table listData={mockUsers} />);
        expect(screen.getByText("ID")).toBeInTheDocument();
        expect(screen.getByText("Name")).toBeInTheDocument();
        expect(screen.getByText("Age")).toBeInTheDocument();
        expect(screen.getByText("Role")).toBeInTheDocument();
        expect(screen.getByText("Is Active")).toBeInTheDocument();
    });

    test("renders correct number of rows", () => {
        render(<Table listData={mockUsers} />);
        expect(screen.getAllByRole("row")).toHaveLength(mockUsers.length + 1); // +1 for header row
    });

    test("displays correct user data", () => {
        render(<Table listData={mockUsers} />);
        expect(screen.getByText("Alice")).toBeInTheDocument();
        expect(screen.getByText("Bob")).toBeInTheDocument();
        expect(screen.getByText("engineer")).toBeInTheDocument();
        expect(screen.getByText("designer")).toBeInTheDocument();
        expect(screen.getByText("Yes")).toBeInTheDocument();
        expect(screen.getByText("No")).toBeInTheDocument();
    });
});

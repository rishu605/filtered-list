import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import FilterOptions from "../components/FilterOptions";

describe("FilterOptions Component", () => {
    test("renders filter options", () => {
        render(<FilterOptions onChange={() => {}} />);
        expect(screen.getByText("Filter by Role")).toBeInTheDocument();
    });

    test("calls onChange when role is selected", () => {
        const mockOnChange = vi.fn();
        render(<FilterOptions onChange={mockOnChange} />);

        const select = screen.getByRole("combobox");
        fireEvent.change(select, { target: { value: "engineer" } });

        expect(mockOnChange).toHaveBeenCalledWith("engineer");
    });
});

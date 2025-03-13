import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import SortOptions from "../components/SortOptions";
import { User } from "../data/data";

describe("SortOptions Component", () => {
    test("renders sort options", () => {
        render(<SortOptions onChange={() => {}} />);
        expect(screen.getByText("Sort by")).toBeInTheDocument();
    });

    test("calls onChange with correct sort key", () => {
        const mockOnChange = vi.fn();
        render(<SortOptions onChange={mockOnChange} />);

        const select = screen.getByRole("combobox");
        fireEvent.change(select, { target: { value: "name_asc" } });

        expect(mockOnChange).toHaveBeenCalledWith({ field: "name", order: "asc" });
    });
});

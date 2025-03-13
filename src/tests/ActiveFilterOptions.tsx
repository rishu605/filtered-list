import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import ActiveFilterOptions from "../components/ActiveFilterOptions";

describe("ActiveFilterOptions Component", () => {
    test("renders active filter options", () => {
        render(<ActiveFilterOptions onChange={() => {}} />);
        expect(screen.getByText("Filter by Active Status")).toBeInTheDocument();
    });

    test("calls onChange when status is selected", () => {
        const mockOnChange = vi.fn();
        render(<ActiveFilterOptions onChange={mockOnChange} />);

        const select = screen.getByRole("combobox");
        fireEvent.change(select, { target: { value: "true" } });

        expect(mockOnChange).toHaveBeenCalledWith("true");
    });
});

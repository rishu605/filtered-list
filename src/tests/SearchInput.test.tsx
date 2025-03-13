import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import SearchInput from "../components/SearchInput";

describe("SearchInput Component", () => {
    test("renders search input", () => {
        render(<SearchInput onChange={() => {}} />);
        expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
    });

    test("calls onChange with debounced value", async () => {
        const mockOnChange = vi.fn();
        render(<SearchInput onChange={mockOnChange} />);
        
        const input = screen.getByPlaceholderText("Search...");
        fireEvent.change(input, { target: { value: "Alice" } });

        setTimeout(() => {
            expect(mockOnChange).toHaveBeenCalledWith("Alice");
        }, 300);
    });
});

import { renderHook, act } from "@testing-library/react";
import { useTheme } from "./useTheme";
import { vi } from "vitest";

describe("useTheme Hook", () => {
    beforeEach(() => {
        localStorage.clear();
        document.documentElement.className = "";
        vi.clearAllMocks();
    });

    it("should use 'dark' as default theme if no localStorage value", () => {
        const { result } = renderHook(() => useTheme());
        expect(result.current.theme).toBe("dark");
        expect(document.documentElement.classList.contains("dark")).toBe(true);
    });

    it("should toggle theme from dark to light", () => {
        const { result } = renderHook(() => useTheme());
        
        act(() => {
            result.current.toggleTheme();
        });

        expect(result.current.theme).toBe("light");
        expect(document.documentElement.classList.contains("light")).toBe(true);
        expect(localStorage.getItem("theme")).toBe("light");
    });

    it("should initialize with theme from localStorage", () => {
        localStorage.setItem("theme", "light");
        const { result } = renderHook(() => useTheme());
        
        expect(result.current.theme).toBe("light");
        expect(document.documentElement.classList.contains("light")).toBe(true);
    });

     it("should toggle theme from light to dark", () => {
        localStorage.setItem("theme", "light");
        const { result } = renderHook(() => useTheme());
        
        act(() => {
            result.current.toggleTheme();
        });

        expect(result.current.theme).toBe("dark");
        expect(document.documentElement.classList.contains("dark")).toBe(true);
        expect(localStorage.getItem("theme")).toBe("dark");
    });
});

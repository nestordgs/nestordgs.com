import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { useTheme, getInitialTheme } from "./useTheme";

describe("useTheme Hook", () => {
    let originalWindow: Window & typeof globalThis;

    beforeEach(() => {
        // Mock localStorage
        Object.defineProperty(globalThis, 'localStorage', {
            value: {
                getItem: vi.fn(),
                setItem: vi.fn(),
            },
            writable: true
        });
        // Reset window document
        document.documentElement.className = "";
        vi.restoreAllMocks();
        // Ensure window is defined for most tests
        originalWindow = globalThis.window;
        Object.defineProperty(globalThis, 'window', { value: originalWindow, writable: true });
    });

    afterEach(() => {
        // Restore original window after each test
        Object.defineProperty(globalThis, 'window', { value: originalWindow, writable: true });
    });

    it("should use 'dark' as default theme if no localStorage value", () => {
        const { result } = renderHook(() => useTheme());
        expect(result.current.theme).toBe("dark");
    });

    it("should toggle theme from dark to light", () => {
        const { result } = renderHook(() => useTheme());
        expect(result.current.theme).toBe("dark");
        
        act(() => {
            result.current.toggleTheme();
        });

        expect(result.current.theme).toBe("light");
        expect(document.documentElement.classList.contains("light")).toBe(true);
        expect(localStorage.setItem).toHaveBeenCalledWith("theme", "light");
    });

    it("should initialize with theme from localStorage", () => {
        (localStorage.getItem as any).mockReturnValue("light");
        const { result } = renderHook(() => useTheme());
        
        expect(result.current.theme).toBe("light");
        expect(document.documentElement.classList.contains("light")).toBe(true);
    });

     it("should toggle theme from light to dark", () => {
        (localStorage.getItem as any).mockReturnValue("light");
        const { result } = renderHook(() => useTheme());
        
        act(() => {
            result.current.toggleTheme();
        });

        expect(result.current.theme).toBe("dark");
        expect(document.documentElement.classList.contains("dark")).toBe(true);
        expect(localStorage.setItem).toHaveBeenCalledWith("theme", "dark");
    });

    it("should fallback to 'dark' if window is undefined (SSR)", () => {
        Object.defineProperty(globalThis, 'window', { value: undefined, writable: true });
        
        // Test the pure function directly, avoiding React render issues with undefined window
        const theme = getInitialTheme();
        expect(theme).toBe("dark");
    });
});

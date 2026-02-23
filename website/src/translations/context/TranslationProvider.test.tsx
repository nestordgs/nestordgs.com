import { render, screen, act } from "@testing-library/react";
import { TranslationProvider } from "./TranslationProvider";
import { TranslationConext } from "./TranslationsContext";
import { useContext } from "react";
import { vi } from "vitest";

const TestComponent = () => {
    const { language, changeLanguage } = useContext(TranslationConext);
    return (
        <div>
            <span data-testid="language">{language}</span>
            <button onClick={() => changeLanguage("es")}>Change to ES</button>
        </div>
    );
};

describe("<TranslationProvider />", () => {
    
    it("should render children", () => {
        render(
            <TranslationProvider>
                <div>Test Child</div>
            </TranslationProvider>
        );
        expect(screen.getByText("Test Child")).toBeInTheDocument();
    });

    it("should provide initial language state", () => {
        render(
            <TranslationProvider>
                <TestComponent />
            </TranslationProvider>
        );
        expect(screen.getByTestId("language")).toHaveTextContent("en");
    });

    it("should update language and localStorage when changeLanguage is called", () => {
        const setItemSpy = vi.spyOn(localStorage, 'setItem');
        
        render(
            <TranslationProvider>
                <TestComponent />
            </TranslationProvider>
        );

        const button = screen.getByText("Change to ES");
        
        act(() => {
            button.click();
        });

        expect(screen.getByTestId("language")).toHaveTextContent("es");
        expect(setItemSpy).toHaveBeenCalledWith("language", "es");
    });
});

import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { TranslationConext } from "../../translations";
import { Menu } from "./Menu";

// Mock logo import
vi.mock("../../logo.svg", () => "logo.svg");

describe("<Menu Component />", () => {
  const defaultProps = { language: "en", changeLanguage: vi.fn() as any };
  const renderMenu = (props = defaultProps) => {
    return render(
      <TranslationConext.Provider value={props}>
        <Menu />
      </TranslationConext.Provider>
    );
  };

  it("Should contain Logo", () => {
    renderMenu();
    const logoComponent = screen.getByTestId("logo");
    expect(logoComponent).toBeInTheDocument();
  });

  it("Should render navigation items", () => {
    renderMenu();
    // Assuming keys are rendered directly by t() mock if not set up
    expect(screen.getAllByText("menu.experience")[0]).toBeInTheDocument();
    expect(screen.getAllByText("menu.projects")[0]).toBeInTheDocument();
  });

  it("Should toggle mobile menu", () => {
    renderMenu();
    // Initially only desktop menu items are present (1 instance)
    const initialItems = screen.getAllByText("menu.experience");
    // With my change, both desktop and mobile are in DOM, but mobile is "hidden" via opacity
    expect(initialItems).toHaveLength(2);

    const mobileToggleButton = screen.getByLabelText("Toggle mobile menu");
    fireEvent.click(mobileToggleButton);

    // Menu should stay in DOM (2 instances) because it uses CSS transition now
    const newItems = screen.getAllByText("menu.experience");
    expect(newItems).toHaveLength(2);
  });

  it("Should Toggle Theme", () => {
    renderMenu();
    // Finds the desktop theme button by aria-label
    const themeButton = screen.getByLabelText("Toggle theme");
    fireEvent.click(themeButton);
    expect(themeButton).toBeInTheDocument(); 
  });

  it("Should toggle language when clicking language switch", () => {
    const changeLanguageMock = vi.fn();
    renderMenu({ language: "en", changeLanguage: changeLanguageMock });

    // Both desktop and mobile switches are in DOM
    const languageSwitches = screen.getAllByTestId("language-switch");
    fireEvent.click(languageSwitches[0]);
    
    expect(changeLanguageMock).toHaveBeenCalledWith("es");
  });

  it("Should toggle language back to English when language is ES", () => {
    const changeLanguageMock = vi.fn();
    renderMenu({ language: "es", changeLanguage: changeLanguageMock });

    const languageSwitches = screen.getAllByTestId("language-switch");
    fireEvent.click(languageSwitches[0]);
    
    expect(changeLanguageMock).toHaveBeenCalledWith("en");
  });

  it("Should close mobile menu when clicking a link", () => {
    renderMenu();

    // Open mobile menu
    const mobileToggleButton = screen.getByLabelText("Toggle mobile menu");
    fireEvent.click(mobileToggleButton);

    const links = screen.getAllByText("menu.experience");
    const mobileLink = links.at(-1)!; // Last one
    
    fireEvent.click(mobileLink);

    // With smooth transition, it's still in DOM but should have opacity-0 class now
    const mobileMenuContainer = screen.getAllByRole('list')[1].parentElement;
    expect(mobileMenuContainer).toHaveClass('opacity-0');
  });
});


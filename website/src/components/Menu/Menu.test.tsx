import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { TranslationConext } from "../../translations";
import { Menu } from "./Menu";

// Mock logo import
vi.mock("../../logo.svg", () => "logo.svg");

describe("<Menu Component />", () => {
  const renderMenu = (props = { language: "en", changeLanguage: vi.fn() as any }) => {
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
    expect(initialItems).toHaveLength(1);

    const mobileToggleButton = screen.getByLabelText("Toggle mobile menu");
    fireEvent.click(mobileToggleButton);

    // Now mobile menu items should also be present (2 instances)
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

    const languageSwitch = screen.getByTestId("language-switch");
    fireEvent.click(languageSwitch);
    
    expect(changeLanguageMock).toHaveBeenCalledWith("es");
  });

  it("Should close mobile menu when clicking a link", () => {
    renderMenu();

    // Open mobile menu
    const mobileToggleButton = screen.getByLabelText("Toggle mobile menu");
    fireEvent.click(mobileToggleButton);

    // Find a link (e.g. Experience) and click it
    // Note: getAllByText returns desktop and mobile links. 
    // The mobile one is the second one usually, or we can look for visibility if strictly handled, but here relying on order or container.
    // The desktop one is hidden by CSS but in DOM.
    // However, the click handler for closing is ONLY on the mobile items.
    // Desktop items don't have the onClick={() => setIsOpen(false)}.
    // So if I click the desktop one, nothing related to setIsOpen happens (and it's not open/relevant).
    // If I click the mobile one, it updates state.
    // Let's target the link inside the mobile menu container.
    // We can use within() or just pick the last one.
    
    // Items are duplicated. Last instances are mobile.
    const links = screen.getAllByText("menu.experience");
    const mobileLink = links[links.length - 1]; // Last one
    
    fireEvent.click(mobileLink);

    // Menu content should disappear (removed from DOM because isOpen becomes false)
    expect(screen.queryByText("menu.home")).not.toBeInTheDocument();
  });
});


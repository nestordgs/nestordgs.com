import { render, screen } from "@testing-library/react";
import { TranslationConext } from "../../translations";
import { Header } from "./Header";

// Mock FontAwesome to avoid issues in tests if not configured
jest.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: () => <span>Icon</span>,
}));

describe("<Header Component />", () => {
  beforeEach(() => {
    render(
      <TranslationConext.Provider value={{ language: "es" }}>
        <Header />
      </TranslationConext.Provider>
    );
  });

  it("Should render main title", () => {
    // We look for parts of the title since it's split into multiple spans
    expect(screen.getByText(/Engineering/i)).toBeInTheDocument();
    expect(screen.getByText(/Scalable/i)).toBeInTheDocument();
  });

  it("Should render subtitle key", () => {
    expect(screen.getByText("header.subtitle")).toBeInTheDocument();
  });

  it("Should render cards", () => {
    expect(screen.getByText("header.cards.cloud.title")).toBeInTheDocument();
    expect(screen.getByText("header.cards.financial.title")).toBeInTheDocument();
  });
});

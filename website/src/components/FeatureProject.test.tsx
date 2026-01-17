
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { FeatureProject } from "./FeatureProject";

// Mock FontAwesome
vi.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: () => <span>Icon</span>,
}));

describe("<FeatureProject Component />", () => {
  it("Should render with translation keys", () => {
    render(<FeatureProject />);
    
    // Check for title key
    expect(screen.getByText("feature_project.title")).toBeInTheDocument();
    
    // Check for category key
    expect(screen.getByText("feature_project.category")).toBeInTheDocument();
    
    // Check for project title key
    expect(screen.getByText("feature_project.project_title")).toBeInTheDocument();
    
    // Check for description key
    expect(screen.getByText("feature_project.description")).toBeInTheDocument();

    // Check for buttons
    expect(screen.getByText("feature_project.cta_view")).toBeInTheDocument();
  });

  it("Should open lightbox when clicking an image", () => {
    render(<FeatureProject />);

    // Get the first image wrapper by alt text of the image inside it
    const image = screen.getByAltText("LiftWiz Mobile View 1");
    
    // Click on the image (parent div has the handler, but clicking image propagates)
    fireEvent.click(image);

    // Check if lightbox appears (Expanded view image should be present)
    expect(screen.getByAltText("Expanded view")).toBeInTheDocument();
  });

  it("Should close lightbox when clicking close button", () => {
    render(<FeatureProject />);

    // Open lightbox first
    const image = screen.getByAltText("LiftWiz Mobile View 1");
    fireEvent.click(image);

    // Check if lightbox appeared
    expect(screen.getByAltText("Expanded view")).toBeInTheDocument();

    // Find close button (it contains '✕')
    const closeButton = screen.getByText("✕");
    fireEvent.click(closeButton);

    // Check if lightbox disappeared
    expect(screen.queryByAltText("Expanded view")).not.toBeInTheDocument();
  });
});

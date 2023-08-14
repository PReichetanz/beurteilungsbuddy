import { render, screen } from "@testing-library/react";
import Footer from ".";

describe("Footer Component", () => {
  test("displays links to home and impressum", () => {
    render(<Footer />);

    const homeLink = screen.getByRole("link", { name: /Beurteilungsbuddy/i });
    const impressumLink = screen.getByRole("link", { name: /Impressum/i });

    expect(homeLink).toBeInTheDocument();
    expect(impressumLink).toBeInTheDocument();
  });

  test("displays GitHub link with correct logo", () => {
    render(<Footer />);

    const githubLink = screen.getByRole("link", {
      name: /See project on GitHub/i,
    });
    const githubLogo = screen.getByAltText(/GitHub Logo/i);

    expect(githubLink).toBeInTheDocument();
    expect(githubLogo).toBeInTheDocument();
  });

  test("displays correct copyright information", () => {
    render(<Footer />);

    const copyright = screen.getByText(/© 2023 Paul Reichetanz/i);

    expect(copyright).toBeInTheDocument();
  });
});

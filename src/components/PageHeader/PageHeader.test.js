import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import PageHeader from "./PageHeader";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Tests for PageHeader", () => {
    it("renders with default props", () => {
        act(() => {
            render(<PageHeader />, container);
        });
        expect(container.textContent).toBe("Imaginary");
    });

    it("renders with the passed prop", () => {
        act(() => {
            render(<PageHeader text="React Photo App" />, container);
        });
        expect(container.textContent).toBe("React Photo App");
    });
});
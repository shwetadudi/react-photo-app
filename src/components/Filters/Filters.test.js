import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Provider from "../../utils/Provider";
import Filters from "./Filters";

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

describe("Test for Filters", () => {
    it("most liked filter calls the handler passed", () => {
        let props = {
            dispatch: jest.fn(),
            store: {
                filteredPhotos: [],
                filters: {
                    sortByMostLiked: true
                }
            }
        };

        act(() => {
            render(
                <Provider.Provider value={props}>
                    <Filters />
                </Provider.Provider>,
                container
            );
        });

        const mostLiked = document.querySelector("#mostLiked");

        act(() => {
            mostLiked.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });

        expect(props.dispatch).toHaveBeenCalledTimes(2);
    });
});
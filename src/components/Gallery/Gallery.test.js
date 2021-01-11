import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Provider from "../../utils/Provider";
import Gallery from "./Gallery";

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

describe("Tests for Gallery", () => {
    let props = {
        dispatch: jest.fn(),
        store: {
            filteredPhotos: []
        }
    };
    it("renders default messages if no photos are passed", () => {
        act(() => {
            render(
                <Provider.Provider value={props}>
                    <Gallery />
                </Provider.Provider>,
                container
            );
        });
        expect(container.textContent).toBe("Sorry, no results found matching your search criteria.");
    });

    it("renders correct number of photos", () => {
        let props = {
            dispatch: jest.fn(),
            store: {
                filteredPhotos: [{
                    id: 0,
                    category: "city",
                    url: "http://someurl.com/",
                    likes: 0,
                    comments: []
                }, {
                    id: 1,
                    category: "city",
                    url: "http://someurl.com/",
                    likes: 0,
                    comments: []
                }]
            }
        }
        act(() => {
            render(
                <Provider.Provider value={props}>
                    <Gallery />
                </Provider.Provider>,
                container
            );
        });
        expect(container.querySelectorAll(".photo").length).toBe(props.store.filteredPhotos.length);
    });
});
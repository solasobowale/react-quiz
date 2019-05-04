import React from "react";
import { mount } from "enzyme";

import WindowSize from "../Question7-WindowSize";

describe("Quiz", () => {
  beforeEach(() => {
    global.removeEventListener = jest.fn();
  });

  describe.skip("Question 7 - WindowSize", () => {
    it("removes the event handler on unmount", () => {
      const component = mount(<WindowSize />);

      const listener = jest.fn();
      component = mount(<WindowSize />);
      component.instance().handleWindowResize = listener;

      component.unmount();

      expect(global.removeEventListener).toHaveBeenCalledWith(
        "resize",
        listener
      );
    });
  });
});

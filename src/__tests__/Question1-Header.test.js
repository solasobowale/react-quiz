import React from "react";
import { mount } from "enzyme";

import Header from "../Question1-Header";

describe("Question 1", () => {
  it("renders", () => {
    const component = mount(<Header />);
    expect(component).not.toBeNull();
  });
});

import React from "react";
import { mount } from "enzyme";

import Quiz, { Monkeys } from "../Quiz";

describe("Quiz", () => {
  let component;
  let deferred;

  beforeEach(() => {
    deferred = defer();
    global.fetch = jest.fn().mockReturnValue(deferred.promise);
    component = mount(<Quiz />);
  });

  describe("Question 1", () => {
    it("renders", () => {
      expect(component).not.toBeNull();
    });
  });

  describe.skip("Question 2 - Lions", () => {
    it("renders an article with the class 'lions'", () => {
      expect(component.find("article.lions")).toHaveLength(1);
    });

    it("renders a heading with appropriate text", () => {
      expect(component.find(".lions h2").text()).toBe("Lions Exhibit");
    });
  });

  describe.skip("Question 3 - Tigers", () => {
    it("renders the population count", () => {
      expect(component.find(".tigers").text()).toContain("There are 3000 tigers in the world");
    });

    it("renders the habitats", () => {
      expect(component.find(".tigers").text()).toContain("They live in forests, swamps, savannah habitats");
    });
  });

  describe.skip("Question 4 - Monkeys", () => {
    it("continues to render", () => {
      const section = component.find(".monkeys");
      expect(section.find("h2").text()).toBe("Latin name: Primates");
      expect(section.find("li").map(el => el.text())).toEqual([
        "Macaque",
        "Squirrel Monkey",
        "Marmoset",
        "Howler Monkey"
      ]);
    });

    it("is a class component", () => {
      // see https://overreacted.io/how-does-react-tell-a-class-from-a-function/
      expect(Monkeys.prototype instanceof React.Component).toBe(true);
    });
  });

  describe.skip("Question 5 - AnimalSpotter", () => {
    it("shows an initial count", () => {
      expect(component.find(".animal-spotter p").text()).toBe("Number of animals spotted: 0");
    });

    it("increments the count when button clicked", () => {
      component.find(".animal-spotter button").simulate("click");
      component.update();

      expect(component.find(".animal-spotter p").text()).toBe("Number of animals spotted: 1");
    });
  });

  describe.skip("Question 7 - ImageGallery", () => {
    it("makes a request", () => {
      expect(global.fetch).toHaveBeenCalledWith("https://auspicious-baritone.glitch.me/gorilla");
    });

    it("hides the image while we wait", () => {
      expect(component.find("img")).toHaveLength(0);
    });

    describe("when the request completes", () => {
      const src = "http://some.image/gorilla.jpg";
      
      beforeEach(async () => {
        deferred.resolve({ json: () => Promise.resolve(src) });
        await tick();
        component.update();
      });

      it("renders the image", () => {
        expect(component.find("img").prop("src")).toBe(src);
      });
    });
  });

  const defer = () => {
    // a promise wrapper that we can resolve or reject later
    const wrapper = {};
    wrapper.promise = new Promise((resolve, reject) => {
      wrapper.resolve = resolve;
      wrapper.reject = reject;
    });
    return wrapper;
  };

  const tick = () => new Promise((resolve) => setTimeout(resolve));
});

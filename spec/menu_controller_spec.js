const MenuController = require("../controllers/MenuController");

describe("MenuController", () => {
  describe("#getContactCount()", () => {

    it("should return 0 when no contacts are in the book", () => {
      const menu =  new MenuController();
      expect(menu.getContactCount()).toBe(0);
    });

  });
});

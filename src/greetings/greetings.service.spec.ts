import { GreetingsService } from "./greetings.service";
import { expect } from "../../test";

describe("GreetingsService", () => {
  let service: GreetingsService;

  beforeEach(() => {
    service = new GreetingsService();
  });

  it("return greetings", () => {
    expect(service.greetings(undefined)).to.equal("Hello World!");
  });
});

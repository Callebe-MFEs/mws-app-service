import { RootContainer } from "@decorators/di";
import Sinon from "sinon";
import { expect } from "../../test";

import { GreetingsController } from "./greetings.controller";
import { GreetingsService } from "./greetings.service";

describe("GreetingsController", () => {
  let controller: GreetingsController;
  let service: GreetingsService;

  beforeEach(async () => {
    service = await RootContainer.get<GreetingsService>(GreetingsService);
    controller = new GreetingsController(service);
  });

  it("should return greetings", () => {
    const stub = Sinon.stub(service, "greetings").returns("Hellow Test!");
    const spy = Sinon.spy();

    controller.greetings({ json: spy } as any, undefined);

    expect(spy).called;
    expect(spy).calledWith({ greetings: "Hellow Test!" });

    stub.restore();
  });
});

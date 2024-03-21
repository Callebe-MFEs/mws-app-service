import { RootContainer } from "@decorators/di";
import Sinon from "sinon";
import { expect } from "../../test";
import { ApplicationsController } from "./applications.controller";
import { ApplicationsService } from "./applications.service";

describe("ApplicationsController", () => {
  let controller: ApplicationsController;
  let service: ApplicationsService;

  beforeEach(async () => {
    service = await RootContainer.get<ApplicationsService>(ApplicationsService);
    controller = new ApplicationsController(service);
  });

  it("should return applications", () => {
    const stub = Sinon.stub(service, "listApplications").returns(["Hellow Test!"]);
    const spy = Sinon.spy();

    controller.ListApplications({ json: spy } as any);

    expect(spy).called;
    expect(spy).calledWith(["Hellow Test!"]);

    stub.restore();
  });
});

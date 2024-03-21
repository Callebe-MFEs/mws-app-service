import { ApplicationsService } from "./applications.service";
import { expect } from "../../test";

describe("ApplicationsService", () => {
  let service: ApplicationsService;

  beforeEach(() => {
    service = new ApplicationsService();
  });

  it("should add application", () => {
    service.addApplications({ name: "app" } as any);
    expect(service.listApplications()).to.have.length(1);
    expect(service.listApplications()[0].name).to.be.equal("app");
  });

  it("should remove application", () => {
    service.addApplications({ name: "app" } as any);
    service.removeApplication("app");
    expect(service.listApplications()).to.have.length(0);
  });
});

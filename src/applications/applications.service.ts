import { Injectable } from "@decorators/di";
import { Application } from "./application";

import applications from "./applications.json";

@Injectable({ providedIn: "root" })
export class ApplicationsService {
  private applications: Application[] = applications.applications as Application[];

  listApplications(): Application[] {
    return this.applications;
  }

  addApplications(application: Application) {
    this.applications.push(application);
    return application;
  }

  removeApplication(name: string) {
    const index = this.applications.findIndex((app) => app.name == name);
    if (index >= 0) {
      this.applications.splice(index, 1);
    }
  }
}

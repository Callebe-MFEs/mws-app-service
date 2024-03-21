import { Body, Controller, Delete, Get, Params, Post, Res } from "@decorators/express";
import { Response } from "express";
import { ApplicationsService } from "./applications.service";
import { Application } from "./application";

@Controller("/applications")
export class ApplicationsController {
  constructor(private applicationsService: ApplicationsService) {}

  @Get("/")
  ListApplications(@Res() res: Response) {
    res.json(this.applicationsService.listApplications());
  }

  @Post("/")
  addApplication(@Res() res: Response, @Body() application: Application) {
    this.applicationsService.addApplications(application);
    res.json(application);
  }

  @Delete("/:name")
  removeApplication(@Res() res: Response, @Params("name") name: string) {
    this.applicationsService.removeApplication(name);
    res.status(203).send();
  }
}

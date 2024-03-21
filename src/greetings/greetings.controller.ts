import { Controller, Get, Query, Res } from "@decorators/express";
import { Response } from "express";
import { GreetingsService } from "./greetings.service";

@Controller("/greetings")
export class GreetingsController {
  constructor(private greetingsService: GreetingsService) {}

  @Get("/")
  greetings(@Res() res: Response, @Query("who") who: string) {
    console.log(this.greetingsService);
    res.json({ greetings: this.greetingsService.greetings(who) });
  }
}

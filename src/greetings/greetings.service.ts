import { Injectable } from "@decorators/di";

@Injectable({ providedIn: "root" })
export class GreetingsService {
  greetings(who: string): string {
    who = who || "World";
    return `Hello ${who}!`;
  }
}

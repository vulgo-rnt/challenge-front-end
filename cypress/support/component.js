import "./commands";
import { customMount } from "./customMount";

Cypress.Commands.add("mount", (children) => {
  customMount(children);
});

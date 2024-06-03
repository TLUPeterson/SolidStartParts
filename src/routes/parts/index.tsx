import { createAsync, type RouteDefinition } from "@solidjs/router";
import { Button } from "~/components/ui/button"


export default function Parts() {
  return (
      <div class="grid max-w-md grid-cols-3 gap-4 pl-2">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
  );
}

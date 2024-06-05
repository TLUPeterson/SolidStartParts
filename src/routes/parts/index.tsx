import { For, createEffect, createMemo } from "solid-js";
import { selectedParts, removePart } from "~/store/store";
import { Button } from "~/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "~/components/ui/table";

const defaultParts: { [key: string]: string } = {
  CPU: "/cpu",
  Motherboard: "/motherboard",
  Memory: "/memory",
  GPU: "/gpu",
  Storage: "/storage",
  PSU: "/psu",
  Case: "/case",
  Monitor: "/monitor",
};

export default function Parts() {
  const memoizedSelectedParts = createMemo(() => selectedParts());

  createEffect(() => {
    console.log("Selected parts updated:", memoizedSelectedParts());
  });


  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead class="w-[100px]">Component</TableHead>
            <TableHead>Item</TableHead>
            <TableHead>Price</TableHead>
            <TableHead class="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <For each={Object.keys(defaultParts)}>
            {(component) => (
              <TableRow>
                <TableCell class="font-medium">{component}</TableCell>
                <TableCell>
                  <img src={memoizedSelectedParts()[component]?.thumbnail} class="h-12"/>
                  {memoizedSelectedParts()[component]?.name || `No ${component} selected`}
                </TableCell>
                <TableCell>
                  {memoizedSelectedParts()[component]?.price || "-"}
                </TableCell>
                <TableCell class="text-right">
                  {memoizedSelectedParts()[component] ? (
                    <Button onClick={() => removePart(component)}>
                      Remove
                    </Button>
                  ) : (
                    <Button>
                      <a href={defaultParts[component]}>Add {component}</a>
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            )}
          </For>
        </TableBody>
      </Table>
    </div>
  );
}

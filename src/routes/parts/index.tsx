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

  const totalPrice = createMemo(() => {
    return Object.keys(defaultParts).reduce((total, component) => {
      const part = memoizedSelectedParts()[component];
      return total + (part?.price || 0);
    }, 0);
  });


  return (
    <div class='mx-[15%]'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead class="w-[100px] text-customblack">Component</TableHead>
            <TableHead class='text-customblack'>Item</TableHead>
            <TableHead class='text-customblack'>Price</TableHead>
            <TableHead class="text-right text-customblack">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <For each={Object.keys(defaultParts)}>
            {(component) => (
              <TableRow>
                <TableCell class="font-medium text-customblue font-bold">
                  <a href={component}>{component}</a></TableCell>
                <TableCell>
                <div class="flex items-center space-x-2">
                  <img src={memoizedSelectedParts()[component]?.thumbnail} class="h-12"/>
                  <span>{memoizedSelectedParts()[component]?.name || `No ${component} selected`}</span>
                </div>
                </TableCell>
                <TableCell>
                  {memoizedSelectedParts()[component]?.price || "-"}
                </TableCell>
                <TableCell class="text-right">
                  {memoizedSelectedParts()[component] ? (
                    /*<a href='#' onClick={() => removePart(component)} class="group inline-flex items-center justify-center">
                      <IconRemove class="h-4 w-4 text-black group-hover:text-customorange"/>
                    </a>*/
                    <>
                    <Button class="bg-customorange text-customwhite hover:text-customwhite hover:bg-customblue" onClick={() => removePart(component)}>
                    Remove
                  </Button>
                  <Button class="ml-2 bg-customgreen hover:bg-customblue">
                    <a href={`https://Arvutitark.ee${memoizedSelectedParts()[component]?.url}`} target="_blank" rel="noopener noreferrer" class="text-customwhite">
                    Buy
                    </a>                  
                  </Button>
                  </>
                  ) : (
                    <Button class="bg-customgreen text-customwhite hover:text-customwhite hover:bg-customblue">
                      <a href={defaultParts[component]}>Add {component}</a>
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            )}
          </For>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell class="text-right text-customgreen font-bold	text-2xl">
              Total: {totalPrice().toFixed(2)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

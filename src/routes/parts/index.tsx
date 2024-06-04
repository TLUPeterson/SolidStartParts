// src/components/Parts.tsx
import { For } from "solid-js";
import { selectedParts as selectedProduct } from "~/store/store";
import { Button } from "~/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "~/components/ui/table";

export default function Parts() {
  return (
    <>
      <div>
          <Button><a href="/cpu">CPu</a></Button>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead class="w-[100px]">Component</TableHead>
              <TableHead>Item</TableHead>
              <TableHead>Price</TableHead>
              <TableHead class="text-right">Where</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <For each={selectedProduct()}>{(item) => (
              <TableRow>
                <TableCell class="font-medium">{item.thumbnail}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.price}</TableCell>
                {/* <TableCell class="text-right">{item.url}</TableCell> */}
              </TableRow>
            )}</For>
          </TableBody>
        </Table>
      </div>
    </>
  );
}

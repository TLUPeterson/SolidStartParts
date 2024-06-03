import { For } from "solid-js";
import { createAsync, type RouteDefinition } from "@solidjs/router";
import { Button } from "~/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "~/components/ui/table"


export default function Parts() {
  const items = [
    {
      component: "CPU",
      selection: "Paid",
      price: "$250.00",
      url: "amazon"
    },
    {
      component: "CPU Cooler",
      selection: "Pending",
      price: "$150.00",
      url: "ebay"
    },
    {
      component: "Motherboard",
      selection: "Unpaid",
      price: "$350.00",
      url: "amazon"
    },
    {
      component: "Memory",
      selection: "Paid",
      price: "$450.00",
      url: "amaozn"
    },
    {
      component: "Storage",
      selection: "Paid",
      price: "$550.00",
      url: "ebay"
    },
    {
      component: "Video Card",
      selection: "Pending",
      price: "$200.00",
      url: "amazon"
    },
    {
      component: "Case",
      selection: "Unpaid",
      price: "$300.00",
      url: "amazon"
    },
    {
      component: "Power Supply",
      selection: "...",
      price: "$100.00",
      url: "ebay"
    },
    {
      component: "Monitor",
      selection: "...",
      price: "$500.00",
      url: "amazon"
    }
  ]
  return (
    <>
      <div>
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
            <For each={items}>{(item) => (
              <TableRow>
                <TableCell class="font-medium">{item.component}</TableCell>
                <TableCell>{item.selection}</TableCell>
                <TableCell>{item.url}</TableCell>
                <TableCell class="text-right">{item.price}</TableCell>
              </TableRow>
            )}</For>
          </TableBody>
        </Table>
      </div>
    </>
  );
}

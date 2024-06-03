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
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card"
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal"
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer"
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card"
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal"
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer"
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card"
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
                <TableCell class="font-medium">{item.invoice}</TableCell>
                <TableCell>{item.paymentStatus}</TableCell>
                <TableCell>{item.paymentMethod}</TableCell>
                <TableCell class="text-right">{item.totalAmount}</TableCell>
              </TableRow>
            )}</For>
          </TableBody>
        </Table>
      </div>
    </>
  );
}

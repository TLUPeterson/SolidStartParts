import { createSignal, createResource, For, Show, Suspense } from 'solid-js';
import { fetchCPU } from '~/api/component_data';
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

export default function CPU() {
  const [products, { refetch }] = createResource(fetchCPU);
  const [currentPage, setCurrentPage] = createSignal(1);
  const itemsPerPage = 24;

  const paginatedProducts = () => {
    const start = (currentPage() - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return products()?.slice(start, end) || [];
  };

  const totalPages = () => Math.ceil((products()?.length || 0) / itemsPerPage);

  console.log("Products:", products());

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Show when={products()}>
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead class="w-[100px]">Name</TableHead>
                <TableHead>Info</TableHead>
                <TableHead class="text-right">Price</TableHead>
                <TableHead class="text-right">Where</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <For each={paginatedProducts()}>{(product) => (
                <TableRow>
                  <TableCell class="font-medium">
                    <img 
                    src={product.thumbnail} 
                    alt={product.name}
                    class="w-full max-w-xs mx-left"
                    />
                  </TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell class="text-right"><Button class="bg-main-button">Add</Button></TableCell>
                </TableRow>
              )}</For>
            </TableBody>
          </Table>
        </div>
        <div>
          <button 
            onClick={() => setCurrentPage(currentPage() - 1)} 
            disabled={currentPage() === 1}
          >
            Previous
          </button>
          <span>Page {currentPage()} of {totalPages()}</span>
          <button 
            onClick={() => setCurrentPage(currentPage() + 1)} 
            disabled={currentPage() === totalPages()}
          >
            Next
          </button>
        </div>
      </Show>
      <Show when={!products.loading && !products()}>
        <p>No products available</p>
      </Show>
    </Suspense>
  );
}

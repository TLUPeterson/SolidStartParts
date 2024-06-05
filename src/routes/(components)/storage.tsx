import { createSignal, createResource, For, Show, Suspense, createEffect } from 'solid-js';
import { fetchStorage } from '~/api/component_data';
import {  addPart } from '~/store/store';
import { Button } from "~/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "~/components/ui/table";
import {
  Pagination,
  PaginationEllipsis,
  PaginationItem,
  PaginationItems,
  PaginationNext,
  PaginationPrevious
} from "~/components/ui/pagination";
import { useNavigate } from '@solidjs/router';
import { Part } from "~/types/parts";

export default function Storage() {
  const [productAmount, setProductAmount] = createSignal(0);
  const [currentPage, setCurrentPage] = createSignal(1);
  const itemsPerPage = 5;
  const navigate = useNavigate();

  const [products, { refetch }] = createResource(async () => {
    const { productData, productAmount } = await fetchStorage("1");
    setProductAmount(productAmount);
    return productData;
  });

  createEffect(() => {
    if (productAmount() === 0) {
      console.log("Initial products loaded, refetching...");
      refetch();
    }
  });

  const paginatedProducts = () => {
    const start = (currentPage() - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return products()?.slice(start, end) || [];
  };

  const totalPages = () => Math.ceil(products().length / itemsPerPage);

  const handleSelect = (product: Part) => {
    const newPart: Part = {
      ...product,
      component: "Storage"
    };

    addPart("Storage", newPart);
    navigate('/parts');
  };

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
                  <TableCell class="text-right">
                    <Button 
                      class="bg-customgreen text-customwhite hover:text-customwhite hover:bg-customblue"
                      onClick={() => handleSelect(product)}
                    >
                      Add
                    </Button>
                  </TableCell>
                </TableRow>
              )}</For>
            </TableBody>
          </Table>
          
          <Pagination
            count={totalPages()}
            page={currentPage()}
            onPageChange={(page) => setCurrentPage(page)}
            siblingCount={1}
            showFirst={true}
            showLast
            itemComponent={(props) => <PaginationItem page={props.page}>{props.page}</PaginationItem>}
            ellipsisComponent={() => <PaginationEllipsis />}
          >
            <PaginationPrevious />
            <PaginationItems />
            <PaginationNext />
          </Pagination>
        </div>
      </Show>
      <Show when={!products.loading && !products()}>
        <p>No products available</p>
      </Show>
    </Suspense>
  );
}
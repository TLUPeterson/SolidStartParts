import { createSignal, createResource, For, Show, Suspense } from 'solid-js';
import { fetchCPU } from '~/api/component_data';

export default function CPU() {
  const [products, { refetch }] = createResource(fetchCPU);
  const [currentPage, setCurrentPage] = createSignal(1);
  const itemsPerPage = 10;

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
          <For each={paginatedProducts()}>
            {(product) => (
              <div>
                <h2>{product.name}</h2>
                <img src={product.thumbnail} alt={product.name} />
                <p>Price: {product.price}</p>
              </div>
            )}
          </For>
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

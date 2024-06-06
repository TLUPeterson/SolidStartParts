export default function Index(){
  return (
    <>
      <header class="bg-customblack py-20">
        <div class="container mx-auto px-5">
          <div class="flex flex-col lg:flex-row items-center justify-center">
            <div class="lg:w-1/2 xl:w-2/5 text-center lg:text-left">
              <h1 class="text-5xl font-bold text-white mb-4">A Modern PC Part Building Experience</h1>
              <p class="text-xl text-gray-300 mb-8">Quickly design and customize your dream PC with our extensive selection of parts and intuitive tools.</p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a class="btn btn-primary bg-customblue hover:bg-customgreen hover:text-custowhite text-white py-3 px-6 rounded flex items-center" href="/parts">
                  <img src="images/noun-chip-976460.svg" class="h-10 pr-2 content-center" alt="logo" />
                  Start Building</a>
              </div>
            </div>
            <div class="lg:w-1/2 xl:w-3/5 mt-10 lg:mt-0 flex justify-center">
              <img class="rounded shadow-lg" src="https://dummyimage.com/600x400/343a40/6c757d" alt="PC Parts" />
            </div>
          </div>
        </div>
      </header>

      <section class="py-20 bg-gray-100" id="features">
        <div class="container mx-auto px-5">
          <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/3 mb-10 lg:mb-0">
              <h2 class="text-3xl font-bold mb-5">A better way to start building.</h2>
              <p class="text-lg text-gray-600">Our platform offers a seamless experience for both beginners and enthusiasts.</p>
            </div>
            <div class="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div class="flex flex-col items-start bg-white p-6 rounded shadow">
                <div class="bg-customblue text-white rounded-full p-3 mb-4"><i class="bi bi-collection text-2xl"></i></div>
                <h3 class="text-xl font-bold mb-2">Extensive Catalog</h3>
                <p class="text-gray-600">Find every component you need with our comprehensive database of parts.</p>
              </div>
              <div class="flex flex-col items-start bg-white p-6 rounded shadow">
                <div class="bg-customblue text-white rounded-full p-3 mb-4"><i class="bi bi-building text-2xl"></i></div>
                <h3 class="text-xl font-bold mb-2">Expert Reviews</h3>
                <p class="text-gray-600">Read detailed reviews and ratings from tech experts and users.</p>
              </div>
              <div class="flex flex-col items-start bg-white p-6 rounded shadow">
                <div class="bg-customblue text-white rounded-full p-3 mb-4"><i class="bi bi-toggles2 text-2xl"></i></div>
                <h3 class="text-xl font-bold mb-2">Customization</h3>
                <p class="text-gray-600">Customize your PC with our intuitive and easy-to-use configurator tool.</p>
              </div>
              <div class="flex flex-col items-start bg-white p-6 rounded shadow">
                <div class="bg-customblue text-white rounded-full p-3 mb-4"><i class="bi bi-toggles2 text-2xl"></i></div>
                <h3 class="text-xl font-bold mb-2">Support</h3>
                <p class="text-gray-600">Get help and advice from our community and support team.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
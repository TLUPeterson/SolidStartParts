export default {
  plugins: [solid({ ssr: true })],
  build: {
    sourcemap: true, // Ensure this is set to track errors
  }
};

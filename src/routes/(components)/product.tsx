import { Show } from "solid-js";
//import { fetchProductById } from "~/api/component_data";

export default function ProductView() {
    const { name, thumbnail, price } = {
        name: "",
        thumbnail: "",
        price: 0
    }

    return (
       <div onclick = {() => console.log(name, thumbnail, price)}>
        This is a div
       </div>
    );
}
import Form from "./components/Form/form";
import Summary from "./components/summary";

const Cart = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 place-items-center p-4">
      <Form />
      <Summary />
    </section>
  );
};
export default Cart;

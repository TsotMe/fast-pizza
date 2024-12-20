import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalPizzaQuantity, getTotalCartPrice } from "../cart/cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalPizzaQuantity = useSelector(getTotalPizzaQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (totalPizzaQuantity === 0) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="md: space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalPizzaQuantity} Pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;

import Header from "./Header";
import CartOverView from "../features/cart/CartOverview";
import Loader from "./Loader";
import { Outlet, useNavigation } from "react-router-dom";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {isLoading && <Loader />}

      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverView />
    </div>
  );
}

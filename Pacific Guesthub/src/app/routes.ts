import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { RoomCatalog } from "./pages/RoomCatalog";
import { Checkout } from "./pages/Checkout";
import { AdminDashboard } from "./pages/AdminDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/rooms",
    Component: RoomCatalog,
  },
  {
    path: "/checkout",
    Component: Checkout,
  },
  {
    path: "/admin",
    Component: AdminDashboard,
  },
]);

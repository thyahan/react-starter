import { HomePage, Item } from "../pages";

export default [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/home",
    component: HomePage,
  },
  {
    path: "/item",
    component: Item,
  },
  {
    path: "/item/:id",
    component: Item,
  },
];

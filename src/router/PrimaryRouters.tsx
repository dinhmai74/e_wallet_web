import { Home } from "screens/Home";
import { About } from "screens/About";
import { Post } from "screens/Post";

export interface RouterModel {
  path: string;
  Component?: any;
}

export const PrimaryRouters: RouterModel[] = [
  {
    Component: Home,
    path: "/"
  },
  {
    Component: About,
    path: "/about"
  },
  {
    Component: Post,
    path: "posts/:id"
  },
  {
    Component: Home,
    path: "/"
  }
];

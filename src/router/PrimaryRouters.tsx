import { Home } from "screens/Home";
import { About } from "screens/About";
import { Post } from "screens/Post";
import { MovieTicketGeneral } from "screens/MovieTicket";

export const Paths = {
  home: "/",
  about: "/about",
  movieTicket: "/movie-ticket"
};

export interface RouterModel {
  path: string;
  Component?: any;
}

export const PrimaryRouters: RouterModel[] = [
  {
    Component: Home,
    path: Paths.home
  },
  {
    Component: About,
    path: Paths.about
  },
  {
    Component: Post,
    path: "posts/:id"
  },
  {
    Component: Home,
    path: "/"
  },
  {
    Component: MovieTicketGeneral,
    path: Paths.movieTicket
  }
];

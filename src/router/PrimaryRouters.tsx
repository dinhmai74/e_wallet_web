import { HomeScreen } from "screens/Home";
import { About } from "screens/About";
import { Post } from "screens/Post";
import { MovieTicketGeneral } from "screens/MovieTicket";
import { BuyPhoneCardGeneral } from "screens/buy-phone-card/buy-phone-card-general/buy-phone-card-general";
import { BuyPhoneCardDetail } from "screens/buy-phone-card/buy-phone-card-general/BuyPhoneCardDetail";

export const Paths = {
  home: "/",
  about: "/about",
  movieTicket: "/movie-ticket",
  buyPhoneCardGeneral: "/buy-phone-card-general",
  buyPhoneCardDetail: "/buy-phone-card-detail"
};

export interface RouterModel {
  path: string;
  Component?: any;
}

export const PrimaryRouters: RouterModel[] = [
  {
    Component: HomeScreen,
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
    Component: HomeScreen,
    path: "/"
  },
  {
    Component: MovieTicketGeneral,
    path: Paths.movieTicket
  },
  {
    Component: BuyPhoneCardGeneral,
    path: Paths.buyPhoneCardGeneral
  },
  {
    Component: BuyPhoneCardDetail,
    path: Paths.buyPhoneCardDetail
  }
];

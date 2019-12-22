import { HomeScreen } from "screens/Home";
import { About } from "screens/About";
import { Post } from "screens/Post";
import {
  MovieTicketGeneral,
  MovieTicketChoseInfoScreen
} from "screens/MovieTicket";
import { BuyPhoneCardGeneral } from "screens/buy-phone-card/buy-phone-card-general/buy-phone-card-general";
import { BuyPhoneCardDetail } from "screens/buy-phone-card/buy-phone-card-general/BuyPhoneCardDetail";
import { MovieTicketDetailSreen } from "screens/MovieTicket/MovieTicketDetailScreen";
import { MovieTicketChosePosScreen } from "screens/MovieTicket/MovieTicketChosePosScreen";

export const Paths = {
  home: "/",
  about: "/about",
  movieTicket: "/movie-ticket",
  buyPhoneCardGeneral: "/buy-phone-card-general",
  buyPhoneCardDetail: "/buy-phone-card-detail",
  movieTicketDetail: "/movie-ticket/detail",
  movieTicketChoseInfo: "/movie-ticket/chose-info",
  movieTicketChosePos: "/movie-ticket/chose-position",
  buyPhoneCardGeneral: "/buy-phone-card-general"
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
    Component: MovieTicketDetailSreen,
    path: Paths.movieTicketDetail + "/:id"
  },
  {
    Component: MovieTicketChoseInfoScreen,
    path: Paths.movieTicketChoseInfo
  },

  {
    Component: MovieTicketChosePosScreen,
    path: Paths.movieTicketChosePos
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

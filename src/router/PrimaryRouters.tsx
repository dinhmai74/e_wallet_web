import { HomeScreen } from "screens/Home";
import { About } from "screens/About";
import {
  MovieTicketGeneral,
  MovieTicketChoseInfoScreen,
  MovieTicketBuySuccessScreen
} from "screens/MovieTicket";
import { BuyPhoneCardGeneral } from "screens/buy-phone-card/buy-phone-card-general/buy-phone-card-general";
import { BuyPhoneCardDetail } from "screens/buy-phone-card/buy-phone-card-general/BuyPhoneCardDetail";
import { MovieTicketDetailSreen } from "screens/MovieTicket/MovieTicketDetailScreen";
import { MovieTicketChosePosScreen } from "screens/MovieTicket/MovieTicketChosePosScreen";
import { MovieTicketChosePosDetailScreen } from "screens/MovieTicket/MovieTicketChosePosDetailScreen/MovieTicketChosePosDetailScreen";
import { BuyPhoneCardPayMent } from "screens/buy-phone-card/BuyPhoneCardPayMent/BuyPhoneCardPayMent";
import { MovieTicketPaymentScreen } from "screens/MovieTicket/MovieTicketPaymentScreen";

export const Paths = {
  home: "/",
  about: "/about",
  buyPhoneCardGeneral: "/buy-phone-card-general",
  buyPhoneCardDetail: "/buy-phone-card-detail",
  movieTicket: "/movie-ticket",
  movieTicketDetail: "/movie-ticket/detail",
  movieTicketChoseInfo: "/movie-ticket/chose-info",
  movieTicketChosePos: "/movie-ticket/chose-position",
  movieTicketChosePosDetail: "/movie-ticket/chose-position-detail",
  buyPhoneCardPayment: "/buy-phone-card-payment",
  movieTicketPayment: "/payment/movie-ticket",
  movieTicketPaymentSuccess: "/payment/movie-ticket/success"
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
    Component: HomeScreen,
    path: "/"
  },

  {
    Component: BuyPhoneCardGeneral,
    path: Paths.buyPhoneCardGeneral
  },
  {
    Component: BuyPhoneCardDetail,
    path: Paths.buyPhoneCardDetail
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
    Component: MovieTicketChosePosDetailScreen,
    path: Paths.movieTicketChosePosDetail
  },
  {
    Component: MovieTicketPaymentScreen,
    path: Paths.movieTicketPayment
  },
  {
<<<<<<< HEAD
    Component: BuyPhoneCardDetail,
    path: Paths.buyPhoneCardDetail
  },
  {
    Component: BuyPhoneCardPayMent,
    path: Paths.buyPhoneCardPayment
=======
    Component: MovieTicketBuySuccessScreen,
    path: Paths.movieTicketPaymentSuccess
>>>>>>> develop
  }

];

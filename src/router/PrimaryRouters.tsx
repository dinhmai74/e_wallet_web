import { About } from "screens/About";
import { BuyPhoneCardGeneral } from "screens/buy-phone-card/buy-phone-card-general/buy-phone-card-general";
import { BuyPhoneCardDetail } from "screens/buy-phone-card/buy-phone-card-general/BuyPhoneCardDetail";
import { BuyPhoneCardSuccess } from "screens/buy-phone-card/buy-phone-card-general/BuyPhoneCardSuccess";
import { BuyPhoneCardPayMent } from "screens/buy-phone-card/BuyPhoneCardPayMent/BuyPhoneCardPayMent";
import { HomeScreen } from "screens/Home";
import {
  MovieTicketBuySuccessScreen,
  MovieTicketChoseInfoScreen,
  MovieTicketGeneral
} from "screens/MovieTicket";
import { MovieTicketChosePosDetailScreen } from "screens/MovieTicket/MovieTicketChosePosDetailScreen/MovieTicketChosePosDetailScreen";
import { MovieTicketChosePosScreen } from "screens/MovieTicket/MovieTicketChosePosScreen";
import { MovieTicketDetailSreen } from "screens/MovieTicket/MovieTicketDetailScreen";
import { MovieTicketPaymentScreen } from "screens/MovieTicket/MovieTicketPaymentScreen";
import {
  TransferGeneralScreen,
  TransferPaymentScreen,
  TransferPaymentSuccessScreen
} from "screens/Transfer";

export const Paths = {
  about: "/about",
  home: "/",

  buyPhoneCardDetail: "/buy-phone-card-detail",
  buyPhoneCardGeneral: "/buy-phone-card-general",
  buyPhoneCardPayment: "/buy-phone-card-payment",
  buyPhoneCardSuccess: "/payment/buy-phone-card/success",

  movieTicket: "/movie-ticket",
  movieTicketChoseInfo: "/movie-ticket/chose-info",
  movieTicketChosePos: "/movie-ticket/chose-position",
  movieTicketChosePosDetail: "/movie-ticket/chose-position-detail",
  movieTicketDetail: "/movie-ticket/detail",
  movieTicketPayment: "/payment/movie-ticket",
  movieTicketPaymentSuccess: "/payment/movie-ticket/success",

  transfer: "/transfer",
  transferPayment: "/payment/transfer",
  transferPaymentSuccess: "/payment/transfer/success"
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
    Component: BuyPhoneCardPayMent,
    path: Paths.buyPhoneCardPayment
  },
  {
    Component: BuyPhoneCardSuccess,
    path: Paths.buyPhoneCardSuccess
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
    Component: MovieTicketBuySuccessScreen,
    path: Paths.movieTicketPaymentSuccess
  },

  {
    Component: TransferGeneralScreen,
    path: Paths.transfer
  },
  {
    Component: TransferPaymentScreen,
    path: Paths.transferPayment
  },
  {
    Component: TransferPaymentSuccessScreen,
    path: Paths.transferPaymentSuccess
  }
];

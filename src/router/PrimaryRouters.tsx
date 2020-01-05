import { About } from "screens/About";
import { BuyPhoneCardGeneral } from "screens/buy-phone-card/buy-phone-card-general/buy-phone-card-general";
import { BuyPhoneCardDetail } from "screens/buy-phone-card/buy-phone-card-general/BuyPhoneCardDetail";
import { BuyPhoneCardSuccess } from "screens/buy-phone-card/buy-phone-card-general/BuyPhoneCardSuccess";
import { BuyPhoneCardPayMent } from "screens/buy-phone-card/BuyPhoneCardPayMent/BuyPhoneCardPayMent";
import { BuyGameCardGeneral } from "screens/BuyGameCard/BuyGameCardGeneral";
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
  TrainFillInfoScreen,
  TrainGeneralScreen,
  TrainPaymentScreen,
  TrainPaymentSuccess
} from "screens/Train";
import { TrainChosePosScreen } from "screens/Train/TrainChosePosScreen";
import {
  TransferGeneralScreen,
  TransferPaymentScreen,
  TransferPaymentSuccessScreen
} from "screens/Transfer";

export const Paths = {
  about: "/about",
  home: "/",

  buyGameCardGeneral: "/buy-game-card-general",

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
  transferPaymentSuccess: "/payment/transfer/success",

  train: "/train-ticket",
  trainChosePos: "/train-ticket/chose-position",
  trainFillInfo: "/train-ticket/fill-info",
  trainPayment: "/payment/train-ticket",
  trainSuccess: "/payment/train-ticket/success"
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

  /* ------------------------ phone card ------------------------ */
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

  /* ------------------------ movie ------------------------ */
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

  /* ------------------------ transfer ------------------------ */
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
  },
  {
    Component: BuyGameCardGeneral,
    path: Paths.buyGameCardGeneral
  },

  {
    Component: TransferPaymentSuccessScreen,
    path: Paths.transferPaymentSuccess
  },

  /* ------------------------ train ------------------------ */
  {
    Component: TrainGeneralScreen,
    path: Paths.train
  },
  {
    Component: TrainChosePosScreen,
    path: Paths.trainChosePos
  },
  {
    Component: TrainFillInfoScreen,
    path: Paths.trainFillInfo
  },
  {
    Component: TrainPaymentScreen,
    path: Paths.trainPayment
  },
  { Component: TrainPaymentSuccess, path: Paths.trainSuccess }
];

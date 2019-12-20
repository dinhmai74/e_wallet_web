import { observable } from "mobx";
import { createContext } from "react";
import { MovieModel } from "mock-data/home/movies";

class MovieTicketStore {}

export const MovieTicketStoreContext = createContext(new MovieTicketStore());

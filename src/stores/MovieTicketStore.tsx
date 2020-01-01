import { action, observable } from "mobx";
import { createContext } from "react";
import { autoSave } from "utils/mobx-autosave";

const movieStoreKey = "movie-store-key";

interface MovieTicketInfoModel {
  timeId: string;
  placeId: string;
}

class MovieTicketStore {
  @observable id?: string = undefined;
  @observable ticketInfo?: MovieTicketInfoModel = undefined;
  @observable seatAmount = {};
  @observable seatPos: string[] = [];

  constructor() {
    this.load();
    autoSave(this, this.save.bind(this));
  }

  @action changeId(id: string) {
    this.id = id;
  }

  @action changeTicketInfo(ticketIfo: any) {
    this.ticketInfo = { ...ticketIfo };
  }

  @action resetData() {
    this.id = "";
    this.ticketInfo = undefined;
    this.seatPos = [];
    this.seatAmount = [];
    this.save(this);
  }

  load() {
    const data = localStorage.getItem(movieStoreKey);
    // const [data] = useLocalStorage(movieStoreKey, {});
    if (data) {
      const converted = JSON.parse(data);
      this.changeId(converted.id);
      this.changeTicketInfo(converted.ticketInfo);
      if (converted.seatPos) {
        this.seatPos = [...converted.seatPos];
      }
      if (converted.seatAmount) {
        this.seatAmount = { ...converted.seatAmount };
      }
    }
  }

  save(json: any) {
    localStorage.setItem(movieStoreKey, json);
  }
}

export const MovieTicketStoreContext = createContext(new MovieTicketStore());

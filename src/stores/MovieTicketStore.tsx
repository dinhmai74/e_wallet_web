import * as mobx from "mobx";
import { action, observable } from "mobx";
import { createContext } from "react";

const movieStoreKey = "movie-store-key";

interface MovieTicketInfoModel {
  timeId: string;
  placeId: string;
}

function autoSave(store, save) {
  let firstRun = true;
  mobx.autorun(() => {
    // This code will run every time any observable property
    // on the store is updated.
    const json = JSON.stringify(mobx.toJS(store));
    if (!firstRun) {
      save(json);
    }
    firstRun = false;
  });
}

class MovieTicketStore {
  @observable id?: string = undefined;
  @observable ticketInfo?: MovieTicketInfoModel = undefined;
  @observable seats = {};

  constructor() {
    this.load();
    autoSave(this, this.save.bind(this));
  }

  @action changeId(id: string) {
    this.id = id;
  }

  @action changeTicketInfo(ticketIfo: any) {
    console.log("ticketInfo", ticketIfo);
    this.ticketInfo = { ...ticketIfo };
  }

  load() {
    const data = localStorage.getItem(movieStoreKey);
    // const [data] = useLocalStorage(movieStoreKey, {});
    if (data) {
      const converted = JSON.parse(data);
      this.changeId(converted.id);
      this.changeTicketInfo(converted.ticketInfo);
    }
  }

  save(json: any) {
    localStorage.setItem(movieStoreKey, json);
  }
}

export const MovieTicketStoreContext = createContext(new MovieTicketStore());

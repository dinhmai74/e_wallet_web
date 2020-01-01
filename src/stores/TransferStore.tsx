import { observable, toJS } from "mobx";
import { autoSave } from "utils/mobx-autosave";
import { createContext } from "react";

const transferStoreKey = "transfer-store-key";

class TransferStore {
  @observable transferUser = {
    id: "",
    phone: "",
    name: "",
    money: -1,
    message: ""
  };

  constructor() {
    this.load();
    autoSave(this, this.save.bind(this));
  }

  load() {
    const data = localStorage.getItem(transferStoreKey);

    if (data) {
      const converted = JSON.parse(data);
      this.transferUser = toJS({ ...converted.transferUser });
    }
  }

  save(json: any) {
    console.log("store", json);
    localStorage.setItem(transferStoreKey, json);
  }
}

export const TransferStoreContest = createContext(new TransferStore());

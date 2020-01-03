import { observable, toJS } from "mobx";
import { createContext } from "react";
import { autoSave } from "utils/mobx-autosave";

const transferStoreKey = "transfer-store-key";

class TransferStore {
  @observable transferUser = {
    id: "",
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
    localStorage.setItem(transferStoreKey, json);
  }
}

export const TransferStoreContest = createContext(new TransferStore());

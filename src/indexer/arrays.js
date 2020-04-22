import { DATA_TYPES } from "../utils";

export default class arrayIndex {
  constructor({ id = "default", mmkv, alias, aliasPrefix, key }) {
    this.MMKV = mmkv;
    this.instanceID = id;
  }
  async getKeys() {
    return await handleActionAsync(
      this.MMKV.getTypeIndex,
      this.instanceID,
      DATA_TYPES.ARRAY
    );
  }

  async hasKey(key) {
    return await handleActionAsync(
      this.MMKV.typeIndexerHasKey,
      this.instanceID,
      key,
      DATA_TYPES.ARRAY
    );
  }

  async getAll() {
    return new Promise((resolve, reject) => {
      handleAction(
        this.MMKV.getItemsForType,
        (error, result) => {
          if (error) {
            reject(error);
            return;
          }
          resolve(result);
        },
        this.instanceID,
        DATA_TYPES.ARRAY
      );
    });
  }
}

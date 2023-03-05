import AsyncStorage, {
  AsyncStorageStatic,
} from '@react-native-async-storage/async-storage';
import {decrypt, encrypt} from './encrypt';

class Storage {
  private _storage: StorageType = AsyncStorage;

  public clearAll(): void {
    this._storage.clear();
  }

  public async clearMultiple(keysToRemove: string[]) {
    this._storage.multiRemove(keysToRemove);
  }

  public async clearAllBut(keysToKeep: string[]) {
    const allKeys = await this._storage.getAllKeys();
    const keysToRemove = allKeys.filter(key => !keysToKeep.includes(key));
    this._storage.multiRemove(keysToRemove);
  }

  public async set<T>(key: string, value: T): Promise<void> {
    if (
      typeof value === 'string' ||
      typeof value === 'number' ||
      typeof value === 'boolean'
    ) {
      await this._storage.setItem(key, encrypt(value.toString()));
    } else if (typeof value === 'object') {
      await this._storage.setItem(key, encrypt(JSON.stringify(value)));
    } else {
      throw new Error(
        'invalid key type: key must be either type of string, number, boolean or object',
      );
    }
  }

  public async getString(key: string): Promise<string | undefined> {
    const value = await this._storage.getItem(key);
    if (!value) {
      return;
    }
    return decrypt(value, 'string');
  }

  public async getNumber(key: string): Promise<number> {
    const value = await this._storage.getItem(key);
    if (!value) {
      return 0;
    }
    return Number(decrypt(value));
  }

  public async getObject(key: string): Promise<any> {
    const value = await this._storage.getItem(key);
    if (!value) {
      return;
    }
    return decrypt(value);
  }

  public async getBoolean(key: string): Promise<boolean | undefined> {
    const value = await this._storage.getItem(key);
    if (!value) {
      return;
    }
    return Boolean(decrypt(value));
  }
}

export type StorageType = AsyncStorageStatic;

export const storage = new Storage();

import {User} from '@app/types';
import {storage} from './storage';

enum UserStorageKeys {
  NUMBER_OF_VISITS = 'number_of_visits',
  TOKEN = 'token',
  REFRESH_TOKEN = 'refresh_token',
  IS_LOGGED_IN = 'is_logged_in',
  FAVORITES = 'favorites',
  HAS_LOGGED_IN = 'has logged in',
  USER_INFO = 'user_info',
  LANGUAGE = 'language',
}

type stringOrUndefined = string | undefined;

class UserStorage {
  private _storage;
  private _numberOfVisits: number = 0;
  private _token: stringOrUndefined;
  private _refreshToken: stringOrUndefined;
  private _userInfo: User | null = null;
  private _favorites: string[] = [];
  private _hasLoggedIn: boolean = false;
  private _language: string = 'en';

  constructor() {
    this._storage = storage;
  }

  public async bootstrap() {
    this._numberOfVisits = await this._storage.getNumber(
      UserStorageKeys.NUMBER_OF_VISITS,
    );
    this._token = await this._storage.getString(UserStorageKeys.TOKEN);
    this._refreshToken = await this._storage.getString(
      UserStorageKeys.REFRESH_TOKEN,
    );
    this._userInfo = await this._storage.getObject(UserStorageKeys.USER_INFO);
    this._favorites = await this._storage.getObject(UserStorageKeys.FAVORITES);
    this._hasLoggedIn =
      (await this._storage.getBoolean(UserStorageKeys.HAS_LOGGED_IN)) || false;
    this.processNumberOfVisits();
    this._language =
      (await this._storage.getString(UserStorageKeys.LANGUAGE)) || '';
  }

  clearAll(): void {
    storage.clearAll();
  }

  clearAllBut(keysToKeep: string[]): void {
    storage.clearAllBut(keysToKeep);
  }

  getNumberOfVisits(): number {
    return this._numberOfVisits;
  }

  processNumberOfVisits(): void {
    const numberOfVisits = this.getNumberOfVisits();
    if (numberOfVisits < 10) {
      this._numberOfVisits += 1;
      this._storage.set(UserStorageKeys.NUMBER_OF_VISITS, numberOfVisits + 1);
    }
  }

  getUserInfo(): User | null {
    return this._userInfo;
  }

  setUserInfo(userInfo: User | null): void {
    this._userInfo = userInfo;
    this._storage.set(UserStorageKeys.USER_INFO, userInfo);
  }

  getIsLoggedIn() {
    return this.getUserToken();
  }

  getUserToken(): string | undefined {
    return this._token;
  }

  setUserToken(token: string): void {
    this._storage.set(UserStorageKeys.TOKEN, token);
  }

  getRefreshToken(): string | undefined {
    return this._refreshToken;
  }

  setRefreshToken(token: string): void {
    this._storage.set(UserStorageKeys.REFRESH_TOKEN, token);
  }

  getFavorites(): string[] {
    return this._favorites;
  }

  setHasLoggedIn(): void {
    this._hasLoggedIn = true;
    this._storage.set(UserStorageKeys.HAS_LOGGED_IN, true);
  }

  getHasLoggedIn(): boolean {
    return this._hasLoggedIn;
  }

  getLanguage(): string {
    return this._language;
  }

  setLanguage(language: string): void {
    this._language = language;
    console.log('lang', language);
    this._storage.set(UserStorageKeys.LANGUAGE, language);
  }

  logout(): void {
    this._storage.clearMultiple([
      UserStorageKeys.TOKEN,
      UserStorageKeys.REFRESH_TOKEN,
      UserStorageKeys.USER_INFO,
    ]);
  }

  async setFavorites(passedFavorites: string[]) {
    await this._storage.set(UserStorageKeys.FAVORITES, passedFavorites);
    this._favorites = passedFavorites;
  }
}

export const userStorage = new UserStorage();

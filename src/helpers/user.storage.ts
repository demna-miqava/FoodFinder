import {storage} from './storage';

enum UserStorageKeys {
  NUMBER_OF_VISITS = 'number_of_visits',
  USER_USERNAME = 'user_username',
  USER_EMAIL = 'user_email',
  TOKEN = 'token',
  REFRESH_TOKEN = 'refresh_token',
  IS_LOGGED_IN = 'is_logged_in',
  FAVORITES = 'favorites',
}

type stringOrUndefined = string | undefined;

class UserStorage {
  private _storage;
  private _numberOfVisits: number = 0;
  private _username: stringOrUndefined;
  private _userEmail: stringOrUndefined;
  private _token: stringOrUndefined;
  private _refreshToken: stringOrUndefined;
  private _favorites: string[] = [];

  constructor() {
    this._storage = storage;
  }

  public async bootstrap() {
    this._numberOfVisits = await this._storage.getNumber(
      UserStorageKeys.NUMBER_OF_VISITS,
    );
    this._username = await this._storage.getString(
      UserStorageKeys.USER_USERNAME,
    );
    this._userEmail = await this._storage.getString(UserStorageKeys.USER_EMAIL);
    this._token = await this._storage.getString(UserStorageKeys.TOKEN);
    this._refreshToken = await this._storage.getString(
      UserStorageKeys.REFRESH_TOKEN,
    );
    this._favorites = JSON.parse(
      (await this._storage.getString(UserStorageKeys.FAVORITES)) || '[]',
    );
    this.processNumberOfVisits();
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

  getUserName(): string | undefined {
    return this._username;
  }

  setUserName(userName: string): void {
    this._storage.set(UserStorageKeys.USER_USERNAME, userName);
    this._username = userName;
  }

  getIsLoggedIn() {
    return this.getUserToken();
  }

  getUserEmail(): string | undefined {
    return this._userEmail;
  }

  setUserEmail(email: string): void {
    this._storage.set(UserStorageKeys.USER_EMAIL, email);
    this._username = email;
  }

  getUserToken(): string | undefined {
    return this._token;
  }

  setUserToken(token: string): void {
    this._storage.set(UserStorageKeys.TOKEN, token);
    this._username = token;
  }

  getRefreshToken(): string | undefined {
    return this._refreshToken;
  }

  setRefreshToken(token: string): void {
    this._storage.set(UserStorageKeys.REFRESH_TOKEN, token);
    this._username = token;
  }

  getFavorites(): string[] {
    return this._favorites;
  }

  async setFavorites(passedFavorites: string[]) {
    const favorites = JSON.stringify(passedFavorites);
    await this._storage.set(
      UserStorageKeys.FAVORITES,
      JSON.stringify(favorites),
    );
    this._favorites = passedFavorites;
  }
}

export const userStorage = new UserStorage();

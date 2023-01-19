import { localStorageRepository } from "./localStorageValue";

export const tokenRepository = localStorageRepository("token", "");
export const isLogin = () => tokenRepository.value !== "";

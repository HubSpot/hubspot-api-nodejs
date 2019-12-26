export * from './accessTokensApi';
import { AccessTokensApi } from './accessTokensApi';
export * from './refreshTokensApi';
import { RefreshTokensApi } from './refreshTokensApi';
export * from './tokensApi';
import { TokensApi } from './tokensApi';
export const APIS = [AccessTokensApi, RefreshTokensApi, TokensApi];

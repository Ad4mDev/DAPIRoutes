import APITypes, { Routes } from "discord-api-types/v9";
import type { DiscordApiRoutes } from "../";

/**
 * [Get Current Authorization Information](https://discord.com/developers/docs/resources/DUMMYDUM/get-current-authorization-information)
 */
export function getOauth2Authorization(
    this: DiscordApiRoutes,
): Promise<APITypes.RESTGetAPIOAuth2CurrentAuthorizationResult> {
    const url = this.baseURL + Routes.oauth2Authorization();
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [Get Current Authorization Information](https://discord.com/developers/docs/resources/DUMMYDUM/get-current-authorization-information)
 */
export function getOauth2CurrentApplication(
    this: DiscordApiRoutes,
): Promise<APITypes.RESTGetAPIOAuth2CurrentApplicationResult> {
    const url = this.baseURL + Routes.oauth2CurrentApplication();
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [Get Current Bot Application Information](https://discord.com/developers/docs/resources/DUMMYDUM/get-current-bot-application-information)
 */
export function getOauth2CurrentAuthorization(
    this: DiscordApiRoutes,
): Promise<APITypes.RESTGetAPIOAuth2CurrentAuthorizationResult> {
    const url = this.baseURL + Routes.oauth2CurrentAuthorization();
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [Token URL](https://discord.com/developers/docs/resources/DUMMYDUM/token-uRL)
 */
export function postOauth2TokenExchange(
    this: DiscordApiRoutes,
    data: APITypes.RESTPostOAuth2AccessTokenURLEncodedData,
): Promise<APITypes.RESTPostOAuth2AccessTokenResult> {
    const url = this.baseURL + Routes.oauth2TokenExchange();
    const res = this.makeRequest({
        method: "POST",
        url,
        data,
    });
    return res;
}

/**
 * [Token Revoke](https://discord.com/developers/docs/resources/DUMMYDUM/token-revoke)
 */
export function postOauth2TokenRevocation(
    this: DiscordApiRoutes,
): Promise<void> {
    const url = this.baseURL + Routes.oauth2TokenRevocation();
    const res = this.makeRequest({
        method: "POST",
        url,
    });
    return res;
}

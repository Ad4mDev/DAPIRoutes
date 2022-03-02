import APITypes, { Routes } from "discord-api-types/v9";
import type { DiscordApiRoutes } from "../";

/**
 * [Get Gateway](https://discord.com/developers/docs/gateway#get-gateway)
 */
export function getGateway(
    this: DiscordApiRoutes,
): Promise<APITypes.RESTGetAPIGatewayResult> {
    const url = this.baseURL + Routes.gateway();
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [Get Gateway Bot](https://discord.com/developers/docs/gateway#get-gateway-bot)
 */
export function getGatewayBot(
    this: DiscordApiRoutes,
): Promise<APITypes.RESTGetAPIGatewayBotResult> {
    const url = this.baseURL + Routes.gatewayBot();
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

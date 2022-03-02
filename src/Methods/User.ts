import APITypes, { Routes, Snowflake } from "discord-api-types/v9";
import type { DiscordApiRoutes } from "../";

/**
 * [Get User](https://discord.com/developers/docs/resources/user#get-user)
 */
export function getUser(
    this: DiscordApiRoutes,
    userId?: Snowflake | "@me",
): Promise<APITypes.RESTGetAPIUserResult> {
    const url = this.baseURL + Routes.user(userId);
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [Modify Current User](https://discord.com/developers/docs/resources/user#modify-current-user)
 */
export function patchUser(
    this: DiscordApiRoutes,
    data: APITypes.RESTPatchAPICurrentUserJSONBody,
    userId?: Snowflake | "@me",
): Promise<APITypes.RESTPatchAPICurrentUserResult> {
    const url = this.baseURL + Routes.user(userId);
    const res = this.makeRequest({
        method: "PATCH",
        url,
        data,
    });
    return res;
}

/**
 * [Get Current User Guilds](https://discord.com/developers/docs/resources/user#get-current-user-guilds)
 */
export function getUserGuilds(
    this: DiscordApiRoutes,
): Promise<APITypes.RESTGetAPICurrentUserGuildsResult> {
    const url = this.baseURL + Routes.userGuilds();
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [Leave Guild](https://discord.com/developers/docs/resources/user#leave-guild)
 */
export function deleteUserGuild(
    this: DiscordApiRoutes,
    guildId: Snowflake,
): Promise<void> {
    const url = this.baseURL + Routes.userGuild(guildId);
    const res = this.makeRequest({
        method: "DELETE",
        url,
    });
    return res as Promise<never>;
}

/**
 * [Create DM](https://discord.com/developers/docs/resources/user#create-dM)
 */
export function postUserChannels(
    this: DiscordApiRoutes,
    data: APITypes.RESTPostAPICurrentUserCreateDMChannelJSONBody,
): Promise<APITypes.RESTPostAPICurrentUserCreateDMChannelResult> {
    const url = this.baseURL + Routes.userChannels();
    const res = this.makeRequest({
        method: "POST",
        url,
        data,
    });
    return res;
}

/**
 * [Get User Connections](https://discord.com/developers/docs/resources/user#get-user-connections)
 */
export function getUserConnections(
    this: DiscordApiRoutes,
): Promise<APITypes.RESTGetAPICurrentUserConnectionsResult> {
    const url = this.baseURL + Routes.userConnections();
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

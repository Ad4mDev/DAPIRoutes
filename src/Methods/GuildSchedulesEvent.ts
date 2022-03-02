import APITypes, { Routes, Snowflake } from "discord-api-types/v9";
import type { DiscordApiRoutes } from "../";

/**
 * [List Scheduled Events for Guild](https://discord.com/developers/docs/resources/guild-scheduled-event#list-scheduled-events for-guild)
 */
export function getGuildScheduledEvents(
    this: DiscordApiRoutes,
    guildId: Snowflake,
    query?: APITypes.RESTGetAPIGuildScheduledEventsQuery,
): Promise<APITypes.RESTGetAPIGuildScheduledEventsResult> {
    const url = this.baseURL + Routes.guildScheduledEvents(guildId);
    const res = this.makeRequest({
        method: "GET",
        url,
        query,
    });
    return res;
}

/**
 * [Create Guild Scheduled Event](https://discord.com/developers/docs/resources/guild-scheduled-event#create-guild-scheduled-event)
 */
export function postGuildScheduledEvents(
    this: DiscordApiRoutes,
    data: APITypes.RESTPostAPIGuildScheduledEventJSONBody,
    guildId: Snowflake,
): Promise<APITypes.RESTPostAPIGuildScheduledEventResult> {
    const url = this.baseURL + Routes.guildScheduledEvents(guildId);
    const res = this.makeRequest({
        method: "POST",
        url,
        data,
    });
    return res;
}

/**
 * [Get Guild Scheduled Event](https://discord.com/developers/docs/resources/guild-scheduled-event#get-guild-schedules-event)
 */
export function getGuildScheduledEvent(
    this: DiscordApiRoutes,
    guildId: Snowflake,
    guildScheduledEventId: Snowflake,
    query?: APITypes.RESTGetAPIGuildScheduledEventQuery,
): Promise<APITypes.RESTGetAPIGuildScheduledEventResult> {
    const url =
        this.baseURL +
        Routes.guildScheduledEvent(guildId, guildScheduledEventId);
    const res = this.makeRequest({
        method: "GET",
        url,
        query,
    });
    return res;
}

/**
 * [Modify Guild Scheduled Event](https://discord.com/developers/docs/resources/guild-scheduled-event#modify-guild-scheduled-event)
 */
export function patchGuildScheduledEvent(
    this: DiscordApiRoutes,
    data: APITypes.RESTPatchAPIGuildScheduledEventJSONBody,
    guildId: Snowflake,
    guildScheduledEventId: Snowflake,
): Promise<APITypes.RESTPatchAPIGuildScheduledEventResult> {
    const url =
        this.baseURL +
        Routes.guildScheduledEvent(guildId, guildScheduledEventId);
    const res = this.makeRequest({
        method: "PATCH",
        url,
        data,
    });
    return res;
}

/**
 * [Delete Guild Scheduled Event](https://discord.com/developers/docs/resources/guild-scheduled-event#delete-guild-scheduled-event)
 */
export function deleteGuildScheduledEvent(
    this: DiscordApiRoutes,
    guildId: Snowflake,
    guildScheduledEventId: Snowflake,
): Promise<APITypes.RESTDeleteAPIGuildScheduledEventResult> {
    const url =
        this.baseURL +
        Routes.guildScheduledEvent(guildId, guildScheduledEventId);
    const res = this.makeRequest({
        method: "DELETE",
        url,
    });
    return res as Promise<never>;
}

/**
 * [Get Guild Scheduled Event Users](https://discord.com/developers/docs/resources/guild-scheduled-event#get-guild-scheduled-event-users)
 */
export function getGuildScheduledEventUsers(
    this: DiscordApiRoutes,
    guildId: Snowflake,
    guildScheduledEventId: Snowflake,
    query?: APITypes.RESTGetAPIGuildScheduledEventUsersQuery,
): Promise<APITypes.RESTGetAPIGuildScheduledEventUsersResult> {
    const url =
        this.baseURL +
        Routes.guildScheduledEventUsers(guildId, guildScheduledEventId);
    const res = this.makeRequest({
        method: "GET",
        url,
        query,
    });
    return res;
}

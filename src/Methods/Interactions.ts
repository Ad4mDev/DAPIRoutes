import APITypes, { Routes, Snowflake } from "discord-api-types/v9";
import type { DiscordApiRoutes } from "../";

/**
 * [Get Global Application Commands](https://discord.com/developers/docs/interactions/application-commands#get-global-application-commands)
 */
export function getApplicationCommands(
    this: DiscordApiRoutes,
    applicationId: Snowflake,
): Promise<APITypes.RESTGetAPIApplicationCommandsResult> {
    const url = this.baseURL + Routes.applicationCommands(applicationId);
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [Create Global Application Command](https://discord.com/developers/docs/interactions/application-commands#create-global-application-command)
 */
export function postApplicationCommands(
    this: DiscordApiRoutes,
    data: APITypes.RESTPostAPIApplicationCommandsJSONBody,
    applicationId: Snowflake,
): Promise<APITypes.RESTPostAPIApplicationCommandsResult> {
    const url = this.baseURL + Routes.applicationCommands(applicationId);
    const res = this.makeRequest({
        method: "POST",
        url,
        data,
    });
    return res;
}

/**
 * [Get Global Application Command](https://discord.com/developers/docs/interactions/application-commands#get-global-application-command)
 */
export function getApplicationCommand(
    this: DiscordApiRoutes,
    applicationId: Snowflake,
    commandId: Snowflake,
): Promise<APITypes.RESTGetAPIApplicationCommandResult> {
    const url =
        this.baseURL + Routes.applicationCommand(applicationId, commandId);
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [Edit Global Application Command](https://discord.com/developers/docs/interactions/application-commands#edit-global-application-command)
 */
export function patchApplicationCommand(
    this: DiscordApiRoutes,
    data: APITypes.RESTPatchAPIApplicationCommandJSONBody,
    applicationId: Snowflake,
    commandId: Snowflake,
): Promise<APITypes.RESTPatchAPIApplicationCommandResult> {
    const url =
        this.baseURL + Routes.applicationCommand(applicationId, commandId);
    const res = this.makeRequest({
        method: "PATCH",
        url,
        data,
    });
    return res;
}

/**
 * [Delete Global Application Command](https://discord.com/developers/docs/interactions/application-commands#delete-global-application-command)
 */
export function deleteApplicationCommand(
    this: DiscordApiRoutes,
    applicationId: Snowflake,
    commandId: Snowflake,
): Promise<void> {
    const url =
        this.baseURL + Routes.applicationCommand(applicationId, commandId);
    const res = this.makeRequest({
        method: "DELETE",
        url,
    });
    return res as Promise<never>;
}

/**
 * [Bulk Overwrite Global Application Commands](https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-global-application-commands)
 */
export function putApplicationCommands(
    this: DiscordApiRoutes,
    data: APITypes.RESTPutAPIApplicationCommandsJSONBody,
    applicationId: Snowflake,
): Promise<APITypes.RESTPutAPIApplicationCommandsResult> {
    const url = this.baseURL + Routes.applicationCommands(applicationId);
    const res = this.makeRequest({
        method: "PUT",
        url,
        data,
    });
    return res;
}

/**
 * [Get Guild Application Commands](https://discord.com/developers/docs/interactions/application-commands#get-guild-application-commands)
 */
export function getApplicationGuildCommands(
    this: DiscordApiRoutes,
    applicationId: Snowflake,
    guildId: Snowflake,
): Promise<APITypes.RESTGetAPIApplicationGuildCommandsResult> {
    const url =
        this.baseURL + Routes.applicationGuildCommands(applicationId, guildId);
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [Create Guild Application Command](https://discord.com/developers/docs/interactions/application-commands#create-guild-application-command)
 */
export function postApplicationGuildCommands(
    this: DiscordApiRoutes,
    data: APITypes.RESTPostAPIApplicationGuildCommandsJSONBody,
    applicationId: Snowflake,
    guildId: Snowflake,
): Promise<APITypes.RESTPostAPIApplicationGuildCommandsResult> {
    const url =
        this.baseURL + Routes.applicationGuildCommands(applicationId, guildId);
    const res = this.makeRequest({
        method: "POST",
        url,
        data,
    });
    return res;
}

/**
 * [Get Guild Application Command](https://discord.com/developers/docs/interactions/application-commands#get-guild-application-command)
 */
export function getApplicationGuildCommand(
    this: DiscordApiRoutes,
    applicationId: Snowflake,
    guildId: Snowflake,
    commandId: Snowflake,
): Promise<APITypes.RESTGetAPIApplicationGuildCommandResult> {
    const url =
        this.baseURL +
        Routes.applicationGuildCommand(applicationId, guildId, commandId);
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [Edit Guild Application Command](https://discord.com/developers/docs/interactions/application-commands#edit-guild-application-command)
 */
export function patchApplicationGuildCommand(
    this: DiscordApiRoutes,
    data: APITypes.RESTPatchAPIApplicationGuildCommandJSONBody,
    applicationId: Snowflake,
    guildId: Snowflake,
    commandId: Snowflake,
): Promise<APITypes.RESTPatchAPIApplicationGuildCommandResult> {
    const url =
        this.baseURL +
        Routes.applicationGuildCommand(applicationId, guildId, commandId);
    const res = this.makeRequest({
        method: "PATCH",
        url,
        data,
    });
    return res;
}

/**
 * [Delete Guild Application Command](https://discord.com/developers/docs/interactions/application-commands#delete-guild-application-command)
 */
export function deleteApplicationGuildCommand(
    this: DiscordApiRoutes,
    applicationId: Snowflake,
    guildId: Snowflake,
    commandId: Snowflake,
): Promise<void> {
    const url =
        this.baseURL +
        Routes.applicationGuildCommand(applicationId, guildId, commandId);
    const res = this.makeRequest({
        method: "DELETE",
        url,
    });
    return res as Promise<never>;
}

/**
 * [Bulk Overwrite Guild Application Commands](https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-guild-application-commands)
 */
export function putApplicationGuildCommands(
    this: DiscordApiRoutes,
    data: APITypes.RESTPutAPIApplicationGuildCommandsJSONBody,
    applicationId: Snowflake,
    guildId: Snowflake,
): Promise<APITypes.RESTPutAPIApplicationGuildCommandsResult> {
    const url =
        this.baseURL + Routes.applicationGuildCommands(applicationId, guildId);
    const res = this.makeRequest({
        method: "PUT",
        url,
        data,
    });
    return res;
}

/**
 * [Get Guild Application Command Permissions](https://discord.com/developers/docs/interactions/application-commands#get-guild-application-command-permissions)
 */
export function getGuildApplicationCommandsPermissions(
    this: DiscordApiRoutes,
    applicationId: Snowflake,
    guildId: Snowflake,
): Promise<APITypes.RESTGetAPIGuildApplicationCommandsPermissionsResult> {
    const url =
        this.baseURL +
        Routes.guildApplicationCommandsPermissions(applicationId, guildId);
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [Get Application Command Permissions](https://discord.com/developers/docs/interactions/application-commands#get-application-command-permissions)
 */
export function getApplicationCommandPermissions(
    this: DiscordApiRoutes,
    applicationId: Snowflake,
    guildId: Snowflake,
    commandId: Snowflake,
): Promise<APITypes.RESTGetAPIApplicationCommandPermissionsResult> {
    const url =
        this.baseURL +
        Routes.applicationCommandPermissions(applicationId, guildId, commandId);
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [Edit Application Command Permissions](https://discord.com/developers/docs/interactions/application-commands#edit-application-command-permissions)
 */
export function putApplicationCommandPermissions(
    this: DiscordApiRoutes,
    data: APITypes.RESTPutAPIApplicationCommandPermissionsJSONBody,
    applicationId: Snowflake,
    guildId: Snowflake,
    commandId: Snowflake,
): Promise<APITypes.RESTPutAPIApplicationCommandPermissionsResult> {
    const url =
        this.baseURL +
        Routes.applicationCommandPermissions(applicationId, guildId, commandId);
    const res = this.makeRequest({
        method: "PUT",
        url,
        data,
    });
    return res;
}

/**
 * [Batch Edit Application Command Permissions](https://discord.com/developers/docs/interactions/application-commands#batch-edit-application-command-permissions)
 */
export function putGuildApplicationCommandsPermissions(
    this: DiscordApiRoutes,
    data: APITypes.RESTPutAPIGuildApplicationCommandsPermissionsJSONBody,
    applicationId: Snowflake,
    guildId: Snowflake,
): Promise<APITypes.RESTPutAPIGuildApplicationCommandsPermissionsResult> {
    const url =
        this.baseURL +
        Routes.guildApplicationCommandsPermissions(applicationId, guildId);
    const res = this.makeRequest({
        method: "PUT",
        url,
        data,
    });
    return res;
}

/**
 * [Create Interaction Response](https://discord.com/developers/docs/interactions/receiving-and-responding#create-interaction-response)
 */
export function postInteractionCallback(
    this: DiscordApiRoutes,
    data: APITypes.RESTPostAPIInteractionCallbackJSONBody,
    interactionId: Snowflake,
    interactionToken: string,
): Promise<void> {
    const url =
        this.baseURL +
        Routes.interactionCallback(interactionId, interactionToken);
    const res = this.makeRequest({
        method: "POST",
        url,
        data,
    });
    return res;
}

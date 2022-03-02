import APITypes, { Routes, Snowflake } from "discord-api-types/v9";
import type { DiscordApiRoutes } from "../";

/**
 * [Get Guild Template](https://discord.com/developers/docs/resources/guild-template#get-guild-template)
 */
export function getTemplate(
    this: DiscordApiRoutes,
    code: string,
): Promise<APITypes.RESTGetAPITemplateResult> {
    const url = this.baseURL + Routes.template(code);
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [Create Guild from Guild Template](https://discord.com/developers/docs/resources/guild-template#create-guild from-guild-template)
 */
export function postTemplate(
    this: DiscordApiRoutes,
    data: APITypes.RESTPostAPIGuildTemplatesJSONBody,
    code: string,
): Promise<APITypes.RESTPostAPIGuildTemplatesResult> {
    const url = this.baseURL + Routes.template(code);
    const res = this.makeRequest({
        method: "POST",
        url,
        data,
    });
    return res;
}

/**
 * [Get Guild Templates](https://discord.com/developers/docs/resources/guild-template#get-guild-templates)
 */
export function getGuildTemplates(
    this: DiscordApiRoutes,
    guildId: Snowflake,
): Promise<APITypes.RESTGetAPIGuildTemplatesResult> {
    const url = this.baseURL + Routes.guildTemplates(guildId);
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [Create Guild Template](https://discord.com/developers/docs/resources/guild-template#create-guild-template)
 */
export function postGuildTemplates(
    this: DiscordApiRoutes,
    data: APITypes.RESTPostAPIGuildTemplatesJSONBody,
    guildId: Snowflake,
): Promise<APITypes.RESTPostAPIGuildTemplatesResult> {
    const url = this.baseURL + Routes.guildTemplates(guildId);
    const res = this.makeRequest({
        method: "POST",
        url,
        data,
    });
    return res;
}

/**
 * [Sync Guild Template](https://discord.com/developers/docs/resources/guild-template#sync-guild-template)
 */
export function putGuildTemplate(
    this: DiscordApiRoutes,
    guildId: Snowflake,
    code: string,
): Promise<APITypes.RESTPutAPIGuildTemplateSyncResult> {
    const url = this.baseURL + Routes.guildTemplate(guildId, code);
    const res = this.makeRequest({
        method: "PUT",
        url,
    });
    return res;
}

/**
 * [Modify Guild Template](https://discord.com/developers/docs/resources/guild-template#modify-guild-template)
 */
export function patchGuildTemplate(
    this: DiscordApiRoutes,
    data: APITypes.RESTPatchAPIGuildTemplateJSONBody,
    guildId: Snowflake,
    code: string,
): Promise<APITypes.RESTPatchAPIGuildTemplateResult> {
    const url = this.baseURL + Routes.guildTemplate(guildId, code);
    const res = this.makeRequest({
        method: "PATCH",
        url,
        data,
    });
    return res;
}

/**
 * [Delete Guild Template](https://discord.com/developers/docs/resources/guild-template#delete-guild-template)
 */
export function deleteGuildTemplate(
    this: DiscordApiRoutes,
    guildId: Snowflake,
    code: string,
): Promise<APITypes.RESTDeleteAPIGuildTemplateResult> {
    const url = this.baseURL + Routes.guildTemplate(guildId, code);
    const res = this.makeRequest({
        method: "DELETE",
        url,
    });
    return res as Promise<never>;
}

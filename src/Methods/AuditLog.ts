import APITypes, { Routes, Snowflake } from "discord-api-types/v9";
import type { DiscordApiRoutes } from "../";

/**
 * [Get Guild Audit Log](https://discord.com/developers/docs/resources/audit-log#get-guild-audit-log)
 */
export function getGuildAuditLog(
    this: DiscordApiRoutes,
    guildId: Snowflake,
    query?: APITypes.RESTGetAPIAuditLogQuery,
): Promise<APITypes.RESTGetAPIAuditLogResult> {
    const url = this.baseURL + Routes.guildAuditLog(guildId);
    const res = this.makeRequest({
        method: "GET",
        url,
        query,
    });
    return res;
}

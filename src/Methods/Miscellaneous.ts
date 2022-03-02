import APITypes, { Routes, Snowflake } from "discord-api-types/v9";
import type { DiscordApiRoutes } from "../";

/**
 *
 */
export function getGuildMemberVerification(
    this: DiscordApiRoutes,
    guildId: Snowflake,
): Promise<APITypes.RESTGetAPIGuildMemberVerificationResult> {
    const url = this.baseURL + Routes.guildMemberVerification(guildId);
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 *
 */
export function patchGuildMemberVerification(
    this: DiscordApiRoutes,
    data: APITypes.RESTPatchAPIGuildMemberVerificationJSONBody,
    guildId: Snowflake,
): Promise<APITypes.RESTPatchAPIGuildMemberVerificationResult> {
    const url = this.baseURL + Routes.guildMemberVerification(guildId);
    const res = this.makeRequest({
        method: "PATCH",
        url,
        data,
    });
    return res;
}

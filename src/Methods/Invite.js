import APITypes, { Routes } from "discord-api-types/v9";
import type { DiscordApiRoutes } from "../";

/**
 * [Get Invite](https://discord.com/developers/docs/resources/DUMMYDUM/get-invite)
 */
export function getInvite(
    this: DiscordApiRoutes,
    code: string,
    query?: APITypes.RESTGetAPIInviteQuery,
): Promise<APITypes.RESTGetAPIInviteResult> {
    const url = this.baseURL + Routes.invite(code);
    const res = this.makeRequest({
        method: "GET",
        url,
        query,
    });
    return res;
}

/**
 * [Delete Invite](https://discord.com/developers/docs/resources/DUMMYDUM/delete-invite)
 */
export function deleteInvite(
    this: DiscordApiRoutes,
    code: string,
    reason?: string,
): Promise<APITypes.RESTDeleteAPIInviteResult> {
    const url = this.baseURL + Routes.invite(code);
    const res = this.makeRequest({
        method: "DELETE",
        url,
        reason,
    });
    return res as Promise<never>;
}

import APITypes, { Routes, Snowflake } from "discord-api-types/v9";
import type { DiscordApiRoutes } from "../";

/**
 * [Create Stage Instance](https://discord.com/developers/docs/resources/stage-instance#create-stage-instance)
 */
export function postStageInstances(
    this: DiscordApiRoutes,
    data: APITypes.RESTPostAPIStageInstanceJSONBody,
    reason?: string,
): Promise<APITypes.RESTPostAPIStageInstanceResult> {
    const url = this.baseURL + Routes.stageInstances();
    const res = this.makeRequest({
        method: "POST",
        url,
        reason,
        data,
    });
    return res;
}

/**
 * [Get Stage Instance](https://discord.com/developers/docs/resources/stage-instance#get-stage-instance)
 */
export function getStageInstance(
    this: DiscordApiRoutes,
    channelId: Snowflake,
): Promise<APITypes.RESTGetAPIStageInstanceResult> {
    const url = this.baseURL + Routes.stageInstance(channelId);
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [Modify Stage Instance](https://discord.com/developers/docs/resources/stage-instance#modify-stage-instance)
 */
export function patchStageInstance(
    this: DiscordApiRoutes,
    data: APITypes.RESTPatchAPIStageInstanceJSONBody,
    channelId: Snowflake,
    reason?: string,
): Promise<APITypes.RESTPatchAPIStageInstanceResult> {
    const url = this.baseURL + Routes.stageInstance(channelId);
    const res = this.makeRequest({
        method: "PATCH",
        url,
        reason,
        data,
    });
    return res;
}

/**
 * [Delete Stage Instance](https://discord.com/developers/docs/resources/stage-instance#delete-stage-instance)
 */
export function deleteStageInstance(
    this: DiscordApiRoutes,
    channelId: Snowflake,
    reason?: string,
): Promise<APITypes.RESTDeleteAPIStageInstanceResult> {
    const url = this.baseURL + Routes.stageInstance(channelId);
    const res = this.makeRequest({
        method: "DELETE",
        url,
        reason,
    });
    return res as Promise<never>;
}

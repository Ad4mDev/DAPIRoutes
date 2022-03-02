import APITypes, { Routes, Snowflake } from "discord-api-types/v9";
import type { DiscordApiRoutes } from "../";

/**
 * [Get Sticker](https://discord.com/developers/docs/resources/sticker#get-sticker)
 */
export function getSticker(
    this: DiscordApiRoutes,
    stickerId: Snowflake,
): Promise<APITypes.RESTGetAPIStickerResult> {
    const url = this.baseURL + Routes.sticker(stickerId);
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [List Nitro Sticker Packs](https://discord.com/developers/docs/resources/sticker#list-nitro-sticker-packs)
 */
export function getNitroStickerPacks(
    this: DiscordApiRoutes,
): Promise<APITypes.RESTGetNitroStickerPacksResult> {
    const url = this.baseURL + Routes.nitroStickerPacks();
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [List Guild Stickers](https://discord.com/developers/docs/resources/sticker#list-guild-stickers)
 */
export function getGuildStickers(
    this: DiscordApiRoutes,
    guildId: Snowflake,
): Promise<APITypes.RESTGetAPIGuildStickersResult> {
    const url = this.baseURL + Routes.guildStickers(guildId);
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [Get Guild Sticker](https://discord.com/developers/docs/resources/sticker#get-guild-sticker)
 */
export function getGuildSticker(
    this: DiscordApiRoutes,
    guildId: Snowflake,
    stickerId: Snowflake,
): Promise<APITypes.RESTGetAPIGuildStickerResult> {
    const url = this.baseURL + Routes.guildSticker(guildId, stickerId);
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [Create Guild Sticker](https://discord.com/developers/docs/resources/sticker#create-guild-sticker)
 */
export function postGuildStickers(
    this: DiscordApiRoutes,
    data: APITypes.RESTPostAPIGuildStickerFormDataBody,
    guildId: Snowflake,
): Promise<APITypes.RESTPostAPIGuildStickerResult> {
    const url = this.baseURL + Routes.guildStickers(guildId);
    const res = this.makeRequest({
        method: "POST",
        url,
        data,
    });
    return res;
}

/**
 * [Modify Guild Sticker](https://discord.com/developers/docs/resources/sticker#modify-guild-sticker)
 */
export function patchGuildSticker(
    this: DiscordApiRoutes,
    data: APITypes.RESTPatchAPIGuildStickerJSONBody,
    guildId: Snowflake,
    stickerId: Snowflake,
    reason?: string,
): Promise<APITypes.RESTPatchAPIGuildStickerResult> {
    const url = this.baseURL + Routes.guildSticker(guildId, stickerId);
    const res = this.makeRequest({
        method: "PATCH",
        url,
        reason,
        data,
    });
    return res;
}

/**
 * [Delete Guild Sticker](https://discord.com/developers/docs/resources/sticker#delete-guild-sticker)
 */
export function deleteGuildSticker(
    this: DiscordApiRoutes,
    guildId: Snowflake,
    stickerId: Snowflake,
    reason?: string,
): Promise<APITypes.RESTDeleteAPIGuildStickerResult> {
    const url = this.baseURL + Routes.guildSticker(guildId, stickerId);
    const res = this.makeRequest({
        method: "DELETE",
        url,
        reason,
    });
    return res as Promise<never>;
}

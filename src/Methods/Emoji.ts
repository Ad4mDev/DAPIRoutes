import APITypes, { Routes, Snowflake } from "discord-api-types/v9";
import type { DiscordApiRoutes } from "../";

/**
 * [List Guild Emojis](https://discord.com/developers/docs/resources/emoji#list-guild-emojis)
 */
export function getGuildEmojis(
    this: DiscordApiRoutes,
    guildId: Snowflake,
): Promise<APITypes.RESTGetAPIGuildEmojisResult> {
    const url = this.baseURL + Routes.guildEmojis(guildId);
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [Get Guild Emoji](https://discord.com/developers/docs/resources/emoji#get-guild-emoji)
 */
export function getGuildEmoji(
    this: DiscordApiRoutes,
    guildId: Snowflake,
    emojiId: Snowflake,
): Promise<APITypes.RESTGetAPIGuildEmojiResult> {
    const url = this.baseURL + Routes.guildEmoji(guildId, emojiId);
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [Create Guild Emoji](https://discord.com/developers/docs/resources/emoji#create-guild-emoji)
 */
export function postGuildEmojis(
    this: DiscordApiRoutes,
    data: APITypes.RESTPostAPIGuildEmojiJSONBody,
    guildId: Snowflake,
    reason?: string,
): Promise<APITypes.RESTPostAPIGuildEmojiResult> {
    const url = this.baseURL + Routes.guildEmojis(guildId);
    const res = this.makeRequest({
        method: "POST",
        url,
        reason,
        data,
    });
    return res;
}

/**
 * [Modify Guild Emoji](https://discord.com/developers/docs/resources/emoji#modify-guild-emoji)
 */
export function patchGuildEmoji(
    this: DiscordApiRoutes,
    data: APITypes.RESTPatchAPIGuildEmojiJSONBody,
    guildId: Snowflake,
    emojiId: Snowflake,
    reason?: string,
): Promise<APITypes.RESTPatchAPIGuildEmojiResult> {
    const url = this.baseURL + Routes.guildEmoji(guildId, emojiId);
    const res = this.makeRequest({
        method: "PATCH",
        url,
        reason,
        data,
    });
    return res;
}

/**
 * [Delete Guild Emoji](https://discord.com/developers/docs/resources/emoji#delete-guild-emoji)
 */
export function deleteGuildEmoji(
    this: DiscordApiRoutes,
    guildId: Snowflake,
    emojiId: Snowflake,
    reason?: string,
): Promise<APITypes.RESTDeleteAPIGuildEmojiResult> {
    const url = this.baseURL + Routes.guildEmoji(guildId, emojiId);
    const res = this.makeRequest({
        method: "DELETE",
        url,
        reason,
    });
    return res as Promise<never>;
}

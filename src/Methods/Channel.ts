import APITypes, { Routes, Snowflake } from "discord-api-types/v9";
import type { DiscordApiRoutes } from "../";

/**
 * [Get Channel](https://discord.com/developers/docs/resources/channel#get-channel)
 */
export function getChannel(
    this: DiscordApiRoutes,
    channelId: Snowflake,
): Promise<APITypes.RESTGetAPIChannelResult> {
    const url = this.baseURL + Routes.channel(channelId);
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [Modify Channel](https://discord.com/developers/docs/resources/channel#modify-channel)
 */
export function patchChannel(
    this: DiscordApiRoutes,
    data: APITypes.RESTPatchAPIChannelJSONBody,
    channelId: Snowflake,
    reason?: string,
): Promise<APITypes.RESTPatchAPIChannelResult> {
    const url = this.baseURL + Routes.channel(channelId);
    const res = this.makeRequest({
        method: "PATCH",
        url,
        reason,
        data,
    });
    return res;
}

/**
 * [Delete/Close Channel](https://discord.com/developers/docs/resources/channel#deleteclose-channel)
 */
export function deleteChannel(
    this: DiscordApiRoutes,
    channelId: Snowflake,
    reason?: string,
): Promise<APITypes.RESTDeleteAPIChannelResult> {
    const url = this.baseURL + Routes.channel(channelId);
    const res = this.makeRequest({
        method: "DELETE",
        url,
        reason,
    });
    return res as Promise<never>;
}

/**
 * [Get Channel Messages](https://discord.com/developers/docs/resources/channel#get-channel-messages)
 */
export function getChannelMessages(
    this: DiscordApiRoutes,
    channelId: Snowflake,
    query?: APITypes.RESTGetAPIChannelMessagesQuery,
): Promise<APITypes.RESTGetAPIChannelMessagesResult> {
    const url = this.baseURL + Routes.channelMessages(channelId);
    const res = this.makeRequest({
        method: "GET",
        url,
        query,
    });
    return res;
}

/**
 * [Get Channel Message](https://discord.com/developers/docs/resources/channel#get-channel-message)
 */
export function getChannelMessage(
    this: DiscordApiRoutes,
    channelId: Snowflake,
    messageId: Snowflake,
): Promise<APITypes.RESTGetAPIChannelMessageResult> {
    const url = this.baseURL + Routes.channelMessage(channelId, messageId);
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [Create Message](https://discord.com/developers/docs/resources/channel#create-message)
 */
export function postChannelMessages(
    this: DiscordApiRoutes,
    data:
        | APITypes.RESTPostAPIChannelMessageJSONBody
        | APITypes.RESTPostAPIChannelMessageFormDataBody,
    channelId: Snowflake,
): Promise<APITypes.RESTPostAPIChannelMessageResult> {
    const url = this.baseURL + Routes.channelMessages(channelId);
    const res = this.makeRequest({
        method: "POST",
        url,
        data,
    });
    return res;
}

/**
 * [Crosspost Message](https://discord.com/developers/docs/resources/channel#crosspost-message)
 */
export function postChannelMessageCrosspost(
    this: DiscordApiRoutes,
    channelId: Snowflake,
    messageId: Snowflake,
): Promise<APITypes.RESTPostAPIChannelMessageCrosspostResult> {
    const url =
        this.baseURL + Routes.channelMessageCrosspost(channelId, messageId);
    const res = this.makeRequest({
        method: "POST",
        url,
    });
    return res;
}

/**
 * [Create Reaction](https://discord.com/developers/docs/resources/channel#create-reaction)
 */
export function putChannelMessageOwnReaction(
    this: DiscordApiRoutes,
    channelId: Snowflake,
    messageId: Snowflake,
    emoji: string,
): Promise<APITypes.RESTPutAPIChannelMessageReactionResult> {
    const url =
        this.baseURL +
        Routes.channelMessageOwnReaction(channelId, messageId, emoji);
    const res = this.makeRequest({
        method: "PUT",
        url,
    });
    return res as Promise<never>;
}

/**
 * [Delete Own Reaction](https://discord.com/developers/docs/resources/channel#delete-own-reaction)
 */
export function deleteChannelMessageOwnReaction(
    this: DiscordApiRoutes,
    channelId: Snowflake,
    messageId: Snowflake,
    emoji: string,
): Promise<APITypes.RESTDeleteAPIChannelMessageOwnReaction> {
    const url =
        this.baseURL +
        Routes.channelMessageOwnReaction(channelId, messageId, emoji);
    const res = this.makeRequest({
        method: "DELETE",
        url,
    });
    return res as Promise<never>;
}

/**
 * [Delete User Reaction](https://discord.com/developers/docs/resources/channel#delete-user-reaction)
 */
export function deleteChannelMessageUserReaction(
    this: DiscordApiRoutes,
    channelId: Snowflake,
    messageId: Snowflake,
    emoji: string,
    userId: Snowflake,
): Promise<APITypes.RESTDeleteAPIChannelMessageUserReactionResult> {
    const url =
        this.baseURL +
        Routes.channelMessageUserReaction(channelId, messageId, emoji, userId);
    const res = this.makeRequest({
        method: "DELETE",
        url,
    });
    return res as Promise<never>;
}

/**
 * [Get Reactions](https://discord.com/developers/docs/resources/channel#get-reactions)
 */
export function getChannelMessageReaction(
    this: DiscordApiRoutes,
    channelId: Snowflake,
    messageId: Snowflake,
    emoji: string,
    query?: APITypes.RESTGetAPIChannelMessageReactionUsersQuery,
): Promise<APITypes.RESTGetAPIChannelMessageReactionUsersResult> {
    const url =
        this.baseURL +
        Routes.channelMessageReaction(channelId, messageId, emoji);
    const res = this.makeRequest({
        method: "GET",
        url,
        query,
    });
    return res;
}

/**
 * [Delete All Reactions](https://discord.com/developers/docs/resources/channel#delete-all-reactions)
 */
export function deleteChannelMessageAllReactions(
    this: DiscordApiRoutes,
    channelId: Snowflake,
    messageId: Snowflake,
): Promise<APITypes.RESTDeleteAPIChannelAllMessageReactionsResult> {
    const url =
        this.baseURL + Routes.channelMessageAllReactions(channelId, messageId);
    const res = this.makeRequest({
        method: "DELETE",
        url,
    });
    return res as Promise<never>;
}

/**
 * [Delete All Reactions for Emoji](https://discord.com/developers/docs/resources/channel#delete-all-reactions-for-emoji)
 */
export function deleteChannelMessageReaction(
    this: DiscordApiRoutes,
    channelId: Snowflake,
    messageId: Snowflake,
    emoji: string,
): Promise<APITypes.RESTDeleteAPIChannelMessageReactionResult> {
    const url =
        this.baseURL +
        Routes.channelMessageReaction(channelId, messageId, emoji);
    const res = this.makeRequest({
        method: "DELETE",
        url,
    });
    return res as Promise<never>;
}

/**
 * [Edit Message](https://discord.com/developers/docs/resources/channel#edit-message)
 */
export function patchChannelMessage(
    this: DiscordApiRoutes,
    data: APITypes.RESTPatchAPIChannelMessageJSONBody,
    channelId: Snowflake,
    messageId: Snowflake,
): Promise<APITypes.RESTPatchAPIChannelMessageResult> {
    const url = this.baseURL + Routes.channelMessage(channelId, messageId);
    const res = this.makeRequest({
        method: "PATCH",
        url,
        data,
    });
    return res;
}

/**
 * [Delete Message](https://discord.com/developers/docs/resources/channel#delete-message)
 */
export function deleteChannelMessage(
    this: DiscordApiRoutes,
    channelId: Snowflake,
    messageId: Snowflake,
    reason?: string,
): Promise<APITypes.RESTDeleteAPIChannelMessageResult> {
    const url = this.baseURL + Routes.channelMessage(channelId, messageId);
    const res = this.makeRequest({
        method: "DELETE",
        url,
        reason,
    });
    return res as Promise<never>;
}

/**
 * [Bulk Delete Messages](https://discord.com/developers/docs/resources/channel#bulk-delete-messages)
 */
export function postChannelBulkDelete(
    this: DiscordApiRoutes,
    data: APITypes.RESTPostAPIChannelMessagesBulkDeleteJSONBody,
    channelId: Snowflake,
    reason?: string,
): Promise<APITypes.RESTPostAPIChannelMessagesBulkDeleteResult> {
    const url = this.baseURL + Routes.channelBulkDelete(channelId);
    const res = this.makeRequest({
        method: "POST",
        url,
        reason,
        data,
    });
    return res as Promise<never>;
}

/**
 * [Edit Channel Permissions](https://discord.com/developers/docs/resources/channel#edit-channel-permissions)
 */
export function putChannelPermission(
    this: DiscordApiRoutes,
    data: APITypes.RESTPutAPIChannelPermissionJSONBody,
    channelId: Snowflake,
    overwriteId: Snowflake,
    reason?: string,
): Promise<APITypes.RESTPutAPIChannelPermissionResult> {
    const url = this.baseURL + Routes.channelPermission(channelId, overwriteId);
    const res = this.makeRequest({
        method: "PUT",
        url,
        reason,
        data,
    });
    return res as Promise<never>;
}

/**
 * [Get Channel Invites](https://discord.com/developers/docs/resources/channel#get-channel-invites)
 */
export function getChannelInvites(
    this: DiscordApiRoutes,
    channelId: Snowflake,
): Promise<APITypes.RESTGetAPIChannelInvitesResult> {
    const url = this.baseURL + Routes.channelInvites(channelId);
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [Create Channel Invite](https://discord.com/developers/docs/resources/channel#create-channel-invite)
 */
export function postChannelInvites(
    this: DiscordApiRoutes,
    data: APITypes.RESTPostAPIChannelInviteJSONBody,
    channelId: Snowflake,
    reason?: string,
): Promise<APITypes.RESTPostAPIChannelInviteResult> {
    const url = this.baseURL + Routes.channelInvites(channelId);
    const res = this.makeRequest({
        method: "POST",
        url,
        reason,
        data,
    });
    return res;
}

/**
 * [Delete Channel Permission](https://discord.com/developers/docs/resources/channel#delete-channel-permission)
 */
export function deleteChannelPermission(
    this: DiscordApiRoutes,
    channelId: Snowflake,
    overwriteId: Snowflake,
    reason?: string,
): Promise<APITypes.RESTDeleteAPIChannelPermissionResult> {
    const url = this.baseURL + Routes.channelPermission(channelId, overwriteId);
    const res = this.makeRequest({
        method: "DELETE",
        url,
        reason,
    });
    return res as Promise<never>;
}

/**
 * [Follow News Channel](https://discord.com/developers/docs/resources/channel#follow-news-channel)
 */
export function postChannelFollowers(
    this: DiscordApiRoutes,
    data: APITypes.RESTPostAPIChannelFollowersJSONBody,
    channelId: Snowflake,
): Promise<APITypes.RESTPostAPIChannelFollowersResult> {
    const url = this.baseURL + Routes.channelFollowers(channelId);
    const res = this.makeRequest({
        method: "POST",
        url,
        data,
    });
    return res;
}

/**
 * [Trigger Typing Indicator](https://discord.com/developers/docs/resources/channel#trigger-typing-indicator)
 */
export function postChannelTyping(
    this: DiscordApiRoutes,
    channelId: Snowflake,
): Promise<APITypes.RESTPostAPIChannelTypingResult> {
    const url = this.baseURL + Routes.channelTyping(channelId);
    const res = this.makeRequest({
        method: "POST",
        url,
    });
    return res as Promise<never>;
}

/**
 * [Get pinned Messages](https://discord.com/developers/docs/resources/channel#get-pinned-messages)
 */
export function getChannelPins(
    this: DiscordApiRoutes,
    channelId: Snowflake,
): Promise<APITypes.RESTGetAPIChannelPinsResult> {
    const url = this.baseURL + Routes.channelPins(channelId);
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [Pin Message](https://discord.com/developers/docs/resources/channel#pin-message)
 */
export function putChannelPin(
    this: DiscordApiRoutes,
    channelId: Snowflake,
    messageId: Snowflake,
    reason?: string,
): Promise<APITypes.RESTPutAPIChannelPinResult> {
    const url = this.baseURL + Routes.channelPin(channelId, messageId);
    const res = this.makeRequest({
        method: "PUT",
        url,
        reason,
    });
    return res as Promise<never>;
}

/**
 * [Unpin Message](https://discord.com/developers/docs/resources/channel#unpin-message)
 */
export function deleteChannelPin(
    this: DiscordApiRoutes,
    channelId: Snowflake,
    messageId: Snowflake,
    reason?: string,
): Promise<APITypes.RESTDeleteAPIChannelPinResult> {
    const url = this.baseURL + Routes.channelPin(channelId, messageId);
    const res = this.makeRequest({
        method: "DELETE",
        url,
        reason,
    });
    return res as Promise<never>;
}

/**
 * [Group DM Add recipient](https://discord.com/developers/docs/resources/channel#group-dm-add-recipient)
 */
export function putChannelRecipient(
    this: DiscordApiRoutes,
    data: APITypes.RESTPutAPIChannelRecipientJSONBody,
    channelId: Snowflake,
    userId: Snowflake,
): Promise<APITypes.RESTPutAPIChannelRecipientResult> {
    const url = this.baseURL + Routes.channelRecipient(channelId, userId);
    const res = this.makeRequest({
        method: "PUT",
        url,
        data,
    });
    return res;
}

/**
 * [Group DM Remove Recipient](https://discord.com/developers/docs/resources/channel#group-dm-remove-recipient)
 */
export function deleteChannelRecipient(
    this: DiscordApiRoutes,
    channelId: Snowflake,
    userId: Snowflake,
): Promise<APITypes.RESTDeleteAPIChannelRecipientResult> {
    const url = this.baseURL + Routes.channelRecipient(channelId, userId);
    const res = this.makeRequest({
        method: "DELETE",
        url,
    });
    return res as Promise<never>;
}

/**
 * [Start Thread](https://discord.com/developers/docs/resources/channel#start-thread-with-message)
 */
export function postThreads(
    this: DiscordApiRoutes,
    data:
        | APITypes.RESTPostAPIChannelThreadsJSONBody
        | APITypes.RESTPostAPIChannelMessagesThreadsJSONBody,
    parentId: Snowflake,
    messageId?: string | undefined,
    reason?: string,
): Promise<
    | APITypes.RESTPostAPIChannelThreadsResult
    | APITypes.RESTPostAPIChannelMessagesThreadsResult
> {
    const url = this.baseURL + Routes.threads(parentId, messageId);
    const res = this.makeRequest({
        method: "POST",
        url,
        reason,
        data,
    });
    return res;
}

/**
 * [Add Thread Member](https://discord.com/developers/docs/resources/channel#add-thread-member)
 * `messageId` defaults to "\@me" and calls [Join Thread](https://discord.com/developers/docs/resources/channel#join-thread)
 */
export function putThreadMembers(
    this: DiscordApiRoutes,
    threadId: Snowflake,
    userId?: string | undefined,
): Promise<void> {
    const url = this.baseURL + Routes.threadMembers(threadId, userId);
    const res = this.makeRequest({
        method: "PUT",
        url,
    });
    return res;
}

/**
 * Remove Thread Member
 */
export function deleteThreadMembers(
    this: DiscordApiRoutes,
    threadId: Snowflake,
    userId?: string | undefined,
): Promise<APITypes.RESTDeleteAPIChannelThreadMembersResult> {
    const url = this.baseURL + Routes.threadMembers(threadId, userId);
    const res = this.makeRequest({
        method: "DELETE",
        url,
    });
    return res as Promise<never>;
}

/**
 * [Get Thread Member](https://discord.com/developers/docs/resources/channel#get-thread-member)
 * `userId` being undefined, calls [List Thread Members](https://discord.com/developers/docs/resources/channel#list-thread-members)
 */
export function getThreadMembers(
    this: DiscordApiRoutes,
    threadId: Snowflake,
    userId?: string | undefined,
): Promise<APITypes.RESTGetAPIChannelThreadMembersResult> {
    const url = this.baseURL + Routes.threadMembers(threadId, userId);
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [List Active Threads](https://discord.com/developers/docs/resources/channel#list-active-threads)
 * @deprecated use {@link DiscordApiRoutes.getGuildActiveThreads getGuildActiveThreads} instead
 */
export function getChannelThreads(
    this: DiscordApiRoutes,
    channelId: Snowflake,
    archived?: "public" | "private",
    query?: APITypes.RESTGetAPIChannelThreadsArchivedQuery,
): Promise<APITypes.RESTGetAPIChannelThreadsResult> {
    const url = this.baseURL + Routes.channelThreads(channelId, archived);
    const res = this.makeRequest({
        method: "GET",
        url,
        query,
    });
    return res;
}

/**
 * [List Joined Private Archived Threads](https://discord.com/developers/docs/resources/channel#list-joined-private-archived-threads)
 */
export function getChannelJoinedArchivedThreads(
    this: DiscordApiRoutes,
    query: APITypes.RESTGetAPIChannelThreadsArchivedQuery | undefined,
    channelId: Snowflake,
): Promise<APITypes.RESTGetAPIChannelUsersThreadsArchivedResult> {
    const url = this.baseURL + Routes.channelJoinedArchivedThreads(channelId);
    const res = this.makeRequest({
        method: "GET",
        url,
        query,
    });
    return res;
}

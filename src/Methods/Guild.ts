import APITypes, { Routes, Snowflake } from "discord-api-types/v9";
import type { DiscordApiRoutes } from "../";

/**
 * [Create Guild](https://discord.com/developers/docs/resources/guild#create-guild)
 */
export function postGuilds(
    this: DiscordApiRoutes,
    data: APITypes.RESTPostAPIGuildsJSONBody,
): Promise<APITypes.RESTPostAPIGuildsResult> {
    const url = this.baseURL + Routes.guilds();
    const res = this.makeRequest({
        method: "POST",
        url,
        data,
    });
    return res;
}

/**
 * [Get Guild](https://discord.com/developers/docs/resources/guild#get-guild)
 */
export function getGuild(
    this: DiscordApiRoutes,
    guildId: Snowflake,
    query?: APITypes.RESTGetAPIGuildQuery,
): Promise<APITypes.RESTGetAPIGuildResult> {
    const url = this.baseURL + Routes.guild(guildId);
    const res = this.makeRequest({
        method: "GET",
        url,
        query,
    });
    return res;
}

/**
 * [Get Guild Preview](https://discord.com/developers/docs/resources/guild#get-guild-preview)
 */
export function getGuildPreview(
    this: DiscordApiRoutes,
    guildId: Snowflake,
): Promise<APITypes.RESTGetAPIGuildPreviewResult> {
    const url = this.baseURL + Routes.guildPreview(guildId);
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [Modify Guild]*https://discord.com/developers/docs/resources/guild#modify-guild
 */
export function patchGuild(
    this: DiscordApiRoutes,
    data: APITypes.RESTPatchAPIGuildJSONBody,
    guildId: Snowflake,
    reason?: string,
): Promise<APITypes.RESTPatchAPIGuildResult> {
    const url = this.baseURL + Routes.guild(guildId);
    const res = this.makeRequest({
        method: "PATCH",
        url,
        reason,
        data,
    });
    return res;
}

/**
 * [Delete Guild](https://discord.com/developers/docs/resources/guild#delete-guild)
 */
export function deleteGuild(
    this: DiscordApiRoutes,
    guildId: Snowflake,
): Promise<APITypes.RESTDeleteAPIGuildResult> {
    const url = this.baseURL + Routes.guild(guildId);
    const res = this.makeRequest({
        method: "DELETE",
        url,
    });
    return res as Promise<never>;
}

/**
 * [Get Guild Channels](https://discord.com/developers/docs/resources/guild#get-guild-channels)
 */
export function getGuildChannels(
    this: DiscordApiRoutes,
    guildId: Snowflake,
): Promise<APITypes.RESTGetAPIGuildChannelsResult> {
    const url = this.baseURL + Routes.guildChannels(guildId);
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [Create Guild Channel](https://discord.com/developers/docs/resources/guild#create-guild-channel)
 */
export function postGuildChannels(
    this: DiscordApiRoutes,
    data: APITypes.RESTPostAPIGuildChannelJSONBody,
    guildId: Snowflake,
    reason?: string,
): Promise<APITypes.RESTPostAPIGuildChannelResult> {
    const url = this.baseURL + Routes.guildChannels(guildId);
    const res = this.makeRequest({
        method: "POST",
        url,
        reason,
        data,
    });
    return res;
}

/**
 * [Modify Guild Channel Positions](https://discord.com/developers/docs/resources/guild#modify-guild-channel-positions)
 */
export function patchGuildChannels(
    this: DiscordApiRoutes,
    data: APITypes.RESTPatchAPIGuildChannelPositionsJSONBody,
    guildId: Snowflake,
    reason?: string,
): Promise<APITypes.RESTPatchAPIGuildChannelPositionsResult> {
    const url = this.baseURL + Routes.guildChannels(guildId);
    const res = this.makeRequest({
        method: "PATCH",
        url,
        reason,
        data,
    });
    return res as Promise<never>;
}

/**
 * [List Active Threads](https://discord.com/developers/docs/resources/guild#list-active-threads)
 */
export function getGuildActiveThreads(
    this: DiscordApiRoutes,
    guildId: Snowflake,
): Promise<APITypes.RESTGetAPIGuildThreadsResult> {
    const url = this.baseURL + Routes.guildActiveThreads(guildId);
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [Get Guild Member](https://discord.com/developers/docs/resources/guild#get-guild-member)
 */
export function getGuildMember(
    this: DiscordApiRoutes,
    guildId: Snowflake,
    userId: Snowflake,
): Promise<APITypes.RESTGetAPIGuildMemberResult> {
    const url = this.baseURL + Routes.guildMember(guildId, userId);
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [List Guild Members](https://discord.com/developers/docs/resources/guild#list-guild-members)
 */
export function getGuildMembers(
    this: DiscordApiRoutes,
    guildId: Snowflake,
    query?: APITypes.RESTGetAPIGuildMembersQuery,
): Promise<APITypes.RESTGetAPIGuildMembersResult> {
    const url = this.baseURL + Routes.guildMembers(guildId);
    const res = this.makeRequest({
        method: "GET",
        url,
        query,
    });
    return res;
}

/**
 * [Search Guild Members](https://discord.com/developers/docs/resources/guild#search-guild-members)
 */
export function getGuildMembersSearch(
    this: DiscordApiRoutes,
    guildId: Snowflake,
    query?: APITypes.RESTGetAPIGuildMembersSearchQuery,
): Promise<APITypes.RESTGetAPIGuildMembersSearchResult> {
    const url = this.baseURL + Routes.guildMembersSearch(guildId);
    const res = this.makeRequest({
        method: "GET",
        url,
        query,
    });
    return res;
}

/**
 * [Add Guild Member](https://discord.com/developers/docs/resources/guild#add-guild-member)
 */
export function putGuildMember(
    this: DiscordApiRoutes,
    data: APITypes.RESTPutAPIGuildMemberJSONBody,
    guildId: Snowflake,
    userId: Snowflake,
): Promise<APITypes.RESTPutAPIGuildMemberResult> {
    const url = this.baseURL + Routes.guildMember(guildId, userId);
    const res = this.makeRequest({
        method: "PUT",
        url,
        data,
    });
    return res;
}

/**
 * [Modify Guild Member](https://discord.com/developers/docs/resources/guild#modify-guild-member)
 */
export function patchGuildMember(
    this: DiscordApiRoutes,
    data: APITypes.RESTPatchAPIGuildMemberJSONBody,
    guildId: Snowflake,
    userId?: Snowflake,
    reason?: string,
): Promise<APITypes.RESTPatchAPIGuildMemberResult> {
    //@ts-ignore this is fixed in the last pr
    const url = this.baseURL + Routes.guildMember(guildId, userId);
    const res = this.makeRequest({
        method: "PATCH",
        url,
        reason,
        data,
    });
    return res;
}

/**
 * [Modify Current User Nick](https://discord.com/developers/docs/resources/guild#modify-current-user-nick)
 * @deprecated use {@link DiscordApiRoutes.getGuildMember getGuildActiveThreads} instead
 */
export function patchGuildCurrentMemberNickname(
    this: DiscordApiRoutes,
    data: APITypes.RESTPatchAPICurrentGuildMemberNicknameJSONBody,
    guildId: Snowflake,
    reason?: string,
): Promise<APITypes.RESTPatchAPICurrentGuildMemberNicknameResult> {
    const url = this.baseURL + Routes.guildCurrentMemberNickname(guildId);
    const res = this.makeRequest({
        method: "PATCH",
        url,
        reason,
        data,
    });
    return res;
}

/**
 * [Add Guild Member Role](https://discord.com/developers/docs/resources/guild#add-guild-member-role)
 */
export function putGuildMemberRole(
    this: DiscordApiRoutes,
    guildId: Snowflake,
    memberId: Snowflake,
    roleId: Snowflake,
    reason?: string,
): Promise<APITypes.RESTPutAPIGuildMemberRoleResult> {
    const url =
        this.baseURL + Routes.guildMemberRole(guildId, memberId, roleId);
    const res = this.makeRequest({
        method: "PUT",
        url,
        reason,
    });
    return res as Promise<never>;
}

/**
 * [Remove Guild Member Role](https://discord.com/developers/docs/resources/guild#remove-guild-member-role)
 */
export function deleteGuildMemberRole(
    this: DiscordApiRoutes,
    guildId: Snowflake,
    memberId: Snowflake,
    roleId: Snowflake,
    reason?: string,
): Promise<APITypes.RESTDeleteAPIGuildMemberRoleResult> {
    const url =
        this.baseURL + Routes.guildMemberRole(guildId, memberId, roleId);
    const res = this.makeRequest({
        method: "DELETE",
        url,
        reason,
    });
    return res as Promise<never>;
}

/**
 * [Remove Guild Member](https://discord.com/developers/docs/resources/guild#remove-guild-member-role)
 */
export function deleteGuildMember(
    this: DiscordApiRoutes,
    guildId: Snowflake,
    userId: Snowflake,
    reason?: string,
): Promise<APITypes.RESTDeleteAPIGuildMemberResult> {
    const url = this.baseURL + Routes.guildMember(guildId, userId);
    const res = this.makeRequest({
        method: "DELETE",
        url,
        reason,
    });
    return res as Promise<never>;
}

/**
 * [Get Guild Bans](https://discord.com/developers/docs/resources/guild#get-guild-bans)
 */
export function getGuildBans(
    this: DiscordApiRoutes,
    guildId: Snowflake,
): Promise<APITypes.RESTGetAPIGuildBansResult> {
    const url = this.baseURL + Routes.guildBans(guildId);
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [Get Guild Ban](https://discord.com/developers/docs/resources/guild#get-guild-ban)
 */
export function getGuildBan(
    this: DiscordApiRoutes,
    guildId: Snowflake,
    userId: Snowflake,
): Promise<APITypes.RESTGetAPIGuildBanResult> {
    const url = this.baseURL + Routes.guildBan(guildId, userId);
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [Create Guild Ban](https://discord.com/developers/docs/resources/guild#create-guild-ban)
 */
export function putGuildBan(
    this: DiscordApiRoutes,
    data: APITypes.RESTPutAPIGuildBanJSONBody,
    guildId: Snowflake,
    userId: Snowflake,
): Promise<APITypes.RESTPutAPIGuildBanResult> {
    const url = this.baseURL + Routes.guildBan(guildId, userId);
    const res = this.makeRequest({
        method: "PUT",
        url,
        data,
    });
    return res as Promise<never>;
}

/**
 * [Remove Guild Ban](https://discord.com/developers/docs/resources/guild#remove-guild-ban)
 */
export function deleteGuildBan(
    this: DiscordApiRoutes,
    guildId: Snowflake,
    userId: Snowflake,
    reason?: string,
): Promise<APITypes.RESTDeleteAPIGuildBanResult> {
    const url = this.baseURL + Routes.guildBan(guildId, userId);
    const res = this.makeRequest({
        method: "DELETE",
        url,
        reason,
    });
    return res as Promise<never>;
}

/**
 * [Get Guild Roles](https://discord.com/developers/docs/resources/guild#get-guild-roles)
 */
export function getGuildRoles(
    this: DiscordApiRoutes,
    guildId: Snowflake,
): Promise<APITypes.RESTGetAPIGuildRolesResult> {
    const url = this.baseURL + Routes.guildRoles(guildId);
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [Create Guild Role](https://discord.com/developers/docs/resources/guild#create-guild-role)
 */
export function postGuildRoles(
    this: DiscordApiRoutes,
    data: APITypes.RESTPostAPIGuildRoleJSONBody,
    guildId: Snowflake,
    reason?: string,
): Promise<APITypes.RESTPostAPIGuildRoleResult> {
    const url = this.baseURL + Routes.guildRoles(guildId);
    const res = this.makeRequest({
        method: "POST",
        url,
        reason,
        data,
    });
    return res;
}

/**
 * [Modify Guild Role Positions](https://discord.com/developers/docs/resources/guild#modify-guild-role-positions)
 */
export function patchGuildRoles(
    this: DiscordApiRoutes,
    data: APITypes.RESTPatchAPIGuildRolePositionsJSONBody,
    guildId: Snowflake,
    reason?: string,
): Promise<APITypes.RESTPatchAPIGuildRolePositionsResult> {
    const url = this.baseURL + Routes.guildRoles(guildId);
    const res = this.makeRequest({
        method: "PATCH",
        url,
        reason,
        data,
    });
    return res;
}

/**
 * [Modify Guild Role](https://discord.com/developers/docs/resources/guild#modify-guild-role)
 */
export function patchGuildRole(
    this: DiscordApiRoutes,
    data: APITypes.RESTPatchAPIGuildRoleJSONBody,
    guildId: Snowflake,
    roleId: Snowflake,
    reason?: string,
): Promise<APITypes.RESTPatchAPIGuildRoleResult> {
    const url = this.baseURL + Routes.guildRole(guildId, roleId);
    const res = this.makeRequest({
        method: "PATCH",
        url,
        reason,
        data,
    });
    return res;
}

/**
 * [Delete Guild Role](https://discord.com/developers/docs/resources/guild#delete-guild-role)
 */
export function deleteGuildRole(
    this: DiscordApiRoutes,
    guildId: Snowflake,
    roleId: Snowflake,
    reason?: string,
): Promise<APITypes.RESTDeleteAPIGuildRoleResult> {
    const url = this.baseURL + Routes.guildRole(guildId, roleId);
    const res = this.makeRequest({
        method: "DELETE",
        url,
        reason,
    });
    return res as Promise<never>;
}

/**
 * [Get Guild Prune Count](https://discord.com/developers/docs/resources/guild#get-guild-prune-count)
 */
export function getGuildPrune(
    this: DiscordApiRoutes,
    guildId: Snowflake,
    query?: APITypes.RESTGetAPIGuildPruneCountQuery,
): Promise<APITypes.RESTGetAPIGuildPruneCountResult> {
    const url = this.baseURL + Routes.guildPrune(guildId);
    const res = this.makeRequest({
        method: "GET",
        url,
        query,
    });
    return res;
}

/**
 * [Begin Guild Prune](https://discord.com/developers/docs/resources/guild#begin-guild-prune)
 */
export function postGuildPrune(
    this: DiscordApiRoutes,
    data: APITypes.RESTPostAPIGuildPruneJSONBody,
    guildId: Snowflake,
    reason?: string,
): Promise<APITypes.RESTPostAPIGuildPruneResult> {
    const url = this.baseURL + Routes.guildPrune(guildId);
    const res = this.makeRequest({
        method: "POST",
        url,
        reason,
        data,
    });
    return res;
}

/**
 * [Get Guild Voice Regions](https://discord.com/developers/docs/resources/guild#get-guild-voice-regions)
 */
export function getGuildVoiceRegions(
    this: DiscordApiRoutes,
    guildId: Snowflake,
): Promise<APITypes.RESTGetAPIGuildVoiceRegionsResult> {
    const url = this.baseURL + Routes.guildVoiceRegions(guildId);
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [Get Guild Invites](https://discord.com/developers/docs/resources/guild#get-guild-invites)
 */
export function getGuildInvites(
    this: DiscordApiRoutes,
    guildId: Snowflake,
): Promise<APITypes.RESTGetAPIGuildInvitesResult> {
    const url = this.baseURL + Routes.guildInvites(guildId);
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [Get Guild Integrations](https://discord.com/developers/docs/resources/guild#get-guild-integrations)
 */
export function getGuildIntegrations(
    this: DiscordApiRoutes,
    guildId: Snowflake,
): Promise<APITypes.RESTGetAPIGuildIntegrationsResult> {
    const url = this.baseURL + Routes.guildIntegrations(guildId);
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [Delete Guild Integration](https://discord.com/developers/docs/resources/guild#delete-guild-integration)
 */
export function deleteGuildIntegration(
    this: DiscordApiRoutes,
    guildId: Snowflake,
    integrationId: Snowflake,
    reason?: string,
): Promise<APITypes.RESTDeleteAPIGuildIntegrationResult> {
    const url = this.baseURL + Routes.guildIntegration(guildId, integrationId);
    const res = this.makeRequest({
        method: "DELETE",
        url,
        reason,
    });
    return res as Promise<never>;
}

/**
 * [Get Guild Widget Settings](https://discord.com/developers/docs/resources/guild#get-guild-widget-settings)
 */
export function getGuildWidgetSettings(
    this: DiscordApiRoutes,
    guildId: Snowflake,
): Promise<APITypes.RESTGetAPIGuildWidgetSettingsResult> {
    const url = this.baseURL + Routes.guildWidgetSettings(guildId);
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [Modify Guild Widget](https://discord.com/developers/docs/resources/guild#modify-guild-widget)
 */
export function patchGuildWidgetSettings(
    this: DiscordApiRoutes,
    data: APITypes.RESTPatchAPIGuildWidgetSettingsJSONBody,
    guildId: Snowflake,
    reason?: string,
): Promise<APITypes.RESTPatchAPIGuildWidgetSettingsResult> {
    const url = this.baseURL + Routes.guildWidgetSettings(guildId);
    const res = this.makeRequest({
        method: "PATCH",
        url,
        reason,
        data,
    });
    return res;
}

/**
 * [Get Guild Widget](https://discord.com/developers/docs/resources/guild#get-guild-widget)
 */
export function getGuildWidgetJSON(
    this: DiscordApiRoutes,
    guildId: Snowflake,
): Promise<APITypes.RESTGetAPIGuildWidgetJSONResult> {
    const url = this.baseURL + Routes.guildWidgetJSON(guildId);
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [Get Guild Vanity URL](https://discord.com/developers/docs/resources/guild#get-guild-vanity-uRL)
 */
export function getGuildVanityUrl(
    this: DiscordApiRoutes,
    guildId: Snowflake,
): Promise<APITypes.RESTGetAPIGuildVanityUrlResult> {
    const url = this.baseURL + Routes.guildVanityUrl(guildId);
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [Get Guild Widget Image](https://discord.com/developers/docs/resources/guild#get-guild-widget-image)
 */
export function getGuildWidgetImage(
    this: DiscordApiRoutes,
    guildId: Snowflake,
    query?: APITypes.RESTGetAPIGuildWidgetImageQuery,
): Promise<APITypes.RESTGetAPIGuildWidgetImageResult> {
    const url = this.baseURL + Routes.guildWidgetImage(guildId);
    const res = this.makeRequest({
        method: "GET",
        url,
        query,
    });
    return res;
}

/**
 * [Get Guild Welcome Screen](https://discord.com/developers/docs/resources/guild#get-guild-welcome-screen)
 */
export function getGuildWelcomeScreen(
    this: DiscordApiRoutes,
    guildId: Snowflake,
): Promise<APITypes.RESTGetAPIGuildWelcomeScreenResult> {
    const url = this.baseURL + Routes.guildWelcomeScreen(guildId);
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [Modify Guild Welcome Screen](https://discord.com/developers/docs/resources/guild#modify-guild-welcome-screen)
 */
export function patchGuildWelcomeScreen(
    this: DiscordApiRoutes,
    data: APITypes.RESTPatchAPIGuildWelcomeScreenJSONBody,
    guildId: Snowflake,
): Promise<APITypes.APIGuildWelcomeScreen> {
    const url = this.baseURL + Routes.guildWelcomeScreen(guildId);
    const res = this.makeRequest({
        method: "PATCH",
        url,
        data,
    });
    return res;
}

/**
 * [Modify User Voice State](https://discord.com/developers/docs/resources/guild#modify-user-voice-state)
 * by default [Modify Current User Voice State](https://discord.com/developers/docs/resources/guild#modify-current-user-voice-state)
 */
export function patchGuildVoiceState(
    this: DiscordApiRoutes,
    data: APITypes.RESTPatchAPIGuildVoiceStateUserJSONBody,
    guildId: Snowflake,
    userId?: Snowflake | "@me",
): Promise<void> {
    const url = this.baseURL + Routes.guildVoiceState(guildId, userId);
    const res = this.makeRequest({
        method: "PATCH",
        url,
        data,
    });
    return res;
}

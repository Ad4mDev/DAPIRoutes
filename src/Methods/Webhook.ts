import APITypes, { Routes, Snowflake } from "discord-api-types/v9";
import type { DiscordApiRoutes } from "../";

/**
 * [Create Channel Webhook](https://discord.com/developers/docs/resources/webhook#create-webhook)
 */
export function postChannelWebhooks(
    this: DiscordApiRoutes,
    data: APITypes.RESTPostAPIChannelWebhookJSONBody,
    channelId: Snowflake,
): Promise<APITypes.RESTPostAPIChannelWebhookResult> {
    const url = this.baseURL + Routes.channelWebhooks(channelId);
    const res = this.makeRequest({
        method: "POST",
        url,
        data,
    });
    return res;
}

/**
 * [Get Channel Webhooks](https://discord.com/developers/docs/resources/webhook#get-channel-webhooks)
 */
export function getChannelWebhooks(
    this: DiscordApiRoutes,
    channelId: Snowflake,
): Promise<APITypes.RESTGetAPIChannelWebhooksResult> {
    const url = this.baseURL + Routes.channelWebhooks(channelId);
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [Get Guild Webhooks](https://discord.com/developers/docs/resources/webhook#get-guild-webhooks)
 */
export function getGuildWebhooks(
    this: DiscordApiRoutes,
    guildId: Snowflake,
): Promise<APITypes.RESTGetAPIGuildWebhooksResult> {
    const url = this.baseURL + Routes.guildWebhooks(guildId);
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [Get Webhook](https://discord.com/developers/docs/resources/webhook#get-webhook)
 */
export function getWebhook(
    this: DiscordApiRoutes,
    webhookId: Snowflake,
    webhookToken?: string | undefined,
): Promise<APITypes.RESTGetAPIWebhookResult> {
    const url = this.baseURL + Routes.webhook(webhookId, webhookToken);
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

/**
 * [Modify Webhook](https://discord.com/developers/docs/resources/webhook#modify-webhook)
 */
export function patchWebhook(
    this: DiscordApiRoutes,
    data: APITypes.RESTPatchAPIWebhookJSONBody,
    webhookId: Snowflake,
    webhookToken?: string | undefined,
): Promise<APITypes.RESTPatchAPIWebhookResult> {
    const url = this.baseURL + Routes.webhook(webhookId, webhookToken);
    const res = this.makeRequest({
        method: "PATCH",
        url,
        data,
    });
    return res;
}

/**
 * [Delete Webhook](https://discord.com/developers/docs/resources/webhook#delete-webhook)
 */
export function deleteWebhook(
    this: DiscordApiRoutes,
    webhookId: Snowflake,
    webhookToken?: string | undefined,
): Promise<APITypes.RESTDeleteAPIWebhookResult> {
    const url = this.baseURL + Routes.webhook(webhookId, webhookToken);
    const res = this.makeRequest({
        method: "DELETE",
        url,
    });
    return res as Promise<never>;
}

/**
 * [Create Webhook](https://discord.com/developers/docs/resources/webhook#create-webhook)
 */
export function postWebhook(
    this: DiscordApiRoutes,
    data: APITypes.RESTPostAPIChannelWebhookJSONBody,
    webhookId: Snowflake,
    webhookToken?: string | undefined,
): Promise<APITypes.RESTPostAPIChannelWebhookResult> {
    const url = this.baseURL + Routes.webhook(webhookId, webhookToken);
    const res = this.makeRequest({
        method: "POST",
        url,
        data,
    });
    return res;
}

/**
 * [Execute Slack/Github-Compatible Webhook](https://discord.com/developers/docs/resources/webhook#execute-slackcompatible-webhook)
 */
export function postWebhookPlatform(
    this: DiscordApiRoutes,
    // eslint-disable-next-line
    data: any,
    webhookId: Snowflake,
    webhookToken: string,
    platform: "github" | "slack",
    query?: APITypes.RESTPostAPIWebhookWithTokenQuery,
): Promise<
    | APITypes.RESTPostAPIWebhookWithTokenGitHubResult
    | APITypes.RESTPostAPIWebhookWithTokenGitHubWaitResult
    | APITypes.RESTPostAPIWebhookWithTokenSlackResult
    | APITypes.RESTPostAPIWebhookWithTokenSlackWaitResult
> {
    const url =
        this.baseURL +
        Routes.webhookPlatform(webhookId, webhookToken, platform);
    const res = this.makeRequest({
        method: "POST",
        url,
        data,
        query,
    });
    return res;
}

/**
 * [Get Webhook Message](https://discord.com/developers/docs/resources/webhook#get-webhook-message)
 */
export function getWebhookMessage(
    this: DiscordApiRoutes,
    webhookId: Snowflake,
    webhookToken: string,
    messageId?: Snowflake | "@original",
    query?: {
        /**
         *  [id of the thread the message is in](https://discord.com/developers/docs/resources/webhook#id of the thread the message is in)
         */ thread_id?: Snowflake;
    },
): Promise<APITypes.RESTGetAPIWebhookWithTokenMessageResult> {
    const url =
        this.baseURL +
        Routes.webhookMessage(webhookId, webhookToken, messageId);
    const res = this.makeRequest({
        method: "GET",
        url,
        query,
    });
    return res;
}

/**
 * [Edit Webhook Message](https://discord.com/developers/docs/resources/webhook#edit-webhook-message)
 */
export function patchWebhookMessage(
    this: DiscordApiRoutes,
    data: APITypes.RESTPatchAPIWebhookWithTokenMessageJSONBody,
    webhookId: Snowflake,
    webhookToken: string,
    messageId?: Snowflake | "@original",
    query?: {
        /**
         *  [id of the thread the message is in](https://discord.com/developers/docs/resources/webhook#id of the thread the message is in)
         */ thread_id?: Snowflake;
    },
): Promise<APITypes.RESTPatchAPIWebhookWithTokenMessageResult> {
    const url =
        this.baseURL +
        Routes.webhookMessage(webhookId, webhookToken, messageId);

    const res = this.makeRequest({
        method: "PATCH",
        url,
        query,
        data,
    });
    return res;
}

/**
 * [Delete Webhook Message](https://discord.com/developers/docs/resources/webhook#delete-webhook-message)
 */
export function deleteWebhookMessage(
    this: DiscordApiRoutes,
    webhookId: Snowflake,
    webhookToken: string,
    messageId?: Snowflake | "@original",
    query?: {
        /**
         *  id of the thread the message is in
         */ thread_id?: Snowflake;
    },
): Promise<APITypes.RESTDeleteAPIWebhookWithTokenMessageResult> {
    const url =
        this.baseURL +
        Routes.webhookMessage(webhookId, webhookToken, messageId);

    const res = this.makeRequest({
        method: "DELETE",
        url,
        query,
    });
    return res as Promise<never>;
}

import { getGuildAuditLog } from "./Methods/AuditLog";
import {
    getChannel,
    patchChannel,
    deleteChannel,
    getChannelMessages,
    getChannelMessage,
    postChannelMessages,
    postChannelMessageCrosspost,
    putChannelMessageOwnReaction,
    deleteChannelMessageOwnReaction,
    deleteChannelMessageUserReaction,
    getChannelMessageReaction,
    deleteChannelMessageAllReactions,
    deleteChannelMessageReaction,
    patchChannelMessage,
    deleteChannelMessage,
    postChannelBulkDelete,
    putChannelPermission,
    getChannelInvites,
    postChannelInvites,
    deleteChannelPermission,
    postChannelFollowers,
    postChannelTyping,
    getChannelPins,
    putChannelPin,
    deleteChannelPin,
    putChannelRecipient,
    deleteChannelRecipient,
    postThreads,
    putThreadMembers,
    deleteThreadMembers,
    getThreadMembers,
    getChannelThreads,
    getChannelJoinedArchivedThreads,
} from "./Methods/Channel";
import {
    getGuildEmojis,
    getGuildEmoji,
    postGuildEmojis,
    patchGuildEmoji,
    deleteGuildEmoji,
} from "./Methods/Emoji";
import { getGateway, getGatewayBot } from "./Methods/Gateway";
import {
    postGuilds,
    getGuild,
    getGuildPreview,
    patchGuild,
    deleteGuild,
    getGuildChannels,
    postGuildChannels,
    patchGuildChannels,
    getGuildActiveThreads,
    getGuildMember,
    getGuildMembers,
    getGuildMembersSearch,
    putGuildMember,
    patchGuildMember,
    patchGuildCurrentMemberNickname,
    putGuildMemberRole,
    deleteGuildMemberRole,
    deleteGuildMember,
    getGuildBans,
    getGuildBan,
    putGuildBan,
    deleteGuildBan,
    getGuildRoles,
    postGuildRoles,
    patchGuildRoles,
    patchGuildRole,
    deleteGuildRole,
    getGuildPrune,
    postGuildPrune,
    getGuildVoiceRegions,
    getGuildInvites,
    getGuildIntegrations,
    deleteGuildIntegration,
    getGuildWidgetSettings,
    patchGuildWidgetSettings,
    getGuildWidgetJSON,
    getGuildVanityUrl,
    getGuildWidgetImage,
    getGuildWelcomeScreen,
    patchGuildWelcomeScreen,
    patchGuildVoiceState,
} from "./Methods/Guild";
import {
    getGuildScheduledEvents,
    postGuildScheduledEvents,
    getGuildScheduledEvent,
    patchGuildScheduledEvent,
    deleteGuildScheduledEvent,
    getGuildScheduledEventUsers,
} from "./Methods/GuildSchedulesEvent";
import {
    getTemplate,
    postTemplate,
    getGuildTemplates,
    postGuildTemplates,
    putGuildTemplate,
    patchGuildTemplate,
    deleteGuildTemplate,
} from "./Methods/GuildTemplate";
import {
    getApplicationCommands,
    postApplicationCommands,
    getApplicationCommand,
    patchApplicationCommand,
    deleteApplicationCommand,
    putApplicationCommands,
    getApplicationGuildCommands,
    postApplicationGuildCommands,
    getApplicationGuildCommand,
    patchApplicationGuildCommand,
    deleteApplicationGuildCommand,
    putApplicationGuildCommands,
    getGuildApplicationCommandsPermissions,
    getApplicationCommandPermissions,
    putApplicationCommandPermissions,
    putGuildApplicationCommandsPermissions,
    postInteractionCallback,
} from "./Methods/Interactions";
import { getInvite, deleteInvite } from "./Methods/Invite";
import {
    getGuildMemberVerification,
    patchGuildMemberVerification,
} from "./Methods/Miscellaneous";
import {
    getOauth2Authorization,
    getOauth2CurrentApplication,
    getOauth2CurrentAuthorization,
    postOauth2TokenExchange,
    postOauth2TokenRevocation,
} from "./Methods/OAuth2";
import {
    postStageInstances,
    getStageInstance,
    patchStageInstance,
    deleteStageInstance,
} from "./Methods/StageInstance";
import {
    getSticker,
    getNitroStickerPacks,
    getGuildStickers,
    getGuildSticker,
    postGuildStickers,
    patchGuildSticker,
    deleteGuildSticker,
} from "./Methods/Sticker";
import {
    getUser,
    patchUser,
    getUserGuilds,
    deleteUserGuild,
    postUserChannels,
    getUserConnections,
} from "./Methods/User";
import { getVoiceRegions } from "./Methods/Voice";
import {
    postChannelWebhooks,
    getChannelWebhooks,
    getGuildWebhooks,
    getWebhook,
    patchWebhook,
    deleteWebhook,
    postWebhook,
    postWebhookPlatform,
    getWebhookMessage,
    patchWebhookMessage,
    deleteWebhookMessage,
} from "./Methods/Webhook";
import { makeRequest } from "./Utils/MakeRequest";

export interface DiscordApiRoutesOptions {
    timeout: number;
}
export class DiscordApiRoutes {
    protected makeRequest = makeRequest;
    constructor(
        protected token: string,
        protected baseURL: string = "https://discord.com/api/v9",
        public options: DiscordApiRoutesOptions = { timeout: 15_000 },
    ) {}
    // AuditLog.ts
    getGuildAuditLog = getGuildAuditLog;

    // Channel.ts
    getChannel = getChannel;
    patchChannel = patchChannel;
    deleteChannel = deleteChannel;
    getChannelMessages = getChannelMessages;
    getChannelMessage = getChannelMessage;
    postChannelMessages = postChannelMessages;
    postChannelMessageCrosspost = postChannelMessageCrosspost;
    putChannelMessageOwnReaction = putChannelMessageOwnReaction;
    deleteChannelMessageOwnReaction = deleteChannelMessageOwnReaction;
    deleteChannelMessageUserReaction = deleteChannelMessageUserReaction;
    getChannelMessageReaction = getChannelMessageReaction;
    deleteChannelMessageAllReactions = deleteChannelMessageAllReactions;
    deleteChannelMessageReaction = deleteChannelMessageReaction;
    patchChannelMessage = patchChannelMessage;
    deleteChannelMessage = deleteChannelMessage;
    postChannelBulkDelete = postChannelBulkDelete;
    putChannelPermission = putChannelPermission;
    getChannelInvites = getChannelInvites;
    postChannelInvites = postChannelInvites;
    deleteChannelPermission = deleteChannelPermission;
    postChannelFollowers = postChannelFollowers;
    postChannelTyping = postChannelTyping;
    getChannelPins = getChannelPins;
    putChannelPin = putChannelPin;
    deleteChannelPin = deleteChannelPin;
    putChannelRecipient = putChannelRecipient;
    deleteChannelRecipient = deleteChannelRecipient;
    postThreads = postThreads;
    putThreadMembers = putThreadMembers;
    deleteThreadMembers = deleteThreadMembers;
    getThreadMembers = getThreadMembers;
    getChannelThreads = getChannelThreads;
    getChannelJoinedArchivedThreads = getChannelJoinedArchivedThreads;

    // Emoji.ts
    getGuildEmojis = getGuildEmojis;
    getGuildEmoji = getGuildEmoji;
    postGuildEmojis = postGuildEmojis;
    patchGuildEmoji = patchGuildEmoji;
    deleteGuildEmoji = deleteGuildEmoji;

    // Gateway.ts
    getGateway = getGateway;
    getGatewayBot = getGatewayBot;

    // Guild.ts
    postGuilds = postGuilds;
    getGuild = getGuild;
    getGuildPreview = getGuildPreview;
    patchGuild = patchGuild;
    deleteGuild = deleteGuild;
    getGuildChannels = getGuildChannels;
    postGuildChannels = postGuildChannels;
    patchGuildChannels = patchGuildChannels;
    getGuildActiveThreads = getGuildActiveThreads;
    getGuildMember = getGuildMember;
    getGuildMembers = getGuildMembers;
    getGuildMembersSearch = getGuildMembersSearch;
    putGuildMember = putGuildMember;
    patchGuildMember = patchGuildMember;
    patchGuildCurrentMemberNickname = patchGuildCurrentMemberNickname;
    putGuildMemberRole = putGuildMemberRole;
    deleteGuildMemberRole = deleteGuildMemberRole;
    deleteGuildMember = deleteGuildMember;
    getGuildBans = getGuildBans;
    getGuildBan = getGuildBan;
    putGuildBan = putGuildBan;
    deleteGuildBan = deleteGuildBan;
    getGuildRoles = getGuildRoles;
    postGuildRoles = postGuildRoles;
    patchGuildRoles = patchGuildRoles;
    patchGuildRole = patchGuildRole;
    deleteGuildRole = deleteGuildRole;
    getGuildPrune = getGuildPrune;
    postGuildPrune = postGuildPrune;
    getGuildVoiceRegions = getGuildVoiceRegions;
    getGuildInvites = getGuildInvites;
    getGuildIntegrations = getGuildIntegrations;
    deleteGuildIntegration = deleteGuildIntegration;
    getGuildWidgetSettings = getGuildWidgetSettings;
    patchGuildWidgetSettings = patchGuildWidgetSettings;
    getGuildWidgetJSON = getGuildWidgetJSON;
    getGuildVanityUrl = getGuildVanityUrl;
    getGuildWidgetImage = getGuildWidgetImage;
    getGuildWelcomeScreen = getGuildWelcomeScreen;
    patchGuildWelcomeScreen = patchGuildWelcomeScreen;
    patchGuildVoiceState = patchGuildVoiceState;

    // GuildSchedulesEvent.ts
    getGuildScheduledEvents = getGuildScheduledEvents;
    postGuildScheduledEvents = postGuildScheduledEvents;
    getGuildScheduledEvent = getGuildScheduledEvent;
    patchGuildScheduledEvent = patchGuildScheduledEvent;
    deleteGuildScheduledEvent = deleteGuildScheduledEvent;
    getGuildScheduledEventUsers = getGuildScheduledEventUsers;

    // GuildTemplate.ts
    getTemplate = getTemplate;
    postTemplate = postTemplate;
    getGuildTemplates = getGuildTemplates;
    postGuildTemplates = postGuildTemplates;
    putGuildTemplate = putGuildTemplate;
    patchGuildTemplate = patchGuildTemplate;
    deleteGuildTemplate = deleteGuildTemplate;

    // Interactions.ts
    getApplicationCommands = getApplicationCommands;
    postApplicationCommands = postApplicationCommands;
    getApplicationCommand = getApplicationCommand;
    patchApplicationCommand = patchApplicationCommand;
    deleteApplicationCommand = deleteApplicationCommand;
    putApplicationCommands = putApplicationCommands;
    getApplicationGuildCommands = getApplicationGuildCommands;
    postApplicationGuildCommands = postApplicationGuildCommands;
    getApplicationGuildCommand = getApplicationGuildCommand;
    patchApplicationGuildCommand = patchApplicationGuildCommand;
    deleteApplicationGuildCommand = deleteApplicationGuildCommand;
    putApplicationGuildCommands = putApplicationGuildCommands;
    getGuildApplicationCommandsPermissions =
        getGuildApplicationCommandsPermissions;
    getApplicationCommandPermissions = getApplicationCommandPermissions;
    putApplicationCommandPermissions = putApplicationCommandPermissions;
    putGuildApplicationCommandsPermissions =
        putGuildApplicationCommandsPermissions;
    postInteractionCallback = postInteractionCallback;

    // Invite.ts
    getInvite = getInvite;
    deleteInvite = deleteInvite;

    // Miscellaneous.ts
    getGuildMemberVerification = getGuildMemberVerification;
    patchGuildMemberVerification = patchGuildMemberVerification;

    // OAuth2.ts
    getOauth2Authorization = getOauth2Authorization;
    getOauth2CurrentApplication = getOauth2CurrentApplication;
    getOauth2CurrentAuthorization = getOauth2CurrentAuthorization;
    postOauth2TokenExchange = postOauth2TokenExchange;
    postOauth2TokenRevocation = postOauth2TokenRevocation;

    // StageInstance.ts
    postStageInstances = postStageInstances;
    getStageInstance = getStageInstance;
    patchStageInstance = patchStageInstance;
    deleteStageInstance = deleteStageInstance;

    // Sticker.ts
    getSticker = getSticker;
    getNitroStickerPacks = getNitroStickerPacks;
    getGuildStickers = getGuildStickers;
    getGuildSticker = getGuildSticker;
    postGuildStickers = postGuildStickers;
    patchGuildSticker = patchGuildSticker;
    deleteGuildSticker = deleteGuildSticker;

    // User.ts
    getUser = getUser;
    patchUser = patchUser;
    getUserGuilds = getUserGuilds;
    deleteUserGuild = deleteUserGuild;
    postUserChannels = postUserChannels;
    getUserConnections = getUserConnections;

    // Voice.ts
    getVoiceRegions = getVoiceRegions;

    // Webhook.ts
    postChannelWebhooks = postChannelWebhooks;
    getChannelWebhooks = getChannelWebhooks;
    getGuildWebhooks = getGuildWebhooks;
    getWebhook = getWebhook;
    patchWebhook = patchWebhook;
    deleteWebhook = deleteWebhook;
    postWebhook = postWebhook;
    postWebhookPlatform = postWebhookPlatform;
    getWebhookMessage = getWebhookMessage;
    patchWebhookMessage = patchWebhookMessage;
    deleteWebhookMessage = deleteWebhookMessage;
}
export * as APITypes from "discord-api-types/v9";

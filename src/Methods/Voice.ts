import APITypes, { Routes } from "discord-api-types/v9";
import type { DiscordApiRoutes } from "../";

/**
 * [List Voice Regions](https://discord.com/developers/docs/resources/voice#list-voice-regions)
 */
export function getVoiceRegions(
    this: DiscordApiRoutes,
): Promise<APITypes.RESTGetAPIGuildVoiceRegionsResult> {
    const url = this.baseURL + Routes.voiceRegions();
    const res = this.makeRequest({
        method: "GET",
        url,
    });
    return res;
}

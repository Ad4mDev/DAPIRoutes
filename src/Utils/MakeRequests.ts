/* eslint-disable @typescript-eslint/no-explicit-any */
import fetch, { BodyInit, Response } from "node-fetch";
import type { DiscordApiRoutes } from "..";
import FormData from "form-data";
import { readFileSync } from "fs";
export async function makeRequest(
    this: DiscordApiRoutes,
    {
        method,
        url,
        reason,
        query,
        data,
        authPrefix = "Bot",
    }: {
        method: string;
        url: string;
        reason?: string;
        contentType?: string;
        query?: any;
        data?: any;
        authPrefix?: "Bot" | "Bearer";
    },
): Promise<any> {
    const fullURL = url + new URLSearchParams(query).toString();
    let headers: { [key: string]: string } = {
        Authorization: `${authPrefix} ${this.token}`,
    };
    let body: BodyInit = JSON.stringify(data);

    if (reason?.length) {
        headers["reason"] = reason;
    }
    if (data.files?.length) {
        const oldBody = body;
        // headers['Content-Type'] = 'multipart/form-data'
        const form = new FormData();
        form.append("payload_json", oldBody);
        // form.append('test/md', readFileSync('README.md'), 'test.md')
        await Promise.all(
            //TODO
            data.files.map(async (file: any) => {
                const urlRegex =
                    /^[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/i;
                let fileData;
                if (Buffer.isBuffer(file.file)) fileData = file.file;
                else if (urlRegex.test(file.file)) {
                    const fetchedFile = await fetch(file.file);
                    fileData = fetchedFile.body;
                } else {
                    fileData = readFileSync(file.file);
                }

                form.append(file.name, fileData);
            }),
        );
        headers = { ...headers, ...form.getHeaders() };
        body = form;
    } else {
        headers["Content-Type"] = "application/json";
    }
    const abortController = new AbortController();
    const abortTimeout = setTimeout(
        () => abortController.abort(),
        this.options.timeout,
    );
    let res: Response;
    try {
        res = await fetch(fullURL, {
            body,
            method,
            headers,
            signal: abortController.signal,
        });
    } finally {
        clearTimeout(abortTimeout);
    }
    //TODO add rate-limit capability
    const resJSON = (await res.headers
        .get("content-type")
        ?.includes("application/json"))
        ? await res.json()
        : undefined;
    if (res.ok) return resJSON;
    else throw new Error(resJSON.message);
}

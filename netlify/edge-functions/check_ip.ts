import {Context} from "netlify:edge";

export default async (req: Request, {log}: Context) => {
    log("Processing url: " + req.url);
    let allowed_ips = ["86.177.196.199"]
    let client_ip = "1234"
    if (allowed_ips.includes(client_ip)) {
        return;
    }

    return new Response("not allowed");
}
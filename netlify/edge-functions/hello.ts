import {Context} from "netlify:edge";

export default async (req: Request, context: Context) => {
    context.log(req);

    return new Response("Hello World!");
}

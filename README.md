# Next-Phoenix

Small example to instrument nextjs llm app. Current issue is I cannot seem to get the telemetry of the openai to Phoenix instance that I have active remotely.

You need to set the .env based on `.env.template`

Once you set those up, then run `yarn dev`

you can make a http call `POST /api/completions`.

## The problem

I'm trying to use the [OpenAI Node SDK](https://docs.arize.com/phoenix/tracing/how-to-tracing/instrumentation/auto-instrument-ts/openai-node-sdk) (Auto instrumentation).

I'm not using vercel ai sdk stuff, just basic npm OpenAI packages.

I can get the `trace` (or `span`? I'm not sure what the terminology is)
![image](https://github.com/albertpurnama/nextjs-phoenix/assets/14824254/ca8dcb73-152c-41f8-bef6-b4a1598129c6)

But this seems to not have the LLM input and outputs.

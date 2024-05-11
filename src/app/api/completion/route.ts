import OpenAI from "openai";

export async function POST() {
  const openai = new OpenAI();

  const resp = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant",
      },
      {
        role: "user",
        content: "Hi! Who is Benjamin Franklin?",
      },
    ],
  });

  return Response.json(resp.choices);
}

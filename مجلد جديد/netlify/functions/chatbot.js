const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const userMessage = body.message;

  const systemPrompt = "You are a helpful assistant that only answers questions about Umm-el-fahm, Israel. If asked about anything else, steer the conversation back to Umm-el-fahm.";

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userMessage }
    ]
  });

  const reply = completion.data.choices[0].message.content;
  return {
    statusCode: 200,
    body: JSON.stringify({ reply }),
  };
};

const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.handler = async function (event) {
  const body = JSON.parse(event.body);
  const userMessage = body.message;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are an expert on the city of Umm el-Fahm. Only answer questions related to that city.",
        },
        {
          role: "user",
          content: userMessage,
        },
      ],
    });
console.log("Completion response:", completion);
const botMessage = completion.choices[0].message.content;
    const botMessage = completion.choices[0].message.content;
    return {
      statusCode: 200,
      body: JSON.stringify({ reply: botMessage }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ reply: "Error: " + err.message }),
    };
  }
};

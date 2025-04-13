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

// ✅ Log the full completion to debug
console.log("Completion response:", completion);

// ✅ Only ONE declaration
const botMessage = completion.choices[0].message.content;

return {
  statusCode: 200,
  body: JSON.stringify({ reply: botMessage }),
};

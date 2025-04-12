async function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");
  const message = input.value;
  chatBox.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
  input.value = "";

  const res = await fetch("/.netlify/functions/chatbot", {
    method: "POST",
    body: JSON.stringify({ message }),
  });

  const data = await res.json();
  chatBox.innerHTML += `<p><strong>TokyoBot:</strong> ${data.reply}</p>`;
}

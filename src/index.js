function displayPoem(response) {
  console.log("poem generated");

  // Replace "Generating Poem..." with the actual poem
  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = ""; // Clear the loading text

  new Typewriter("#poem", {
    strings: response.data.answer.replace("```html", "").replace("```", ""),
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  // Show "Generating Poem..." while waiting for the response
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = '<div class="generating">⏳ Generating Poem...</div>';

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "b984974777eta0e26ff2f6c4c3ob0f17";
  let context =
    "You are a romantic poem expert and love to write medium length poems. Your mission is to generate a 6 line poem in basic HTML and separate each line. Make sure to follow the user instructions.";
  let prompt = `User instructions: Generate a Love poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

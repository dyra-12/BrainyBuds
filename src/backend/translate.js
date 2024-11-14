const apiUrl = 'http://localhost:1250/translateText';
const toLanguage = 'fr'; // Change this to the desired target language code

const question = [
  'What is your name',
  'What is the sum of 3 and 5',
  'What is the capital of France',
  'Who is the prime minister of India'
];

// Initialize the translate array outside the asynchronous function
const translate = [];

// Function to make a translation request for a single question
async function translateQuestion(text, index) {
  const urlWithParams = `${apiUrl}?inputText=${encodeURIComponent(text)}&toLanguage=${toLanguage}`;
  
  try {
    const response = await fetch(urlWithParams);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    // Convert the API response to a string
    const responseString = JSON.stringify(data);

    // Set the translated string at the correct index in the translate array
    translate[index] = responseString;

    return data.translatedText;
  } catch (error) {
    console.error('Error:', error);
    translate[index] = null;
    return null;
  }
}

// Use Promise.allSettled to wait for all translations to complete
Promise.allSettled(question.map((text, index) => translateQuestion(text, index)))
  .then(() => {

    console.log(translate[0]);
  });

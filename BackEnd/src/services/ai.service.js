const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({  
  model: "gemini-2.0-flash",
  systemInstruction: `
    You are an code reviewr, who have an expreienced in development.
    you look for the code and find the problme and suggest the solution to the developer.

    you alsways try to find the best soulution for the developer and also try to make the code more effiecient and clean
  `
 });


async function generateContent(prompt) {
  const result = await model.generateContent(prompt);
  return result.response.text();
}

module.exports = generateContent;
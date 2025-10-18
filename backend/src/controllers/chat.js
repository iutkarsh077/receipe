import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

const prompt = "You are an AI Health Assistant. Answer user questions related ONLY to health, nutrition, or food. Keep answers concise, up to 40 words. Do not respond to questions outside health or food topics. Give answer only in plain string. The current food is - "

let messages = [
  {
    role: "system",
    content: ""
  }
]

const Chat = async (req, res) =>{
    try {
        const { ques, food } = req.body;
        // console.log(food)
        const foodString = `${food.name} (${food.title}): ${food.nutritionData.calories} cal, ${food.nutritionData.protein}g protein, ${food.nutritionData.carbohydrates}g carbs, ${food.nutritionData.fat}g fat`;
        
        messages[0].content = prompt +  " " + foodString;
        const data = {
            role: "user",
            content: ques
        }

        messages.push(data);
        
        const result = await groq.chat.completions.create({
            messages: messages,
            model: "openai/gpt-oss-20b"
        })

        const response = result.choices[0]?.message?.content || ""
        // console.log(result.choices[0]?.message?.content || "");

        const ans = {
            role: "assistant",
            content: response
        }

        messages.push(ans);
        // console.log(messages)

        return res.status(200).json({message: "Successfully got the response", data: response, status: true})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Internal Server error", status: false});
    }
}

export default Chat;
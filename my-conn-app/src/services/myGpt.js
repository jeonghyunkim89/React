import axios from 'axios';

export const chatGo = async({message}) => {
     const response = await axios.post("https://api.openai.com/v1/chat/completions", {
        "model":"gpt-3.5-turbo",
        "messages": [
            {
                "role": "user",
                "content": message
            },
            {
                "role": "system",
                "content": `You are a 10-year coding instructor and need to answer a question for non-coders. 
                            Use a friendly tone of voice. 
                            Summarize the question in 3 lines and add a detailed answer below. 
                            If you do a good job, I'll give you a $20 tip.
                            Please answer in Korean`
            }
        ],
        "temperature": 1,
        "max_tokens": 1000,
        "top_p": 1,
        "frequency_penalty": 0,
        "presence_penalty": 0
    },{
        headers:{
            "Content-Type" : "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_GPT_API_KEY}`
        }
    });

    console.log(response);
    return response.data.choices[0].message.content;
} 
var express = require('express');
var router = express.Router();

const API_KEY = 'ご自身で取得したAPIキーを記載する';
const URL = "https://api.openai.com/v1/chat/completions";

function reply() {
    var text = document.getElementById("request_text").value;
    async function getResponse() {
        try {
            const response = await axios.post(
                URL,
                {
                    "model": "gpt-3.5-turbo",
                    "messages": [
                        { "role": "user", "content": text }
                    ]
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${API_KEY}`,
                    },
                }
            );
            var chatgpt_response = response.data.choices[0].message.content;
            $("#response_text").val(chatgpt_response);
        } catch (error) {
            console.log(error);
        }
    }
    getResponse();
}

module.exports = router;
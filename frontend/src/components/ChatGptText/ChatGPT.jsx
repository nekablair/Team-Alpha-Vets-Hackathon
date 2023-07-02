import React, { useState } from 'react';

const openAIKey = process.env.REACT_APP_OPENAI_API_KEY;

const ChatGPT = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${openAIKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'You are a helpful assistant.',
            },
            {
              role: 'user',
              content: prompt,
            },
          ],
        }),
      };

      const apiResponse = await fetch(
        'https://api.openai.com/v1/chat/completions',
        requestOptions
      );

      const data = await apiResponse.json();
      if (data.choices && data.choices.length > 0) {
        const reply = data.choices[0].message.content;
        setResponse(reply);
      } else {
        console.error('Invalid response data:', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }

    setPrompt('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={handleInputChange}
          placeholder="Enter your prompt"
        />
        <button type="submit">Submit</button>
      </form>
      <div>{response}</div>
    </div>
  );
};

export default ChatGPT;

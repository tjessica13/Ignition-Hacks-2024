"use client"; // Kept throwing error so adding this

import { useState, useRef, useEffect } from 'react';

import { SideBar, Footer } from '../../components/Components';

import axios from 'axios';

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_KEY);

const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"});

// Send chat message to Gemini model
async function sendMessage(prompt: string) {
  const pre_prompt = "You are a friendly anime witch girl that likes to help and are an expert in AI. Please answer this message: ";
  const complete_prompt = pre_prompt + prompt;

  const result = await model.generateContent(complete_prompt);
  const response = await result.response;
  return response.text();
}

// Retrieve lesson plan from lessons
export async function getLessonPrompt(promptFile: string) {
  
  try {
    const prompt = await axios.get(promptFile);
    
    return  prompt.data;

  }
  catch(error)  {

    console.error("Cannot file file: ", error);

    return "There was an error reading the lesson plan";

  }

}

export default function Page() {

  // Update chat messages for session
  const [userMessage, setUserMessage] = useState('');
  const [messages, setChatHistory] = useState<Array<{ text: string; type: 'user' | 'bot' }>>([]);

  const [welcomeMessage, setWelcomeMessage] = useState<string | null>(null);  // Store welcome message

  const chatEndRef = useRef<HTMLDivElement>(null);  // Get positioning for end of chat history


  const submitMessage = async (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault(); // Prevent form reloading page
    
    setChatHistory([...messages, { text: userMessage, type: 'user' }]);
    
    const model_response = await sendMessage(userMessage);
    
    // Bot response 
    setChatHistory([...messages, { text: userMessage, type: 'user' }, { text: model_response, type: 'bot' }]);
    
    setUserMessage(''); // Reset text field
  };

  // Keep the scroll to latest message added
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);


  // Write the initial message for the welcome to the lesson
    const fetchWelcomeMessage = async () => {
      const welcome_message = await sendMessage("Write a welcome message to the user welcoming them to the AI course in less than 250 characters");
      setWelcomeMessage(welcome_message);
      return welcome_message;
    };

    // Set up lesson delivery (We only have 1 lesson for now)
    const fetchLesson = async () => {

      const full_prompt = "Can you write a full explanation paper for each of these topics for the session. Write them without markdown formatting. Also give them the suggested activities to do to practice and explore. Then ask if the user is following along and if they have any questions: " + await getLessonPrompt("/lessons/lesson-1.txt");

      const lesson_content = await sendMessage(full_prompt);
      setChatHistory([...messages, { text: lesson_content, type: 'bot' }]);
      
    };



  // Display a welcome message before doing a lesson fetch
  useEffect(() => {

    if(welcomeMessage === null)  {

      fetchWelcomeMessage();
    }
    else  {
      fetchLesson();
    }

  }, [welcomeMessage]);


// Send plan to model to generate explanations

  // Retrieve model response

// Split up response into 500 character limit messages

  // Send to chat history

  // Ask if everything is ok and if there are any questions

  // Move to next topic


  return (
    <div className="grid grid-rows-10">
      <div className="row-span-8 flex space-x-6">
        <div className="w-1/6">
          <SideBar />
        </div>
        <div className="w-5/6">
          <div className="flex space-x-4">
            <div id="chat" className="w-full">
              <ul>
                <li id="bot-message">
                  <p><b>Bot</b></p>
                  <p>{welcomeMessage}</p>
                </li>
                {messages.map((msg, index) => (
                  <li key={index} id={msg.type === 'bot' ? "bot-message" : "user-message"}>
                    <p><b>{msg.type === 'bot' ? 'Bot' : 'User'}</b></p>
                    <p>{msg.text}</p>
                  </li>
                ))}
                
                {/* Force chat history to scroll to latest message */}
                <div ref={chatEndRef} />
              </ul>
            </div>
            <div id="tutor-bot" className="w-full">
              <img src="img/chatbot-pngtuber.png" alt="Chatbot" />
            </div>
          </div>
        </div>
      </div>
      <div id="chat-box" className="flex row-span-2 justify-center">
        <form onSubmit={submitMessage} className="px-2 m-5 h-10 justify-center">
          <input type="text" className="min-w-full" placeholder="Ask your questions here" value={userMessage} onChange={(e) => setUserMessage(e.target.value)} />
          <input type="submit" value="Send" className="mx-2 py-1 px-4 bg-black text-white" />
        </form>
      </div>
    </div>
  );
}
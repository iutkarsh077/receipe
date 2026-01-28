import { Bot, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { IMeal } from "../types/FormDataTypes";
import "../App.css";
import api from "../helpers/api";

interface IConversation {
  question: string;
  answer: string;
}

const Chatbot = ({ data }: { data: IMeal }) => {
  const [openBot, setOpenBot] = useState(false);
  const [question, setQuestion] = useState("");
  const conversationScroll = useRef<HTMLDivElement | null>(null);
  const [conversation, setConversation] = useState<IConversation[]>([
    {
      question: "",
      answer: "Hello! How can I help you today?",
    },
  ]);

  useEffect(() => {
    if (conversationScroll.current) {
      conversationScroll.current.scrollTo({
        top: conversationScroll.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [conversation]);

  const handleChatBot = async () => {
    try {
      const res = await api.post(`/chat`, {
        ques: question,
        food: data,
      });
      const result = {
        question: question,
        answer: res.data.data,
      };
    //   console.log(result);
      setConversation((prev) => [...prev, result]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="fixed right-3 sm:right-5 bottom-4 sm:bottom-10 z-50 flex flex-col items-end">
      {openBot ? (
        <div className="mt-3 sm:mt-4 flex flex-col h-[70vh] sm:h-[500px] w-[90vw] sm:w-80 bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="bg-blue-800 text-white px-4 py-3 flex justify-between items-center">
            <h3 className="font-semibold text-sm sm:text-base">Health GPT</h3>
            <button
              onClick={() => setOpenBot(false)}
              className="text-white hover:text-gray-300 text-lg sm:text-xl"
            >
              ✕
            </button>
          </div>
       
          <div
            ref={conversationScroll}
            className="flex-1 p-3 sm:p-4 example overflow-y-auto space-y-4 bg-gray-50"
          >
            {conversation?.map((conv, index) => (
              <div key={index} className="space-y-5">
                {conv.question.length > 0 && (
                  <div className="flex justify-start items-start gap-2">
                    <div className="bg-green-100 min-w-8 min-h-8 w-8 h-8 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-green-700" />
                    </div>
                    <div className="text-xs sm:text-sm bg-green-200 px-3 py-2 rounded-lg max-w-[75%] sm:max-w-xs break-words text-wrap">
                      {conv.question}
                    </div>
                  </div>
                )}

                {conv.answer.length > 0 && (
                  <div className="flex justify-end items-start gap-2">
                    <div className="text-xs sm:text-sm bg-blue-200 px-3 py-2 rounded-lg max-w-[75%] sm:max-w-xs break-words whitespace-pre-wrap overflow-hidden">
                      {conv.answer}
                    </div>
                    <div className="bg-blue-100 min-w-8 min-h-8 w-8 h-8 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-blue-700" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center px-3 sm:px-4 py-2 sm:py-3 border-t border-gray-200">
            <input
              type="text"
              placeholder="Type a message..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="flex-1 border border-gray-300 rounded-full px-3 sm:px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              onClick={handleChatBot}
              className="ml-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm sm:text-base transition-all focus:border-none focus:ring-0"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          className="bg-green-600 hover:scale-110 transition-all duration-300 ease-in-out text-white flex justify-center items-center h-12 w-12 sm:h-14 sm:w-14 rounded-full shadow-lg"
          onClick={() => setOpenBot(!openBot)}
        >
          <Bot className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}
    </div>
  );
};

export default Chatbot;

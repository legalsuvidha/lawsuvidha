import React, { useState, useRef, useEffect } from 'react';
import { X, Plus, Send, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import axios from 'axios';
import { Socket } from 'dgram';
import {io} from "socket.io-client"

interface Message {
  type: 'user' | 'bot' | 'system';
  text: string;
  options?: string[];
  opt?:boolean;
  phone?:boolean
}

type ChatStage = 
  | 'initial' 
  | 'name' 
  | 'contact' 
  | 'location' 
  | 'agent'
  | 'caseType' 
  | 'questions' 
  | 'consent' 
  | 'end';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState('');
  const [stage, setStage] = useState<ChatStage>('initial');
  const [userData, setUserData] = useState({
    name: '',
    contact: '',
    location: '',
    caseType: '',
    answers: {}
  });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const socketRef=useRef<any>(null)
  const [input, setInput] = useState("");
  const [custId, setCustId] = useState(null); 
  const cidref=useRef<any>(null) // reference to the current connected custoemr id
  const sessionref=useRef<any>(null)
  // Case type specific questions
  const caseTypeQuestions: Record<string, string[]> = {
    'Family Issue': [
      "Are you seeking a divorce or separation?",
      "Are there children involved in your case?",
      "Is there any property or assets to be divided?",
      "Have you tried mediation or  counseling?",
    ],
    'Corporate Issue': [
      "What is the nature of your business?",
      "Is this related to contract negotiation or review?",
      "Are you dealing with intellectual property issues?",
      "Is this regarding employment or labor disputes?",
    ],
    'Criminal Issue': [
      "What charges are you facing?",
      "Have you been arrested?",
      "Do you have a court date scheduled?",
      "Have you been questioned by the police?",
    ],
    'Labour Issue': [
      "Are you an employer or employee?",
      "Is this regarding termination or layoffs?",
      "Are you dealing with workplace discrimination?",
      "Is this related to compensation or benefits?",
    ]
  };

  const caseRef=useRef(null)

  // Initialize chat
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          type: 'bot',
          text: "Hello! Welcome to Law Suvidha. I'm here to assist you with your legal questions. To get started, may I know your name?"
        }
      ]);
      setStage('name');
    }
  }, [isOpen, messages.length]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  useEffect(() => {
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, []);
  
  const handleOpen = () => {
    setIsOpen(true);
    setIsMinimized(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsMinimized(false);
    // Reset chat state
    setMessages([]);
    setStage('initial');
    setUserData({
      name: '',
      contact: '',
      location: '',
      caseType: '',
      answers: {}
    });
    setCurrentQuestionIndex(0);
    setCustId(null);
  if (socketRef.current) {
    socketRef.current.disconnect();
    socketRef.current = null;
  }
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleSend = () => {
    if (!userInput.trim()) return;
    if(socketRef.current)
    {
      const sessionId=sessionref.current
      const data={sessionId,toId:cidref.current,message:userInput}
      socketRef.current.emit("send_message",data);
      console.log('message for customer to ',cidref.current)
      // setMessages((prev)=>[
      //   ...prev,{type:"user",text:userInput}
      // ])
      setMessages(prev => [...prev, newUserMessage]);
      setUserInput('');
    }
    else{
      setMessages(prev => [...prev, newUserMessage]);
       processUserInput(userInput);
       setUserInput('');
    }

    const newUserMessage: Message = {
      type: 'user',
      text: userInput
    };
    setUserInput('');

    // processUserInput(userInput);
    
  };

  const handleOptionSelect = (option: string) => {
    const newUserMessage: Message = {
      type: 'user',
      text: option
    };

    setMessages(prev => {
      const updated = [...prev];
      // Mark the last message (with options) as selected
      const lastIndex = updated.length - 1;
      if (updated[lastIndex].options) {
        updated[lastIndex] = {
          ...updated[lastIndex],
          opt: true
        };
      }
      return [...updated, newUserMessage];
    });
    processUserInput(option);
  };

  const processUserInput = (input: string) => {
    switch (stage) {
      case 'name':
        setUserData(prev => ({ ...prev, name: input }));
        setTimeout(() => {
          setMessages(prev => [...prev, {
            type: 'bot',
            text: `Nice to meet you, ${input}! Could you please share your contact number?`
          }]);
          setStage('contact');
        }, 500);
        break;
  
      case 'contact':
        const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(input)) {
    setMessages(prev => [...prev, {
      type: 'bot',
      text: "Please enter a valid 10-digit phone number."
    }]);
   return
  }
        setUserData(prev => ({ ...prev, contact: input }));
        setTimeout(() => {
          setMessages(prev => [...prev, {
            type: 'bot',
            text: "Thank you. What is your location or city?",
            phone:true
          }]);
          setStage('location');
        }, 500);
        break;
  
      case 'location':
        setUserData(prev => ({ ...prev, location: input }));
        setTimeout(() => {
          setMessages(prev => [...prev, {
            type: 'bot',
            text: "What type of legal assistance do you need?",
            options: ['Family Law', 'Corporate Law', 'Criminal Law', 'Labour Law'],
          }]);
          setStage('caseType');
        }, 500);
        break;
  
      case 'caseType':
        setUserData(prev => ({ ...prev, caseType: input }));
        setCurrentQuestionIndex(0);
        setTimeout(() => {
          setMessages(prev => [...prev, {
            type: 'bot',
            text: "Would you like to speak with someone from our team?",
            options: ['Yes', 'No']
          }]);
          setStage('agent');
        }, 500);
        break;
  
      case 'agent':
        setUserData(prev => ({ ...prev, wantsAgent: input }));
        setTimeout(() => {
          if (input.toLowerCase() === 'yes') {
            // ⚡️ Handle websocket agent connection here
            setMessages(prev => [...prev, {
              type: 'bot',
              text: "Connecting you to an agent now... Please wait.",
              // options: ['Thank You']
            }]);
            // setStage('end');
            handleAgent()
          } else {
            // Start case-specific questions
            if (userData.caseType && caseTypeQuestions[userData.caseType]?.length > 0) {
              setMessages(prev => [...prev, {
                type: 'bot',
                text: caseTypeQuestions[userData.caseType][0]
              }]);
              setStage('questions');
            } else {
              // No specific questions — go straight to consent
              setMessages(prev => [...prev, {
                type: 'bot',
                text: "Do you consent to Law Suvidha storing your information to better assist you?",
                options: ['Yes, I consent', 'No, I do not consent']
              }]);
              setStage('consent');
            }
          }
        }, 500);
        break;
  
      case 'questions':
        setUserData(prev => ({
          ...prev,
          answers: {
            ...prev.answers,
            [caseTypeQuestions[userData.caseType][currentQuestionIndex]]: input
          }
        }));
  
        const nextIndex = currentQuestionIndex + 1;
        if (userData.caseType && caseTypeQuestions[userData.caseType] && nextIndex < caseTypeQuestions[userData.caseType].length) {
          setCurrentQuestionIndex(nextIndex);
          setTimeout(() => {
            setMessages(prev => [...prev, {
              type: 'bot',
              text: caseTypeQuestions[userData.caseType][nextIndex]
            }]);
          }, 500);
        } else {
          setTimeout(() => {
            setMessages(prev => [...prev, {
              type: 'bot',
              text: "Thank you for providing those details. Do you consent to Law Suvidha storing your information to better assist you?",
              options: ['Yes, I consent', 'No, I do not consent']
            }]);
            setStage('consent');
          }, 500);
        }
        break;
  
      case 'consent':
        const consented = input.toLowerCase().includes('yes');
        console.log(userData);
  
        setTimeout(() => {
          if (consented) {
            setMessages(prev => [...prev, {
              type: 'bot',
              text: `Thank you, ${userData.name}! Our legal team will review your information and contact you soon at ${userData.contact}. Please click the "Thank You" button below to complete this conversation.`,
              options: ['Thank You']
            }]);
          } else {
            setMessages(prev => [...prev, {
              type: 'bot',
              text: `We understand your privacy concerns, ${userData.name}. Your information will not be stored. Our legal team can still assist you if you contact us directly.`,
              options: ['Thank You', 'Contact Us']
            }]);
          }
          setStage('end');
        }, 500);
        break;
  
      case 'end':
        try {
          axios.post('http://localhost:3000/api/store', userData);
        } catch (error) {
          console.log(error);
        }
        toast({
          title: "Chat completed",
          description: "Thank you for contacting Law Suvidha!",
          duration: 3000,
        });
        handleClose();
        break;
  
      default:
        break;
    }
  };
  
 const handleAgent=()=>{
  // setMessages((prev) => [
  //   ...prev,
  //   {
  //     type: 'user',
  //     text: 'I want to talk to a human agent.',
  //   },
  //   {
  //     type: 'bot',
  //     text: 'Sure! Connecting you to a human agent. Please wait a moment...',
  //   }
    
  // ]);
    socketRef.current=io("http://localhost:5001",{
      query:{
        userId:'cust',
        role:'customer'
      }
    })
    socketRef.current.on("connect",()=>{
      console.log("connected as legal customer")
      socketRef.current.emit("register", {userType:'cust',mobile:'123456789',userId: socketRef.current.id });
    })
  socketRef.current.on("receive",(data)=>{
    setMessages((prev)=>[
      ...prev,
      {type:"bot",text:data.message}
    ])
    console.log("message received from chat service : ",data)
})

socketRef.current.on("assign_agent", ({ agentId,session_id }) => {
  console.log(` agent connected: ${agentId}`);
  console.log("session id is ",session_id)
  sessionref.current=session_id
  cidref.current=agentId
  setMessages((prev)=>[
    ...prev,
    {
    type: 'system',
    text: 'Connected to chat support'
    },
  ])
  setCustId(cidref.current);  // Store customerId in state
  console.log("agent id is",cidref.current)
});
socketRef.current.on("agent_disconnected", (data:any) => {
  // Show message in chat UI
  setMessages((prev)=>[
    ...prev,
    {
    type: 'system',
      text: data
    },
  ])
  console.log("agent disconnected we will try to connect to another agent")
});
 }
 
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Chat button */}
      {!isOpen && (
        <Button 
          onClick={handleOpen}
          className="bg-black text-white shadow-lg h-14 w-14 rounded-full"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )} 
      {/* Chat window */}
      {isOpen && (
        <div className={`bg-white rounded-lg shadow-xl border border-gray-200 w-[350px] md:w-[400px] transition-all duration-300 ${isMinimized ? 'h-14' : 'h-[500px]'}`}>
          {/* Chat header */}
          <div className="bg-black text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="font-semibold">Law Suvidha Assistant</div>
            <div className="flex space-x-2">
              <Button 
                variant="ghost" 
                size="icon"
                className="h-8 w-8 text-white hover:bg-white/10"
                onClick={handleMinimize}
              >
                {isMinimized ? <Plus size={18} /> : <div className="w-4 h-0.5 bg-white rounded"></div>}
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="h-8 w-8 text-white hover:bg-white/10"
                onClick={handleClose}
              >
                <X size={18} />
              </Button>
            </div>
          </div>

          {/* Chat body */}
          {!isMinimized && (
            <>
              <div className="p-4 h-[380px] overflow-y-auto">
                {messages.map((message, index) => (
                  <div key={index}>
                    <div className={`mb-4 max-w-[80%] ${message.type === 'user' ? 'ml-auto' : 'mr-auto'}`}>
                      <div className={`p-3 rounded-lg ${message.type === 'user' ? 'bg-black text-white' : 'bg-gray-100 text-black'}`}>
                        {message.text}
                      </div>
                    </div>
                    {message.options && (
                      <div className="mb-4 flex flex-wrap gap-2">
                        {message.options.map((option) => (
                          <Button
                            key={option}
                            variant="outline"
                            size="sm"
                            disabled={message.opt}
                            onClick={() => handleOptionSelect(option)}
                            className="text-sm"

                          >
                            {option}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              
              {/* Chat input */}
              <div className="p-2 border-t">
                <div className="flex space-x-2">
                  <Input
                    type="text"
                    placeholder="Type your message..."
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    className="flex-grow"
                    disabled={messages.length > 0 && messages[messages.length - 1].options !== undefined}
                  />
                  <Button 
                    className="bg-black text-white"
                    onClick={handleSend}
                    disabled={messages.length > 0 && messages[messages.length - 1].options !== undefined}
                  >
                    <Send size={18} />
                  </Button>
                  {/* <Button onClick={handleAgent}>Contact Agent</Button> */}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatBot;
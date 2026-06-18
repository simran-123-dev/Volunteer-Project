import { useEffect, useRef, useState } from 'react';
import { FaMagic, FaPaperPlane, FaRobot, FaStar, FaUserCircle } from 'react-icons/fa';
import { postChat } from '../../services/api';

const suggestions = [
  'I know graphic designing and I am available on weekends.',
  'I know Python and AI.',
  'I am available only on weekends.',
  'Give me a learning roadmap for NGO tech volunteering.',
  'Suggest events for a college student in Delhi.',
];

const welcomeMessage = {
  role: 'ai',
  text: 'Hi, I am your NayePankh AI Volunteer Assistant. Tell me your skills, city, interests, and availability, and I will suggest suitable campaigns and next steps.',
};

function AIImpactAssistant() {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState([welcomeMessage]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, loading]);

  const sendMessage = async (messageText = prompt) => {
    const cleanMessage = messageText.trim();

    if (!cleanMessage || loading) {
      return;
    }

    setMessages((current) => [...current, { role: 'user', text: cleanMessage }]);
    setPrompt('');
    setLoading(true);

    try {
      const response = await postChat(cleanMessage);
      setMessages((current) => [
        ...current,
        {
          role: 'ai',
          text: response.reply || 'I could not generate a response right now. Please try again.',
        },
      ]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        {
          role: 'ai',
          isError: true,
          text: error.response?.data?.message || 'AI service is unavailable. Check GEMINI_API_KEY and try again.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <section className="page-section ai-section">
      <div className="ai-copy">
        <span className="eyebrow">Gemini AI Integration</span>
        <h2>Smart Volunteer Assistant</h2>
        <p>
          Ask for volunteer recommendations, career guidance, learning roadmaps, FAQs,
          motivation, or event ideas powered by Google Gemini.
        </p>
        <div className="ai-suggestions">
          {suggestions.map((item) => (
            <button type="button" key={item} onClick={() => sendMessage(item)} disabled={loading}>
              {item}
            </button>
          ))}
        </div>
      </div>

      <form className="ai-card chat-card" onSubmit={handleSubmit}>
        <div className="ai-card-heading">
          <span className="ai-avatar">
            <FaRobot aria-hidden="true" />
          </span>
          <div>
            <strong>NayePankh AI Assistant</strong>
            <small>Gemini 2.5 Flash volunteer support</small>
          </div>
        </div>

        <div className="chat-window" aria-live="polite">
          {messages.map((message, index) => (
            <div className={`chat-row ${message.role === 'user' ? 'user' : 'ai'}`} key={`${message.role}-${index}`}>
              <span className="bubble-avatar">
                {message.role === 'user' ? <FaUserCircle aria-hidden="true" /> : <FaMagic aria-hidden="true" />}
              </span>
              <div className={message.isError ? 'chat-bubble error' : 'chat-bubble'}>{message.text}</div>
            </div>
          ))}
          {loading && (
            <div className="chat-row ai">
              <span className="bubble-avatar">
                <FaMagic aria-hidden="true" />
              </span>
              <div className="chat-bubble typing">
                <i />
                <i />
                <i />
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <div className="chat-input-row">
          <textarea
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
            onKeyDown={handleKeyDown}
            rows="2"
            placeholder="Type your skills, city, interest, or availability..."
            aria-label="Message for Gemini volunteer assistant"
          />
          <button className="send-button" type="submit" disabled={loading || !prompt.trim()} aria-label="Send message">
            <FaPaperPlane aria-hidden="true" />
          </button>
        </div>

        <div className="ai-feature-strip">
          <span><FaStar aria-hidden="true" /> Recommendations</span>
          <span>Career guidance</span>
          <span>Learning roadmap</span>
          <span>FAQ</span>
        </div>
      </form>
    </section>
  );
}

export default AIImpactAssistant;

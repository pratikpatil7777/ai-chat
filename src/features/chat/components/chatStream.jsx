'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { cn } from '@/lib/utils/cn';

const ReactJson = dynamic(() => import('react-json-view-lite'), { ssr: false });

function ChatStream({ streamUrl }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!streamUrl) return;
    const eventSource = new EventSource(streamUrl);

    eventSource.onmessage = (event) => {
      const payload = JSON.parse(event.data);
      setMessages((prev) => [...prev, payload]);
    };

    eventSource.onerror = () => {
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, [streamUrl]);

  return (
    <div className="space-y-4">
      {messages.map((message, index) => (
        <article
          key={`message-${index}`}
          className={cn(
            'rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900',
            message.role === 'assistant' ? 'border-brand-200 dark:border-brand-600' : ''
          )}
        >
          <header className="mb-2 flex items-center justify-between text-xs uppercase tracking-wide text-slate-400">
            <span>{message.role}</span>
            {message.timestamp && <time>{new Date(message.timestamp).toLocaleTimeString()}</time>}
          </header>
          {typeof message.content === 'string' ? (
            <p className="whitespace-pre-wrap text-sm leading-relaxed text-slate-700 dark:text-slate-200">
              {message.content}
            </p>
          ) : (
            <ReactJson data={message.content} theme="dark" collapsed={false} shouldCollapse={false} />
          )}
        </article>
      ))}
    </div>
  );
}

export default ChatStream;

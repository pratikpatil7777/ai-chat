'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

function ChatComposer({ onSend }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!message.trim()) return;
    onSend(message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 rounded-xl border border-slate-200 bg-white p-2 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <Input
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Ask your data..."
        className="flex-1 border-none bg-transparent focus-visible:outline-none"
      />
      <Button type="submit">Send</Button>
    </form>
  );
}

export default ChatComposer;

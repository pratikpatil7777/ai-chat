'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';

const mockConversations = [
  { id: '1', title: 'Q4 Revenue Summary', pinned: true },
  { id: '2', title: 'Customer Attrition cohort', pinned: false }
];

function ChatHistoryPanel() {
  const [query, setQuery] = useState('');

  const filtered = mockConversations.filter((conversation) =>
    conversation.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex h-full flex-col gap-4">
      <Input
        placeholder="Search history"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className="flex-1 space-y-3 overflow-y-auto pr-2">
        {filtered.map((conversation) => (
          <button
            key={conversation.id}
            type="button"
            className="w-full rounded-lg border border-white/40 bg-white/70 p-3 text-left text-sm shadow-sm transition hover:border-brand-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500 dark:border-slate-800 dark:bg-slate-900/60"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium text-slate-800 dark:text-slate-200">
                {conversation.title}
              </span>
              {conversation.pinned && <span className="text-xs uppercase text-accent-500">Pinned</span>}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ChatHistoryPanel;

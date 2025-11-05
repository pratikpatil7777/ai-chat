'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import AppShell from '@/components/layout/app-shell';
import ChatHistoryPanel from '@/features/chat/components/chatHistoryPanel';
import ChatComposer from '@/features/chat/components/chatComposer';
import ChatStream from '@/features/chat/components/chatStream';
import { Button } from '@/components/ui/button';

const AttachmentDropzone = dynamic(() => import('@/features/chat/components/chatUploadZone'), { ssr: false });

export default function ChatAssistPage() {
  const [streamUrl, setStreamUrl] = useState(null);

  const handleSend = (message) => {
    console.log('send message', message);
    setStreamUrl('/api/sse/chat?conversation=demo');
  };

  const primaryPanel = (
    <div className="flex h-full flex-col gap-6">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">ChatAssist</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Streamed responses with lineage and module tooling.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary">Open tools</Button>
          <Button variant="ghost">History</Button>
        </div>
      </header>
      <AttachmentDropzone />
      <div className="flex-1 overflow-y-auto rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/60">
        <ChatStream streamUrl={streamUrl} />
      </div>
      <ChatComposer onSend={handleSend} />
    </div>
  );

  return <AppShell contextPanel={<ChatHistoryPanel />} primaryPanel={primaryPanel} />;
}

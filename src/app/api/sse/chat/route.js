import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
  const readable = new ReadableStream({
    start(controller) {
      const encoder = new TextEncoder();
      const events = [
        { role: 'assistant', content: 'Analyzing dataset lineage…', timestamp: Date.now() },
        {
          role: 'assistant',
          content: { summary: 'Revenue up 12%', notes: ['Cleaned nulls', 'Applied governance policy'] },
          timestamp: Date.now() + 1000
        }
      ];
      events.forEach((event, index) => {
        setTimeout(() => {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(event)}\n\n`));
          if (index === events.length - 1) {
            controller.close();
          }
        }, index * 900);
      });
    }
  });

  return new NextResponse(readable, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive'
    }
  });
}

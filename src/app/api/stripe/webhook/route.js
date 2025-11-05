import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { getStripeClient } from '@/lib/stripe/client';

export const runtime = 'nodejs';

export async function POST(request) {
  const stripe = getStripeClient();
  const body = await request.text();
  const signature = headers().get('stripe-signature');
  let event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  switch (event.type) {
    case 'customer.subscription.created':
    case 'customer.subscription.updated':
    case 'customer.subscription.deleted':
      // TODO: sync subscription state
      break;
    case 'invoice.paid':
    case 'invoice.payment_failed':
      // TODO: handle billing notifications
      break;
    default:
      break;
  }

  return NextResponse.json({ received: true });
}

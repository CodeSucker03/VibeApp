import { PostHog } from 'posthog-node'

export const createPostHogServer = () =>
  new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST?.replace('i.', '') || 'https://eu.posthog.com',
    flushAt: 1,
    flushInterval: 0,
  })

export const trackEventServer = async (event: string, distinctId: string, properties?: Record<string, unknown>) => {
  const posthog = createPostHogServer()
  posthog.capture({
    distinctId,
    event,
    properties,
  })
  await posthog.shutdown()
}
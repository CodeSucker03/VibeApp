import posthog from 'posthog-js'

export const trackEvent = (event: string, properties?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && posthog.__loaded) {
    posthog.capture(event, properties)
  }
}

export const identifyUser = (userId: string, email?: string) => {
  if (typeof window !== 'undefined' && posthog.__loaded) {
    posthog.identify(userId, { email })
  }
}

export const resetUser = () => {
  if (typeof window !== 'undefined' && posthog.__loaded) {
    posthog.reset()
  }
}
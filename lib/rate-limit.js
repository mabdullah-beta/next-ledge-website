import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Connect to Upstash Redis
export const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

// --------------- RATE LIMIT CONFIG ------------------

// Upload limiter: 5 uploads per 1 hour per IP
export const uploadsLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.fixedWindow(2, "1 h"),
    analytics: true,
});

// Chat limiter: 30 messages every 10 minutes per IP
export const chatLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, "10 m"),
    analytics: true,
});

import { Redis } from '@upstash/redis'
import { NextRequest, NextResponse } from 'next/server'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

const SITE_ID = process.env.SITE_ID || 'cardioguard'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Get IP address for logging (optional)
    const ip = request.headers.get('x-forwarded-for') || 'unknown'
    
    // Store signup data
    const signupData = {
      email,
      timestamp: new Date().toISOString(),
      ip,
      userAgent: request.headers.get('user-agent') || 'unknown'
    }

    // Add to email signups list
    await redis.rpush(`email_signups:${SITE_ID}`, JSON.stringify(signupData))
    
    // Increment counter
    await redis.incr(`email_signups_count:${SITE_ID}`)

    return NextResponse.json({ success: true })
    
  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
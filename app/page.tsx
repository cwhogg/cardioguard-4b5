import JsonLd from '@/components/content/JsonLd'

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CardioGuard",
  "url": "https://cardioguard.com",
  "description": "Advanced cardiovascular biomarkers testing without insurance barriers",
  "sameAs": []
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "CardioGuard",
  "url": "https://cardioguard.com",
  "description": "CardioGuard offers advanced cardiovascular biomarkers like ApoB and Lp(a) testing without insurance barriers."
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the best markers for cardiovascular health?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The best cardiovascular markers include ApoB, Lp(a), advanced lipid panels, and inflammatory markers like hs-CRP. These provide a much more complete picture than basic cholesterol tests and can detect heart disease risk decades earlier."
      }
    },
    {
      "@type": "Question",
      "name": "What is a preferred cardiac biomarker?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ApoB (Apolipoprotein B) is considered one of the most important cardiac biomarkers by leading cardiologists. It measures the actual number of atherogenic particles in your blood, not just cholesterol levels, making it far more predictive of cardiovascular events."
      }
    },
    {
      "@type": "Question",
      "name": "Does insurance cover LP(a) test?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most insurance plans don't cover Lp(a) testing unless you already have cardiovascular disease or strong family history. This creates a frustrating gap for people who want proactive heart health screening with the most advanced biomarkers available."
      }
    },
    {
      "@type": "Question",
      "name": "What are the new biomarkers for cardiovascular disease?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "New cardiovascular biomarkers include ApoB, Lp(a), oxidized LDL, myeloperoxidase, and advanced particle testing. These modern markers can identify cardiovascular risk in people with 'normal' standard cholesterol panels, filling critical gaps in heart disease prevention."
      }
    }
  ]
}

export default function HomePage() {
  return (
    <>
      <JsonLd schema={organizationSchema} />
      <JsonLd schema={websiteSchema} />
      <JsonLd schema={faqSchema} />
      
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="font-bold text-xl text-text">CardioGuard</div>
            <div className="hidden md:flex space-x-6">
              <a href="/blog" className="text-text-secondary hover:text-accent transition-colors">Heart Health Blog</a>
              <a href="/compare" className="text-text-secondary hover:text-accent transition-colors">Test Comparison</a>
              <a href="/faq" className="text-text-secondary hover:text-accent transition-colors">FAQ</a>
            </div>
          </nav>
        </header>

        <main>
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-text mb-6 leading-tight">
                Get the Best Cardiovascular Biomarkers Your Doctor Should Order
              </h1>
              <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
                Access advanced heart disease prevention blood tests like ApoB and Lp(a) without insurance hassles. The testing gap between what cardiologists recommend and what you can actually get ends here.
              </p>
              <EmailSignupForm />
              <p className="text-sm text-text-muted mt-4">Join 2,847+ health-conscious professionals getting early access</p>
            </div>
          </section>

          {/* Value Propositions */}
          <section className="py-16 px-4 bg-background-elevated" aria-label="Value Propositions">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-text text-center mb-12">Advanced Heart Testing Without Healthcare Barriers</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-background rounded-lg p-8 border border-border">
                  <h3 className="text-xl font-semibold text-text mb-4">Tests Worth Getting That Insurance Won't Cover</h3>
                  <p className="text-text-secondary leading-relaxed">
                    ApoB, Lp(a), and advanced lipid markers that predict heart disease decades before basic cholesterol panels. No physician gatekeeping required.
                  </p>
                </div>
                <div className="bg-background rounded-lg p-8 border border-border">
                  <h3 className="text-xl font-semibold text-text mb-4">Know What Your Numbers Actually Mean</h3>
                  <p className="text-text-secondary leading-relaxed">
                    Detailed cardiovascular risk analysis with actionable next steps. Not just lab values—actual heart disease prevention guidance you can use.
                  </p>
                </div>
                <div className="bg-background rounded-lg p-8 border border-border">
                  <h3 className="text-xl font-semibold text-text mb-4">Track Your Progress Over Time</h3>
                  <p className="text-text-secondary leading-relaxed">
                    Monitor how lifestyle changes and interventions affect your real cardiovascular risk markers. See if that expensive supplement is actually working.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 px-4" aria-label="Frequently Asked Questions">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-text text-center mb-12">Cardiovascular Testing Questions Answered</h2>
              <div className="space-y-8">
                <div className="bg-background-elevated rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-text mb-3">What are the best markers for cardiovascular health?</h3>
                  <p className="text-text-secondary leading-relaxed">
                    The best cardiovascular markers include ApoB, Lp(a), advanced lipid panels, and inflammatory markers like hs-CRP. These provide a much more complete picture than basic cholesterol tests and can detect heart disease risk decades earlier.
                  </p>
                </div>
                <div className="bg-background-elevated rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-text mb-3">What is a preferred cardiac biomarker?</h3>
                  <p className="text-text-secondary leading-relaxed">
                    ApoB (Apolipoprotein B) is considered one of the most important cardiac biomarkers by leading cardiologists. It measures the actual number of atherogenic particles in your blood, not just cholesterol levels, making it far more predictive of cardiovascular events.
                  </p>
                </div>
                <div className="bg-background-elevated rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-text mb-3">Does insurance cover Lp(a) testing?</h3>
                  <p className="text-text-secondary leading-relaxed">
                    Most insurance plans don't cover Lp(a) testing unless you already have cardiovascular disease or strong family history. This creates a frustrating gap for people who want proactive heart health screening with the most advanced biomarkers available.
                  </p>
                </div>
                <div className="bg-background-elevated rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-text mb-3">What are the new biomarkers for cardiovascular disease?</h3>
                  <p className="text-text-secondary leading-relaxed">
                    New cardiovascular biomarkers include ApoB, Lp(a), oxidized LDL, myeloperoxidase, and advanced particle testing. These modern markers can identify cardiovascular risk in people with 'normal' standard cholesterol panels, filling critical gaps in heart disease prevention.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-background-elevated border-t border-border py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <div className="font-bold text-xl text-text mb-2">CardioGuard</div>
                <p className="text-text-muted text-sm">Advanced Heart Tests Without the Healthcare Hassle</p>
              </div>
              <div className="flex space-x-6">
                <a href="/blog" className="text-text-secondary hover:text-accent transition-colors text-sm">Heart Health Blog</a>
                <a href="/compare" className="text-text-secondary hover:text-accent transition-colors text-sm">Test Comparison</a>
                <a href="/faq" className="text-text-secondary hover:text-accent transition-colors text-sm">FAQ</a>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-border text-center text-text-muted text-sm">
              <p>&copy; 2024 CardioGuard. Advanced cardiovascular biomarkers for proactive heart health.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

'use client'

import { useState } from 'react'

function EmailSignupForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
      
      const data = await response.json()
      
      if (data.success) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
        setErrorMessage(data.error || 'Something went wrong')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('Network error. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 max-w-md mx-auto">
        <p className="text-accent font-medium text-center">Thanks! You're on the early access list.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email for early access"
          required
          disabled={status === 'loading'}
          className="flex-1 px-4 py-3 bg-background-elevated border border-border rounded-lg text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background transition-colors disabled:opacity-50"
        >
          {status === 'loading' ? 'Joining...' : 'Get Advanced Heart Testing'}
        </button>
      </div>
      {status === 'error' && (
        <p className="text-primary text-sm mt-2 text-center">{errorMessage}</p>
      )}
    </form>
  )
}
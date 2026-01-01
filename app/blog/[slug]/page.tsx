'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'

const blogPosts: Record<string, {
  id: string
  title: string
  content: string
  date: string
  category: string
  excerpt: string
  slug: string
}> = {
  'mental-health-adult-creator-industry': {
    id: '1',
    title: 'Mental Health in the Adult Creator Industry: Let\'s Talk About It',
    excerpt: 'An honest conversation about the emotional reality of being an adult creator, with practical strategies for protecting your wellbeing.',
    date: 'November 15, 2025',
    slug: 'mental-health-adult-creator-industry',
    category: 'Wellness',
    content: `
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        Being an adult creator can be empowering, creative, and financially liberating. It can also be emotionally complex, isolating, and mentally exhausting. Most conversations focus on growth and income, yet the human experience behind the screen often goes unspoken.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        It is time to change that.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        This post exists to hold space for adult creators. To normalize what you may be feeling, help you build healthier systems, and remind you that your wellbeing matters just as much as your revenue.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">The Emotional Reality of Being an Adult Creator</h2>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        Many creators share similar mental health challenges, even if no one talks about them publicly.
      </p>

      <h3 class="text-2xl font-serif font-bold text-soft-ivory mb-4 mt-8">Burnout and Emotional Fatigue</h3>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Creators often carry the weight of constant messaging, emotional labor, performance expectations, and pressure to always be available.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Burnout in this space can look like:
      </p>
      <ul class="mb-6 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Feeling emotionally numb or disconnected</li>
        <li>Dreading logging in</li>
        <li>Losing motivation or creativity</li>
        <li>Crashing after high revenue periods</li>
      </ul>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        This is not weakness. It is your nervous system telling you that you are overloaded.
      </p>

      <div class="my-8">
        <img src="/blog/mental-health-adult-creator-industry/pexels-cottonbro-3778550.jpg" alt="Creator working" class="w-full h-auto rounded-lg max-h-64 object-cover" />
      </div>

      <h3 class="text-2xl font-serif font-bold text-soft-ivory mb-4 mt-8">Parasocial Relationships and Emotional Boundaries</h3>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Fans may sometimes forget there is a real human being on the other side of the screen. Over-attachment, entitlement, jealousy, and emotional dependence can place very real strain on creators.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        Setting boundaries is not rude. It is protective.
      </p>

      <h3 class="text-2xl font-serif font-bold text-soft-ivory mb-4 mt-8">Stigma, Judgment, and Shame</h3>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Many creators experience:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Fear of being "found out"</li>
        <li>Anxiety about family or relationships</li>
        <li>Internalized shame due to societal biases</li>
        <li>Feeling misunderstood or unsafe</li>
      </ul>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        This is heavy. And it is valid. You deserve support and respect just like anyone else.
      </p>

      <h3 class="text-2xl font-serif font-bold text-soft-ivory mb-4 mt-8">Financial Instability and Pressure to Perform</h3>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Content platforms can change overnight. Subscriptions fluctuate. Algorithms shift. As a result, creators often live with:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Income unpredictability</li>
        <li>Fear of losing momentum</li>
        <li>Pressure to constantly create</li>
      </ul>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        That level of uncertainty impacts mental health, even when you are successful.
      </p>

      <h3 class="text-2xl font-serif font-bold text-soft-ivory mb-4 mt-8">Isolation and Loneliness</h3>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Working online, especially when secrecy is necessary, can shrink your support system.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed italic">
        "I do not feel like I can talk to anyone about my job."
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        That isolation compounds stress.
      </p>

      <div class="my-8">
        <img src="/blog/mental-health-adult-creator-industry/pexels-roman-odintsov-8244390.jpg" alt="Support and community" class="w-full h-auto rounded-lg max-h-64 object-cover" />
      </div>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">Your Mental Health Matters. Here's What Helps</h2>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        None of these are quick fixes, but they are supportive practices that make a meaningful difference.
      </p>

      <h3 class="text-2xl font-serif font-bold text-soft-ivory mb-4 mt-8">1. Create Clear Work Boundaries</h3>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed font-semibold">
        You are allowed to have limits.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Examples include:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Define messaging hours</li>
        <li>Keep work and personal platforms separate</li>
        <li>Create emotional scripts so you are not always performing</li>
        <li>Take full days off without guilt</li>
      </ul>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        Boundaries protect you and extend your career longevity.
      </p>

      <h3 class="text-2xl font-serif font-bold text-soft-ivory mb-4 mt-8">2. Build a Supportive Circle</h3>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        If you can, surround yourself with at least one person who sees you, not just your job.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        This may be:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>A trusted partner or friend</li>
        <li>A therapist familiar with sex-work-adjacent industries</li>
        <li>Ethical creator communities</li>
        <li>A management team that protects your wellbeing, not just profits</li>
      </ul>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        You should never have to carry everything alone.
      </p>

      <h3 class="text-2xl font-serif font-bold text-soft-ivory mb-4 mt-8">3. Normalize Talking About Feelings</h3>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        You do not have to be strong all the time.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Stress, fear, overwhelm, guilt, joy, empowerment, and fatigue can all exist together.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        Your emotions do not define your worth. They simply show you what needs care.
      </p>

      <h3 class="text-2xl font-serif font-bold text-soft-ivory mb-4 mt-8">4. Prioritize Nervous System Regulation</h3>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Simple grounding habits go a long way:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Eat real meals</li>
        <li>Sleep before scrolling</li>
        <li>Stretch and move your body</li>
        <li>Step outside daily</li>
        <li>Limit late night messaging when possible</li>
      </ul>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        Your body is your business, and also your home.
      </p>

      <h3 class="text-2xl font-serif font-bold text-soft-ivory mb-4 mt-8">5. Separate Your Identity From Your Persona</h3>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Your creator persona is a role you play. Your real self is private and deserves protection.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        Blending the two too deeply can harm self-image, so create intentional emotional separation and privacy buffers.
      </p>

      <h3 class="text-2xl font-serif font-bold text-soft-ivory mb-4 mt-8">6. Seek Professional Help When Needed</h3>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        If you are struggling with depression, anxiety, trauma, or thoughts of self-harm, support exists. A therapist with experience in sex-positive or stigma-aware care can make a world of difference.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        If you ever feel unsafe or overwhelmed, please reach out to a trusted support resource or your local crisis line.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        You are never too strong to need help.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">You Are More Than Your Metrics</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Your value is not defined by:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Your subscriber count</li>
        <li>Your engagement stats</li>
        <li>Your PPV revenue</li>
        <li>Your latest month's total</li>
      </ul>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        You are a complete human with dignity, depth, and dreams.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        Protecting your mental health is not optional. It is essential.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">Our Promise at Onyxspire</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        We believe in supporting creators as whole humans, not revenue sources.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        That means:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Ethical business strategy</li>
        <li>Clear boundaries</li>
        <li>Sustainable systems</li>
        <li>Emotional respect</li>
        <li>Safety first decision-making</li>
      </ul>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        You deserve a team that protects your peace as much as your profits.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">If This Spoke to You</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        If you are an adult creator who wants support, stability, strategy, and a team that prioritizes your wellbeing, we would love to talk.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        You do not have to do this alone.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        Apply to work with Onyxspire.
      </p>

      <div class="mt-12 p-6 bg-soft-ivory/10 rounded-lg border-l-4 border-bronze-gold">
        <p class="text-soft-ivory/90 leading-relaxed font-semibold">
          Important Note: This post is not medical advice. If you are struggling or feel unsafe, please reach out to a qualified mental health professional or local support services.
        </p>
      </div>
    `,
  },
  'what-creators-want-from-managers': {
    id: '2',
    title: 'We Asked 50 Creators What They Really Want From a Manager. Here\'s What They Said',
    excerpt: 'We spoke with 50 adult creators and asked what they really want from a manager. The responses were honest, vulnerable, and incredibly consistent.',
    date: 'November 10, 2025',
    slug: 'what-creators-want-from-managers',
    category: 'Insights',
    content: `
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        There is no shortage of agencies promising growth, optimization, and systems. But what do creators actually want from a manager on a human level?
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        We spoke with 50 adult creators at different stages in their careers and asked one simple question:
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold italic">
        "What do you really want from a manager?"
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        The responses were honest, vulnerable, and incredibly consistent.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        This article shares what we learned.
      </p>
      <p class="mb-6 text-soft-ivory/60 leading-relaxed text-sm italic">
        Names and identifying details have been removed to protect privacy.
      </p>

      <div class="my-8">
        <img src="/blog/what-creators-want-from-managers/pexels-anntarazevich-5697262.jpg" alt="Creators collaboration" class="w-full h-auto rounded-lg max-h-64 object-cover" />
      </div>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">1. "I want to feel like a person. Not a product."</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        The most common theme by far was simple but powerful.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed font-semibold">
        Creators want to feel respected.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Many creators shared past experiences where they felt:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Pressured to create more than they were comfortable with</li>
        <li>Ignored when they asked for boundaries</li>
        <li>Treated like revenue sources instead of partners</li>
      </ul>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        One creator said:
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed italic">
        "I do not want to be treated like a machine. I want a manager who understands I have feelings, mental health, and a real life outside of my page."
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        Respect is not a perk. It is the baseline.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">2. "I want transparency. No secrets. No surprises."</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Creators also want true partnership.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        That means:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Clear contracts</li>
        <li>Honest revenue splits</li>
        <li>No hidden fees</li>
        <li>No manipulation</li>
        <li>No vague deliverables</li>
      </ul>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        They want to understand exactly:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>What a manager does</li>
        <li>How decisions are made</li>
        <li>What is being said to fans on their behalf</li>
        <li>What data is being tracked</li>
      </ul>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        Trust grows where clarity exists.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">3. "I want real communication. Not hype."</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Many creators said they felt left in the dark.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        What they want instead is:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Regular check ins</li>
        <li>Honest feedback</li>
        <li>Realistic expectations</li>
        <li>Clear explanations of strategy</li>
      </ul>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        One creator told us:
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed italic">
        "I do not want promises. I want facts. Tell me what is working. Tell me what is not. Treat me like a business partner."
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Creators do not want to be love bombed with results during sales calls, then ignored after signing.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        Consistency matters.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">4. "I want someone who protects my boundaries."</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Boundaries came up again and again.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Creators want managers who will:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Protect their emotional wellbeing</li>
        <li>Respect limits on sexting and personal interaction</li>
        <li>Never guilt trip them into content</li>
        <li>Refuse unethical fan manipulation</li>
        <li>Support their safety</li>
      </ul>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Your career should never cost you your mental health, your integrity, or your comfort.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        A good manager safeguards those lines, rather than pushing past them.
      </p>

      <div class="my-8">
        <img src="/blog/what-creators-want-from-managers/pexels-karola-g-5899101.jpg" alt="Strategic planning" class="w-full h-auto rounded-lg max-h-64 object-cover" />
      </div>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">5. "I want strategy. Not chaos."</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Creators are tired of guesswork.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        They want:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Data driven systems</li>
        <li>Repeatable processes</li>
        <li>Intelligent sales psychology</li>
        <li>Pricing strategy guidance</li>
        <li>Funnel structure</li>
        <li>Audience analysis</li>
      </ul>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        And most importantly:
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed font-semibold">
        A long term plan.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        Not just a sprint for a single good month.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">6. "I want my time back."</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        This one was clear.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Creators want managers who can:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Reduce DM workload</li>
        <li>Handle logistics</li>
        <li>Organize content schedules</li>
        <li>Streamline growth</li>
        <li>Prevent burnout</li>
      </ul>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        One creator summed it up perfectly:
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed italic">
        "I want to log off sometimes and know my business is still okay."
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        This is not about handing over control. It is about building support.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">7. "I want someone who actually understands the industry."</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Creators do not want to explain basic realities of their work to the people managing them.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        They want managers who understand:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Stigma and privacy concerns</li>
        <li>Parasocial dynamics</li>
        <li>Fan psychology</li>
        <li>Content boundaries</li>
        <li>Platform risk</li>
        <li>Shadowbans and account bans</li>
        <li>Chargebacks</li>
        <li>Market trends</li>
      </ul>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        Industry awareness equals creator safety.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">8. "I want growth. But not at the cost of myself."</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Almost no one said, "I want to be the biggest."
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Instead, they said:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>"I want stability."</li>
        <li>"I want to grow sustainably."</li>
        <li>"I want balance."</li>
        <li>"I want freedom and financial safety."</li>
      </ul>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Creators are not chasing chaos. They want structure.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        And they want to keep their identity intact while they build.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">So what does this tell us?</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Creators want managers who operate with:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Respect</li>
        <li>Integrity</li>
        <li>Strategy</li>
        <li>Communication</li>
        <li>Protection</li>
        <li>Partnership</li>
      </ul>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        They want their humanity valued as highly as their revenue.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        And they deserve nothing less.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">Our Commitment at Onyxspire</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        We believe elite creator management means:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Protecting your boundaries</li>
        <li>Building stable, strategic income</li>
        <li>Communicating clearly</li>
        <li>Treating you like a business partner</li>
        <li>Honoring your mental health</li>
        <li>Operating ethically and transparently</li>
      </ul>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        If you are a creator who wants support that feels grounded, thoughtful, and sustainable, we would love to talk.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        You do not have to run your business alone.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        Apply to work with Onyxspire.
      </p>
    `,
  },
  'financial-planning-for-creators': {
    id: '3',
    title: 'Financial Planning for Creators: Taxes, Savings and Stability',
    excerpt: 'A comprehensive guide to money management for adult creators, covering taxes, savings, and building financial stability for a sustainable career.',
    date: 'November 5, 2025',
    slug: 'financial-planning-for-creators',
    category: 'Finance',
    content: `
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        Earning money as a creator can feel exciting, empowering, and freeing. It can also feel unpredictable. One month may be incredible. The next may be quiet. And unlike traditional jobs, there is rarely an HR department reminding you to save for taxes, retirement, or emergencies.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        Financial stability is one of the most important foundations for a sustainable creator career. This guide will walk through the basics of money management for adult creators, so you can build security, reduce stress, and keep your business strong for the long term.
      </p>
      <p class="mb-6 text-soft-ivory/60 leading-relaxed text-sm italic">
        This is educational information, not legal or financial advice. Always consult a qualified professional for your specific situation.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">Understanding Your Income as a Creator</h2>
      <div class="my-8">
        <img src="/blog/financial-planning-for-creators/taxes.jpg" alt="Financial planning and taxes" class="w-full h-auto rounded-lg max-h-64 object-cover" />
      </div>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Most creators are considered independent contractors or self employed. That means:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>You are responsible for your own taxes</li>
        <li>You do not have employer provided benefits</li>
        <li>Your income is likely to fluctuate month to month</li>
      </ul>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Because your earnings are variable, planning becomes essential.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        Stability does not come from how much you make. Stability comes from how you manage what you make.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">Taxes: What Creators Need To Know</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Taxes are one of the biggest sources of stress for creators, especially new ones. The key is to treat taxes like a bill you pay all year, not a surprise in April.
      </p>

      <h3 class="text-2xl font-serif font-bold text-soft-ivory mb-4 mt-8">Set aside a percentage from every payout</h3>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        A common recommendation is to save 25 to 35 percent of your income for taxes, depending on your country, state, and deductions. This usually covers:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Federal income tax</li>
        <li>State income tax (if applicable)</li>
        <li>Self employment tax</li>
        <li>Local taxes (if applicable)</li>
      </ul>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        Many creators find it helpful to move this money into a completely separate bank account so it is not accidentally spent.
      </p>

      <h3 class="text-2xl font-serif font-bold text-soft-ivory mb-4 mt-8">Track your expenses</h3>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        As a business owner, many legitimate business expenses may be tax deductible. Examples often include:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Content production costs</li>
        <li>Equipment such as cameras, lighting, computers</li>
        <li>Editing software</li>
        <li>Paid promotion or ads</li>
        <li>Website costs</li>
        <li>Agency or management fees</li>
        <li>Work related travel</li>
        <li>Home office or studio costs</li>
        <li>Professional services</li>
        <li>Props, wardrobe, hair, makeup used for content</li>
      </ul>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Good bookkeeping can significantly reduce your taxable income. Keep receipts, organize transactions, and consider using basic accounting software.
      </p>

      <h3 class="text-2xl font-serif font-bold text-soft-ivory mb-4 mt-8">Consider quarterly estimated taxes</h3>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        In many countries, self employed workers are required to pay estimated taxes quarterly. Failing to do so can lead to penalties.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        A tax professional can help you plan these payments accurately.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">Building Stability Through Savings</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Because creator income fluctuates, savings are not optional. Savings are your safety net.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        Here are three types of savings every creator should consider.
      </p>

      <h3 class="text-2xl font-serif font-bold text-soft-ivory mb-4 mt-8">1. Emergency Fund</h3>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        This is money set aside only for true emergencies, such as:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Medical expenses</li>
        <li>Sudden income loss</li>
        <li>Family emergencies</li>
        <li>Surprise bills</li>
      </ul>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        A common goal is 3 to 6 months of living expenses. If that feels impossible right now, start small. Even 200 dollars. Then 1,000. Then keep building.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        Small consistent deposits matter.
      </p>

      <h3 class="text-2xl font-serif font-bold text-soft-ivory mb-4 mt-8">2. Tax Savings</h3>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        As mentioned above, treat tax money as untouchable. Move it out of your main account immediately. This prevents panic later.
      </p>

      <h3 class="text-2xl font-serif font-bold text-soft-ivory mb-4 mt-8">3. Business Operating Savings</h3>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        This is money saved for:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Equipment replacement</li>
        <li>Slow seasons</li>
        <li>Reinvesting into growth</li>
        <li>Hiring support</li>
      </ul>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        This ensures your business keeps running, even when income dips.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">Paying Yourself Like a Business Owner</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        One of the healthiest shifts you can make is to pay yourself a set amount each month, even if your income fluctuates. For example:
      </p>
      <ol class="mb-4 text-soft-ivory/80 leading-relaxed list-decimal list-inside space-y-2">
        <li>Business income comes in</li>
        <li>Taxes are set aside</li>
        <li>Operating expenses are budgeted</li>
        <li>You transfer a fixed monthly paycheck to yourself</li>
      </ol>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        This creates stability, helps with budgeting, and avoids lifestyle creep.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        Your business should fund your life. But your life should not depend on every single DM sale.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">Planning for the Future</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Success as a creator is amazing. But long term safety means thinking beyond right now.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Consider planning for:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Retirement accounts</li>
        <li>Health insurance</li>
        <li>Life insurance</li>
        <li>Disability coverage</li>
        <li>Long term savings and investing</li>
        <li>Multiple income streams</li>
      </ul>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        Financial safety is not about fear. It is about freedom.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">Protecting Your Mental Health Through Money Clarity</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Money stress is one of the biggest contributors to burnout. Clear planning creates emotional peace.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Creators who manage finances intentionally often report:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Less anxiety</li>
        <li>More control</li>
        <li>Better decision making</li>
        <li>More confidence in negotiations</li>
        <li>Increased long term stability</li>
      </ul>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        You deserve that level of security.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">Consider Working With Professionals</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        If you are earning consistently, it may be worth building a small support team, such as:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>A tax professional</li>
        <li>A financial planner</li>
        <li>A bookkeeper</li>
        <li>A trusted agency or manager</li>
      </ul>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Choose people who understand creator income and respect your boundaries and privacy.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        Good advice often pays for itself.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">You Are Running a Real Business</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Your work has value. Your time has value. Your financial wellbeing matters.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Treating your creator career like a legitimate business does not reduce your authenticity. It protects your future.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        And you deserve that.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">Our Approach at Onyxspire</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        We believe that financial stability is one of the pillars of sustainable creator success. Ethical, intelligent management means helping creators:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Plan</li>
        <li>Organize</li>
        <li>Build systems</li>
        <li>Reduce stress</li>
        <li>Create long term security</li>
      </ul>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        If you want a management team that sees the whole picture, including your financial stability and mental wellbeing, we would love to talk.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        Apply to work with Onyxspire.
      </p>

      <div class="mt-12 p-6 bg-soft-ivory/10 rounded-lg border-l-4 border-bronze-gold">
        <p class="text-soft-ivory/90 leading-relaxed font-semibold">
          Important Note: This article is for educational purposes only and is not financial, tax, or legal advice. Every creator's financial situation is unique. Please consult a qualified professional before making financial decisions.
        </p>
      </div>
    `,
  },
  'algorithm-myth-onlyfans-earnings': {
    id: '4',
    title: 'The Algorithm Myth: What Really Impacts Your OnlyFans Earnings',
    excerpt: 'Debunking the algorithm myth and uncovering what truly drives success on OnlyFans: strategy, consistency, and business fundamentals.',
    date: 'October 28, 2025',
    slug: 'algorithm-myth-onlyfans-earnings',
    category: 'Strategy',
    content: `
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        Many creators believe that an invisible algorithm is the main force controlling their success on OnlyFans. When sales drop or engagement slows down, it can feel comforting to blame a mysterious system that is working against you.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        But here is the truth.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        There is no secret algorithm that randomly decides which creators succeed and which fail. Your results are shaped by a combination of strategy, behavior, audience psychology, consistency, and the way you run your business.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        The platform itself does play a role, but it is not magic. And it is not random.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        Let's break down what really impacts your earnings.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">Myth 1: "OnlyFans hides my page"</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        In most cases, your earnings are not dropping because OnlyFans decided to hide you.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        What is far more likely is that:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Your audience behavior has shifted</li>
        <li>You stopped doing what previously worked</li>
        <li>Your market saturated or changed</li>
        <li>Your content no longer aligns with your audience</li>
        <li>Your messaging slowed down</li>
        <li>Your brand identity became unclear</li>
        <li>You are relying only on returning fans instead of new reach</li>
      </ul>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        Creators who succeed consistently understand that sales do not stay stable on autopilot. They are built through intentional systems.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">Myth 2: "Success is luck and timing"</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Luck exists. But systems outperform luck.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Top earning creators rarely rely on chance. Instead, they focus on:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Clear branding</li>
        <li>Consistent personality presence</li>
        <li>Strong fan relationships</li>
        <li>Structured sales strategies</li>
        <li>Psychological understanding of buyer behavior</li>
        <li>Professional presentation</li>
        <li>Retention, not just acquisition</li>
      </ul>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        Luck may give you a moment. Strategy builds a career.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">What Actually Impacts Your OnlyFans Earnings</h2>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        Here are the real drivers of success on the platform.
      </p>

      <div class="my-8">
        <img src="/blog/algorithm-myth-onlyfans-earnings/pexels-kindelmedia-7688336.jpg" alt="Business strategy and analytics" class="w-full h-auto rounded-lg max-h-64 object-cover" />
      </div>

      <h3 class="text-2xl font-serif font-bold text-soft-ivory mb-4 mt-8">1. Brand Positioning</h3>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        If your brand identity is confusing, fans are less likely to commit.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Strong creators are clear about:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Who they are</li>
        <li>What they offer</li>
        <li>What experience fans can expect</li>
        <li>Why someone should choose them</li>
      </ul>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Ambiguity makes sales harder.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        Clarity creates trust.
      </p>

      <h3 class="text-2xl font-serif font-bold text-soft-ivory mb-4 mt-8">2. Consistency and Reliability</h3>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Fans pay for connection and familiarity. If you disappear, post unpredictably, or respond sporadically, engagement drops.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        Consistency builds security and emotional attachment. Those two factors directly impact spending behavior.
      </p>

      <h3 class="text-2xl font-serif font-bold text-soft-ivory mb-4 mt-8">3. Messaging Quality and Sales Psychology</h3>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed font-semibold">
        This may be the single biggest revenue driver.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Earnings are often shaped more by:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>How you speak to fans</li>
        <li>How you price</li>
        <li>How you position offers</li>
        <li>How you frame value</li>
        <li>How consistent your follow up is</li>
      </ul>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        than by how often you post.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        High quality DM strategy is not manipulation. It is communication with care, presence, and skill.
      </p>

      <h3 class="text-2xl font-serif font-bold text-soft-ivory mb-4 mt-8">4. Content Quality and Personal Connection</h3>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Fans are not only paying for visuals. They are paying for:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Attention</li>
        <li>Emotion</li>
        <li>Familiarity</li>
        <li>Interaction</li>
        <li>Personality</li>
      </ul>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        Creators who treat fans like humans, not transactions, tend to retain them longer.
      </p>

      <h3 class="text-2xl font-serif font-bold text-soft-ivory mb-4 mt-8">5. Retention Systems</h3>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed font-semibold">
        Retention is often more important than acquisition.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        If fans leave quickly, your income becomes unstable. Retention systems include:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Ongoing engagement</li>
        <li>Value driven subscription offers</li>
        <li>Balanced PPV strategies</li>
        <li>Appreciation and recognition of loyal subscribers</li>
        <li>Strong emotional boundaries paired with warmth</li>
      </ul>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        Keeping fans matters more than constantly replacing them.
      </p>

      <h3 class="text-2xl font-serif font-bold text-soft-ivory mb-4 mt-8">6. Diversified Traffic Sources</h3>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Relying on a single external platform to bring traffic is risky.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Creators who sustain growth typically use a mix of:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>TikTok or short form video</li>
        <li>Instagram</li>
        <li>Reddit</li>
        <li>Paid marketing</li>
        <li>Cross promotions</li>
        <li>Agency infrastructure</li>
        <li>Brand partnerships</li>
        <li>Search traffic</li>
        <li>Reputation and referrals</li>
      </ul>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        Traffic that continues over time, instead of spikes followed by silence, creates long term stability.
      </p>

      <h3 class="text-2xl font-serif font-bold text-soft-ivory mb-4 mt-8">7. Sustainable Work Habits</h3>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed font-semibold">
        Burnout will destroy your earnings faster than any algorithm ever could.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Creators who last build systems, rest, structure, and boundaries into their workflow.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        Success that costs you your health is not success.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">But What About Shadowbans and Platform Issues?</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Platform limitations are real. Content moderation exists. Accounts can face restrictions. Tech issues can happen.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        But these situations are the exception, not the everyday explanation.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        If your income drops, it is far more empowering and productive to look at variables you can control.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        Because you have more control than you may think.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">The Real Question: Are You Running a Business?</h2>
      <div class="my-8">
        <img src="/blog/algorithm-myth-onlyfans-earnings/pexels-thisisengineering-3861976.jpg" alt="Business operations and technology" class="w-full h-auto rounded-lg max-h-64 object-cover" />
      </div>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Creators who steadily grow do not wait for the platform to take care of them. They structure their work like a real business.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        That means:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Data awareness</li>
        <li>Intentional planning</li>
        <li>Strategic testing</li>
        <li>Emotional and financial boundaries</li>
        <li>Professional support where needed</li>
      </ul>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        The more you treat your creator work like a serious business, the less mysterious your results feel.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">Our Philosophy at Onyxspire</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        We do not rely on algorithm myths. We rely on strategy, psychology, structure, data, and respect for the human being behind the screen.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Elite creator management means:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Reducing chaos</li>
        <li>Creating stability</li>
        <li>Designing systems</li>
        <li>Building sustainable revenue</li>
        <li>Supporting emotional wellbeing</li>
        <li>Working ethically and transparently</li>
      </ul>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        If you are ready to run your creator career with clarity instead of guessing, we would love to support you.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        Apply to work with Onyxspire.
      </p>

      <div class="mt-12 p-6 bg-soft-ivory/10 rounded-lg border-l-4 border-bronze-gold">
        <p class="text-soft-ivory/90 leading-relaxed font-semibold">
          Important Note: This article is general education and not individual business advice. Every creator's situation is unique.
        </p>
      </div>
    `,
  },
  'staying-motivated-when-sales-slow-down': {
    id: '6',
    title: 'Staying Motivated When Sales Slow Down',
    excerpt: 'Every creator experiences slow seasons. Learn how to stay grounded, protect your mental health, and adjust your strategy when revenue dips.',
    date: 'November 18, 2025',
    slug: 'staying-motivated-when-sales-slow-down',
    category: 'Wellness',
    content: `
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        Staying Motivated When Sales Slow Down
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        (…and you start questioning all your life choices while staring at your phone)
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        Let's be honest for a second.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        There are weeks when being a creator feels like magic. Messages are popping, sales are steady, fans adore you, and the universe sparkles. Then there are… the other weeks.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        The quiet ones.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        The refreshing-your-screen-just-in-case ones.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        The "Wow, maybe my fans collectively entered witness protection" ones.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        If that sounds familiar, congratulations. You are not broken. You are simply a creator experiencing a normal dip in sales. It happens to literally everyone, even the ones who look permanently rich and glowing on social media.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        So let's talk about how to stay motivated when things slow down, without spiraling, panic-discounting your entire catalog, or deciding to move to the mountains and become a mushroom farmer.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">First step: Please release yourself from shame</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Slow seasons are not a moral failure. They do not mean:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>You are no longer interesting</li>
        <li>The platform hates you</li>
        <li>Your audience vanished into a portal</li>
        <li>You should have been an accountant</li>
      </ul>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        The adult industry has rhythms. Real life impacts spending. Algorithms shift. People take breaks. Holidays happen. Sometimes the collective vibe is simply "quiet".
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        It is not about you as a person. I promise.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        So if your brain is whispering, "Everyone else is thriving and only I am failing," just know that at least twenty other creators are whispering the exact same thing today.
      </p>

      <div class="my-8">
        <img src="/blog/staying-motivated-when-sales-slow-down/pexels-karola-g-4386476.jpg" alt="Self reflection and motivation" class="w-full h-auto rounded-lg max-h-64 object-cover" />
      </div>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">Your worth and your earnings are two separate concepts</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed font-semibold">
        This is one of the most important mental shifts you can make.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        You are a human.<br>
        Your revenue is a data point.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        Those two things do not belong in the same bucket.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Revenue measures things like:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Traffic</li>
        <li>Conversion</li>
        <li>Retention</li>
        <li>Pricing</li>
        <li>Strategy</li>
        <li>Market behavior</li>
      </ul>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        None of that measures your kindness, humor, talent, heart, intelligence, work ethic, or value. So when sales dip, try to avoid turning it into a character evaluation. It is not that deep. It is business feedback, not a personal referendum.
      </p>

      <div class="my-8">
        <img src="/blog/staying-motivated-when-sales-slow-down/pexels-karola-g-5852309.jpg" alt="Focus and control" class="w-full h-auto rounded-lg max-h-64 object-cover" style="object-position: center 55%;" />
      </div>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">When things slow down, zoom in on what you can control</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        You probably cannot force someone to buy today. But you can influence the ecosystem that makes buying more likely in the long run.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Gently ask yourself:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Am I showing up, or only selling</li>
        <li>Is my brand still clear</li>
        <li>Are my messages warm and human</li>
        <li>Is my content strategy balanced</li>
        <li>Do my fans feel seen and appreciated</li>
        <li>Is my pricing aligned with value</li>
        <li>Am I attracting new traffic consistently</li>
      </ul>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        No judgment. Just noticing. Data is friendlier when you treat it like information rather than a verdict.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">Bring back the "human" in your conversations</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        When money stress creeps in, your energy naturally shifts. We all do it. Fans can feel it.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed font-semibold">
        Instead of tightening your grip, loosen it.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Have real conversations. Ask things. Share stories. Be curious. Be present. Laugh. Stay within your boundaries, and show up as a person again.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        People spend most with creators they feel genuinely connected to. Pressure pushes people away. Presence pulls them closer.
      </p>

      <div class="my-8">
        <img src="/blog/staying-motivated-when-sales-slow-down/pexels-maitree-rimthong-444156-1602726.jpg" alt="Connection and relationships" class="w-full h-auto rounded-lg max-h-64 object-cover" style="object-position: center 45%;" />
      </div>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">Avoid panic mode. Protect your energy instead.</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Slow sales can trigger pure survival brain.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Maybe I should lower prices.<br>
        Maybe I should message everyone ten times.<br>
        Maybe I should never sleep again.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        Please do not do this to yourself.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Exhausted you is not more effective. Tired you is simply… tired you.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Instead:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Set actual work hours</li>
        <li>Eat something that is not a snack found in a cupboard</li>
        <li>Go outside and remind yourself the world exists</li>
        <li>Drink water even if you are team caffeine forever</li>
        <li>Give your brain a minute to breathe</li>
      </ul>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        Calm is a superpower in this industry. Especially during dips.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">Remember: growth is not a straight line</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        In business, the line between "plateau" and "leveling up soon" is usually razor thin. Progress looks messy. No one's chart is a perfect staircase to the sky.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        It usually goes something like:
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Up<br>
        Up<br>
        Down<br>
        Weirdly flat<br>
        Slight panic<br>
        Up<br>
        Stabilize<br>
        Up again
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        You are not behind. You are building.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">Slow seasons are perfect for behind-the-scenes upgrades</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        When your inbox is quieter, you finally have space to strengthen the foundation of your business.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Think of it as business spring cleaning.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        You can:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Rewrite your bio so it sounds like you now</li>
        <li>Refresh banners or highlights</li>
        <li>Audit your sales messages</li>
        <li>Rework your welcome flow</li>
        <li>Get intentional about your vibe and brand story</li>
        <li>Clean up folders and file chaos</li>
        <li>Rethink your pricing and packages</li>
      </ul>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        These improvements compound over time. Quiet periods can plant the seeds for your next growth wave.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">Create a financial buffer so dips feel less scary</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Sales dips feel a lot less existential when you have structure and savings during your higher months.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Even small buffers help. Little deposits into a safety net add up. Consistent pay-yourself systems make your income feel calmer, even when the platform is not.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        Peace of mind is a business tool.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">Most importantly: you are not the only one</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Creators rarely talk about slow seasons because vulnerability is scary. But they are happening everywhere, quietly, all the time.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed font-semibold">
        There is nothing wrong with you.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed font-semibold">
        There is nothing broken about your page.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        You are simply running a real business in a real market with real human customers. And sometimes, real life gets quiet.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        You deserve support, strategy, and soft places to land during those seasons.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">How we look at slowdowns at Onyxspire</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        At Onyxspire, we do not panic-spiral when sales dip. We breathe first. Then we look at the data. Then we look at the systems. Then we check in on the human being at the center of the business. Because motivation grows in stability, not in pressure.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        If you want guidance through the slow and steady seasons, whether through consulting or full management, we are here to help you build calm, sustainable success.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        Apply to work with Onyxspire or reach out about OFM consulting. You do not have to navigate this alone.
      </p>

      <div class="mt-12 p-6 bg-soft-ivory/10 rounded-lg border-l-4 border-bronze-gold">
        <p class="text-soft-ivory/90 leading-relaxed font-semibold">
          A kind note: This article is supportive education, not financial or mental health advice. If you are feeling overwhelmed, please consider talking to a qualified professional. Your wellbeing matters.
        </p>
      </div>
    `,
  },
  'scaling-smart-when-to-hire-manager': {
    id: '5',
    title: 'Scaling Smart: When Is It Time To Hire a Manager?',
    excerpt: 'Recognizing when you\'re ready to move from solo creator to building a professional support team, and how to choose the right manager or agency partner.',
    date: 'October 20, 2025',
    slug: 'scaling-smart-when-to-hire-manager',
    category: 'Strategy',
    content: `
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        Success as a creator often happens in waves. At first, you are doing everything yourself. Creating. Posting. Messaging. Learning as you go. Then the growth begins. More subscribers. More DMs. More income. More pressure.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        And at some point a real question appears.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        Is it time to hire a manager?
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        The right manager can help you scale faster, reduce overwhelm, and protect your wellbeing. The wrong manager can cause stress, loss of control, or even financial harm. So the decision deserves thoughtfulness and clarity.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        Here is how to recognize when you may be ready to move from doing it all yourself to building a professional support team around your brand.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">The Early Stage: Building Alone Works… Until It Doesn't</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        In the beginning, most creators manage everything themselves. You learn how the platform works. You experiment. You make mistakes. You grow. You find your voice.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed font-semibold">
        This stage is important.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        You get to understand:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Your audience</li>
        <li>Your personality and brand</li>
        <li>Your natural strengths</li>
        <li>Your comfort levels and boundaries</li>
        <li>What feels sustainable and what does not</li>
      </ul>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        But as your page grows, the workload changes. At a certain point, something has to give.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">Signs You May Be Outgrowing Solo Management</h2>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        If any of these feel familiar, you may be entering the scaling phase.
      </p>

      <h3 class="text-2xl font-serif font-bold text-soft-ivory mb-4 mt-8">1. You are spending more time managing than creating</h3>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Your day looks like this:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Constant messaging</li>
        <li>Handling chargebacks</li>
        <li>Scheduling content</li>
        <li>Writing scripts</li>
        <li>Analyzing numbers</li>
        <li>Coordinating promos</li>
        <li>Trying to keep up with everything at once</li>
      </ul>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        And suddenly, the creative spark that started all of this feels buried under admin work.
      </p>

      <h3 class="text-2xl font-serif font-bold text-soft-ivory mb-4 mt-8">2. Your income has plateaued</h3>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        You are working as hard as you can, but:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Revenue is inconsistent</li>
        <li>Growth has slowed</li>
        <li>You feel capped by time and energy</li>
      </ul>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        This is often a sign that your systems are tapped out. You have reached the limit of what one person can sustainably do.
      </p>

      <h3 class="text-2xl font-serif font-bold text-soft-ivory mb-4 mt-8">3. Your mental health or personal life is suffering</h3>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        You may feel:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Burned out</li>
        <li>Overstimulated</li>
        <li>Guilty taking time off</li>
        <li>Afraid to step away from your phone</li>
        <li>Emotionally exhausted from constant messages</li>
      </ul>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        Creators often underestimate the emotional labor required to maintain relationships at scale. A manager can help create buffer, structure, and boundaries.
      </p>

      <h3 class="text-2xl font-serif font-bold text-soft-ivory mb-4 mt-8">4. You know you could scale, but you do not know how</h3>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        There is a difference between working harder and scaling smarter.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        If you are guessing, reacting, or relying on luck, you may feel stuck. Strategy replaces chaos. Systems replace panic. Team support replaces isolation.
      </p>

      <div class="my-8">
        <img src="/blog/scaling-smart-when-to-hire-manager/pexels-chipi1189-35429755.jpg" alt="Professional management and scaling" class="w-full h-auto rounded-lg max-h-64 object-cover" />
      </div>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">What a Good Manager Actually Does</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        A quality creator manager or agency partner should help you:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Build structure and systems</li>
        <li>Develop DM strategy</li>
        <li>Improve fan retention</li>
        <li>Track and analyze data</li>
        <li>Optimize pricing models</li>
        <li>Coordinate marketing</li>
        <li>Protect your boundaries</li>
        <li>Reduce workload</li>
        <li>Bring calm stability</li>
      </ul>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        And importantly:
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        They should treat you like a human being, not a revenue metric.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">When NOT to Hire a Manager</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed font-semibold">
        This part matters.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        You should not hire a manager if:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>You are brand new and still learning the basics</li>
        <li>You cannot yet afford to outsource</li>
        <li>You want to avoid responsibility entirely</li>
        <li>You are hoping someone else will "save" your page</li>
        <li>You do not feel emotionally or strategically ready</li>
      </ul>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        Management works best when you already understand your brand and want support scaling it.
      </p>

      <div class="my-8">
        <img src="/blog/scaling-smart-when-to-hire-manager/pexels-ivan-s-7676408.jpg" alt="Consulting and business growth" class="w-full h-auto rounded-lg max-h-64 object-cover" />
      </div>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">The Middle Ground: Hiring an OFM Consultant While You Scale</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Here is something very few creators realize.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed font-semibold">
        You do not have to jump straight from doing everything yourself to full scale agency management.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        There is a powerful middle step.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed font-semibold">
        Hiring an OFM Consultant.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        A consultant partners with you to:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Audit your current systems</li>
        <li>Identify what is holding you back</li>
        <li>Help you create structure</li>
        <li>Improve your sales psychology</li>
        <li>Establish healthy boundaries</li>
        <li>Strengthen your brand identity</li>
        <li>Set up retention systems</li>
        <li>Make sure you scale safely and ethically</li>
      </ul>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed font-semibold">
        You stay in control.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed font-semibold">
        You keep your independence.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed font-semibold">
        You finally have expert guidance.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        This is especially valuable during the transition between growing and full scale management. It allows you to scale the right way, rather than simply scaling faster.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold italic">
        Hint. We do this.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">The Right Time To Hire a Manager</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        You will usually know you are ready when:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>You are earning consistently</li>
        <li>Your time is maxed out</li>
        <li>Growth potential still exists</li>
        <li>You want structure and support</li>
        <li>You are willing to collaborate</li>
        <li>You want long term stability</li>
        <li>You value your mental health and your time</li>
      </ul>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        At that stage, a manager becomes an investment, not an expense.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">What To Look For in a Manager or Agency</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed font-semibold">
        Choose carefully.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        The right partner should offer:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Transparency</li>
        <li>Clear communication</li>
        <li>Ethical practices</li>
        <li>Respect for your boundaries</li>
        <li>Proven systems</li>
        <li>Data driven strategy</li>
        <li>A focus on wellbeing</li>
        <li>A collaborative approach</li>
        <li>Legal contracts</li>
      </ul>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        If they pressure you, guilt you, or make unrealistic promises, walk away.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">Scaling Should Not Feel Chaotic</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        Growing your creator business should feel:
      </p>
      <ul class="mb-4 text-soft-ivory/80 leading-relaxed list-disc list-inside space-y-2">
        <li>Structured</li>
        <li>Supportive</li>
        <li>Grounded</li>
        <li>Intentional</li>
      </ul>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed font-semibold">
        Not frantic.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed font-semibold">
        Not overwhelming.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed font-semibold">
        Not unsafe.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        The right support team helps you build a career that protects your income and your peace of mind.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">Our Approach at Onyxspire</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        At Onyxspire, we believe in scaling with intention. We partner with creators through two pathways.
      </p>

      <h3 class="text-2xl font-serif font-bold text-soft-ivory mb-4 mt-8">OFM Consulting</h3>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        For creators who want to grow the right way while staying independent. We help you build the systems, structure, strategy, and mindset required for long term success.
      </p>

      <h3 class="text-2xl font-serif font-bold text-soft-ivory mb-4 mt-8">Elite Creator Management</h3>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed">
        For creators who are ready for full scale support. We handle infrastructure, optimization, and growth so you can focus on creating and living your life.
      </p>

      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        Both paths center one thing.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        Your wellbeing.
      </p>

      <h2 class="text-3xl font-serif font-bold text-soft-ivory mb-4 mt-12">If You Are Wondering Whether It Is Time</h2>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        You do not have to figure that out alone.
      </p>
      <p class="mb-4 text-soft-ivory/80 leading-relaxed">
        We are always happy to have honest conversations about where you are in your journey, and what type of support makes sense.
      </p>
      <p class="mb-6 text-soft-ivory/80 leading-relaxed font-semibold">
        Apply to work with Onyxspire or reach out about OFM consulting. Let's scale your business the smart way.
      </p>
    `,
  },
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const [isLightMode, setIsLightMode] = useState(false)
  const post = blogPosts[params.slug]

  if (!post) {
    notFound()
  }

  // Get other blog posts for showcase (exclude current post)
  const otherPosts = Object.entries(blogPosts)
    .filter(([slug]) => slug !== params.slug)
    .map(([slug, post]) => ({ ...post, slug }))
    .slice(0, 3)

  // Transform content classes based on mode
  const transformContent = (content: string, lightMode: boolean) => {
    if (lightMode) {
      return content
        .replace(/text-soft-ivory/g, 'text-black-espresso')
        .replace(/bg-black-espresso/g, 'bg-white')
        .replace(/bg-ash-graphite/g, 'bg-white')
        .replace(/bg-gradient-to-b from-black-espresso to-ash-graphite/g, 'bg-white')
        .replace(/text-bronze-gold/g, 'text-accent-pink')
        .replace(/bg-soft-ivory\/10/g, 'bg-accent-pink/10')
        .replace(/border-bronze-gold/g, 'border-accent-pink')
    }
    return content
  }

  const transformedContent = transformContent(post.content, isLightMode)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className={`py-24 relative ${isLightMode ? 'bg-white' : ''}`}>
        {/* Background Image */}
        {params.slug === 'mental-health-adult-creator-industry' && (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/blog/mental-health-adult-creator-industry/hero.jpg)' }}
          />
        )}
        {params.slug === 'what-creators-want-from-managers' && (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/blog/what-creators-want-from-managers/hero.jpg)' }}
          />
        )}
        {params.slug === 'financial-planning-for-creators' && (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/blog/financial-planning-for-creators/hero.jpg)' }}
          />
        )}
        {params.slug === 'algorithm-myth-onlyfans-earnings' && (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/blog/algorithm-myth-onlyfans-earnings/hero.jpg)' }}
          />
        )}
        {params.slug === 'scaling-smart-when-to-hire-manager' && (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/blog/scaling-smart-when-to-hire-manager/hero.png)' }}
          />
        )}
        {params.slug === 'staying-motivated-when-sales-slow-down' && (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/blog/staying-motivated-when-sales-slow-down/hero.jpg)' }}
          />
        )}
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 ${isLightMode ? 'bg-white/60' : 'bg-gradient-to-b from-black-espresso/90 to-ash-graphite/90'}`} />
        {/* Content */}
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 z-10">
          <div className="flex items-center justify-between mb-8">
            <Link 
              href="/blog"
              className="text-accent-pink hover:text-accent-pink/80 transition-colors text-sm uppercase tracking-wider inline-block"
            >
              ← Back to Blog
            </Link>
            {/* Theme Toggle */}
            <button
              onClick={() => setIsLightMode(!isLightMode)}
              className="px-4 py-2 rounded-lg border-2 border-accent-pink text-accent-pink hover:bg-accent-pink/10 transition-all"
              aria-label="Toggle light/dark mode"
            >
              {isLightMode ? '🌙 Dark' : '☀️ Light'}
            </button>
          </div>
          <div className="mb-6">
            <span className="text-accent-pink text-sm font-semibold uppercase tracking-wider">
              {post.category}
            </span>
            <span className={`${isLightMode ? 'text-black-espresso/50' : 'text-soft-ivory/50'} text-sm ml-4`}>
              {post.date}
            </span>
          </div>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 ${isLightMode ? 'text-black-espresso' : 'text-soft-ivory'}`}>
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className={`py-16 ${isLightMode ? 'bg-white' : 'bg-black-espresso'}`}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <article 
            className={`prose max-w-none ${isLightMode ? '' : 'prose-invert'}`}
            dangerouslySetInnerHTML={{ __html: transformedContent }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-ash-graphite">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-black-espresso mb-6" style={{ fontFamily: "'Catchy Mager', 'Cormorant Garamond', 'Playfair Display', serif" }}>
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-black-espresso/70 mb-8 font-sans">
            Let Onyxspire help you achieve your goals with our comprehensive management services.
          </p>
          <Link
            href="/application"
            className="inline-block bg-accent-pink text-white px-10 py-4 font-semibold uppercase tracking-wider hover:bg-accent-pink/90 transition-all luxury-glow"
            style={{ fontFamily: "'Catchy Mager', 'Cormorant Garamond', 'Playfair Display', serif" }}
          >
            Apply Now
          </Link>
        </div>
      </section>

      {/* Other Blog Posts Showcase */}
      <section className={`py-24 ${isLightMode ? 'bg-white' : 'bg-ash-graphite'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-center ${isLightMode ? 'text-black-espresso' : 'text-soft-ivory'}`} style={{ fontFamily: "'Catchy Mager', 'Cormorant Garamond', 'Playfair Display', serif" }}>
            More Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((otherPost) => (
              <Link
                key={otherPost.slug}
                href={`/blog/${otherPost.slug}`}
                className={`group bg-white rounded-[20px] overflow-hidden border-2 ${isLightMode ? 'border-accent-pink/35 hover:border-accent-pink/60' : 'border-accent-pink/35 hover:border-accent-pink/60'} shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="mb-4">
                    <span className={`text-accent-pink text-sm font-semibold uppercase tracking-wider font-sans`}>
                      {otherPost.category}
                    </span>
                    <span className={`${isLightMode ? 'text-black-espresso/50' : 'text-black-espresso/50'} text-sm ml-4 font-sans`}>
                      {otherPost.date}
                    </span>
                  </div>
                  <h3 className={`text-xl font-bold mb-4 group-hover:text-accent-pink transition-colors ${isLightMode ? 'text-black-espresso' : 'text-black-espresso'}`} style={{ fontFamily: "'Catchy Mager', 'Cormorant Garamond', 'Playfair Display', serif" }}>
                    {otherPost.title}
                  </h3>
                  <p className={`${isLightMode ? 'text-black-espresso/70' : 'text-black-espresso/70'} leading-relaxed mb-6 flex-grow font-sans text-sm`}>
                    {otherPost.excerpt}
                  </p>
                  <div className="text-accent-pink font-semibold text-sm uppercase tracking-wider group-hover:underline font-sans">
                    Read More →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}




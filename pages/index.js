import React, { useState } from 'react';
import { Rocket, Code, Palette, DollarSign, Users, Check, ArrowRight, Sparkles, Zap, Shield, TrendingUp, Heart, MessageCircle } from 'lucide-react';

import Head from 'next/head';
export default function Trip42PartnerLanding() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to your backend
    console.log('Partner application:', email);
    
    // Construct mailto link
    const subject = encodeURIComponent('New Partner Application');
    const body = encodeURIComponent(`Name: ${e.target[0].value}\nEmail: ${email}\nLocation: ${e.target[2].value}\nTarget Market: ${e.target[3].value}\nAudience Size: ${e.target[4].value}\nInterest: ${e.target[5].value}`);
    window.location.href = `mailto:partners@trip42.cafe?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Head>
        <title>Trip42 Partners - Own Your Own Travel Journal App</title>
        <link rel="icon" href="/icons/trip42.png" />
      </Head>
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Rocket className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">Trip42 Partners</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
              How It Works
            </a>
            <a href="#benefits" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
              Benefits
            </a>
            <a href="#faq" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
              FAQ
            </a>
            <a href="#apply" className="px-5 py-2.5 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Apply Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/T1.png"
            alt="Travel Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-400/30 text-blue-100 rounded-full font-medium text-sm mb-8 backdrop-blur-sm animate-fade-in-up">
            <Sparkles size={16} className="text-blue-300" />
            <span>Rolling Applications Open for 2025</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
            Own Your Own App.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Zero Upfront Cost.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            Launch a PWA Memory-Keeping App Under <span className="font-semibold text-white">Your Brand</span> - No Coding Required
          </p>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl mb-12 max-w-3xl mx-auto text-left shadow-2xl transform hover:scale-[1.01] transition-transform duration-300">
            <h2 className="text-lg font-bold text-blue-200 mb-3 uppercase tracking-wider text-xs">The Opportunity in One Sentence</h2>
            <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
              "I give you a fully-built PWA (Progressive Web App) for capturing and sharing memories, you customize it with your branding and theme, deploy it, and we split the revenue 50/50."
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#apply"
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2 transform hover:-translate-y-1"
            >
              Become a Partner
              <ArrowRight size={20} />
            </a>
            <a
              href="https://trip42-pwa.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              See Demo App
              <MessageCircle size={20} />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { label: 'Upfront Cost', value: '$0', icon: DollarSign },
              { label: 'Revenue Split', value: '50/50', icon: TrendingUp },
              { label: 'Partner Spots', value: 'Open', icon: Users },
              { label: 'Tech Support', value: 'Included', icon: Shield }
            ].map((stat, idx) => (
              <div key={idx} className="bg-slate-900/50 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-colors group">
                <stat.icon className="text-blue-400 mb-3 mx-auto group-hover:scale-110 transition-transform" size={28} />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Is This? */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              What Is This?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Trip42 is a voice-first memory-keeping app that turns spoken moments into beautiful, shareable entries. While it started as a travel journal, it's perfect for:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: '🌍', title: 'Travel Journaling', desc: 'Document adventures and explorations' },
              { icon: '🎉', title: 'Event Recording', desc: 'Capture birthdays, weddings, celebrations' },
              { icon: '📔', title: 'Daily Life', desc: 'Keep a personal diary or family memories' },
              { icon: '🏆', title: 'Achievement Tracking', desc: 'Document milestones and accomplishments' },
              { icon: '💝', title: 'Memorial/Tribute Pages', desc: 'Honor loved ones or preserve legacies' },
              { icon: '👨‍👩‍👧‍👦', title: 'Family Memories', desc: 'Share stories across generations' }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:shadow-md transition-all">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-blue-100">
            <p className="text-2xl font-medium text-slate-800 mb-6 leading-relaxed">
              But here's the twist: I'm not asking you to use it or sell it for me.
              I'm offering you the chance to own and operate your own version of it.
            </p>
            <p className="text-xl text-blue-700 font-bold">
              Your app. Your brand. Your theme. Your revenue (or your community legacy).
            </p>
          </div>
        </div>
      </section>

      {/* Important: PWA */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Important: This is a PWA, Not Native Apps
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Check className="text-green-400" /> What You're Getting
              </h3>
              <ul className="space-y-4">
                {[
                  'Progressive Web App (PWA) - Works on all devices through browsers',
                  'Installable - Users can "install" it to their home screen like a native app',
                  'Offline capable - Works without internet connection',
                  'Push notifications - Just like native apps',
                  'No App Store approval needed - Deploy immediately'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <Check className="text-green-400 mt-1 flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-200">
                <span className="text-red-400">✕</span> What You're NOT Getting
              </h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-slate-400">
                  <span className="text-red-400 mt-1 flex-shrink-0">✕</span>
                  <span>Native iOS/Android apps - Not included in base partnership</span>
                </li>
                <li className="flex items-start gap-3 text-slate-400">
                  <span className="text-red-400 mt-1 flex-shrink-0">✕</span>
                  <span>Journal website creator - Separate feature, different partnership tier</span>
                </li>
              </ul>
              <div className="text-sm text-slate-400 bg-black/20 p-4 rounded-xl">
                <p className="mb-2"><strong className="text-white">Want native apps?</strong> You can deploy the PWA to Google Play Store and Apple App Store yourself using your own developer accounts. The PWA code is ready for this.</p>
                <p><strong className="text-white">Want the journal website feature?</strong> Available as an upgraded partnership tier - let's discuss!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              The Complete PWA Package
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We provide the complete, battle-tested app infrastructure. You simply bring your unique brand and audience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Code,
                image: '/travelogue.png',
                title: 'Full PWA Codebase',
                description: 'React/Next.js app that works on all devices. Fully configured with your customizations.',
                features: ['Voice-to-text recording', 'GPS auto-tagging', 'Photo attachments', 'Cloud sync']
              },
              {
                icon: Palette,
                image: '/Trip42Journals.png',
                title: 'Theme Builder Pack',
                description: 'Design your unique theme with colors, fonts, and AI character personalities.',
                features: ['10+ base templates', 'Custom AI avatars', 'Personality prompts', 'No code required']
              },
              {
                icon: Shield,
                image: '/activities.png',
                title: 'Backend Infrastructure',
                description: 'Supabase database, hosting, and journal website platform all managed for you.',
                features: ['99.9% uptime', 'Automatic backups', 'Privacy compliant', 'Scalable storage']
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:-translate-y-1">
                <div className="relative mb-8 overflow-hidden rounded-xl h-48 shadow-sm">
                   <img src={item.image} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                   <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm">
                      <item.icon className="text-blue-600" size={24} />
                   </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{item.description}</p>
                
                <div className="space-y-3 pt-6 border-t border-slate-200">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                      <div className="bg-green-100 p-1 rounded-full">
                        <Check size={14} className="text-green-600 flex-shrink-0" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center max-w-3xl mx-auto">
            <p className="text-slate-700 font-medium">
              <span className="font-bold text-blue-700">Important:</span> You get the working PWA code and deploy it yourself. I don't have access to your hosting. You maintain full control of your deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is Perfect For */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Who This Is Perfect For
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <DollarSign className="text-blue-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Money-Making Ventures</h3>
              </div>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-center gap-3"><Check size={18} className="text-blue-500" /> Travel bloggers/influencers</li>
                <li className="flex items-center gap-3"><Check size={18} className="text-blue-500" /> Digital nomad communities</li>
                <li className="flex items-center gap-3"><Check size={18} className="text-blue-500" /> Tour operators</li>
                <li className="flex items-center gap-3"><Check size={18} className="text-blue-500" /> Travel agencies</li>
                <li className="flex items-center gap-3"><Check size={18} className="text-blue-500" /> Lifestyle coaches</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-bl-lg">SPECIAL FOCUS</div>
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-yellow-100 p-3 rounded-xl">
                  <Heart className="text-yellow-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Community & Legacy Projects</h3>
              </div>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-center gap-3"><Check size={18} className="text-yellow-500" /> Family memory keepers</li>
                <li className="flex items-center gap-3"><Check size={18} className="text-yellow-500" /> Memorial/tribute sites</li>
                <li className="flex items-center gap-3"><Check size={18} className="text-yellow-500" /> Achievement archives</li>
                <li className="flex items-center gap-3"><Check size={18} className="text-yellow-500" /> School/alumni groups</li>
                <li className="flex items-center gap-3"><Check size={18} className="text-yellow-500" /> Religious communities</li>
              </ul>
              <p className="mt-6 text-sm text-slate-500 italic border-t border-slate-100 pt-4">
                For non-profit/community projects: We're flexible on revenue sharing. Your mission to preserve memories matters more than profits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Theme Builder Pack */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              The Theme Builder Pack
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Design your app's ONE unique theme without touching code. Your app will feature ONE cohesive theme that defines your brand identity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">What You Can Customize</h3>
              <div className="space-y-6">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-slate-800 mb-3">Visual Design</h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• Primary & secondary brand colors</li>
                    <li>• Background colors and patterns</li>
                    <li>• Text colors and contrast</li>
                    <li>• Button styles and colors</li>
                    <li>• Card layouts and shadows</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-slate-800 mb-3">Typography</h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• Header fonts (20+ options)</li>
                    <li>• Body text fonts (20+ options)</li>
                    <li>• Font sizes, weights, spacing</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">AI Character Avatars & Personalities</h3>
              <p className="text-slate-600 mb-6">This is where your theme comes alive! Design custom AI assistants:</p>
              
              <div className="space-y-4">
                <div className="flex gap-4 items-start bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <div className="bg-blue-200 w-12 h-12 rounded-full flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-blue-900">Travel/Life Guide</h4>
                    <p className="text-sm text-blue-700">Provides recommendations, tips, insights. (e.g., "Enthusiastic local guide")</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start bg-green-50 p-4 rounded-xl border border-green-100">
                  <div className="bg-green-200 w-12 h-12 rounded-full flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-green-900">Memory Companion</h4>
                    <p className="text-sm text-green-700">Helps organize memories, prompts reflection. (e.g., "Thoughtful interviewer")</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start bg-orange-50 p-4 rounded-xl border border-orange-100">
                  <div className="bg-orange-200 w-12 h-12 rounded-full flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-orange-900">Practical Helper</h4>
                    <p className="text-sm text-orange-700">Currency conversion, medicine finder. (e.g., "Efficient problem solver")</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zero Upfront Cost Model */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Zero Upfront Cost Model
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Here's how this works: By the time you invest anything, you've already tested the product for 2 months. You KNOW it works.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <span className="text-3xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Phase 1: Beta Testing</h3>
              <div className="text-green-600 font-bold text-lg mb-3 bg-green-50 inline-block px-3 py-1 rounded-full">$0 investment</div>
              <p className="text-slate-600 leading-relaxed">Just download and use. No commitment required. Keep using the app even if you don't partner.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <span className="text-3xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Phase 2: Decision</h3>
              <div className="text-green-600 font-bold text-lg mb-3 bg-green-50 inline-block px-3 py-1 rounded-full">Still $0</div>
              <p className="text-slate-600 leading-relaxed">After testing, decide if you want to partner. No pressure, no obligation.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <span className="text-3xl font-bold text-pink-600">3</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Phase 3: Customization</h3>
              <div className="text-green-600 font-bold text-lg mb-3 bg-green-50 inline-block px-3 py-1 rounded-full">Still $0 from you</div>
              <p className="text-slate-600 leading-relaxed">I build your custom version. You design your theme. Everything ready to deploy.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-10"></div>
            <div className="relative z-10">
              <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30 animate-pulse">
                <span className="text-4xl font-bold text-white">4</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Phase 4: Launch</h3>
              <div className="text-orange-400 font-bold text-xl mb-6 uppercase tracking-wider">First Real Cost: Hosting ($0-20/mo)</div>
              <p className="text-slate-300 mb-6 text-lg max-w-2xl mx-auto">Deploy to Vercel. Optional: Pay App Store fees ($124/yr) if deploying native apps. Start sharing/earning immediately.</p>
              <p className="text-sm text-slate-400 max-w-2xl mx-auto italic border-t border-slate-700 pt-6">
                "Why This Works: By the time you invest anything, you've already tested the product for 2 months. You KNOW it works. You KNOW there's demand. You're making an informed investment, not a blind gamble."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Tiers */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Partner Tiers & Benefits
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Everyone starts as Bronze. Upgrades happen automatically when you hit milestones.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🥉</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Bronze Partner</h3>
              <p className="text-slate-500 text-sm mb-6 uppercase tracking-wide font-bold">Free Entry</p>
              <p className="text-slate-600 mb-6 text-sm">Best for: Testing the waters</p>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-2"><Check size={14} className="text-green-500" /> 1 PWA app</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-green-500" /> 1 custom theme</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-green-500" /> Standard support</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-green-500" /> 50/50 revenue split</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100 relative transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMMENDED</div>
              <div className="text-4xl mb-4">🥈</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Silver Partner</h3>
              <p className="text-blue-600 text-sm mb-6 uppercase tracking-wide font-bold">$0 - Earn Your Way</p>
              <p className="text-slate-600 mb-6 text-sm">Best for: Serious commitment</p>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-2"><Check size={14} className="text-blue-500" /> All Bronze benefits</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-blue-500" /> 2 PWA apps</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-blue-500" /> Priority support</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-blue-500" /> Journal website feature</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-blue-500" /> 52/48 revenue split</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🥇</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Gold Partner</h3>
              <p className="text-yellow-600 text-sm mb-6 uppercase tracking-wide font-bold">$0 - Earn Your Way</p>
              <p className="text-slate-600 mb-6 text-sm">Best for: Top performers</p>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-2"><Check size={14} className="text-yellow-500" /> All Silver benefits</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-yellow-500" /> Unlimited PWA apps</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-yellow-500" /> VIP support</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-yellow-500" /> 55/45 revenue split</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              How It Works (Simple Version)
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              The journey is simple. Test, customize, deploy, earn.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block"></div>

            <div className="space-y-12">
              {[
                {
                  step: '1',
                  title: 'Test the App (Free)',
                  time: '4-8 weeks',
                  description: 'Use the PWA prototype. Follow our beta testing checklist. Record voice notes, test features, explore AI characters. Give honest feedback.',
                  color: 'bg-blue-500',
                  icon: <Check size={20} />
                },
                {
                  step: '2',
                  title: 'Decide to Partner',
                  time: 'Your Choice',
                  description: 'If you love it and see potential, become a partner. If not, no harm done - you got a free memory-keeping tool for 2 months.',
                  color: 'bg-purple-500',
                  icon: <Users size={20} />
                },
                {
                  step: '3',
                  title: 'Customize Your Version',
                  time: 'We Work Together',
                  description: 'Choose your app name. Design your ONE theme using my Theme Builder Pack. Customize colors, fonts, style, AI personalities. I configure the code.',
                  color: 'bg-pink-500',
                  icon: <Palette size={20} />
                },
                {
                  step: '4',
                  title: 'Deploy & Launch',
                  time: 'You Do This',
                  description: 'I provide your customized PWA code. You deploy to Vercel (free tier) or your own hosting. Optional: Submit to App Stores.',
                  color: 'bg-orange-500',
                  icon: <Rocket size={20} />
                },
                {
                  step: '5',
                  title: 'Share & Earn',
                  time: 'Ongoing',
                  description: 'Promote to your audience. You keep 50% of all revenue (if monetized) OR run it free for your community. I maintain backend.',
                  color: 'bg-green-500',
                  icon: <DollarSign size={20} />
                }
              ].map((item, idx) => (
                <div key={idx} className="relative flex gap-8 items-start group">
                  <div className={`hidden md:flex ${item.color} text-white w-16 h-16 rounded-2xl items-center justify-center font-bold text-2xl flex-shrink-0 shadow-lg z-10 group-hover:scale-110 transition-transform duration-300`}>
                    {item.step}
                  </div>
                  
                  {/* Mobile Step Number */}
                  <div className={`md:hidden ${item.color} text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-md mb-4`}>
                    {item.step}
                  </div>

                  <div className="flex-1 bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                      <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                        {item.title}
                      </h3>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-600">
                        {item.time}
                      </span>
                    </div>
                    <p className="text-slate-600 text-lg leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>

    {/* Beta Testing Checklist */}
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Beta Testing Checklist
          </h2>
          <p className="text-xl text-slate-600 mb-4">
            Before becoming a partner, test the app thoroughly.
          </p>
          <a href="/BetaTests.xlsx" download className="text-blue-600 hover:text-blue-800 font-medium underline">
            Download Full Beta Testing Checklist (Excel)
          </a>
        </div>

        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                Getting Started
              </h3>
              <ul className="space-y-3 text-slate-600 text-sm">
                <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-0.5" /> Open mobile browser → https://trip42-pwa.vercel.app/</li>
                <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-0.5" /> Find the red dwarf (explore the UI)</li>
                <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-0.5" /> Chat with Ford (AI travel guide)</li>
                <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-0.5" /> Create a quick note with Zaphod</li>
                <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-0.5" /> Ask Arthur a question about the app</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                Core Features
              </h3>
              <ul className="space-y-3 text-slate-600 text-sm">
                <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-0.5" /> Display the calendar</li>
                <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-0.5" /> Make a post-dated note</li>
                <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-0.5" /> Translate a foreign language sign</li>
                <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-0.5" /> Create voice note + photo</li>
                <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-0.5" /> Check credit usage</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                Bulk Management
              </h3>
              <ul className="space-y-3 text-slate-600 text-sm">
                <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-0.5" /> Click "manage notes" icon</li>
                <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-0.5" /> Select/Unselect notes</li>
                <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-0.5" /> Try bulk upload/delete</li>
                <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-0.5" /> View note contents</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
                Fun Tools & Settings
              </h3>
              <ul className="space-y-3 text-slate-600 text-sm">
                <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-0.5" /> Change UI language/currency</li>
                <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-0.5" /> Check Local Map & Medicine Finder</li>
                <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-0.5" /> Play Stacker game</li>
                <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-0.5" /> Import/Export notes</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm italic">*Send results, screenshots, and .t42 file to partners@trip42.cafe</p>
          </div>
        </div>
      </div>
    </section>

      {/* Revenue Model */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Revenue Model: 50/50 Split
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              It's up to you - Happy with just friends and family? No problem. Wanna keep it private within your fan club? Be my guest. Be the #1 App in your region. I love that!
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-10 mb-16 border border-blue-100">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Option 1: One-Time</h4>
                  <p className="text-slate-500 mb-3 text-xs font-medium uppercase tracking-wide">Price: $0.99 - $9.99</p>
                  <ul className="text-xs text-slate-600 space-y-2">
                    <li className="flex items-start gap-2"><Check size={14} className="text-green-500 mt-0.5" /> User pays once</li>
                    <li className="flex items-start gap-2"><Check size={14} className="text-green-500 mt-0.5" /> Gets Welcome credits</li>
                    <li className="flex items-start gap-2"><Check size={14} className="text-green-500 mt-0.5" /> Simple revenue</li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border-2 border-blue-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-blue-100 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-bl-lg">POPULAR</div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Option 2: Freemium</h4>
                  <p className="text-slate-500 mb-3 text-xs font-medium uppercase tracking-wide">Free Download</p>
                  <ul className="text-xs text-slate-600 space-y-2">
                    <li className="flex items-start gap-2"><Check size={14} className="text-green-500 mt-0.5" /> Free basic usage</li>
                    <li className="flex items-start gap-2"><Check size={14} className="text-green-500 mt-0.5" /> In-app credit purchases</li>
                    <li className="flex items-start gap-2"><Check size={14} className="text-green-500 mt-0.5" /> Builds user base</li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Option 3: Subscription</h4>
                  <p className="text-slate-500 mb-3 text-xs font-medium uppercase tracking-wide">Monthly / Annual</p>
                  <ul className="text-xs text-slate-600 space-y-2">
                    <li className="flex items-start gap-2"><Check size={14} className="text-green-500 mt-0.5" /> $2.99/mo or $19.99/yr</li>
                    <li className="flex items-start gap-2"><Check size={14} className="text-green-500 mt-0.5" /> Recurring revenue</li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Option 4: Free/Community</h4>
                  <p className="text-slate-500 mb-3 text-xs font-medium uppercase tracking-wide">No User Charges</p>
                  <ul className="text-xs text-slate-600 space-y-2">
                    <li className="flex items-start gap-2"><Check size={14} className="text-green-500 mt-0.5" /> Run for family/group</li>
                    <li className="flex items-start gap-2"><Check size={14} className="text-green-500 mt-0.5" /> You cover costs</li>
                    <li className="flex items-start gap-2"><Check size={14} className="text-green-500 mt-0.5" /> Perfect for legacies</li>
                  </ul>
                </div>
              </div>

              <p className="text-sm text-slate-500 mt-8 text-center italic">You choose your pricing model. I get 50% of whatever you earn.</p>
            </div>
          </div>

          {/* Real Numbers */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Conservative',
                users: '50 active users',
                price: '$1.99/mo',
                monthly: '$49.75',
                annual: '$597',
                color: 'border-slate-200',
                bg: 'bg-white'
              },
              {
                title: 'Moderate',
                users: '200 active users',
                price: '$2.99/mo',
                monthly: '$299',
                annual: '$3,588',
                color: 'border-purple-200',
                bg: 'bg-purple-50',
                featured: true
              },
              {
                title: 'Community',
                users: '30 family members',
                price: 'Free',
                monthly: '-$10',
                annual: 'Priceless',
                desc: 'Cost to preserve family memories forever',
                color: 'border-green-200',
                bg: 'bg-green-50'
              }
            ].map((scenario, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl p-8 border-2 ${scenario.color} ${scenario.bg} ${
                  scenario.featured ? 'shadow-xl scale-105 z-10' : 'shadow-sm'
                } transition-all duration-300`}
              >
                {scenario.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    Most Common
                  </div>
                )}
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{scenario.title}</h3>
                <div className="text-sm text-slate-500 mb-6 font-medium uppercase tracking-wide">{scenario.users}</div>
                
                {scenario.desc ? (
                   <p className="text-slate-600 mb-6 h-12">{scenario.desc}</p>
                ) : (
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm border-b border-slate-200/50 pb-2">
                      <span className="text-slate-600">Price:</span>
                      <span className="font-bold text-slate-900">{scenario.price}</span>
                    </div>
                  </div>
                )}

                <div className="pt-2">
                  <div className="text-sm text-slate-500 mb-1">{scenario.monthly.startsWith('-') ? 'Your monthly cost:' : 'Your monthly earnings:'}</div>
                  <div className={`text-4xl font-extrabold mb-2 ${scenario.monthly.startsWith('-') ? 'text-red-500' : 'text-slate-900'}`}>{scenario.monthly}</div>
                  <div className="text-sm text-slate-600">Annual: <span className="font-bold text-green-600">{scenario.annual}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment & Costs */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Your Investment & My Operating Costs
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">What You Invest</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">Time</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Beta testing: 20-30 hours (4-8 weeks)</li>
                    <li>• Setup & customization: 10-20 hours</li>
                    <li>• Marketing: 5-10 hours/week (if monetizing)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">Money (Optional)</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Hosting: $0-20/month (Vercel free tier often sufficient)</li>
                    <li>• Domain: $10-15/year (optional)</li>
                    <li>• App Store fees: $124/year (optional)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-6">What I Invest (My Costs)</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-slate-200 mb-2">Infrastructure I Pay For</h4>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li>• Supabase database: $25-50/month</li>
                    <li>• AI API costs: $50-200/month</li>
                    <li>• Vercel hosting (backend): $20-50/month</li>
                    <li>• Development time: 15-30 hours per partner</li>
                  </ul>
                </div>
                <div className="bg-white/10 p-4 rounded-xl mt-4">
                  <p className="text-sm font-medium">
                    <span className="text-blue-300 font-bold">Why 50/50 Split?</span> I cover all ongoing infrastructure costs, maintain the codebase, and provide technical support. You handle deployment and your audience.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
             <h3 className="text-xl font-bold text-yellow-900 mb-4">⚠️ Understanding Ongoing Costs (Even If Free)</h3>
             <p className="text-yellow-800 mb-4">The app uses AI services that charge per use (Voice Transcription, Translation, OCR). If you run the app for free, someone still has to pay these costs.</p>
             <div className="grid md:grid-cols-2 gap-6 text-sm text-yellow-900">
               <ul className="list-disc pl-5 space-y-1">
                 <li>Voice Recording: ~$0.10 per recording</li>
                 <li>Translations: ~$0.05 per translation</li>
               </ul>
               <ul className="list-disc pl-5 space-y-1">
                 <li>OCR (Photo Text): ~$0.07 per image</li>
                 <li>Text Polishing: FREE (included)</li>
               </ul>
             </div>
             <p className="mt-4 text-yellow-800 font-medium">We will discuss who pays these costs (User Credits, Sponsorship, or You) before launch.</p>
          </div>
        </div>
      </section>

      {/* Partnership Capacity */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Partnership Capacity & Timeline
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            I can handle 2-3 partners at a time comfortably.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-2">Standard Timeline</h4>
              <p className="text-slate-600 text-sm mb-4">6 weeks total. No upfront cost.</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Week 1-2: Beta testing</li>
                <li>• Week 3: Customization planning</li>
                <li>• Week 4: Code configuration</li>
                <li>• Week 5: Deployment & testing</li>
                <li>• Week 6: Launch!</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h4 className="font-bold text-blue-900 mb-2">Rush Processing</h4>
              <p className="text-blue-700 text-sm mb-4">Need it faster? Priority queue available.</p>
              <ul className="space-y-2 text-sm text-blue-800">
                <li>• 1-week delivery: $500 upfront</li>
                <li>• 2-week delivery: $250 upfront</li>
                <li>• Upfront payment is deductible from future revenue share.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Why Partner With Trip42?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: 'Zero Upfront Cost',
                description: 'Only pay App Store fees ($124/year) when ready to launch. Everything before that is free.'
              },
              {
                icon: Code,
                title: 'No Coding Required',
                description: 'We give you working code. You just customize colors, fonts, and AI personalities with our visual tools.'
              },
              {
                icon: Shield,
                title: 'Full Control',
                description: 'Your App Store account, your branding, your business. We never have access to your listings.'
              },
              {
                icon: TrendingUp,
                title: 'Passive Income',
                description: 'Apps keep earning after initial setup. Downloads continue while you focus on other things.'
              },
              {
                icon: Heart,
                title: 'Aligned Incentives',
                description: 'We only make money when you do. Your success is our success, so we help you grow.'
              },
              {
                icon: Users,
                title: 'Partner Community',
                description: 'Join a network of app entrepreneurs. Share strategies, learn from others, grow together.'
              }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:-translate-y-1">
                <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                  <benefit.icon className="text-blue-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Travel Moments Captured
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              See how Trip42 transforms travel memories into beautiful digital journals.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {[
              '/Trip1.png',
              '/Trip2.png',
              '/Trip3.png',
              '/Trip4.png',
              '/Trip5.png',
              '/Trip6.png',
              '/Trip7.png',
              '/Trip8.png'
            ].map((image, idx) => (
              <div key={idx} className={`relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 group ${idx === 0 || idx === 7 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10"></div>
                <img src={image} alt={`Travel moment ${idx + 1}`} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Is this really zero upfront cost?',
                a: 'Yes! Standard timeline (6 weeks) is completely free. You only pay hosting costs ($0-20/month) when you\'re ready to deploy. Rush processing requires upfront payment.'
              },
              {
                q: 'Do I need to know how to code?',
                a: 'No coding required! But you do need to learn Vercel deployment (like following a recipe). I provide video tutorials. Budget 4-8 hours to learn first time.'
              },
              {
                q: 'What if I\'ve never deployed a web app?',
                a: 'That\'s fine! Most partners will be first-timers. My tutorials walk through every step. Think of it like setting up WordPress - technical but learnable.'
              },
              {
                q: 'Can I use this for my family, not for profit?',
                a: 'Absolutely! Some of the most beautiful uses will be family memory books, memorial sites, or community archives. We\'re flexible on terms for non-profit uses.'
              },
              {
                q: 'What if I want to honor someone who passed away?',
                a: 'This is a beautiful use case. You can create a memorial app where family/friends contribute memories, photos, and stories. I\'m very supportive of these projects.'
              },
              {
                q: 'Is the journal website feature important?',
                a: 'It\'s a powerful addition - lets users create beautiful shareable websites from their entries. But the PWA alone is complete and valuable. The website feature is for Silver tier and above.'
              },
              {
                q: 'What if I can\'t provide digital art?',
                a: 'I can recommend affordable designers on Fiverr/Upwork, or we can use my template designs and customize colors/text.'
              },
              {
                q: 'How much do AI translations cost?',
                a: 'About $0.10-0.20 per translation through the app. I absorb most AI costs on my backend. Users only pay for heavy usage.'
              },
              {
                q: 'What if I\'m overwhelmed by applicants?',
                a: 'I\'ll be honest about wait times. I can handle 2-3 partners at once. If there\'s a queue, I\'ll tell you upfront. Rush processing ($250-500) available for urgent needs.'
              },
              {
                q: 'Can I sell this to App Stores?',
                a: 'Yes! The PWA code is ready for native app deployment. You create developer accounts ($99/year Apple, $25 Google) and submit yourself using my guides.'
              },
              {
                q: 'What happens if we part ways later?',
                a: '90 days notice. Options: (1) Keep running independently (you host everything), (2) Transfer to another partner, (3) Sell back to me (negotiate price). Users\' data remains protected.'
              }
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-2xl p-6 cursor-pointer border border-slate-200 hover:border-blue-300 transition-all duration-300 open:shadow-md">
                <summary className="font-bold text-slate-900 text-lg list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-blue-500 transform group-open:rotate-180 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </span>
                </summary>
                <p className="text-slate-600 mt-4 leading-relaxed animate-fade-in">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              How to Get Started
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Step 1: Beta Test (4-8 weeks)</h3>
              <div className="space-y-4">
                <p className="font-bold text-slate-800">Right now:</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Go to <a href="https://trip42-pwa.vercel.app/" className="text-blue-600 hover:underline">trip42-pwa.vercel.app</a> on your phone</li>
                  <li>• Follow the <a href="/BetaTests.xlsx" download className="text-blue-600 hover:underline">45-step beta testing checklist</a></li>
                  <li>• Use it naturally - record real memories</li>
                  <li>• Take notes on what works/doesn't work</li>
                  <li>• Save your *.t42 export file</li>
                </ul>
                <p className="font-bold text-slate-800 mt-4">Send to partners@trip42.cafe:</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Your testing feedback</li>
                  <li>• Screenshots of anything confusing/broken</li>
                  <li>• Your *.t42 file</li>
                  <li>• Initial interest in partnering (or not!)</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Step 2: Partnership Application</h3>
              <div className="space-y-4">
                <p className="font-bold text-slate-800">Email partners@trip42.cafe with:</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Your name and location</li>
                  <li>• Your vision: Who is this for?</li>
                  <li>• Your audience: Family/friends, social media, etc.</li>
                  <li>• Your goal: Preserve memories or generate income?</li>
                  <li>• Timeline preference: Standard or Rush</li>
                  <li>• Digital assets status: Have logos or need help?</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes This Different */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Makes This Different
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-6 text-red-400">NOT Like:</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-3"><span className="text-red-400">✕</span> Dropshipping</li>
                <li className="flex items-center gap-3"><span className="text-red-400">✕</span> MLM/Pyramid Schemes</li>
                <li className="flex items-center gap-3"><span className="text-red-400">✕</span> Affiliate Marketing</li>
                <li className="flex items-center gap-3"><span className="text-red-400">✕</span> Franchise Fees</li>
              </ul>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl border border-white/20">
              <h3 className="text-xl font-bold mb-6 text-green-400">It's Actually Like:</h3>
              <ul className="space-y-3 text-white">
                <li className="flex items-center gap-3"><Check size={18} className="text-green-400" /> White-label Software</li>
                <li className="flex items-center gap-3"><Check size={18} className="text-green-400" /> True Partnership</li>
                <li className="flex items-center gap-3"><Check size={18} className="text-green-400" /> Memory Preservation</li>
                <li className="flex items-center gap-3"><Check size={18} className="text-green-400" /> Digital Legacy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Reward */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              The Risk-Reward Breakdown
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
              <h3 className="text-xl font-bold text-red-900 mb-4">Your Risk</h3>
              <ul className="space-y-2 text-red-800 text-sm">
                <li>• Time: 40-60 hours total</li>
                <li>• Money: $0-20/month hosting</li>
                <li>• Opportunity cost</li>
              </ul>
            </div>
            <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
              <h3 className="text-xl font-bold text-green-900 mb-4">Your Potential Reward</h3>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>• $300-1,000+/month passive income</li>
                <li>• Priceless family memories preserved</li>
                <li>• Own a real digital product</li>
                <li>• Learn app deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why I'm Doing This */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
            Why I'm Doing This
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="font-bold text-slate-900 mb-2">1. Market Validation</h4>
              <p className="text-slate-600 text-sm">Your success proves the product works and reveals new opportunities.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">2. Scale Without Capital</h4>
              <p className="text-slate-600 text-sm">You know your community better than I ever could.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">3. Product Improvement</h4>
              <p className="text-slate-600 text-sm">20 partners = 20 unique perspectives finding bugs and requesting features.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">4. Meaningful Impact</h4>
              <p className="text-slate-600 text-sm">Helping people preserve memories matters. I win when you win.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')]"></div>
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 md:p-16 shadow-2xl border border-white/20">
            <div className="text-center mb-12">
              <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
                <Rocket className="text-blue-600" size={40} />
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Ready to Start?
              </h2>
              <p className="text-xl text-slate-600">
                Apply to become a beta tester. No commitment required.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Your Location
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    placeholder="City, Country"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Target Market / Audience *
                  </label>
                  <textarea
                    required
                    rows={3}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Who would use your app? (e.g., Digital nomads in Southeast Asia, Solo female travelers, Van life community)"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Your Audience Size (optional)
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                      placeholder="Social media followers, etc."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Why are you interested?
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                      placeholder="Briefly tell us your goals"
                    />
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-blue-50 p-4 rounded-xl">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                  <label className="text-sm text-slate-600 leading-relaxed">
                    I understand that beta testing is free with no obligation, and I can decide whether to become a partner after testing the app for 4-8 weeks.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-3 transform hover:-translate-y-0.5"
                >
                  Submit Application
                  <ArrowRight size={20} />
                </button>

                <p className="text-sm text-slate-500 text-center">
                  We'll review your application and get back to you within 3-5 business days.
                </p>
              </form>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                  <Check size={48} className="text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  Application Submitted!
                </h3>
                <p className="text-slate-600 mb-8 text-lg">
                  We'll review your application and send you next steps via email within 3-5 business days.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-blue-600 hover:text-blue-700 font-semibold hover:underline"
                >
                  Submit Another Application
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Let's Build Something Together
          </h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Whether you want to make money from travelers, preserve your family's stories, or honor someone's memory - there's probably a way we can make this work.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href="https://trip42-pwa.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-all"
            >
              Beta Test Now
            </a>
            <a
              href="mailto:partners@trip42.cafe"
              className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl"
            >
              Email Me
            </a>
          </div>
          <p className="text-sm text-slate-500 italic max-w-2xl mx-auto">
            P.S. - Even if you're not interested in partnering, please consider beta testing. It's genuinely free, you get a great memory-keeping tool, and you're helping build something that could help millions of people preserve what matters most.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-blue-600 p-1.5 rounded-lg">
                  <Rocket size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold text-white">Trip42</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Transform travel memories into beautiful digital journals. Join our partner program today.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">Program</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#how-it-works" className="hover:text-blue-400 transition-colors">How It Works</a></li>
                <li><a href="#benefits" className="hover:text-blue-400 transition-colors">Benefits</a></li>
                <li><a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a></li>
                <li><a href="#apply" className="hover:text-blue-400 transition-colors">Apply</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">Resources</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="resources.html" className="hover:text-blue-400 transition-colors">Documentation</a></li>
                <li><a href="resources.html" className="hover:text-blue-400 transition-colors">Deployment Guide</a></li>
                <li><a href="resources.html" className="hover:text-blue-400 transition-colors">Marketing Templates</a></li>
                <li><a href="resources.html" className="hover:text-blue-400 transition-colors">Partner Stories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full"></span> partners@trip42.com</li>
                <li>Discord Community</li>
                <li>Twitter: @trip42app</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
            <p>© 2025 Trip42. All rights reserved. | <a href="#" className="hover:text-white transition-colors">Privacy Policy</a> | <a href="#" className="hover:text-white transition-colors">Terms of Service</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
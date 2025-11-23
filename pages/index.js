import React, { useState } from 'react';
import { Rocket, Code, Palette, DollarSign, Users, Check, ArrowRight, Sparkles, Zap, Shield, TrendingUp, Heart, MessageCircle } from 'lucide-react';

export default function Trip42PartnerLanding() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to your backend
    console.log('Partner application:', email);
    setSubmitted(true);
    
    // Simulate form submission - replace with actual API call
    setTimeout(() => {
      alert('Thanks! Check your email for next steps.');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Rocket className="text-blue-600" size={32} />
            <span className="text-2xl font-bold text-gray-900">Trip42 Partners</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 font-medium">
              How It Works
            </a>
            <a href="#benefits" className="text-gray-600 hover:text-gray-900 font-medium">
              Benefits
            </a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900 font-medium">
              FAQ
            </a>
            <a href="#apply" className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Apply Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold text-sm mb-6">
          <Sparkles size={16} />
          <span>Rolling Applications Open</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 leading-tight">
          Own Your Own App.<br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Zero Upfront Cost.
          </span>
        </h1>

        <p className="text-2xl text-gray-700 mb-4 max-w-4xl mx-auto leading-relaxed font-semibold">
          Launch a Travel Journal App Under Your Brand - No Coding Required
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 max-w-4xl mx-auto text-left">
          <h2 className="text-xl font-bold text-blue-900 mb-2">The Opportunity in One Sentence</h2>
          <p className="text-lg text-blue-800">
            I give you a fully-built travel journal app, you customize it with your branding and theme, launch it in app stores, and we split the revenue 50/50.
          </p>
        </div>

        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Trip42 is a voice-first travel journaling app that turns spoken memories into beautiful, shareable digital journals. But here's the twist: I'm not asking you to use it or sell it for me. I'm offering you the chance to own and operate your own version of it. Your app. Your brand. Your theme. Your revenue.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a 
            href="#apply" 
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            Become a Partner
            <ArrowRight size={20} />
          </a>
          <a
            href="demo.html"
            className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-bold text-lg hover:border-gray-400 transition-colors flex items-center justify-center gap-2"
          >
            See Demo App
            <MessageCircle size={20} />
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { label: 'Zero Upfront Cost', value: '$0', icon: DollarSign },
            { label: 'Revenue Split', value: '50/50', icon: TrendingUp },
            { label: 'Partner Spots', value: 'Open', icon: Users },
            { label: 'Tech Support', value: 'Included', icon: Shield }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <stat.icon className="text-blue-600 mb-2 mx-auto" size={24} />
              <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Launch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide the complete app infrastructure. You bring your brand and audience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: 'Working Codebase',
                description: 'Full React Native app for iOS & Android, fully configured with your customizations',
                features: ['Voice-to-text recording', 'GPS auto-tagging', 'Photo attachments', 'Cloud sync']
              },
              {
                icon: Palette,
                title: 'Theme Builder Pack',
                description: 'Design your unique theme with colors, fonts, and AI character personalities',
                features: ['10+ base templates', 'Custom AI avatars', 'Personality prompts', 'No code required']
              },
              {
                icon: Shield,
                title: 'Backend Infrastructure',
                description: 'Supabase database, hosting, and journal website platform all managed',
                features: ['99.9% uptime', 'Automatic backups', 'Privacy compliant', 'Scalable storage']
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <item.icon className="text-blue-600 mb-4" size={40} />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <Check size={16} className="text-green-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Bring to the Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What You Bring to the Table
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your unique value that makes this partnership work. No coding or technical skills required.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">During Beta Testing (Free)</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <span>Use the app regularly for 4-8 weeks</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <span>Record at least 10-20 voice notes</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <span>Create 2-3 test journals</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <span>Provide feedback via surveys and calls</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <span>Report bugs and suggest improvements</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">As a Partner</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Users className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                  <span>Your time (5-10 hours/week marketing)</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                  <span>Your network (social media, community, friends)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Palette className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                  <span>Your creativity (design your unique theme)</span>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                  <span>Your marketing skills (promote your app)</span>
                </li>
                <li className="flex items-start gap-3">
                  <DollarSign className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                  <span>App Store fees ($99/year Apple + $25 one-time Google = ~$124/year)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-6">
            <h4 className="text-lg font-bold text-yellow-800 mb-2">What You DON'T Need</h4>
            <div className="grid md:grid-cols-2 gap-4 text-yellow-700">
              <ul className="space-y-1">
                <li>❌ Coding skills</li>
                <li>❌ Technical knowledge</li>
                <li>❌ Design experience</li>
              </ul>
              <ul className="space-y-1">
                <li>❌ Upfront investment</li>
                <li>❌ Marketing budget</li>
                <li>❌ Previous app experience</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Zero Upfront Cost Model */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Zero Upfront Cost Model
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Here's how this works: By the time you invest $124, you've already tested the product for 2 months. You KNOW it works.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phase 1: Beta Testing</h3>
              <div className="text-green-600 font-semibold mb-2">$0 investment</div>
              <p className="text-gray-600">Just download and use. No commitment required. Keep using the app even if you don't partner.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phase 2: Partnership Decision</h3>
              <div className="text-green-600 font-semibold mb-2">Still $0</div>
              <p className="text-gray-600">After testing, decide if you want to partner. No pressure, no obligation.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pink-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phase 3: Customization</h3>
              <div className="text-green-600 font-semibold mb-2">Still $0 from you</div>
              <p className="text-gray-600">I build your custom version. You design your theme. Everything ready to submit to App Stores.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-green-600">4</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Phase 4: Launch</h3>
            <div className="text-orange-600 font-semibold text-lg mb-2">First Real Cost: ~$124</div>
            <p className="text-gray-700 mb-4">Now you pay App Store fees. Submit your apps. Start marketing. Begin earning immediately.</p>
            <p className="text-sm text-gray-600">Why This Works: By the time you invest $124, you've already tested the product for 2 months. You KNOW it works. You KNOW there's demand. You're making an informed investment, not a blind gamble.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              From Beta Tester to App Owner
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The journey is simple. Test, customize, deploy, earn.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {[
              {
                step: '1',
                title: 'Beta Test for Free',
                time: '4-8 weeks',
                description: 'Use the app during your travels. Record notes, create journals, test features. Give honest feedback.',
                color: 'bg-blue-500'
              },
              {
                step: '2',
                title: 'Decide to Partner',
                time: '1 week',
                description: 'If you love it and see potential, apply to become a partner. No obligation if not interested.',
                color: 'bg-purple-500'
              },
              {
                step: '3',
                title: 'Customize Your App',
                time: '2-3 weeks',
                description: 'Design your theme, create AI characters, choose your branding. We configure the code for you.',
                color: 'bg-pink-500'
              },
              {
                step: '4',
                title: 'Deploy & Launch',
                time: '1-2 weeks',
                description: 'Follow our tutorials to submit to App Stores. We guide you through every step of the process.',
                color: 'bg-orange-500'
              },
              {
                step: '5',
                title: 'Market & Earn',
                time: 'Ongoing',
                description: 'Promote to your audience. Keep 50% of all revenue. App keeps earning while you sleep.',
                color: 'bg-green-500'
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className={`${item.color} text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0`}>
                  {item.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    <span className="text-sm text-gray-500 font-medium">{item.time}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Potential */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Earning Potential
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real numbers based on realistic scenarios. Your results depend on your marketing effort.
            </p>
          </div>
          <div className="bg-blue-50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Revenue Model: 50/50 Split</h3>
            <p className="text-blue-800 mb-6">It's up to you - Happy with just friends and family? No problem. Wanna keep it private within your fan club? Be my guest. Be the #1 App in your region. I love that!</p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Option 1: One-Time Purchase</h4>
                <p className="text-gray-600 mb-3">Price your app at $0.99, $1.99, $2.99, or $4.99</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• User pays once, owns it forever</li>
                  <li>• Gets Welcome credits (up to app price)</li>
                  <li>• Tops up when credits run out</li>
                  <li>• Simple, clean, instant revenue</li>
                </ul>
                <div className="mt-3 text-xs text-gray-500">Note: 1 voice recording/day/year = $36USD</div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Option 2: Freemium</h4>
                <p className="text-gray-600 mb-3">Free download with Welcome credits = 100</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Tops up when credits run out</li>
                  <li>• Builds user base quickly</li>
                  <li>• Converts free users to paying</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Option 3: Subscription</h4>
                <p className="text-gray-600 mb-3">Free or low-cost download</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Monthly: $2.99/month</li>
                  <li>• Annual: $19.99/year (save 40%)</li>
                  <li>• Recurring revenue every month</li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-blue-700 mt-4">You choose your pricing model. I get 50% of whatever you earn.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Conservative',
                downloads: '100/month',
                price: '$1.99',
                monthly: '$70',
                annual: '$835',
                effort: 'Casual promotion',
                color: 'border-blue-500'
              },
              {
                title: 'Moderate',
                downloads: '300/month',
                price: '$2.99',
                monthly: '$314',
                annual: '$3,767',
                effort: 'Active marketing',
                color: 'border-purple-500',
                featured: true
              },
              {
                title: 'Success',
                downloads: '1,000/month',
                price: '$2.99',
                monthly: '$1,047',
                annual: '$12,558',
                effort: 'Focused growth',
                color: 'border-green-500'
              }
            ].map((scenario, idx) => (
              <div 
                key={idx} 
                className={`relative bg-white rounded-xl p-8 border-2 ${scenario.color} ${
                  scenario.featured ? 'shadow-xl scale-105' : 'shadow-sm'
                }`}
              >
                {scenario.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Common
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{scenario.title}</h3>
                <div className="text-sm text-gray-600 mb-6">{scenario.effort}</div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Downloads:</span>
                    <span className="font-semibold text-gray-900">{scenario.downloads}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">App Price:</span>
                    <span className="font-semibold text-gray-900">{scenario.price}</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="text-sm text-gray-600 mb-1">Your monthly earnings:</div>
                  <div className="text-4xl font-bold text-gray-900 mb-4">{scenario.monthly}</div>
                  <div className="text-sm text-gray-600">Annual: <span className="font-bold text-gray-900">{scenario.annual}</span></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-sm text-gray-600 max-w-2xl mx-auto">
            * After App Store's 30% cut and 50/50 revenue split. Actual results vary based on pricing, marketing, and market demand.
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Partner With Trip42?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <benefit.icon className="text-blue-600 mb-4" size={32} />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'Is this really zero upfront cost?',
                a: 'Yes! You only pay App Store fees ($99/year Apple + $25 one-time Google) when you\'re ready to launch. Beta testing is completely free with no obligation.'
              },
              {
                q: 'Do I need coding skills?',
                a: 'No. We provide working code configured with your customizations. You just follow deployment tutorials to submit to App Stores. It\'s technical but learnable - like setting up a website.'
              },
              {
                q: 'What if I test and don\'t like it?',
                a: 'No problem! Beta testing is genuinely free with no obligation. Keep the test app for yourself and no hard feelings.'
              },
              {
                q: 'How much time does this take?',
                a: 'Beta testing: 4-8 weeks using the app naturally during travels. Setup: 10-20 hours to customize and deploy. Marketing: 5-10 hours/week ongoing (your choice).'
              },
              {
                q: 'Can I sell additional themes to my users?',
                a: 'No - your app features ONE cohesive theme. This creates focused brand identity. Revenue comes from app price, premium features, or subscriptions.'
              },
              {
                q: 'What markets can I target?',
                a: 'Any! Geographic niches, activity-based (backpackers, luxury travel), professional (digital nomads, teachers abroad), cultural communities - you know your audience best.'
              }
            ].map((faq, idx) => (
              <details key={idx} className="bg-gray-50 rounded-lg p-6 cursor-pointer hover:bg-gray-100 transition-colors">
                <summary className="font-bold text-gray-900 text-lg mb-2">{faq.q}</summary>
                <p className="text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <Rocket className="text-blue-600 mx-auto mb-4" size={48} />
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Ready to Start?
              </h2>
              <p className="text-xl text-gray-600">
                Apply to become a beta tester. No commitment required.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Location
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="City, Country"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target Market / Audience *
                  </label>
                  <textarea
                    required
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Who would use your app? (e.g., Digital nomads in Southeast Asia, Solo female travelers, Van life community)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Audience Size (optional)
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Social media followers, community members, blog readers, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Why are you interested?
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your goals, experience, or what excites you about this opportunity"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-4 h-4 text-blue-600 rounded"
                  />
                  <label className="text-sm text-gray-600">
                    I understand that beta testing is free with no obligation, and I can decide whether to become a partner after testing the app for 4-8 weeks.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Submit Application
                  <ArrowRight size={20} />
                </button>

                <p className="text-sm text-gray-600 text-center">
                  We'll review your application and get back to you within 3-5 business days.
                </p>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check size={32} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Application Submitted!
                </h3>
                <p className="text-gray-600 mb-6">
                  We'll review your application and send you next steps via email within 3-5 business days.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Submit Another Application
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Questions? Let's Talk
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            This is a real partnership opportunity. We're happy to answer any questions before you apply.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:partners@trip42.com" 
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              Email Us
            </a>
            <a 
              href="#apply" 
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Rocket size={24} />
                <span className="text-xl font-bold">Trip42</span>
              </div>
              <p className="text-gray-400 text-sm">
                Transform travel memories into beautiful digital journals.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Program</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#how-it-works" className="hover:text-white">How It Works</a></li>
                <li><a href="#benefits" className="hover:text-white">Benefits</a></li>
                <li><a href="#faq" className="hover:text-white">FAQ</a></li>
                <li><a href="#apply" className="hover:text-white">Apply</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="resources.html" className="hover:text-white">Documentation</a></li>
                <li><a href="resources.html" className="hover:text-white">Deployment Guide</a></li>
                <li><a href="resources.html" className="hover:text-white">Marketing Templates</a></li>
                <li><a href="resources.html" className="hover:text-white">Partner Stories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>partners@trip42.com</li>
                <li>Discord Community</li>
                <li>Twitter: @trip42app</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 Trip42. All rights reserved. | <a href="#" className="hover:text-white">Privacy Policy</a> | <a href="#" className="hover:text-white">Terms of Service</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
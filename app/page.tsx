'use client'

import { useState } from 'react'

export default function Home() {
  const [activePage, setActivePage] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const showPage = (pageId: string) => {
    setActivePage(pageId)
    window.scrollTo(0, 0)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="flex items-center gap-3" onClick={() => showPage('home')}>
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                EU
              </div>
              <span className="text-xl font-bold bg-gradient-to-br from-teal-500 to-pink-500 bg-clip-text text-transparent">
                English Unleashed
              </span>
            </a>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className={`font-medium text-gray-700 hover:text-teal-500 transition-colors ${activePage === 'home' ? 'text-teal-500' : ''}`} onClick={() => showPage('home')}>Home</a>
              <a href="#" className={`font-medium text-gray-700 hover:text-teal-500 transition-colors ${activePage === 'shop' ? 'text-teal-500' : ''}`} onClick={() => showPage('shop')}>Shop PDFs</a>
              <a href="#" className={`font-medium text-gray-700 hover:text-teal-500 transition-colors ${activePage === 'videos' ? 'text-teal-500' : ''}`} onClick={() => showPage('videos')}>Videos</a>
              <a href="#" className={`font-medium text-gray-700 hover:text-teal-500 transition-colors ${activePage === 'blog' ? 'text-teal-500' : ''}`} onClick={() => showPage('blog')}>Blog</a>
              <a href="#" className={`font-medium text-gray-700 hover:text-teal-500 transition-colors ${activePage === 'account' ? 'text-teal-500' : ''}`} onClick={() => showPage('account')}>My Account</a>
              <a href="#" className={`font-medium text-gray-700 hover:text-teal-500 transition-colors ${activePage === 'admin' ? 'text-teal-500' : ''}`} onClick={() => showPage('admin')}>Admin</a>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold cursor-pointer" onClick={() => showPage('account')}>
                JD
              </div>
              <button className="md:hidden p-2 text-gray-700" onClick={toggleMobileMenu}>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden fixed top-16 left-0 right-0 bg-white border-t shadow-lg">
            <a href="#" className="block px-4 py-4 text-gray-700 hover:bg-gray-50 hover:text-teal-500 border-b" onClick={() => { showPage('home'); toggleMobileMenu(); }}>Home</a>
            <a href="#" className="block px-4 py-4 text-gray-700 hover:bg-gray-50 hover:text-teal-500 border-b" onClick={() => { showPage('shop'); toggleMobileMenu(); }}>Shop PDFs</a>
            <a href="#" className="block px-4 py-4 text-gray-700 hover:bg-gray-50 hover:text-teal-500 border-b" onClick={() => { showPage('videos'); toggleMobileMenu(); }}>Videos</a>
            <a href="#" className="block px-4 py-4 text-gray-700 hover:bg-gray-50 hover:text-teal-500 border-b" onClick={() => { showPage('blog'); toggleMobileMenu(); }}>Blog</a>
            <a href="#" className="block px-4 py-4 text-gray-700 hover:bg-gray-50 hover:text-teal-500 border-b" onClick={() => { showPage('account'); toggleMobileMenu(); }}>My Account</a>
            <a href="#" className="block px-4 py-4 text-gray-700 hover:bg-gray-50 hover:text-teal-500" onClick={() => { showPage('admin'); toggleMobileMenu(); }}>Admin</a>
          </div>
        )}
      </nav>

      <main className="pt-16 min-h-screen">
        {/* Home Page */}
        <div className={activePage === 'home' ? 'block' : 'hidden'}>
          <section className="bg-gradient-to-br from-teal-500 to-pink-500 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
              <span className="inline-block mb-4 text-sm font-medium text-white/90 bg-white/20 px-4 py-2 rounded-full backdrop-blur">
                🎧 English Unleashed: The Podcast
              </span>
              <h1 className="text-5xl font-bold mb-6">Learn English<br/>with PDFs</h1>
              <p className="text-xl text-white/90 font-light max-w-2xl mx-auto mb-8">
                Simple, clear English learning materials you can download and use anywhere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg min-w-[144px]" onClick={() => showPage('shop')}>
                  Get One PDF - £9.99
                </button>
                <button className="px-6 py-3 bg-white/20 text-white border-2 border-white/50 rounded-full font-medium hover:bg-white/30 transition-all backdrop-blur shadow-lg min-w-[144px]" onClick={() => showPage('shop')}>
                  Shop All PDFs
                </button>
              </div>
            </div>
          </section>

          <section className="py-16 bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Start Learning Today</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Download our most popular English learning PDF
                </p>
              </div>
              
              <div className="max-w-md mx-auto">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 relative ring-2 ring-teal-500">
                  <span className="absolute -top-2.5 right-5 bg-gradient-to-br from-teal-500 to-pink-500 text-white text-xs px-4 py-1 rounded-full font-medium">
                    Featured Product
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Practice English Conversation</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-600 capitalize">conversation</span>
                    <span className="text-2xl font-bold text-teal-500">£9.99</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Master daily conversations with our comprehensive PDF guide. Includes practical exercises and real-world scenarios.
                  </p>
                  <div className="flex flex-col gap-3">
                    <button className="w-full py-3 bg-gradient-to-br from-teal-500 to-pink-500 text-white rounded-full font-medium hover:opacity-90 transition-all transform hover:scale-105 shadow-lg">
                      Buy on Gumroad
                    </button>
                    <button className="w-full py-3 bg-white text-gray-700 border border-gray-300 rounded-full font-medium hover:bg-gray-50 transition-all shadow-lg flex items-center justify-center gap-2" onClick={() => showPage('videos')}>
                      <svg width="20" height="20" fill="none" stroke="currentColor">
                        <circle cx="10" cy="10" r="9" strokeWidth="2"/>
                        <path d="M8 7l4 3-4 3V7z" fill="currentColor"/>
                      </svg>
                      Watch Preview
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <a href="#" className="inline-flex items-center text-teal-500 font-medium hover:text-teal-600" onClick={() => showPage('shop')}>
                  See All PDFs
                  <svg width="20" height="20" fill="none" stroke="currentColor" className="ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Shop Page */}
        <div className={activePage === 'shop' ? 'block' : 'hidden'}>
          <section className="bg-gradient-to-br from-teal-500 to-pink-500 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
              <span className="inline-block mb-4 text-sm font-medium text-white/90 bg-white/20 px-4 py-2 rounded-full backdrop-blur">
                📚 Digital PDF Shop
              </span>
              <h1 className="text-5xl font-bold mb-6">English PDF Materials</h1>
              <p className="text-xl text-white/90 font-light max-w-2xl mx-auto">
                Download PDF guides to practice English. Simple learning materials from English Unleashed.
              </p>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex gap-3 justify-center mb-12 flex-wrap">
                <button className="px-5 py-2.5 bg-gradient-to-br from-teal-500 to-pink-500 text-white rounded-full font-medium transition-all shadow-lg text-sm">All Categories</button>
                <button className="px-5 py-2.5 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-50 hover:text-teal-500 transition-all shadow text-sm">Vocabulary</button>
                <button className="px-5 py-2.5 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-50 hover:text-teal-500 transition-all shadow text-sm">Conversation</button>
                <button className="px-5 py-2.5 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-50 hover:text-teal-500 transition-all shadow text-sm">Pronunciation</button>
                <button className="px-5 py-2.5 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-50 hover:text-teal-500 transition-all shadow text-sm">Business</button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProductCard title="Practice English Conversation with ChatGPT" category="conversation" price="£9.99" description="Talk Daily to Improve Speaking | English Fluency Podcast" />
                <ProductCard title="Tom's Story of Learning Spanish" category="vocabulary" price="£9.99" description="SUPER SLOW, CLEAR English Story for Shadowing & Listening Practice" />
                <ProductCard title="Understand English Better! 5 Listening Techniques" category="pronunciation" price="£9.99" description="Slow English for Beginners | English Podcast" />
                <ProductCard title="Business English Essentials" category="business" price="£14.99" description="Professional communication skills for workplace success" />
                <ProductCard title="Daily Vocabulary Builder" category="vocabulary" price="£7.99" description="Learn 10 new words every day with context and examples" />
                <ProductCard title="Perfect Your Pronunciation" category="pronunciation" price="£11.99" description="Master English sounds with detailed phonetic guides" />
              </div>
            </div>
          </section>
        </div>

        {/* Videos Page */}
        <div className={activePage === 'videos' ? 'block' : 'hidden'}>
          <section className="bg-gradient-to-br from-teal-500 to-pink-500 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
              <span className="inline-block mb-4 text-sm font-medium text-white/90 bg-white/20 px-4 py-2 rounded-full backdrop-blur">
                🎥 Video Library
              </span>
              <h1 className="text-5xl font-bold mb-6">Learn with English Unleashed</h1>
              <p className="text-xl text-white/90 font-light max-w-2xl mx-auto">
                Watch our free lessons, podcast episodes, and tutorials. Practice with our proven shadowing method.
              </p>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex gap-3 justify-center mb-12 flex-wrap">
                <button className="px-5 py-2.5 bg-gradient-to-br from-teal-500 to-pink-500 text-white rounded-full font-medium transition-all shadow-lg text-sm">All Videos</button>
                <button className="px-5 py-2.5 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-50 hover:text-teal-500 transition-all shadow text-sm">Podcast Episodes</button>
                <button className="px-5 py-2.5 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-50 hover:text-teal-500 transition-all shadow text-sm">Lessons</button>
                <button className="px-5 py-2.5 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-50 hover:text-teal-500 transition-all shadow text-sm">Tutorials</button>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center text-white text-5xl mb-6">
                      ▶️
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Master the Shadowing Technique</h2>
                    <div className="flex gap-4 text-sm text-gray-600 mb-4">
                      <span>12K views</span>
                      <span>•</span>
                      <span>2 days ago</span>
                      <span>•</span>
                      <span>15:23</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      Learn the most effective technique for improving your English pronunciation and fluency. 
                      In this comprehensive guide, I'll show you exactly how to practice shadowing step by step.
                    </p>
                    
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-semibold mb-4">📚 Related Learning Materials</h3>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-medium">Shadowing Practice Guide PDF</h4>
                            <p className="text-sm text-gray-600">£9.99</p>
                          </div>
                          <button className="px-4 py-2 bg-gradient-to-br from-teal-500 to-pink-500 text-white rounded-full font-medium text-sm">Buy Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-lg max-h-[600px] overflow-y-auto">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Video Playlist</h3>
                  
                  <PlaylistItem title="Master the Shadowing Technique" views="12K" duration="15:23" active />
                  <PlaylistItem title="5 Listening Mistakes to Avoid" views="8K" duration="12:45" />
                  <PlaylistItem title="Daily English Conversation Practice" views="15K" duration="20:15" />
                  <PlaylistItem title="Pronunciation Secrets Revealed" views="10K" duration="18:30" />
                  <PlaylistItem title="Business English Email Writing" views="5K" duration="14:20" />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Blog Page */}
        <div className={activePage === 'blog' ? 'block' : 'hidden'}>
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">English Learning Blog</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Tips, techniques, and insights to master English faster
                </p>
              </div>

              <div className="max-w-lg mx-auto mb-8">
                <input type="text" className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-teal-500 transition-colors" placeholder="Search blog posts..." />
              </div>

              <div className="flex gap-3 justify-center mb-12 flex-wrap">
                <button className="px-5 py-2.5 bg-gradient-to-br from-teal-500 to-pink-500 text-white rounded-full font-medium transition-all shadow-lg text-sm">All Posts</button>
                <button className="px-5 py-2.5 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-50 hover:text-teal-500 transition-all shadow text-sm">Speaking Tips</button>
                <button className="px-5 py-2.5 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-50 hover:text-teal-500 transition-all shadow text-sm">Listening Practice</button>
                <button className="px-5 py-2.5 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-50 hover:text-teal-500 transition-all shadow text-sm">Grammar</button>
                <button className="px-5 py-2.5 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-50 hover:text-teal-500 transition-all shadow text-sm">Pronunciation</button>
                <button className="px-5 py-2.5 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-50 hover:text-teal-500 transition-all shadow text-sm">Study Methods</button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <BlogCard icon="📖" date="Jan 15, 2025" readTime="5 min read" title="Master the Shadowing Technique: A Complete Guide" excerpt="Discover how shadowing can dramatically improve your English pronunciation and fluency. Learn the step-by-step process that has helped thousands..." />
                <BlogCard icon="🎧" date="Jan 12, 2025" readTime="3 min read" title="5 Listening Mistakes That Kill Your Progress" excerpt="Are you making these common listening mistakes? Learn what to avoid and how to maximize your listening practice for faster improvement..." />
                <BlogCard icon="💬" date="Jan 10, 2025" readTime="7 min read" title="How to Practice English Speaking Alone" excerpt="No conversation partner? No problem! Here are 10 proven methods to practice speaking English by yourself and build confidence..." />
                <BlogCard icon="📚" date="Jan 8, 2025" readTime="4 min read" title="Grammar vs Fluency: What Should You Focus On?" excerpt="The eternal debate: perfect grammar or natural fluency? Learn how to balance both and create an effective study plan..." />
                <BlogCard icon="🎯" date="Jan 5, 2025" readTime="6 min read" title="The 30-Day English Challenge That Works" excerpt="Transform your English in just one month with this proven daily routine. Includes free downloadable tracker and progress checkpoints..." />
                <BlogCard icon="🌟" date="Jan 3, 2025" readTime="8 min read" title="Student Success Story: From Beginner to Confident" excerpt="Meet Maria, who went from struggling with basic conversations to confidently speaking English at work in just 6 months using our method..." />
              </div>
            </div>
          </section>
        </div>

        {/* Account Page */}
        <div className={activePage === 'account' ? 'block' : 'hidden'}>
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-lg mb-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      JD
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Welcome back, John Doe!</h2>
                      <p className="text-gray-600">Premium Member • 3 PDFs purchased</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button className="px-6 py-3 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-all shadow">Profile Settings</button>
                    <button className="px-6 py-3 bg-gradient-to-br from-teal-500 to-pink-500 text-white rounded-full font-medium hover:opacity-90 transition-all shadow">Logout</button>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-8">Your Purchased Materials</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <PurchasedCard 
                  title="Practice English Conversation with ChatGPT" 
                  description="Talk Daily to Improve Speaking | English Fluency Podcast"
                  quizStatus="progress"
                  progress={60}
                  questionsComplete="6/10"
                />
                <PurchasedCard 
                  title="Tom's Story of Learning Spanish" 
                  description="SUPER SLOW, CLEAR English Story for Shadowing & Listening Practice"
                  quizStatus="completed"
                  score="9/10"
                />
                <PurchasedCard 
                  title="Understand English Better! 5 Listening Techniques" 
                  description="Slow English for Beginners | English Podcast"
                  quizStatus="new"
                />
              </div>

              <div className="mt-12 p-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg border-l-4 border-teal-500">
                <h3 className="text-gray-900 mb-4">🔓 Guest User View (Before Login)</h3>
                <p className="text-gray-600 mb-6">Guests only see download buttons, not quiz access:</p>
                <div className="bg-gray-50 p-6 rounded-lg max-w-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Practice English Conversation with ChatGPT</h3>
                  <p className="text-gray-600 text-sm mb-4">Talk Daily to Improve Speaking | English Fluency Podcast</p>
                  <button className="w-full py-3 bg-white text-gray-700 border border-gray-300 rounded-full font-medium hover:bg-gray-50 transition-all shadow mb-4">📥 Download PDF Only</button>
                  <div className="p-4 bg-white rounded-lg">
                    <p className="text-gray-600 text-sm">💡 <strong>Create an account to unlock bonus quizzes</strong> for all your purchased PDFs!</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Admin Page */}
        <div className={activePage === 'admin' ? 'block' : 'hidden'}>
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4">
              <div className="bg-gradient-to-br from-teal-500 to-pink-500 text-white p-8 rounded-lg mb-8 text-center">
                <h1 className="text-4xl mb-2">🎛️ Admin Dashboard</h1>
                <p className="text-white/90">Central hub for posting across all platforms simultaneously</p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold mb-6">Create New Post</h2>
                  
                  <AdminForm />
                </div>
                
                <div>
                  <div className="bg-white rounded-lg p-6 shadow-lg mb-4">
                    <h3 className="text-xl font-bold mb-6">📊 Analytics Overview</h3>
                    
                    <AnalyticsCard number="1,247" label="Total YouTube Views" />
                    <AnalyticsCard number="892" label="Instagram Engagements" />
                    <AnalyticsCard number="456" label="Twitter Impressions" />
                    <AnalyticsCard number="234" label="Blog Page Views" />
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <h4 className="mb-4 text-gray-900 font-semibold">📈 Recent Posts</h4>
                    
                    <RecentPost title="Shadowing Method Guide" date="Jan 15" platforms="All platforms" engagements="156" status="success" />
                    <RecentPost title="Speaking Confidence Tips" date="Jan 12" platforms="YouTube, Instagram" engagements="203" status="success" />
                    <RecentPost title="Grammar vs Fluency" date="Jan 20" platforms="All platforms" status="pending" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-gradient-to-br from-gray-100 to-gray-200 border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Stay Connected with English Unleashed</h3>
            <p className="text-gray-600 mb-6">Never miss new lessons and PDF releases from our YouTube channel</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-br from-teal-500 to-pink-500 text-white rounded-full font-medium hover:opacity-90 transition-all shadow-lg">Subscribe on YouTube</button>
              <button className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-full font-medium hover:bg-gray-50 transition-all shadow">Get Free PDF Guide</button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-4">English Unleashed</h4>
              <p className="text-gray-600 text-sm mb-4">Digital Learning Resources</p>
              <p className="text-gray-600 text-sm">
                Download PDFs to practice English every day. Premium learning materials designed to complement the English Unleashed YouTube channel and help you master daily conversations.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">Shop</h4>
              <FooterLink href="#" onClick={() => showPage('shop')}>All PDFs</FooterLink>
              <FooterLink href="#">Daily Routines</FooterLink>
              <FooterLink href="#">Small Talk</FooterLink>
              <FooterLink href="#">Pronunciation</FooterLink>
              <FooterLink href="#">Business English</FooterLink>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">Support</h4>
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#" onClick={() => showPage('videos')}>Videos</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
              <FooterLink href="#">FAQ</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
            </div>
          </div>

          <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">© 2024 English Unleashed. All rights reserved.</p>
            <div className="flex gap-4">
              <span className="text-sm text-gray-600">🎧 Listen on YouTube</span>
              <span className="text-sm text-gray-600">📚 Premium PDFs Available</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

function ProductCard({ title, category, price, description }: any) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-gray-600 capitalize">{category}</span>
        <span className="text-2xl font-bold text-teal-500">{price}</span>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed mb-6">{description}</p>
      <div className="flex flex-col gap-3">
        <button className="w-full py-3 bg-gradient-to-br from-teal-500 to-pink-500 text-white rounded-full font-medium hover:opacity-90 transition-all transform hover:scale-105 shadow-lg">
          Buy on Gumroad
        </button>
        <button className="w-full py-3 bg-white text-gray-700 border border-gray-300 rounded-full font-medium hover:bg-gray-50 transition-all shadow">
          Watch Preview
        </button>
      </div>
    </div>
  )
}

function PlaylistItem({ title, views, duration, active = false }: any) {
  return (
    <div className={`flex gap-4 p-3 mb-2 rounded-lg cursor-pointer transition-all ${active ? 'bg-teal-50 ring-2 ring-teal-500' : 'hover:bg-gray-50'}`}>
      <div className="w-20 h-15 bg-gray-200 rounded-lg flex-shrink-0"></div>
      <div>
        <h4 className="text-sm font-medium mb-1">{title}</h4>
        <p className="text-xs text-gray-600">{views} views • {duration}</p>
      </div>
    </div>
  )
}

function BlogCard({ icon, date, readTime, title, excerpt }: any) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
      <div className="h-48 bg-gradient-to-br from-teal-500 to-pink-500 flex items-center justify-center text-white text-4xl">
        {icon}
      </div>
      <div className="p-6">
        <div className="flex justify-between text-gray-600 text-sm mb-4">
          <span>{date}</span>
          <span>{readTime}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{excerpt}</p>
      </div>
    </div>
  )
}

function PurchasedCard({ title, description, quizStatus, progress, questionsComplete, score }: any) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-6">{description}</p>
      
      <div className="flex flex-col gap-3 mb-6">
        <button className="w-full py-3 bg-white text-gray-700 border border-gray-300 rounded-full font-medium hover:bg-gray-50 transition-all shadow">📥 Download PDF</button>
        <button className="w-full py-3 bg-gradient-to-br from-teal-500 to-pink-500 text-white rounded-full font-medium hover:opacity-90 transition-all shadow">📊 Take Quiz</button>
      </div>
      
      <div className="bg-gray-50 border-2 border-dashed border-teal-500 rounded-lg p-6">
        {quizStatus === 'progress' && (
          <>
            <h4 className="text-teal-500 mb-3 text-base font-semibold">📚 Bonus Quiz Available!</h4>
            <div className="bg-gray-200 h-2 rounded mb-2 overflow-hidden">
              <div className="bg-gradient-to-r from-teal-500 to-pink-500 h-full rounded transition-all duration-300" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="text-sm text-gray-600 mb-3">Progress: {questionsComplete} questions completed</p>
            <button className="px-4 py-2 bg-gradient-to-br from-teal-500 to-pink-500 text-white rounded-full font-medium text-sm">Continue Quiz</button>
          </>
        )}
        {quizStatus === 'completed' && (
          <>
            <h4 className="text-green-600 mb-3 text-base font-semibold">✅ Quiz Completed!</h4>
            <div className="bg-gray-200 h-2 rounded mb-2 overflow-hidden">
              <div className="bg-green-600 h-full rounded" style={{ width: '100%' }}></div>
            </div>
            <p className="text-sm text-gray-600 mb-3">Score: {score} questions correct</p>
            <button className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-full font-medium text-sm">Review Answers</button>
          </>
        )}
        {quizStatus === 'new' && (
          <>
            <h4 className="text-teal-500 mb-3 text-base font-semibold">🎯 New Quiz Available!</h4>
            <p className="text-sm text-gray-600 mb-4">Test your understanding with 8 questions about listening techniques</p>
            <button className="px-4 py-2 bg-gradient-to-br from-teal-500 to-pink-500 text-white rounded-full font-medium text-sm">Start Quiz</button>
          </>
        )}
      </div>
    </div>
  )
}

function AdminForm() {
  return (
    <>
      <div className="mb-6">
        <label className="block mb-2 font-semibold text-gray-900">Post Title</label>
        <input type="text" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-teal-500 transition-colors" defaultValue="5 Secret Techniques to Master English Pronunciation" />
      </div>
      
      <div className="mb-6">
        <label className="block mb-2 font-semibold text-gray-900">Description / Content</label>
        <textarea className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-teal-500 transition-colors font-jakarta" rows={4} defaultValue="Discover the pronunciation secrets that native speakers use naturally! In this video, I'll share 5 powerful techniques that will transform your English pronunciation and help you sound more natural and confident."></textarea>
      </div>
      
      <div className="mb-6">
        <label className="block mb-2 font-semibold text-gray-900">Media Upload</label>
        <div className="border-2 border-dashed border-teal-500 rounded-lg p-10 text-center bg-gray-50 cursor-pointer">
          <div className="text-5xl mb-4">📹</div>
          <h4 className="font-semibold mb-2">Upload Video or Image</h4>
          <p className="text-gray-600 mb-4">Click to upload or drag and drop</p>
          <div className="p-3 bg-teal-50 rounded inline-block">
            <strong>📁 pronunciation_tips_video.mp4</strong> (12.3 MB)
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <label className="block mb-2 font-semibold text-gray-900">Hashtags & Tags</label>
        <input type="text" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-teal-500 transition-colors" defaultValue="#EnglishLearning #Pronunciation #SpeakingTips #LearnEnglish #EnglishUnleashed" />
      </div>
      
      <div className="mb-6">
        <label className="block mb-2 font-semibold text-gray-900">Select Platforms to Post</label>
        <div className="grid grid-cols-2 gap-4">
          <PlatformToggle platform="YouTube" icon="YT" color="bg-red-600" description="Video + Description" active />
          <PlatformToggle platform="Instagram" icon="IG" color="bg-gradient-to-br from-purple-600 to-pink-600" description="Reel + Caption" active />
          <PlatformToggle platform="Twitter" icon="TW" color="bg-blue-500" description="Video + Tweet" active />
          <PlatformToggle platform="Website Blog" icon="WB" color="bg-teal-500" description="Full Article" active />
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <h4 className="mb-4 font-semibold">📅 Schedule Post</h4>
        <div className="flex gap-4 items-center flex-wrap">
          <label className="flex items-center gap-2">
            <input type="radio" name="schedule" value="now" defaultChecked />
            Post Now
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="schedule" value="later" />
            Schedule for Later
          </label>
          <input type="datetime-local" className="flex-1 min-w-[200px] px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-teal-500 transition-colors" />
        </div>
      </div>
      
      <div className="flex gap-4">
        <button className="flex-1 py-3 bg-white text-gray-700 border border-gray-300 rounded-full font-medium hover:bg-gray-50 transition-all shadow">💾 Save Draft</button>
        <button className="flex-[2] py-3 bg-gradient-to-br from-teal-500 to-pink-500 text-white rounded-full font-medium hover:opacity-90 transition-all shadow">🚀 Post to All Platforms</button>
      </div>
    </>
  )
}

function PlatformToggle({ platform, icon, color, description, active }: any) {
  return (
    <div className={`flex items-center gap-3 p-4 bg-gray-50 rounded-lg cursor-pointer transition-all border-2 ${active ? 'bg-teal-50 border-teal-500' : 'border-transparent'}`}>
      <div className={`w-8 h-8 ${color} rounded-full flex items-center justify-center text-white font-bold text-xs`}>
        {icon}
      </div>
      <div>
        <strong className="block">{platform}</strong>
        <div className="text-xs text-gray-600">{description}</div>
      </div>
    </div>
  )
}

function AnalyticsCard({ number, label }: any) {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-lg text-center mb-4">
      <div className="text-3xl font-bold bg-gradient-to-br from-teal-500 to-pink-500 bg-clip-text text-transparent">{number}</div>
      <div className="text-gray-600 text-sm">{label}</div>
    </div>
  )
}

function RecentPost({ title, date, platforms, engagements, status }: any) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg mb-3">
      <div className="font-semibold mb-1">{title}</div>
      <div className="text-sm text-gray-600">Posted: {date} • {platforms}</div>
      {status === 'success' && <div className="text-sm text-green-600">✅ {engagements} total engagements</div>}
      {status === 'pending' && <div className="text-sm text-yellow-600">⏰ Pending</div>}
    </div>
  )
}

function FooterLink({ href, onClick, children }: any) {
  return (
    <a href={href} className="block text-gray-600 text-sm mb-2 hover:text-teal-500 transition-colors" onClick={onClick}>
      {children}
    </a>
  )
}
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Load the LeadConnector script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="text-xl font-bold text-[#D4AF37]">Brayne AI</div>
          <a href="#book" className="bg-[#D4AF37] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#B8860B] transition-colors">
            Book Free Call
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Turn Dead Leads Into A Revenue Goldmine On Autopilot
          </h1>
          <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
            Stop leaving money on the table. We resurrect your cold database and transform forgotten prospects into revenue-generating opportunities—while you sleep.
          </p>
          <a href="#book" className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#B8860B] transition-colors">
            Get My Free Analysis
          </a>
        </div>
      </section>

      {/* BOOKING SECTION - TESTING VISIBILITY */}
      <section id="book" className="py-16 bg-red-500">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              BOOKING SECTION TEST - CAN YOU SEE THIS RED BACKGROUND?
            </h2>
            <p className="text-xl text-white mb-6">
              If you can see this red section, then the booking section is rendering. The issue is with the iframe.
            </p>
          </div>
          
          {/* Test with simple iframe first */}
          <div className="bg-white p-4 rounded-lg mb-8">
            <h3 className="text-black mb-4">Simple iframe test:</h3>
            <iframe 
              src="https://www.google.com" 
              style={{width: '100%', height: '300px', border: 'none'}}
              title="Test iframe"
            />
          </div>

          {/* Your LeadConnector widget */}
          <div className="bg-white/10 border border-white/20 rounded-2xl p-8">
            <h3 className="text-white mb-4">LeadConnector Widget:</h3>
            <iframe 
              src="https://api.leadconnectorhq.com/widget/booking/xqwSvxDlit1P0lTnTrfx" 
              style={{width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px'}} 
              scrolling="no" 
              id="xqwSvxDlit1P0lTnTrfx_1756200899093"
              title="Booking Calendar"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] font-sans selection:bg-[#D4AF37] selection:text-white">
      
      {/* SECTION I: Navigation (Fixed & Unobtrusive) */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#FAFAFA]/80 border-b border-gray-100 px-6 py-6 md:px-12 flex justify-between items-center transition-all duration-300">
        <div className="text-sm font-bold tracking-widest uppercase">
          Nassar Nelloy
        </div>
        <div className="hidden md:flex space-x-8 text-xs font-medium tracking-widest uppercase text-gray-500">
          <a href="#overview" className="hover:text-[#1A1A1A] transition-colors">Overview</a>
          <a href="#divisions" className="hover:text-[#1A1A1A] transition-colors">Divisions</a>
          <a href="#presence" className="hover:text-[#1A1A1A] transition-colors">Global Presence</a>
          <a href="#contact" className="hover:text-[#1A1A1A] transition-colors">Contact</a>
        </div>
      </nav>

      {/* SECTION II: The Hero (Quiet Authority) */}
      <section className="h-screen pt-32 pb-24 px-6 md:px-12 grid grid-cols-12 items-end relative overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-gray-100 to-transparent -z-10 opacity-50"></div>
        
        <div className="col-span-12 md:col-span-10 grid grid-cols-12 gap-y-8 animate-fade-in-up">
          <h1 className="col-span-12 md:col-span-10 text-6xl md:text-8xl font-medium tracking-tighter leading-[0.9]">
            Decades of Trust.<br />
            Global Precision.
          </h1>
          <p className="col-span-12 md:col-start-2 md:col-span-6 text-xl md:text-2xl text-gray-500 tracking-tight">
            Nassar Nelloy Group of Companies.
          </p>
          <div className="col-span-12 md:col-start-2 mt-4">
            <a href="#overview" className="inline-flex border-b-2 border-[#D4AF37] pb-1 uppercase tracking-widest text-xs font-bold hover:text-[#D4AF37] transition-colors duration-300">
              Explore our legacy ↓
            </a>
          </div>
        </div>
      </section>

      {/* SECTION III: Company Overview (Heritage & Scale) */}
      <section id="overview" className="py-32 px-6 md:px-12 grid grid-cols-12 gap-8 bg-white">
        <div className="col-span-12 md:col-span-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 sticky top-32">
            The Enterprise
          </h2>
        </div>
        <div className="col-span-12 md:col-start-5 md:col-span-7">
          <p className="text-2xl md:text-4xl leading-snug tracking-tight text-[#1A1A1A]">
            We do not simply move goods; we orchestrate enduring global supply chains. Established in Sharjah and connected to the world's most critical trade hubs, Nassar Nelloy Group of Companies is built on a two-decade foundation of uncompromising reliability.
          </p>
          <p className="mt-8 text-lg text-gray-500 leading-relaxed max-w-3xl">
            We operate at the intersection of heritage and modern operational excellence, providing the structural backbone for international commerce.
          </p>
        </div>
      </section>

      {/* SECTION IV: The Service Divisions (Structural Elegance) */}
      <section id="divisions" className="grid grid-cols-1 md:grid-cols-2 min-h-screen border-t border-gray-200">
        
        {/* Division A */}
        <div className="group relative flex flex-col justify-center p-12 md:p-24 border-b md:border-b-0 md:border-r border-gray-200 transition-colors duration-700 hover:bg-[#8B3A3A]/5">
          <div className="absolute top-12 left-12 text-xs font-bold tracking-widest text-gray-300 group-hover:text-[#8B3A3A] transition-colors duration-500">01</div>
          <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">
            Nassar Nelloy<br />Foodstuff Trading
          </h3>
          <p className="text-[#8B3A3A] uppercase tracking-widest text-xs font-bold mb-8">
            Curating provenance. Sustaining markets.
          </p>
          <p className="text-lg text-gray-500 leading-relaxed max-w-md">
            From raw agricultural commodities to refined ingredients, we navigate complex global food networks with precision. Our logistics ensure that essential sustenance crosses borders with absolute integrity, maintaining the highest standards of safety and quality from origin to destination.
          </p>
        </div>

        {/* Division B */}
        <div className="group relative flex flex-col justify-center p-12 md:p-24 transition-colors duration-700 hover:bg-[#D4AF37]/5">
          <div className="absolute top-12 left-12 text-xs font-bold tracking-widest text-gray-300 group-hover:text-[#D4AF37] transition-colors duration-500">02</div>
          <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">
            Nassar Nelloy<br />General Trading
          </h3>
          <p className="text-[#D4AF37] uppercase tracking-widest text-xs font-bold mb-8">
            Agile sourcing. Unyielding quality.
          </p>
          <p className="text-lg text-gray-500 leading-relaxed max-w-md">
            The silent engine of modern enterprise. We source, secure, and supply the critical materials required by global industries. Our infrastructure is designed for scale, ensuring that our partners possess the resources they need to build, manufacture, and expand without friction.
          </p>
        </div>

      </section>

      {/* SECTION V: Legacy & Trust Indicators (Data as Design) */}
      <section className="py-24 px-6 md:px-12 border-y border-gray-200 bg-[#FAFAFA]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-7xl mx-auto text-center md:text-left">
          <div>
            <div className="text-5xl md:text-6xl font-medium tracking-tighter mb-2">20+</div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-500">Years of Excellence</div>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-medium tracking-tighter mb-2">4</div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-500">Continents Served</div>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-medium tracking-tighter mb-2">100%</div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-500">Unbroken Supply Chains</div>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-medium tracking-tighter mb-2 text-[#D4AF37]">HQ</div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-500">Sharjah Global Hub</div>
          </div>
        </div>
      </section>

      {/* SECTION VI: Product & Trade Presence */}
      <section id="presence" className="py-32 px-6 md:px-12 relative min-h-[70vh] flex items-end bg-[#FAFAFA] overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#1A1A1A 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-30"></div>

        <div className="relative z-10 w-full max-w-md ml-auto backdrop-blur-xl bg-white/80 p-8 md:p-12 border border-gray-100 shadow-2xl">
          <h2 className="text-2xl font-medium tracking-tight mb-4">Global Infrastructure</h2>
          <p className="text-gray-500 leading-relaxed text-sm">
            Our operational footprint spans key economic corridors, facilitating seamless import and export dynamics. We bridge the gap between emerging markets and established global economies, anchoring our operations from the strategic vantage point of the United Arab Emirates.
          </p>
        </div>
      </section>

      {/* SECTION VII: Contact & Footer */}
      <footer id="contact" className="bg-[#1A1A1A] text-white py-32 px-6 md:px-12 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <h2 className="text-6xl md:text-8xl font-medium tracking-tighter mb-6">Initiate Trade.</h2>
        <p className="text-xl text-gray-400 mb-16 max-w-2xl">
          Connect directly with our logistics and procurement directors to discuss your enterprise requirements.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 mb-32 z-10">
          <button className="px-8 py-4 bg-white text-[#1A1A1A] text-sm font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
            Corporate Inquiry
          </button>
          <button className="px-8 py-4 border border-white text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#1A1A1A] transition-colors">
            Secure Dialog
          </button>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest border-t border-gray-800 pt-8 z-10">
          <div>Nassar Nelloy Group of Companies</div>
          <div className="my-4 md:my-0">Headquarters: Sharjah, United Arab Emirates</div>
          <div>© 2026. All rights reserved.</div>
        </div>
      </footer>

      {/* Fixed WhatsApp Utility */}
      <a 
        href="https://wa.me/yournumberhere" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#4A5D23] hover:bg-[#3d4d1d] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(74,93,35,0.3)] hover:scale-105 transition-all duration-300 z-50 flex items-center justify-center group"
        aria-label="Contact us on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out text-sm font-bold uppercase tracking-widest pl-0 group-hover:pl-3">
          WhatsApp Connect
        </span>
      </a>

    </div>
  );
};

export default App;
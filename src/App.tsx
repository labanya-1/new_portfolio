/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Instagram,
  Linkedin,
  Music, 
  Shirt, 
  Trophy, 
  Search, 
  Cpu, 
  Mail, 
  BookOpen, 
  Sparkles,
  Home,
  Menu,
  Plus,
  Grid,
  Heart,
  MessageCircle,
  Bookmark,
  Send,
  Shuffle,
  Youtube,
  ArrowRight
} from "lucide-react";
import React, { useState, useEffect, useRef, useMemo } from "react";

const InstagramCard = () => (
  <div className="card-burgundy p-6 flex flex-col gap-6">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full border-2 border-beige p-0.5">
          <img 
            src="/image (10).png" 
            alt="Labanya" 
            className="w-full h-full rounded-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <h3 className="font-bold text-sm">_labanya._.1</h3>
          <p className="text-[10px] opacity-60">CSE | Creative Coder</p>
        </div>
      </div>
      <Instagram size={20} className="opacity-60" />
    </div>
    
    <div className="flex justify-around text-center border-y border-cream/10 py-4">
      <div>
        <div className="font-bold text-lg">3</div>
        <div className="text-[10px] uppercase tracking-wider opacity-60">Posts</div>
      </div>
      <div>
        <div className="font-bold text-lg">546</div>
        <div className="text-[10px] uppercase tracking-wider opacity-60">Followers</div>
      </div>
      <div>
        <div className="font-bold text-lg">5</div>
        <div className="text-[10px] uppercase tracking-wider opacity-60">Following</div>
      </div>
    </div>

    <div className="flex flex-col gap-2">
      <a 
        href="https://www.instagram.com/_labanya._.1/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full bg-cream text-burgundy py-2 rounded-lg text-xs font-bold hover:bg-beige transition-colors text-center"
      >
        Follow on Instagram
      </a>
      <p className="text-[10px] text-center opacity-40 italic">"Capturing life's best moments"</p>
    </div>
  </div>
);

const LinkedInCard = () => (
  <div className="card-beige p-6 flex flex-col gap-6">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full border-2 border-burgundy p-0.5">
          <img 
            src="/WhatsApp Image 2024-02-02 at 00.27.25_2a93954d.jpg" 
            alt="LinkedIn" 
            className="w-full h-full rounded-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <h3 className="font-bold text-sm text-burgundy">labanya-roy</h3>
          <p className="text-[10px] text-burgundy/60">LinkedIn | Professional</p>
        </div>
      </div>
      <Linkedin size={20} className="text-burgundy/60" />
    </div>
    
    <div className="flex justify-around text-center border-y border-burgundy/10 py-4">
      <div>
        <div className="font-bold text-lg text-burgundy">1.5k</div>
        <div className="text-[10px] uppercase tracking-wider text-burgundy/60">Followers</div>
      </div>
      <div>
        <div className="font-bold text-lg text-burgundy">3</div>
        <div className="text-[10px] uppercase tracking-wider text-burgundy/60">Following</div>
      </div>
    </div>

    <div className="flex flex-col gap-2">
      <a 
        href="https://www.linkedin.com/in/labanya-roy" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full bg-burgundy text-cream py-2 rounded-lg text-xs font-bold hover:bg-burgundy-light transition-colors text-center"
      >
        Connect on LinkedIn
      </a>
    </div>
  </div>
);

interface PinterestItemProps {
  src: string;
  title: string;
  caption?: string;
  size?: string;
  key?: number | string;
}

const PinterestItem = ({ src, title, caption, size = "pinterest-item" }: PinterestItemProps) => (
  <motion.div 
    layout
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className={`${size} relative rounded-[2rem] overflow-hidden group mb-6 cursor-none shadow-lg hover:shadow-2xl transition-shadow duration-500`}
  >
    <img 
      src={src} 
      alt={title} 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-burgundy/90 via-burgundy/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
      <p className="text-cream text-2xl font-display italic mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{title}</p>
      {caption && <p className="text-cream/70 text-[10px] uppercase tracking-[0.3em] mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{caption}</p>}
      <div className="flex justify-between items-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
        <div className="flex gap-4">
          <Heart size={18} className="text-cream hover:text-accent transition-colors" />
          <MessageCircle size={18} className="text-cream hover:text-beige transition-colors" />
        </div>
        <Bookmark size={18} className="text-cream hover:text-beige transition-colors" />
      </div>
    </div>
  </motion.div>
);

const GALLERY_CATEGORIES = ["All", "Aesthetic", "Travel", "Mystery"];

const GALLERY_PHOTOS = [
  { id: 1, src: "/image (3).png", title: "Monochrome Soul", category: "Aesthetic", caption: "B&W portrait with a thoughtful gaze", size: "pinterest-item-large" },
  { id: 2, src: "/image (4).png", title: "Denim Days", category: "Aesthetic", caption: "Denim jacket vibes against a colorful backdrop", size: "pinterest-item" },
  { id: 3, src: "/image (5).png", title: "Soft Smiles", category: "Aesthetic", caption: "Capturing the subtle joy in B&W", size: "pinterest-item-large" },
  { id: 4, src: "/WhatsApp Image 2025-08-27 at 19.26.07_8b094d64.jpg", title: "Coquette Aesthetic", category: "Aesthetic", caption: "Adding a touch of pink and playfulness", size: "pinterest-item-small" },
  { id: 5, src: "/image (7).png", title: "Side Profile", category: "Aesthetic", caption: "Chasing lights and shadows", size: "pinterest-item-large" },
  { id: 6, src: "/image (8).png", title: "River Breeze", category: "Travel", caption: "Serene moments by the water in blue florals", size: "pinterest-item" },
  { id: 7, src: "/image (9).png", title: "Traditional Grace", category: "Aesthetic", caption: "Elegant in a blue saree", size: "pinterest-item-large" },
  { id: 8, src: "/Gemini_Generated_Image_9ibhuf9ibhuf9ibh.png", title: "Aesthetic Vision", category: "Aesthetic", caption: "Curated visual inspiration", size: "pinterest-item-small" },
];

const SEARCH_DATA = [
  { title: "About Labanya", description: "Creative coder, detective-novel junkie, and fashion-forward music lover.", category: "Bio", link: "#about" },
  { title: "Detective Novels", description: "A deep love for mystery and analytical thinking through books.", category: "Hobby", link: "#about" },
  { title: "Global Fashion", description: "Keeping up with global trends and the intersection of tech and style.", category: "Hobby", link: "#about" },
  { title: "National Level Debater", description: "Represented and competed at the national level in oratory excellence.", category: "Achievement", link: "#achievements" },
  { title: "Smart India Hackathon", description: "Finalist at SIH. Project: Real-time data compression (AI/ML & Cybersecurity).", category: "Achievement", link: "#achievements" },
  { title: "Smart Bengal Hackathon", description: "Finalist at SBH. Project: Real-time accident detection (Flutter & AI/ML).", category: "Achievement", link: "#achievements" },
  { title: "LinkedIn Profile", description: "Professional network with 1500+ followers.", category: "Social", link: "https://www.linkedin.com/in/labanya-roy" },
  { title: "Speaker & Organiser", description: "Speaker at school events and experienced event host/organiser.", category: "Achievement", link: "#achievements" },
  { title: "AI/ML Lead", description: "Leading the AI/ML initiatives at Hackerspace Coding Club.", category: "Club", link: "#achievements" },
  { title: "Fashion Forward", description: "Exploring Haute Couture, Streetwear, and Minimalism.", category: "Fashion", link: "#fashion" },
  { title: "Curated Sound", description: "A collection of favorite artists like Taylor Swift, Laufey, and Sabrina Carpenter.", category: "Music", link: "#music" }
];

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const INITIAL_SONGS = [
    { 
      title: "Manchild", 
      artist: "Sabrina Carpenter", 
      youtubeUrl: "https://www.youtube.com/results?search_query=Sabrina+Carpenter+Manchild"
    },
    { 
      title: "Busy Woman", 
      artist: "Sabrina Carpenter", 
      youtubeUrl: "https://www.youtube.com/results?search_query=Sabrina+Carpenter+Busy+Woman"
    },
    { 
      title: "Espresso", 
      artist: "Sabrina Carpenter", 
      youtubeUrl: "https://www.youtube.com/results?search_query=Sabrina+Carpenter+Espresso"
    },
    { 
      title: "Feather", 
      artist: "Sabrina Carpenter", 
      youtubeUrl: "https://www.youtube.com/results?search_query=Sabrina+Carpenter+Feather"
    },
    { 
      title: "Juno", 
      artist: "Sabrina Carpenter", 
      youtubeUrl: "https://www.youtube.com/results?search_query=Sabrina+Carpenter+Juno"
    },
    { 
      title: "Ophelia", 
      artist: "Taylor Swift", 
      youtubeUrl: "https://www.youtube.com/results?search_query=Taylor+Swift+Ophelia"
    }
  ];

  const [playlist, setPlaylist] = useState(INITIAL_SONGS.slice(0, 2));

  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return SEARCH_DATA.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const toggleShuffle = () => {
    const shuffled = [...INITIAL_SONGS].sort(() => Math.random() - 0.5);
    setPlaylist(shuffled.slice(0, 2));
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('.cursor-pointer') ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div className="min-h-screen bg-cream text-burgundy pb-24 relative">
      {/* Visual Polish Elements */}
      <div className="grain" />
      <motion.div 
        className="cursor-dot hidden md:block"
        animate={{ 
          x: mousePos.x - 3, 
          y: mousePos.y - 3,
          scale: isHovering ? 0 : 1
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      />
      <motion.div 
        className="cursor-outline hidden md:block"
        animate={{ 
          x: mousePos.x - 16, 
          y: mousePos.y - 16,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? "rgba(74, 4, 4, 1)" : "rgba(74, 4, 4, 0.3)"
        }}
        transition={{ type: "spring", damping: 25, stiffness: 150, mass: 0.8 }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 px-4 py-3">
        <div className="max-w-4xl mx-auto bg-burgundy text-cream rounded-full px-6 py-3 flex justify-between items-center shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-cream/10 flex items-center justify-center">
              <Home size={18} />
            </div>
            <div className="hidden sm:flex gap-6 text-[10px] font-bold uppercase tracking-widest">
              <a href="#" className="hover:text-beige transition-colors">Home</a>
              <a href="#about" className="hover:text-beige transition-colors">About Me</a>
              <a href="#visual-diary" className="hover:text-beige transition-colors">Visual Diary</a>
              <a href="#achievements" className="hover:text-beige transition-colors">Achievements</a>
              <a href="https://www.instagram.com/_labanya._.1/" target="_blank" className="hover:text-beige transition-colors">Instagram</a>
              <a href="https://www.linkedin.com/in/labanya-roy" target="_blank" className="hover:text-beige transition-colors">LinkedIn</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Search size={18} className="cursor-pointer hover:text-beige" onClick={() => setIsSearchOpen(!isSearchOpen)} />
          </div>
        </div>
      </header>

      <main className="pt-24 px-4 max-w-5xl mx-auto">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12"
        >
          <div className="md:col-span-8 relative rounded-[3rem] overflow-hidden group h-[500px] shadow-2xl">
            <motion.img 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src="https://picsum.photos/seed/aesthetic/1200/800" 
              alt="Hero" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-burgundy/90 via-burgundy/20 to-transparent flex flex-col justify-end p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-[1px] bg-cream/40" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-cream/60">Portfolio 2026</p>
                </div>
                <h1 className="text-display text-7xl md:text-9xl text-cream mb-6">Labanya Roy</h1>
                <p className="text-cream/80 text-sm max-w-md font-light leading-relaxed">
                  Creative coder, detective-novel junkie, and fashion-forward music lover. Building immersive digital experiences with a Pinterest-inspired soul.
                </p>
              </motion.div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute top-8 right-8 bg-burgundy/80 backdrop-blur-md text-cream p-4 rounded-2xl flex items-center gap-3 shadow-2xl border border-cream/10"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden border border-cream/20">
                <img src="/WhatsApp Image 2025-08-27 at 19.26.07_8b094d64.jpg" alt="Profile" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Field</p>
                <p className="text-xs font-bold">CSE Student</p>
              </div>
            </motion.div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-6">
            <InstagramCard />
            <LinkedInCard />
          </div>
        </motion.section>

        {/* Bio Section */}
        <motion.section 
          id="about" 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 scroll-mt-24"
        >
          <div className="md:col-span-1 flex flex-col gap-4">
            <div className="flex gap-2">
              <div className="w-16 h-16 rounded-full overflow-hidden border border-beige">
                <img src="https://picsum.photos/seed/art1/200/200" alt="Art" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="w-16 h-16 rounded-full overflow-hidden border border-beige">
                <img src="https://picsum.photos/seed/art2/200/200" alt="Art" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="w-16 h-16 rounded-full overflow-hidden border border-beige">
                <img src="https://picsum.photos/seed/art3/200/200" alt="Art" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
            <h2 className="text-display text-5xl">About Me</h2>
            <p className="text-sm text-burgundy/70 leading-relaxed">
              Labanya Roy was born with a curiosity for the unknown. She has a deep passion for learning AI, collecting old books, and staying ahead of new trends, finding magic in the intersection of tradition and technology.
            </p>
          </div>
          
          <div className="md:col-span-2 card-burgundy p-12 relative">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-display text-3xl mb-4">Hobbies</h3>
                <ul className="space-y-4 text-xs font-bold uppercase tracking-widest opacity-80">
                  <li className="flex items-center gap-3"><BookOpen size={16} /> Detective Novels</li>
                  <li className="flex items-center gap-3"><Shirt size={16} /> Global Fashion</li>
                  <li className="flex items-center gap-3"><Music size={16} /> Music Obsessed</li>
                </ul>
              </div>
              <div>
                <h3 className="text-display text-3xl mb-4">Victories</h3>
                <ul className="space-y-4 text-xs font-bold uppercase tracking-widest opacity-80">
                  <li className="flex items-center gap-3"><Trophy size={16} /> SIH Finalist</li>
                  <li className="flex items-center gap-3"><Trophy size={16} /> SBH Finalist</li>
                </ul>
              </div>
            </div>
            <div className="absolute bottom-8 right-8 opacity-10">
              <Grid size={120} />
            </div>
          </div>
        </motion.section>

        {/* Fashion Interest Section */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          <div className="card-beige p-12 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-burgundy text-cream rounded-2xl">
                <Shirt size={32} />
              </div>
              <h2 className="text-display text-6xl">Fashion Forward</h2>
            </div>
            <p className="text-sm text-burgundy/70 leading-relaxed italic mb-6">
              "Fashion is the armor to survive the reality of everyday life. I'm always keeping up with global trends, finding inspiration in the intersection of tech and style."
            </p>
            <div className="flex flex-wrap gap-3">
              {["Haute Couture", "Streetwear", "Minimalism", "Vintage"].map(style => (
                <span key={style} className="px-4 py-2 rounded-full border border-burgundy/10 text-[10px] font-bold uppercase tracking-widest">
                  {style}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-[3rem] overflow-hidden h-[400px]">
            <img 
              src="/image (9).png" 
              alt="Fashion Aesthetic" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.section>

        {/* Music & Books Section */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12"
        >
          <div className="md:col-span-7 card-burgundy p-8 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-cream text-burgundy rounded-2xl shadow-lg group-hover:rotate-12 transition-transform">
                  <Music size={28} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-40 mb-1">Sonic Identity</p>
                  <h2 className="text-display text-4xl">Curated Sound</h2>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.3em] opacity-40 mb-6 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-beige/40" /> Favorite Artists
                  </h3>
                  <ul className="space-y-4">
                    {["Sabrina Carpenter", "Taylor Swift", "Lana Del Rey", "The Weeknd"].map(artist => (
                      <li key={artist} className="flex items-center justify-between group/item cursor-default">
                        <span className="text-sm font-medium group-hover/item:text-beige transition-colors">{artist}</span>
                        <div className="w-1 h-1 rounded-full bg-beige/20 group-hover/item:w-8 transition-all" />
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xs font-bold uppercase tracking-[0.3em] opacity-40 flex items-center gap-2">
                      <span className="w-4 h-[1px] bg-beige/40" /> Curated Pair
                    </h3>
                    <button 
                      onClick={toggleShuffle}
                      className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-beige hover:text-cream transition-colors group/shuffle"
                    >
                      <Shuffle size={14} className="group-hover/shuffle:rotate-180 transition-transform duration-500" /> 
                      Shuffle Pair
                    </button>
                  </div>
                  <div className="space-y-4">
                    <AnimatePresence mode="popLayout">
                      {playlist.map(song => (
                        <motion.div 
                          layout
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          key={song.title} 
                          className="p-4 rounded-2xl border bg-cream/5 border-cream/10 hover:bg-cream/10 transition-all group/song"
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-xs font-bold mb-0.5">{song.title}</p>
                              <p className="text-[10px] uppercase tracking-widest opacity-40">
                                {song.artist}
                              </p>
                            </div>
                            <a 
                              href={song.youtubeUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="p-2.5 rounded-full bg-cream/10 text-cream hover:bg-cream/20 transition-all"
                              title="Watch on YouTube"
                            >
                              <Youtube size={14} />
                            </a>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -right-12 -bottom-12 opacity-5 rotate-12 pointer-events-none">
              <Music size={180} />
            </div>
          </div>

          <div className="md:col-span-5 card-beige p-8 flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-burgundy text-cream rounded-2xl shadow-lg group-hover:-rotate-12 transition-transform">
                  <BookOpen size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-40 mb-1">Literary World</p>
                  <h2 className="text-display text-3xl">The Sunday Shelf</h2>
                </div>
              </div>
              <p className="text-base text-burgundy/80 font-serif italic leading-relaxed mb-6">
                "There is no greater thrill than a well-crafted mystery. My love for detective novels is what drives my analytical mind in code."
              </p>
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-burgundy/10 pb-3 group/book">
                  <span className="text-xs font-bold uppercase tracking-widest opacity-60">Currently Reading</span>
                  <span className="text-sm font-display italic group-hover/book:text-accent transition-colors">Sapiens by Yuval Noah Harari</span>
                </div>
                <div className="flex justify-between items-center border-b border-burgundy/10 pb-3 group/book">
                  <span className="text-xs font-bold uppercase tracking-widest opacity-60">All-Time Fav</span>
                  <span className="text-sm font-display italic group-hover/book:text-accent transition-colors">Sherlock Holmes</span>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <Sparkles className="text-burgundy/10 animate-pulse" size={64} />
            </div>
          </div>
        </motion.section>

        {/* Visual Diary Section */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 scroll-mt-24"
        >
          <div className="card-beige p-12 relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-burgundy shadow-2xl flex-shrink-0">
                <img src="/WhatsApp Image 2025-08-27 at 19.26.07_8b094d64.jpg" alt="Visual Diary" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h2 className="text-display text-6xl mb-4">Visual Diary</h2>
                <p className="text-lg text-burgundy/80 font-serif italic leading-relaxed max-w-2xl">
                  "I am a collection of the books I've read, the music I've loved, and the code I've written. In this space, I am simply myself—unfiltered, creative, and always evolving."
                </p>
                <div className="mt-6 flex gap-4">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-60">
                    <Heart size={14} className="text-accent" fill="currentColor" /> 14 Oct
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-60">
                    <Sparkles size={14} className="text-accent" /> Creative Soul
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -left-24 -top-24 opacity-5">
              <Sparkles size={300} />
            </div>
          </div>
        </motion.section>

        {/* Pinterest Gallery */}
        <motion.section 
          id="visual-diary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 scroll-mt-24"
        >
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent mb-2">Visual Diary</p>
              <h2 className="text-display text-6xl">My Aesthetic</h2>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 hidden md:block">Pinteresty Vibes</p>
          </div>
          
          <motion.div 
            layout
            className="columns-2 md:columns-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {GALLERY_PHOTOS.map((photo) => (
                <PinterestItem 
                  key={photo.id}
                  src={photo.src} 
                  title={photo.title} 
                  caption={photo.caption}
                  size={photo.size} 
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.section>

        {/* Achievements Section */}
        <motion.section 
          id="achievements" 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent mb-2">Hall of Fame</p>
              <h2 className="text-display text-6xl">Achievements</h2>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-60 hidden md:block">Victories & Recognition</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "National Level Debater", subtitle: "Oratory Excellence", desc: "Represented and competed at the national level, showcasing strong analytical thinking and persuasive communication skills.", tags: ["Public Speaking", "Debate"] },
              { title: "Speaker & Host", subtitle: "School Events", desc: "Active speaker at school events and experienced in hosting and organising various programs, ensuring seamless execution and engagement.", tags: ["Leadership", "Hosting"] },
              { title: "Smart India Hackathon", subtitle: "Finalist • National Level", desc: "Developed a real-time data compression system at the intersection of AI/ML and Cybersecurity for national-level challenges.", tags: ["AI/ML", "Cybersecurity"] },
              { title: "Smart Bengal Hackathon", subtitle: "Finalist • State Level", desc: "Built a real-time accident detection system using Flutter and AI/ML, recognized as a state-level finalist.", tags: ["Flutter", "AI/ML"] }
            ].map((item, i) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="card-burgundy p-10 group hover:bg-burgundy-light transition-colors duration-500"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-display text-4xl mb-2 group-hover:text-beige transition-colors">{item.title}</h3>
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">{item.subtitle}</p>
                  </div>
                  <Trophy size={24} className="text-beige/20 group-hover:text-beige transition-colors" />
                </div>
                <p className="text-sm leading-relaxed mb-8 opacity-70 group-hover:opacity-100 transition-opacity">
                  {item.desc}
                </p>
                <div className="flex gap-3">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-cream/5 rounded-full text-[9px] font-bold uppercase tracking-widest border border-cream/10 group-hover:border-cream/30 transition-all">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Clubs & Contact */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="card-beige p-12">
            <h2 className="text-display text-5xl mb-6">Clubs</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-burgundy text-cream rounded-xl">
                  <Cpu size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">AI/ML Lead</h3>
                  <p className="text-xs opacity-60">Hackerspace Coding Club</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-burgundy text-cream rounded-xl">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">PR Lead</h3>
                  <p className="text-xs opacity-60">Hackerspace Coding Club</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card-burgundy p-12 flex flex-col justify-between">
            <div>
              <h2 className="text-display text-6xl mb-4">Let's Talk</h2>
              <p className="text-cream/60 text-sm mb-8">
                Ready to collaborate on a project or share a book recommendation?
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <a href="mailto:labanyaroy1488@gmail.com" className="flex items-center justify-between bg-cream text-burgundy p-4 rounded-2xl font-bold hover:bg-beige transition-colors">
                <span>Send an email</span>
                <Send size={18} />
              </a>
              <div className="flex justify-center gap-6 mt-4">
                <a href="https://www.instagram.com/_labanya._.1/" target="_blank" rel="noopener noreferrer" className="hover:text-beige transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="https://www.linkedin.com/in/labanya-roy" target="_blank" rel="noopener noreferrer" className="hover:text-beige transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:labanyaroy1488@gmail.com" className="hover:text-beige transition-colors">
                  <Mail size={24} />
                </a>
                <a href="#achievements" className="hover:text-beige transition-colors">
                  <Trophy size={24} />
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="mt-24 text-center py-12 border-t border-beige">
        <p className="text-display text-3xl mb-2">Labanya Roy</p>
        <p className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-40">Portfolio © 2026</p>
      </footer>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-burgundy/95 backdrop-blur-xl flex items-center justify-center p-6 overflow-y-auto"
          >
            <div className="max-w-3xl w-full py-20">
              <div className="relative">
                <input 
                  autoFocus
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search my world..." 
                  className="w-full bg-transparent border-b-4 border-cream text-cream text-4xl md:text-6xl font-display italic outline-none pb-6 placeholder:opacity-20"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-cream/40 hover:text-cream text-sm font-bold uppercase tracking-widest"
                  >
                    Clear
                  </button>
                )}
              </div>

              <div className="mt-12">
                {searchQuery.trim() === "" ? (
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-cream/40 mb-6">Quick Filters</p>
                    <div className="flex flex-wrap gap-4">
                      {['Projects', 'Hobbies', 'Clubs', 'Fashion', 'Music'].map(tag => (
                        <span 
                          key={tag} 
                          onClick={() => setSearchQuery(tag)}
                          className="px-6 py-3 rounded-full border border-cream/20 text-cream text-xs font-bold uppercase tracking-widest hover:bg-cream hover:text-burgundy cursor-pointer transition-all hover:scale-105"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-8">
                    {filteredResults.length > 0 ? (
                      <>
                        <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-cream/40">Results ({filteredResults.length})</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {filteredResults.map((result, idx) => (
                            <motion.a
                              key={idx}
                              href={result.link}
                              onClick={() => setIsSearchOpen(false)}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              className="group bg-cream/5 border border-cream/10 p-6 rounded-[2rem] hover:bg-cream/10 transition-all cursor-pointer"
                            >
                              <div className="flex justify-between items-start mb-4">
                                <span className="text-[9px] font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full">
                                  {result.category}
                                </span>
                                <ArrowRight size={16} className="text-cream/20 group-hover:text-cream transition-colors" />
                              </div>
                              <h4 className="text-display text-3xl text-cream mb-2 group-hover:text-beige transition-colors">{result.title}</h4>
                              <p className="text-cream/60 text-xs leading-relaxed line-clamp-2">{result.description}</p>
                            </motion.a>
                          ))}
                        </div>
                      </>
                    ) : (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                      >
                        <Sparkles size={48} className="text-cream/10 mx-auto mb-6" />
                        <h3 className="text-display text-4xl text-cream mb-4">No results found</h3>
                        <p className="text-cream/40 text-sm font-light">Try searching for "Fashion", "Debate", or "Music"</p>
                      </motion.div>
                    )}
                  </div>
                )}
              </div>

              <div className="mt-20 flex justify-center">
                <button 
                  onClick={() => setIsSearchOpen(false)}
                  className="text-cream/40 text-[10px] font-bold uppercase tracking-[0.5em] hover:text-cream flex items-center gap-3 transition-colors group"
                >
                  <span className="w-8 h-[1px] bg-cream/20 group-hover:w-12 transition-all" />
                  Close Search
                  <span className="w-8 h-[1px] bg-cream/20 group-hover:w-12 transition-all" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

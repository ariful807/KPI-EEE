import { useState, useEffect } from 'react';
import {
  GraduationCap,
  Cpu,
  BookOpen,
  Building2,
  MapPin,
  Phone,
  Mail,
  Clock,
  Users,
  Award,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Wrench,
  Radio,
  Zap,
  Microscope,
  Network,
  Menu,
  X,
  Globe,
  Calendar,
  Star,
  ArrowRight,
  CheckCircle2,
  Laptop,
  Shield,
  TrendingUp,
  Heart,
  User,
  ExternalLink,
} from 'lucide-react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'department', 'teachers', 'syllabus', 'career', 'facilities', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'হোম', bn: 'হোম' },
    { id: 'about', label: 'পরিচিতি', bn: 'পরিচিতি' },
    { id: 'department', label: 'বিভাগ', bn: 'বিভাগ' },
    { id: 'teachers', label: 'শিক্ষকবৃন্দ', bn: 'শিক্ষকবৃন্দ' },
    { id: 'syllabus', label: 'সিলেবাস', bn: 'সিলেবাস' },
    { id: 'career', label: 'ক্যারিয়ার', bn: 'ক্যারিয়ার' },
    { id: 'facilities', label: 'সুবিধা', bn: 'সুবিধা' },
    { id: 'contact', label: 'যোগাযোগ', bn: 'যোগাযোগ' },
  ];

  const teachers = [
    {
      id: 1,
      name: 'মোঃ ফিরোজ আলম',
      initials: 'ফা',
      designation: 'ইনস্ট্রাক্টর (টেক) ইলেকট্রনিক্স ও বিভাগীয় প্রধান',
      faculty: 'ইলেকট্রনিক্স টেকনোলজি',
      department: 'ইলেকট্রনিক্স টেকনোলজি',
      email: 'kurigrampi@yahoo.com',
      officePhone: '+৮৮ ০২ ৫৮৭৭২৬০৪২',
      mobile: '+৮৮ ০১৭১৫২০৪২০৪',
      gradient: 'from-blue-600 to-cyan-500',
    },
    {
      id: 2,
      name: 'দীপঙ্কর সরকার',
      initials: 'দীসে',
      designation: 'ইনস্ট্রাক্টর (টেক) ইলেকট্রনিক্স',
      faculty: 'ইলেকট্রনিক্স টেকনোলজি',
      department: 'ইলেকট্রনিক্স টেকনোলজি',
      email: 'kurigrampi@yahoo.com',
      mobile: '+৮৮ ০১৯০৪১৭২৬৫০',
      gradient: 'from-purple-600 to-pink-500',
    },
    {
      id: 3,
      name: 'মো. মমতাজ আলী',
      initials: 'মা',
      designation: 'জুনিয়র ইনস্ট্রাক্টর (টেক) ইলেকট্রনিক্স (১ম শিফট)',
      faculty: 'ইলেকট্রনিক্স টেকনোলজি',
      department: 'ইলেকট্রনিক্স টেকনোলজি',
      email: 'kurigrampi@yahoo.com',
      mobile: '+৮৮ ০১৭৫২১৯৯৫৬৮',
      gradient: 'from-emerald-600 to-teal-500',
    },
  ];

  const departments = [
    { name: 'ইলেকট্রনিক্স টেকনোলজি', seats: 100, icon: Cpu, color: 'from-blue-500 to-cyan-500' },
    { name: 'কম্পিউটার টেকনোলজি', seats: 200, icon: Laptop, color: 'from-purple-500 to-pink-500' },
    { name: 'সিভিল টেকনোলজি', seats: 100, icon: Building2, color: 'from-amber-500 to-orange-500' },
    { name: 'মেকানিক্যাল টেকনোলজি', seats: 100, icon: Wrench, color: 'from-green-500 to-emerald-500' },
    { name: 'ইলেকট্রিক্যাল টেকনোলজি', seats: 100, icon: Zap, color: 'from-yellow-500 to-red-500' },
    { name: 'কনস্ট্রাকশন টেকনোলজি', seats: 100, icon: Shield, color: 'from-indigo-500 to-blue-500' },
    { name: 'আর্কিটেকচার এন্ড ইন্টেরিয়র ডিজাইন', seats: 200, icon: Lightbulb, color: 'from-rose-500 to-pink-500' },
  ];

  const syllabusData = [
    {
      year: '১ম বছর',
      subjects: [
        'জেনারেল ম্যাথমেটিক্স',
        'ফিজিক্স',
        'কেমিস্ট্রি',
        'ইঞ্জিনিয়ারিং ড্রয়িং',
        'বাংলা',
        'ইংরেজি',
        'ওয়ার্কশপ প্র্যাকটিস',
        'বেসিক ইলেকট্রনিক্স',
      ],
    },
    {
      year: '২য় বছর',
      subjects: [
        'অ্যাপ্লায়েড ম্যাথমেটিক্স',
        'এলেকট্রনিক ডিভাইস ও সার্কিট',
        'ডিজিটাল ইলেকট্রনিক্স',
        'নেটওয়ার্ক অ্যানালাইসিস',
        'বেসিক ইলেকট্রিক্যাল ইঞ্জিনিয়ারিং',
        'ইলেকট্রনিক ইনস্ট্রুমেন্টেশন',
        'ডাটা স্ট্রাকচার',
        'মাইক্রোপ্রসেসর',
      ],
    },
    {
      year: '৩য় বছর',
      subjects: [
        'অ্যানালগ কমিউনিকেশন',
        'ডিজিটাল কমিউনিকেশন',
        'লিনিয়ার IC অ্যাপ্লিকেশন',
        'মাইক্রোকন্ট্রোলার',
        'ডিজিটাল সিগন্যাল প্রসেসিং',
        'কন্ট্রোল সিস্টেম',
        'VLSI ডিজাইন',
        'ইন্ডাস্ট্রিয়াল ট্রেনিং',
      ],
    },
    {
      year: '৪র্থ বছর',
      subjects: [
        'ফাইবার অপটিক কমিউনিকেশন',
        'ওয়্যারলেস কমিউনিকেশন',
        'ইম্বেডেড সিস্টেম',
        'রাইফ ও মাইক্রোওয়েভ ইঞ্জিনিয়ারিং',
        'পাওয়ার ইলেকট্রনিক্স',
        'অ্যান্টেনা ও ওয়েভ প্রোপাগেশন',
        'ফাইনাল প্রজেক্ট',
        'সেমিনার',
      ],
    },
  ];

  const careers = [
    { title: 'ইলেকট্রনিক্স ইঞ্জিনিয়ার', desc: 'গভর্নমেন্ট ও প্রাইভেট সেক্টরে ইলেকট্রনিক্স ডিজাইন ও ডেভেলপমেন্ট কাজ', icon: Cpu },
    { title: 'টেলিকম ইঞ্জিনিয়ার', desc: 'মোবাইল নেটওয়ার্ক, ফাইবার অপটিক ও টেলিকমুনিকেশন সেটআপ কাজ', icon: Radio },
    { title: 'QC/QA ইঞ্জিনিয়ার', desc: 'ইলেকট্রনিক্স পণ্যের কোয়ালিটি চেক ও নিয়ন্ত্রণ', icon: Microscope },
    { title: 'নেটওয়ার্ক ইঞ্জিনিয়ার', desc: 'কমিউনিকেশন নেটওয়ার্ক ডিজাইন ও মেইনটেন্যান্স', icon: Network },
    { title: 'R&D ইঞ্জিনিয়ার', desc: 'নতুন প্রযুক্তি গবেষণা ও উন্নয়নে কাজ', icon: Lightbulb },
    { title: 'ইন্সট্রুমেন্টেশন ইঞ্জিনিয়ার', desc: 'শিল্পক্ষেত্রে ইলেকট্রনিক ইন্সট্রুমেন্ট সেটআপ ও মেইনটেন্যান্স', icon: Zap },
  ];

  const facilities = [
    { icon: Laptop, title: 'কম্পিউটার ল্যাব', desc: 'আধুনিক কম্পিউটার সজ্জিত ল্যাবরেটরি', color: 'bg-blue-100 text-blue-600' },
    { icon: Cpu, title: 'ইলেকট্রনিক্স ল্যাব', desc: 'সর্বোচ্চ মানের ইলেকট্রনিক্স সরঞ্জামসম্পন্ন ল্যাব', color: 'bg-purple-100 text-purple-600' },
    { icon: BookOpen, title: 'লাইব্রেরি', desc: 'বিস্তৃত বই ও রেফারেন্স ম্যাটেরিয়াল সংগ্রহ', color: 'bg-green-100 text-green-600' },
    { icon: Globe, title: 'ইন্টারনেট সুবিধা', desc: 'সম্পূর্ণ ওয়াইফাই কভারেজ ও কম্পিউটার ল্যাবে ইন্টারনেট', color: 'bg-cyan-100 text-cyan-600' },
    { icon: Star, title: 'খেলার মাঠ', desc: 'ক্রিকেট, ফুটবল, ভলিবল ও অন্যান্য খেলাধুলার সুযোগ', color: 'bg-amber-100 text-amber-600' },
    { icon: Shield, title: 'হাসপাতাল', desc: 'ইমার্জেন্সি চিকিৎসা সেবা ও মedicinal সুবিধা', color: 'bg-red-100 text-red-600' },
    { icon: Users, title: 'হোস্টেল', desc: 'ছাত্র ও ছাত্রীদের জন্য আলাদা হোস্টেল সুবিধা', color: 'bg-indigo-100 text-indigo-600' },
    { icon: Heart, title: 'মেডিকেল সেবা', desc: 'পরিচালক ও মেডিকেল অফিসারের তত্ত্বাবধানে স্বাস্থ্যসেবা', color: 'bg-pink-100 text-pink-600' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${scrolled ? 'bg-gradient-to-br from-blue-600 to-cyan-500' : 'bg-white/20 backdrop-blur-sm'} transition-all`}>
                <GraduationCap className={`w-6 h-6 ${scrolled ? 'text-white' : 'text-white'}`} />
              </div>
              <div>
                <span className={`font-bold text-sm lg:text-base ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                  কুড়িগ্রাম পলিটেকনিক
                </span>
                <p className={`text-xs ${scrolled ? 'text-gray-500' : 'text-white/80'} hidden sm:block`}>
                  Electronics Technology
                </p>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? scrolled
                        ? 'bg-blue-50 text-blue-700'
                        : 'bg-white/20 text-white'
                      : scrolled
                      ? 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.bn}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t shadow-xl">
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {item.bn}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700">
          {/* Animated patterns */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          </div>
          {/* Grid pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                সরকারি পলিটেকনিক ইনস্টিটিউট
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                কুড়িগ্রাম{' '}
                <span className="bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">
                  পলিটেকনিক
                </span>{' '}
                ইনস্টিটিউট
              </h1>
              <h2 className="text-xl sm:text-2xl text-cyan-200 mb-6 font-medium">
                ইলেকট্রনিক্স টেকনোলজি বিভাগ
              </h2>
              <p className="text-lg text-blue-100/80 mb-8 max-w-xl mx-auto lg:mx-0">
                বাংলাদেশ প্রযুক্তি শিক্ষা বোর্ড (BTEB) কর্তৃক পরিচালিত ৪ বছরের ডিপ্লোমা ইঞ্জিনিয়ারিং কোর্স। 
                ইলেকট্রনিক্স ইঞ্জিনিয়ারিংয়ের আধুনিক জ্ঞান ও দক্ষতার মাধ্যমে উজ্জ্বল ক্যারিয়ার গড়ুন।
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollTo('department')}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all hover:-translate-y-0.5 flex items-center gap-2"
                >
                  বিস্তারিত দেখুন <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollTo('contact')}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all"
                >
                  যোগাযোগ করুন
                </button>
              </div>
            </div>

            {/* Hero Cards */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                    <Award className="w-10 h-10 text-cyan-300 mb-3" />
                    <h3 className="text-2xl font-bold text-white">৪ বছর</h3>
                    <p className="text-blue-200/70 text-sm">ডিপ্লোমা কোর্স</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                    <Users className="w-10 h-10 text-green-300 mb-3" />
                    <h3 className="text-2xl font-bold text-white">১০০</h3>
                    <p className="text-blue-200/70 text-sm">আসন সংখ্যা</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                    <Building2 className="w-10 h-10 text-purple-300 mb-3" />
                    <h3 className="text-2xl font-bold text-white">৭টি</h3>
                    <p className="text-blue-200/70 text-sm">বিভাগ</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                    <Calendar className="w-10 h-10 text-amber-300 mb-3" />
                    <h3 className="text-2xl font-bold text-white">১ম ও ২য়</h3>
                    <p className="text-blue-200/70 text-sm">শিফট</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-white/50" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              পরিচিতি
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              প্রতিষ্ঠানের সম্পর্কে
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              কুড়িগ্রাম পলিটেকনিক ইনস্টিটিউট সম্পর্কে বিস্তারিত তথ্য
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-blue-600" />
                  প্রতিষ্ঠানের তথ্য
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  কুড়িগ্রাম পলিটেকনিক ইনস্টিটিউট বাংলাদেশের কুড়িগ্রাম জেলার একটি শীর্ষস্থানীয় সরকারি প্রযুক্তি শিক্ষা প্রতিষ্ঠান। 
                  প্রতিষ্ঠানটি প্রযুক্তি শিক্ষা দপ্তরের নিয়ন্ত্রণাধীন এবং একাডেমিক কার্যক্রম পরিচালনা করে বাংলাদেশ প্রযুক্তি 
                  শিক্ষা বোর্ড (BTEB)। কুড়িগ্রামে এটি একমাত্র সরকারি পলিটেকনিক ইনস্টিটিউট।
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                  শিক্ষা ব্যবস্থা
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  এই প্রতিষ্ঠানে ডিপ্লোমা ইঞ্জিনিয়ারিং কোর্স পরিচালিত হয় বিভিন্ন প্রযুক্তি বিভাগে। 
                  কোর্স সম্পন্ন করার পর শিক্ষার্থীরা চাকরির বাজারে প্রবেশ করতে পারে এবং জাতীয় উন্নয়ন কাজে 
                  নিয়োজিত হতে পারে। প্রতিষ্ঠানটি ১ম ও ২য় শিফটে কোর্স পরিচালনা করে।
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  শিক্ষার্থী তথ্য
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  প্রতিষ্ঠানে মোট ৬৪০+ শিক্ষার্থী রয়েছে যাদের মধ্যে ৪৮৭ জন ছাত্র এবং ১৫৩ জন ছাত্রী শিক্ষা 
                 লাভ করছেন। সাতটি বিভাগে ৭০০+ আসন রয়েছে।
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">কেন কুড়িগ্রাম পলিটেকনিক?</h3>
                <div className="space-y-4">
                  {[
                    'কুড়িগ্রামের একমাত্র সরকারি পলিটেকনিক',
                    'BTEB কর্তৃক স্বীকৃত কোর্স',
                    'অভিজ্ঞ ও দক্ষ শিক্ষক দল',
                    'আধুনিক ল্যাবরেটরি ও সরঞ্জাম',
                    '১ম ও ২য় শিফটে কোর্স সুবিধা',
                    'চাকরির সুযোগসম্পন্ন ডিপ্লোমা',
                    'ছাত্র ও ছাত্রী উভয়ের জন্য সুযোগ',
                    'সাশ্রয়ী মাসিক টিউশন ফি',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-300 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-50">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
                  <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <h4 className="font-bold text-gray-900">BTEB</h4>
                  <p className="text-xs text-gray-500">স্বীকৃত প্রতিষ্ঠান</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
                  <Award className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                  <h4 className="font-bold text-gray-900">ডিপ্লোমা</h4>
                  <p className="text-xs text-gray-500">ইঞ্জিনিয়ারিং কোর্স</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Section */}
      <section id="department" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              বিভাগসমূহ
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              ইলেকট্রনিক্স টেকনোলজি বিভাগ
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              ইলেকট্রনিক্স টেকনোলজি বিভাগ সম্পর্কে বিস্তারিত তথ্য
            </p>
          </div>

          {/* Electronics Technology Featured Card */}
          <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 rounded-3xl p-8 lg:p-12 border border-blue-100 mb-16">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">ইলেকট্রনিক্স টেকনোলজি</h3>
                    <p className="text-blue-600 font-medium">Electronics Technology</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  ইলেকট্রনিক্স টেকনোলজি বিভাগ হলো কুড়িগ্রাম পলিটেকনিক ইনস্টিটিউটের অন্যতম জনপ্রিয় বিভাগ। 
                  এই ৪ বছরের ডিপ্লোমা কোর্সে শিক্ষার্থীরা বেসিক ইলেকট্রনিক্স থেকে শুরু করে অ্যাডভান্সড কমিউনিকেশন, 
                  ডিজিটাল সিগন্যাল প্রসেসিং, মাইক্রোকন্ট্রোলার, VLSI ডিজাইন এবং রাইফ ইঞ্জিনিয়ারিং পর্যন্ত 
                  আধুনিক ইলেকট্রনিক্স প্রযুক্তি শেখে।
                </p>
                <p className="text-gray-600 leading-relaxed">
                  কোর্স কোড: ৬৬৮ | আসন সংখ্যা: ১০০ | শিফট: ১ম ও ২য় শিফট
                </p>
                <div className="flex flex-wrap gap-3">
                  {['ইলেকট্রনিক সার্কিট', 'ডিজিটাল কমিউনিকেশন', 'মাইক্রোকন্ট্রোলার', 'VLSI', 'ইম্বেডেড সিস্টেম', 'ডিজিটাল সিগন্যাল প্রসেসিং'].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 bg-white rounded-lg text-sm text-gray-700 border border-gray-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <div className="text-sm text-gray-500 mb-1">কোর্সের মেয়াদ</div>
                  <div className="text-xl font-bold text-gray-900">৪ বছর</div>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <div className="text-sm text-gray-500 mb-1">আসন সংখ্যা</div>
                  <div className="text-xl font-bold text-gray-900">১০০</div>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <div className="text-sm text-gray-500 mb-1">ডিগ্রি</div>
                  <div className="text-xl font-bold text-gray-900">ডিপ্লোমা ইঞ্জিনিয়ারিং</div>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <div className="text-sm text-gray-500 mb-1">শিফট</div>
                  <div className="text-xl font-bold text-gray-900">১ম ও ২য়</div>
                </div>
              </div>
            </div>
          </div>

          {/* All Departments */}
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">সকল বিভাগসমূহ</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {departments.map((dept, i) => {
              const Icon = dept.icon;
              return (
                <div
                  key={i}
                  className={`bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group ${
                    dept.name === 'ইলেকট্রনিক্স টেকনোলজি' ? 'ring-2 ring-blue-500 bg-blue-50/50' : ''
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${dept.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{dept.name}</h4>
                  <p className="text-sm text-gray-500">{dept.seats} আসন</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section id="teachers" className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              শিক্ষকবৃন্দ
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              ইলেকট্রনিক্স টেকনোলজি শিক্ষকবৃন্দ
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              অভিজ্ঞ ও দক্ষ শিক্ষকগণ কর্তৃক পরিচালিত কোর্স
            </p>
          </div>

          {/* Department Head Featured */}
          <div className="max-w-2xl mx-auto mb-12">
            {teachers.filter(t => t.designation.includes('বিভাগীয় প্রধান')).map((teacher) => (
              <div key={teacher.id} className="bg-white rounded-3xl border-2 border-blue-200 overflow-hidden shadow-lg">
                <div className={`bg-gradient-to-r ${teacher.gradient} p-6 text-center text-white relative`}>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                      বিভাগীয় প্রধান
                    </span>
                  </div>
                  <div className={`w-28 h-28 mx-auto rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-white/30 mb-4`}>
                    <User className="w-14 h-14 text-white/90" />
                  </div>
                  <h3 className="text-xl font-bold">{teacher.name}</h3>
                  <p className="text-white/80 text-sm mt-1">{teacher.designation}</p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500">ইমেইল</p>
                        <p className="text-sm text-gray-700">{teacher.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500">অফিস ফোন</p>
                        <p className="text-sm text-gray-700">{teacher.officePhone}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <Phone className="w-5 h-5 text-purple-500 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500">মোবাইল</p>
                        <p className="text-sm text-gray-700">{teacher.mobile}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <GraduationCap className="w-5 h-5 text-amber-500 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500">অনুষদ</p>
                        <p className="text-sm text-gray-700">{teacher.faculty}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Teachers Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachers.filter(t => !t.designation.includes('বিভাগীয় প্রধান')).map((teacher) => (
              <div key={teacher.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all group">
                <div className={`bg-gradient-to-r ${teacher.gradient} p-6 text-center text-white relative`}>
                  <div className={`w-24 h-24 mx-auto rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-white/30 mb-3 group-hover:scale-110 transition-transform`}>
                    <User className="w-12 h-12 text-white/90" />
                  </div>
                  <h3 className="text-lg font-bold">{teacher.name}</h3>
                  <p className="text-white/80 text-xs mt-1">{teacher.designation}</p>
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-purple-500" />
                    </div>
                    <p className="text-sm text-gray-600">{teacher.email}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-green-500" />
                    </div>
                    <p className="text-sm text-gray-600">{teacher.mobile}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-4 h-4 text-blue-500" />
                    </div>
                    <p className="text-sm text-gray-600">{teacher.faculty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Link */}
          <div className="text-center mt-10">
            <a
              href="https://kurigram.polytech.gov.bd/site/view/teacher_list_faculty/Electronics_Technology"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-blue-200 text-blue-600 rounded-xl font-medium hover:bg-blue-50 transition-all hover:-translate-y-0.5"
            >
              সম্পূর্ণ তালিকা দেখুন <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Syllabus Section */}
      <section id="syllabus" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              শিক্ষাক্রম
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              ইলেকট্রনিক্স টেকনোলজি সিলেবাস
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              BTEB কর্তৃক অনুমোদিত ৪ বছরের শিক্ষাক্রম ও পাঠ্যবিষয়সমূহ
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {syllabusData.map((yearData, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                      {yearData.year}
                    </div>
                    <span className="font-bold text-gray-900 text-lg">{yearData.year} - পাঠ্যবিষয়সমূহ</span>
                  </div>
                  {openAccordion === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {openAccordion === index && (
                  <div className="px-6 pb-6">
                    <div className="grid sm:grid-cols-2 gap-3">
                      {yearData.subjects.map((subject: string, i: number) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{subject}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Course Details */}
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm">
              <BookOpen className="w-10 h-10 text-blue-500 mx-auto mb-3" />
              <h4 className="font-bold text-gray-900 mb-1">বিল্ট-আপ প্রজেক্ট</h4>
              <p className="text-sm text-gray-500">প্রতিটি সেমিস্টারে প্র্যাকটিক্যাল প্রজেক্ট</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm">
              <Microscope className="w-10 h-10 text-green-500 mx-auto mb-3" />
              <h4 className="font-bold text-gray-900 mb-1">ল্যাব ক্লাস</h4>
              <p className="text-sm text-gray-500">আধুনিক ল্যাবে হাতে-কলমে অভিজ্ঞতা</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm">
              <TrendingUp className="w-10 h-10 text-purple-500 mx-auto mb-3" />
              <h4 className="font-bold text-gray-900 mb-1">ইন্ডাস্ট্রিয়াল ট্রেনিং</h4>
              <p className="text-sm text-gray-500">৩য় বছরে শিল্পক্ষেত্রে প্রশিক্ষণ</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm">
              <Award className="w-10 h-10 text-amber-500 mx-auto mb-3" />
              <h4 className="font-bold text-gray-900 mb-1">ফাইনাল প্রজেক্ট</h4>
              <p className="text-sm text-gray-500">৪র্থ বছরে রিসার্চ ও ফাইনাল প্রজেক্ট</p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section id="career" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              ক্যারিয়ার
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              ক্যারিয়ার সম্ভাবনা
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              ডিপ্লোমা সম্পন্ন করার পর আপনার ক্যারিয়ারের বিভিন্ন সম্ভাবনা
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {careers.map((career, i) => {
              const Icon = career.icon;
              return (
                <div key={i} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{career.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{career.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Further Study */}
          <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-3xl p-8 lg:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  আরও উচ্চশিক্ষার সুযোগ
                </h3>
                <p className="text-blue-100/80 leading-relaxed mb-6">
                  ডিপ্লোমা ইঞ্জিনিয়ারিং কোর্স সম্পন্ন করার পর শিক্ষার্থীরা সরাসরি 
                  স্লাইডিং স্কিমের মাধ্যমে বিএইউইটিসহ বিভিন্ন বিশ্ববিদ্যালয়ের ৩য় বা ৪র্থ 
                  সেমিস্টারে ভর্তি হতে পারে।
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white/10 rounded-lg text-sm">বিএইউইটি</span>
                  <span className="px-4 py-2 bg-white/10 rounded-lg text-sm">রুয়েট</span>
                  <span className="px-4 py-2 bg-white/10 rounded-lg text-sm">বুয়েট কোটা</span>
                  <span className="px-4 py-2 bg-white/10 rounded-lg text-sm">স্লাইডিং স্কিম</span>
                  <span className="px-4 py-2 bg-white/10 rounded-lg text-sm">সরকারি চাকরি</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <Briefcase className="w-8 h-8 text-cyan-300 mb-3" />
                  <h4 className="font-bold mb-1">সরকারি চাকরি</h4>
                  <p className="text-sm text-blue-200/70">জেই সিভিল সার্ভিস, বিটিআরসি</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <GraduationCap className="w-8 h-8 text-green-300 mb-3" />
                  <h4 className="font-bold mb-1">উচ্চশিক্ষা</h4>
                  <p className="text-sm text-blue-200/70">স্লাইডিং স্কিমের মাধ্যমে B.Sc</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <TrendingUp className="w-8 h-8 text-amber-300 mb-3" />
                  <h4 className="font-bold mb-1">বহিঃদেশে চাকরি</h4>
                  <p className="text-sm text-blue-200/70">GCC দেশে ইলেকট্রনিক্স ইঞ্জিনিয়ার</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <Lightbulb className="w-8 h-8 text-purple-300 mb-3" />
                  <h4 className="font-bold mb-1">উদ্যোক্তা</h4>
                  <p className="text-sm text-blue-200/70">নিজের ইলেকট্রনিক্স ব্যবসা</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              সুবিধাসমূহ
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              ক্যাম্পাস সুবিধা
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              কুড়িগ্রাম পলিটেকনিক ইনস্টিটিউটের শিক্ষার্থীদের জন্য বিভিন্ন সুবিধা
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, i) => {
              const Icon = facility.icon;
              return (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all group">
                  <div className={`w-14 h-14 rounded-xl ${facility.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{facility.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{facility.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              যোগাযোগ
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              যোগাযোগ করুন
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              কোনো প্রশ্ন থাকলে আমাদের সাথে যোগাযোগ করুন
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-4">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">ঠিকানা</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      কুড়িগ্রাম পলিটেকনিক ইনস্টিটিউট,<br />
                      সদর, কুড়িগ্রাম-৫৬০০,<br />
                      বাংলাদেশ
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">ফোন</h4>
                    <p className="text-gray-600 text-sm">+৮৮০ ১৭২৩-৩১৩১৬১</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">ইমেইল</h4>
                    <p className="text-gray-600 text-sm">principal@kpik.gov.bd</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">ওয়েবসাইট</h4>
                    <p className="text-gray-600 text-sm">kpik.gov.bd</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">কর্মঘণ্টা</h4>
                    <p className="text-gray-600 text-sm">
                      শনি - বৃহঃ: সকাল ৯:০০ - বিকাল ৫:০০<br />
                      শুক্র: বন্ধ
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl overflow-hidden h-full min-h-[400px] relative">
                <iframe
                  title="KPIK Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.5!2d89.64!3d25.805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ4JzE4LjAiTiA4OcKwMzgnMjQuMCJF!5e0!3m2!1sen!2sbd!4v1234567890"
                  className="w-full h-full min-h-[400px] border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold">কুড়িগ্রাম পলিটেকনিক</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                কুড়িগ্রামের একমাত্র সরকারি পলিটেকনিক ইনস্টিটিউট। 
                BTEB স্বীকৃত ডিপ্লোমা ইঞ্জিনিয়ারিং কোর্স।
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">দ্রুত লিংক</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollTo(item.id)}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {item.bn}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">বিভাগসমূহ</h4>
              <ul className="space-y-2">
                {departments.slice(0, 5).map((dept, i) => (
                  <li key={i}>
                    <span className="text-gray-400 text-sm">{dept.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">যোগাযোগ</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4" />
                  সদর, কুড়িগ্রাম-৫৬০০
                </li>
                <li className="flex items-center gap-2 text-gray-400 text-sm">
                  <Phone className="w-4 h-4" />
                  +৮৮০ ১৭২৩-৩১৩১৬১
                </li>
                <li className="flex items-center gap-2 text-gray-400 text-sm">
                  <Mail className="w-4 h-4" />
                  principal@kpik.gov.bd
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-gray-500 text-sm">
                © ২০২৫ কুড়িগ্রাম পলিটেকনিক ইনস্টিটিউট। সর্বস্বত্ব সংরক্ষিত।
              </p>
              <p className="text-gray-600 text-xs">
                বাংলাদেশ প্রযুক্তি শিক্ষা বোর্ড (BTEB) কর্তৃক পরিচালিত
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {scrolled && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:-translate-y-1"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Home, ChevronRight, Trash2, Plus, Minus, Check, Truck, Mail, MapPin, Phone } from 'lucide-react';

export default function AyushLenses() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState([]);
  const [orderStatus, setOrderStatus] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  
  const products = {
    normal: [
      {
        id: 1,
        name: 'Classic Clear Reading',
        price: 1500,
        category: 'normal',
        image: 'https://images.unsplash.com/photo-1556306510-31ca015374b0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Comfortable daily wear glasses with anti-reflective coating'
      },
      {
        id: 2,
        name: 'Business Professional',
        price: 2000,
        category: 'normal',
        image: 'https://images.unsplash.com/photo-1595505345098-59eae728c402?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Premium frames for professional environments'
      },
      {
        id: 3,
        name: 'Blue Light Filter',
        price: 1800,
        category: 'normal',
        image: 'https://plus.unsplash.com/premium_photo-1734664184395-4691249a1899?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Reduces digital screen strain and fatigue'
      },
      {
        id: 4,
        name: 'Vintage Style Brown',
        price: 2200,
        category: 'normal',
        image: 'https://images.unsplash.com/photo-1697827320369-444d590cbcbb?q=80&w=1217&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Timeless design with modern comfort'
      },
      {
        id: 5,
        name: 'Slim Metal Frame',
        price: 2500,
        category: 'normal',
        image: 'https://images.unsplash.com/photo-1646084081219-1090f72a531c?q=80&w=996&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Lightweight titanium construction'
      },
      {
        id: 6,
        name: 'Cat Eye Trendy',
        price: 1900,
        category: 'normal',
        image: 'https://images.unsplash.com/photo-1652837345706-6a0f9c0148c0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Fashionable and elegant design'
      }
    ],
    sunglasses: [
      {
        id: 7,
        name: 'UV Protection Black',
        price: 3000,
        category: 'sunglasses',
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop&q=80',
        description: '100% UV protection for outdoor activities'
      },
      {
        id: 8,
        name: 'Polarized Blue Lens',
        price: 3500,
        category: 'sunglasses',
        image: 'https://images.unsplash.com/photo-1678550689244-9ab1e19acc0a?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Eliminates glare from reflective surfaces'
      },
      {
        id: 9,
        name: 'Aviator Gold',
        price: 4000,
        category: 'sunglasses',
        image: 'https://images.unsplash.com/photo-1774791697891-00796be50f2b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Classic pilot style with modern lens technology'
      },
      {
        id: 10,
        name: 'Wayfarer Brown Shades',
        price: 3200,
        category: 'sunglasses',
        image: 'https://images.unsplash.com/photo-1691414920085-5b2e3d2478a4?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Versatile warm tone for all face shapes'
      },
      {
        id: 11,
        name: 'Oversized Mirror',
        price: 3800,
        category: 'sunglasses',
        image: 'https://images.unsplash.com/photo-1718579631572-c2016d5dcd85?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Trendy oversized design with mirrored lens'
      },
      {
        id: 12,
        name: 'Sports Wrap Around',
        price: 2800,
        category: 'sunglasses',
        image: 'https://images.unsplash.com/photo-1708799366362-f3533dd266c2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Perfect for sports and outdoor adventures'
      }
    ],
    swim: [
      {
        id: 13,
        name: 'Clear Water Vision',
        price: 1200,
        category: 'swim',
        image: 'https://contents.mediadecathlon.com/p2189925/sq/k$688077231dded81ddd94e5b63b6266a3/%E0%B9%81%E0%B8%A7%E0%B9%88%E0%B8%99%E0%B8%95%E0%B8%B2%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%A3%E0%B8%B8%E0%B9%88%E0%B8%99-%E0%B8%82%E0%B8%99%E0%B8%B2%E0%B8%94-%E0%B9%80%E0%B8%A5%E0%B8%99%E0%B8%AA%E0%B9%8C%E0%B9%83%E0%B8%AA-%E0%B8%AA%E0%B8%B5%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99-8854144.jpg?f=480x480&format=auto',
        description: 'Crystal clear underwater visibility'
      },
      {
        id: 14,
        name: 'Anti-Fog Premium',
        price: 1500,
        category: 'swim',
        image: 'https://contents.mediadecathlon.com/p2562746/sq/k$5c71d7b4aa422c07521596a62975c5e4/%E0%B9%81%E0%B8%A7%E0%B9%88%E0%B8%99%E0%B8%95%E0%B8%B2%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%99%E0%B9%89%E0%B8%B3-%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B9%88%E0%B8%99-%E0%B8%AA%E0%B8%B5%E0%B8%9F%E0%B9%89%E0%B8%B2-%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%A7-8876903.jpg?f=480x480&format=auto',
        description: 'Advanced anti-fog coating technology'
      },
      {
        id: 15,
        name: 'Professional Racing',
        price: 2000,
        category: 'swim',
        image: 'https://contents.mediadecathlon.com/p2042633/sq/k$78ba777fac91f6f6cb6def454009d9f2/%E0%B9%81%E0%B8%A7%E0%B9%88%E0%B8%99%E0%B8%95%E0%B8%B2%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B9%80%E0%B8%A5%E0%B8%99%E0%B8%AA%E0%B9%8C%E0%B9%83%E0%B8%AA%E0%B8%82%E0%B8%99%E0%B8%B2%E0%B8%94%E0%B9%80%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%A3%E0%B8%B8%E0%B9%88%E0%B8%99-%E0%B8%AA%E0%B8%B5%E0%B9%80%E0%B8%97%E0%B8%B2-8616684.jpg?f=480x480&format=auto',
        description: 'Hydrodynamic design for competitive swimmers'
      },
      {
        id: 16,
        name: 'Kids Comfortable Fit',
        price: 800,
        category: 'swim',
        image: 'https://contents.mediadecathlon.com/p2449476/k$493e3e3e833887577256d6b753bd5e58/swimming-goggles-soft-clear-lenses-size-small-blue-yellow-decathlon-8797654.jpg?f=768x0&format=auto',
        description: 'Safe and comfortable for children'
      },
      {
        id: 17,
        name: 'Competitive Speed',
        price: 2500,
        category: 'swim',
        image: 'https://contents.mediadecathlon.com/p3066098/sq/k$2819f58cc6ea64def5fc201a7ff43d55/%E0%B9%81%E0%B8%A7%E0%B9%88%E0%B8%99%E0%B8%95%E0%B8%B2%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B9%82%E0%B8%9E%E0%B8%A5%E0%B8%B2%E0%B9%84%E0%B8%A3%E0%B8%8B%E0%B9%8C%E0%B8%A3%E0%B8%B8%E0%B9%88%E0%B8%99-%E0%B8%AA%E0%B8%B5%E0%B8%94%E0%B8%B3-%E0%B9%80%E0%B8%97%E0%B8%B2-8982501.jpg?f=480x480&format=auto',
        description: 'Designed for competitive swimmers'
      },
      {
        id: 18,
        name: 'Leisure Pool Goggles',
        price: 1300,
        category: 'swim',
        image: 'https://contents.mediadecathlon.com/p2030783/sq/k$1112ea055c7486431a80526b26fe04b9/%E0%B9%81%E0%B8%A7%E0%B9%88%E0%B8%99%E0%B8%95%E0%B8%B2%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B9%80%E0%B8%A5%E0%B8%99%E0%B8%AA%E0%B9%8C%E0%B9%83%E0%B8%AA%E0%B8%82%E0%B8%99%E0%B8%B2%E0%B8%94-%E0%B8%A3%E0%B8%B8%E0%B9%88%E0%B8%99-%E0%B8%AA%E0%B8%B5%E0%B8%94%E0%B8%B3-8669830.jpg?f=480x480&format=auto',
        description: 'Perfect for casual pool swimming'
      }
    ],
    kids: [
      {
        id: 19,
        name: 'Pink Cute Frames',
        price: 900,
        category: 'kids',
        image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//h/i/pink-transparent-pink-tortoise-full-rim-round-kids--8-12-yrs--hooper-flexi-hooper-hp-e15083l-c2-eyeglasses_pink-transparent-pink-tortoise-full-rim-round-kids-(8-12-yrs)-hooper-flexi-hooper-hp-e15083l-c2-eyeglasses_g_5310_9_21_22_22_march23.jpg.jpg',
        description: 'Colorful and fun for active kids'
      },
      {
        id: 20,
        name: 'Blue Power Design',
        price: 1100,
        category: 'kids',
        image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//h/i/kids-glasses:-sky-blue-full-rim-wayfarer-hooper-8-12-yrs-tr-essentials-hp-e17319-l-c1-eyeglasses_o_dsc9531.jpg',
        description: 'Kid-approved trendy design'
      },
      {
        id: 21,
        name: 'Rainbow Flexible',
        price: 1000,
        category: 'kids',
        image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//h/i/blue-transparent-pink-purple-full-rim-round-kids--5-8-yrs--hooper-flexi-hooper-hp-e15083m-c3-eyeglasses_blue-transparent-pink-purple-full-rim-round-kids-(5-8-yrs)-hooper-flexi-hooper-hp-e15083m-c3-eyeglasses_g_8787_9_21_22_22_march23.jpg.jpg',
        description: 'Flexible frames that bend without breaking'
      },
      {
        id: 22,
        name: 'Mini Aviator Cool',
        price: 1300,
        category: 'kids',
        image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//h/i/kids-glasses:-black-blue-full-rim-rectangle-hooper-8-12-yrs-tr-essentials-hp-e17320-l-c2-eyeglasses_o_dsc9450.jpg',
        description: 'Scaled-down classic pilot style'
      },
      {
        id: 23,
        name: 'Sparkle Star Design',
        price: 950,
        category: 'kids',
        image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//h/i/kids-glasses:-purple-full-rim-wayfarer-hooper-5-8-yrs-tr-essentials-hp-e17319-m-c2-eyeglasses_o_dsc9378.jpg',
        description: 'Sparkling accents kids will love'
      },
      {
        id: 24,
        name: 'Dino Adventure',
        price: 1200,
        category: 'kids',
        image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//h/i/kids-glasses:-blue-sky-blue-full-rim-round-kids--8-12-yrs--hooper-flexi-hooper-hp-e10003-c2_hooper-hp-e10003-c2-eyeglasses_g_5789_22_march23.jpg.jpg ',
        description: 'Fun themed design for imagination'
      }
    ]
  };

  const categories = [
    { key: 'normal', name: 'Daily Wear', description: 'Comfortable for everyday use' },
    { key: 'sunglasses', name: 'Sunglasses', description: 'UV protection & style' },
    { key: 'swim', name: 'Swim Glasses', description: 'For water activities' },
    { key: 'kids', name: 'Kids Glasses', description: 'Designed for children' }
  ];

  // Cart Functions
  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      ));
    }
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const processPayment = () => {
    const orderId = 'AYL' + Math.random().toString(36).substr(2, 9).toUpperCase();
    const deliveryDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    setOrderStatus({
      orderId,
      status: 'confirmed',
      deliveryDate,
      items: cart,
      total: cartTotal
    });
    setCart([]);
    setCurrentPage('order');
  };

  // Search Function
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    const allProducts = Object.values(products).flat();
    const results = allProducts.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  const performSearch = () => {
    if (searchQuery.trim()) {
      setCurrentPage('search');
    }
  };

  // HEADER COMPONENT
  const Header = () => (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => setCurrentPage('home')}
            className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition"
          >
            Ayush<span className="text-gray-700">Lenses</span>
          </button>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 mx-8 max-w-md">
            <div className="w-full flex gap-2">
              <input
                type="text"
                placeholder="Search glasses, brands, styles..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && performSearch()}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-sm"
              />
              <button
                onClick={performSearch}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-sm"
              >
                🔍
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <button
              onClick={() => setCurrentPage('home')}
              className="text-gray-700 hover:text-blue-600 transition font-medium text-sm"
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage('about')}
              className="text-gray-700 hover:text-blue-600 transition font-medium text-sm"
            >
              About Us
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="text-gray-700 hover:text-blue-600 transition font-medium text-sm"
            >
              Contact
            </button>
          </nav>

          <button
            onClick={() => setCurrentPage('cart')}
            className="relative flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="hidden sm:inline">{cartCount}</span>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-700"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mb-4">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search glasses..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && performSearch()}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-sm"
            />
            <button
              onClick={performSearch}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
            >
              🔍
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4 space-y-3">
            <button
              onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition font-medium py-2"
            >
              Home
            </button>
            <button
              onClick={() => { setCurrentPage('about'); setMobileMenuOpen(false); }}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition font-medium py-2"
            >
              About Us
            </button>
            <button
              onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition font-medium py-2"
            >
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );

  // HOME PAGE
  if (currentPage === 'home') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />

        {/* Hero Section */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                See the World Perfectly
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover premium eyewear for every moment of your life
              </p>
              <p className="text-lg text-gray-500">
                From daily wear to adventure
              </p>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-6">
            {categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => setCurrentPage(cat.key)}
                className="group bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition text-left"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                  {cat.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{cat.description}</p>
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:translate-x-2 transition">
                  Explore <ChevronRight className="w-4 h-4" />
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl mb-4"></div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Fast Delivery</h4>
                <p className="text-gray-600">Delivered in 3-5 business days</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4"></div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">100% Authentic</h4>
                <p className="text-gray-600">All products are genuine and certified</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4"></div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Easy Returns</h4>
                <p className="text-gray-600">30-day return policy, no questions asked</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // ABOUT US PAGE
  if (currentPage === 'about') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />

        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">About AyushLenses</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-4">
                  At AyushLenses, we believe that premium eyewear should be accessible to everyone. Our mission is to provide high-quality glasses for every occasion - from daily wear to adventure.
                </p>
                <p className="text-gray-600 mb-4">
                  We are dedicated to helping you see the world clearly and comfortably, with styles that suit your lifestyle.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>Premium quality glasses for all ages</li>
                  <li>Wide variety of styles and categories</li>
                  <li>Affordable prices with guaranteed authenticity</li>
                  <li>Fast and reliable delivery</li>
                  <li>Excellent customer service</li>
                  <li>30-day return policy</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Products</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
              <div className="text-3xl mb-4"></div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Daily Wear</h4>
              <p className="text-gray-600 text-sm">Comfortable glasses for everyday use</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
              <div className="text-3xl mb-4"></div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Sunglasses</h4>
              <p className="text-gray-600 text-sm">UV protection with style</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
              <div className="text-3xl mb-4"></div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Swim Glasses</h4>
              <p className="text-gray-600 text-sm">Perfect for water activities</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
              <div className="text-3xl mb-4"></div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Kids Glasses</h4>
              <p className="text-gray-600 text-sm">Fun designs for children</p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // CONTACT PAGE
  if (currentPage === 'contact') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Contact Us</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex gap-4 mb-4">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Address</h4>
                    <p className="text-gray-600">
                      AyushLenses Store<br/>
                      Nashik, Maharashtra<br/>
                      India - 422001
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex gap-4 mb-4">
                  <Phone className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Phone</h4>
                    <p className="text-gray-600">
                      +91 8765432100<br/>
                      +91 9876543210
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex gap-4 mb-4">
                  <Mail className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Email</h4>
                    <p className="text-gray-600">
                      support@ayushlenses.com<br/>
                      info@ayushlenses.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-900 font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-gray-900 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-gray-900 font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    placeholder="Your phone number"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-gray-900 font-medium mb-2">Message</label>
                  <textarea
                    placeholder="Your message"
                    rows="5"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // SEARCH RESULTS PAGE
  if (currentPage === 'search') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Search Results</h2>
            <p className="text-gray-600">
              {searchResults.length} results found for "<span className="font-semibold text-blue-600">{searchQuery}</span>"
            </p>
          </div>

          {searchResults.length === 0 ? (
            <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
              <div className="text-4xl mb-4">🔍</div>
              <p className="text-gray-600 text-lg mb-4">No products found matching your search</p>
              <p className="text-gray-500 mb-6">Try different keywords or browse our categories</p>
              <button
                onClick={() => setCurrentPage('home')}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
              >
                Back to Home
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {searchResults.map(product => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition"
                >
                  <div className="relative w-full h-72 bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1508296695146-367ec3be0d35?w=600&h=600&fit=crop&q=80';
                      }}
                    />
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      In Stock
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-blue-600">₹{product.price}</span>
                      <p className="text-xs text-gray-500 mt-1">Inclusive of all taxes</p>
                    </div>

                    <button
                      onClick={() => addToCart(product)}
                      className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                      + Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    );
  }

  // CATEGORY PAGE
  if (categories.map(c => c.key).includes(currentPage)) {
    const categoryProducts = products[currentPage];
    const categoryInfo = categories.find(c => c.key === currentPage);

    return (
      <div className="min-h-screen bg-gray-50">
        <Header />

        {/* Category Header */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h2 className="text-3xl font-bold text-gray-900">{categoryInfo.name}</h2>
            <p className="text-gray-600 mt-2">{categoryInfo.description}</p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            {categoryProducts.map(product => (
              <div
                key={product.id}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition"
              >
                <div className="relative w-full h-72 bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1508296695146-367ec3be0d35?w=600&h=600&fit=crop&q=80';
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    In Stock
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-blue-600">₹{product.price}</span>
                    <p className="text-xs text-gray-500 mt-1">Inclusive of all taxes</p>
                  </div>

                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
                  >
                    + Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  // CART PAGE
  if (currentPage === 'cart') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h2>

          {cart.length === 0 ? (
            <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
              <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg mb-6">Your cart is empty</p>
              <button
                onClick={() => setCurrentPage('home')}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
                {cart.map((item, index) => (
                  <div
                    key={item.id}
                    className={`flex items-center gap-6 p-6 ${
                      index !== cart.length - 1 ? 'border-b border-gray-200' : ''
                    }`}
                  >
                    <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1508296695146-367ec3be0d35?w=600&h=600&fit=crop&q=80';
                        }}
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                      <p className="text-gray-600 text-sm">₹{item.price}</p>
                    </div>

                    <div className="flex items-center border border-gray-300 rounded-lg bg-gray-50">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 text-gray-600 hover:bg-gray-100"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 py-2 text-gray-900 font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 text-gray-600 hover:bg-gray-100"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <span className="text-lg font-bold text-gray-900 w-28 text-right">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </span>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:bg-red-50 p-2 rounded-lg"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Cart Summary */}
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>

                <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>₹{cartTotal}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span>₹{Math.round(cartTotal * 0.18)}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-8">
                  <span className="text-xl font-bold text-gray-900">Total</span>
                  <span className="text-3xl font-bold text-blue-600">₹{cartTotal + Math.round(cartTotal * 0.18)}</span>
                </div>

                <button
                  onClick={() => setCurrentPage('checkout')}
                  className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition text-lg"
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </section>
      </div>
    );
  }

  // CHECKOUT PAGE
  if (currentPage === 'checkout') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="md:col-span-2 space-y-6">
              {/* Delivery Address */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Delivery Address</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600"
                  />
                  <input
                    type="text"
                    placeholder="Street Address"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="City"
                      className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600"
                    />
                    <input
                      type="text"
                      placeholder="Postal Code"
                      className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Payment Method</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-4 border-2 border-blue-600 rounded-lg bg-blue-50 cursor-pointer">
                    <input type="radio" name="payment" defaultChecked className="w-5 h-5" />
                    <span className="text-gray-900 font-medium">Credit / Debit Card</span>
                  </label>
                  <label className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer">
                    <input type="radio" name="payment" className="w-5 h-5" />
                    <span className="text-gray-900 font-medium">UPI / Net Banking</span>
                  </label>
                </div>
              </div>

              {/* Card Details */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Card Details</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Cardholder Name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 h-fit">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h3>

              <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1508296695146-367ec3be0d35?w=600&h=600&fit=crop&q=80';
                      }}
                    />
                    <div className="flex-1">
                      <p className="text-gray-900 font-medium text-sm">{item.name}</p>
                      <p className="text-gray-600 text-xs">Qty: {item.quantity}</p>
                      <p className="font-semibold text-gray-900 mt-1">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{cartTotal}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax (18%)</span>
                  <span>₹{Math.round(cartTotal * 0.18)}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="font-bold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-blue-600">₹{cartTotal + Math.round(cartTotal * 0.18)}</span>
              </div>

              <button
                onClick={processPayment}
                className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Complete Payment
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                Your payment information is secure and encrypted
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // ORDER CONFIRMATION PAGE
  if (currentPage === 'order' && orderStatus) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Success Message */}
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 rounded-full p-3">
                <Check className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h2>
            <p className="text-gray-600">Thank you for your purchase. Your order has been successfully placed.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Order Details */}
            <div className="md:col-span-2">
              {/* Order Info */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Order Details</h3>

                <div className="grid grid-cols-2 gap-6 mb-6 pb-6 border-b border-gray-200">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Order ID</p>
                    <p className="text-lg font-bold text-gray-900">{orderStatus.orderId}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Order Date</p>
                    <p className="text-lg font-bold text-gray-900">{new Date().toLocaleDateString('en-IN')}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Estimated Delivery</p>
                    <p className="text-lg font-bold text-gray-900">{orderStatus.deliveryDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Total Amount</p>
                    <p className="text-lg font-bold text-blue-600">₹{orderStatus.total + Math.round(orderStatus.total * 0.18)}</p>
                  </div>
                </div>

                <h4 className="font-bold text-gray-900 mb-4">Items Ordered</h4>
                <div className="space-y-3">
                  {orderStatus.items.map(item => (
                    <div key={item.id} className="flex gap-3 py-3 border-b border-gray-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1508296695146-367ec3be0d35?w=600&h=600&fit=crop&q=80';
                        }}
                      />
                      <div className="flex-1">
                        <p className="text-gray-900 font-semibold text-sm">{item.name}</p>
                        <p className="text-gray-600 text-xs">Quantity: {item.quantity}</p>
                        <p className="text-blue-600 font-bold text-sm mt-1">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Status */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Delivery Status</h3>

                <div className="space-y-4">
                  {/* Step 1 */}
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-2">
                        <Check className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="w-1 h-12 bg-green-300" />
                    </div>
                    <div className="pb-8">
                      <p className="font-bold text-gray-900">Order Confirmed</p>
                      <p className="text-sm text-gray-600">Your order has been successfully confirmed</p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-2">
                        <Check className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="w-1 h-12 bg-blue-300" />
                    </div>
                    <div className="pb-8">
                      <p className="font-bold text-gray-900">Ready for Shipment</p>
                      <p className="text-sm text-gray-600">Your package is being prepared for dispatch</p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <Truck className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">On the Way</p>
                      <p className="text-sm text-gray-600">Your package is on delivery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 h-fit">
              <h3 className="text-lg font-bold text-gray-900 mb-4">What's Next?</h3>

              <div className="space-y-4 mb-6">
                <div className="flex gap-3">
                  <span className="text-blue-600 font-bold">1</span>
                  <div>
                    <p className="font-medium text-gray-900">Confirm Receipt</p>
                    <p className="text-xs text-gray-600">Check your email for confirmation</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-blue-600 font-bold">2</span>
                  <div>
                    <p className="font-medium text-gray-900">Track Shipment</p>
                    <p className="text-xs text-gray-600">Get delivery updates</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-blue-600 font-bold">3</span>
                  <div>
                    <p className="font-medium text-gray-900">Receive Package</p>
                    <p className="text-xs text-gray-600">Sign for your delivery</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setCurrentPage('home')}
                className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition mb-3"
              >
                Continue Shopping
              </button>

              <button className="w-full border-2 border-blue-600 text-blue-600 font-bold py-3 rounded-lg hover:bg-blue-50 transition">
                Track Order
              </button>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Questions? <span className="text-blue-600 font-semibold cursor-pointer">Contact Support</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
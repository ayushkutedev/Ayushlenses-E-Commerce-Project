import React, { useState } from 'react';
import { ShoppingCart, Menu, X, ChevronRight, Trash2, Plus, Minus, Check, Truck, Mail, MapPin, Phone, ArrowLeft } from 'lucide-react';

function Header({ setCurrentPage, searchQuery, handleSearch, performSearch, cartCount, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between mb-3">

          <button onClick={() => setCurrentPage('home')} className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition shrink-0 focus:outline-none">
            Ayush<span className="text-gray-700">Lenses</span>
          </button>

          <div className="hidden md:flex flex-1 mx-8 max-w-md">
            <div className="w-full flex gap-2 items-stretch">
              <input
                type="text"
                placeholder="Search glasses, brands, styles..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && performSearch()}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-sm"
              />
              <button onClick={performSearch} className="px-5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium flex items-center justify-center">
                <span>🔍</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <nav className="hidden lg:flex items-center gap-6">
              <button onClick={() => setCurrentPage('home')} className="text-gray-700 hover:text-blue-600 font-medium text-sm focus:outline-none">Home</button>
              <button onClick={() => setCurrentPage('about')} className="text-gray-700 hover:text-blue-600 font-medium text-sm focus:outline-none">About Us</button>
              <button onClick={() => setCurrentPage('contact')} className="text-gray-700 hover:text-blue-600 font-medium text-sm focus:outline-none">Contact</button>
            </nav>

            <button onClick={() => setCurrentPage('cart')} className="relative flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium focus:outline-none">
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden sm:inline">{cartCount}</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-gray-700 focus:outline-none">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <div className="md:hidden mb-3">
          <div className="flex gap-2 items-stretch">
            <input
              type="text"
              placeholder="Search glasses..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && performSearch()}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-sm"
            />
            <button onClick={performSearch} className="px-5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium flex items-center justify-center"><span>🔍</span></button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-gray-200 pt-3 space-y-2">
            <button onClick={() => { setCurrentPage('home');    setMobileMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium py-2 focus:outline-none">Home</button>
            <button onClick={() => { setCurrentPage('about');   setMobileMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium py-2 focus:outline-none">About Us</button>
            <button onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium py-2 focus:outline-none">Contact</button>
          </nav>
        )}
      </div>
    </header>
  );
}

export default function AyushLenses() {
  const [currentPage,    setCurrentPage]    = useState('home');
  const [cart,           setCart]           = useState([]);
  const [orderStatus,    setOrderStatus]    = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery,    setSearchQuery]    = useState('');
  const [searchResults,  setSearchResults]  = useState([]);
  const [paymentMethod,  setPaymentMethod]  = useState('card');
  const [contactForm,    setContactForm]    = useState({ name: '', email: '', phone: '', message: '' });
  const [contactErrors,  setContactErrors]  = useState({});
  const [contactSuccess, setContactSuccess] = useState(false);

  const [checkoutForm, setCheckoutForm] = useState({
    fullName: '', email: '', phone: '', streetAddress: '', city: '', postalCode: '',
    cardNumber: '', expiry: '', cvv: '', cardholderName: '',
    upiId: '',
  });
  const [checkoutErrors, setCheckoutErrors] = useState({});

  const products = {
    normal: [
      { id: 1,  name: 'Classic Clear Reading',  price: 1500, category: 'normal',     image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//l/i/black-full-rim-square-lenskart-air-fusion-la-e13069-c1-eyeglasses_g_7876_2_27july23_14_1_2026.jpg',       description: 'Comfortable daily wear glasses with anti-reflective coating' },
      { id: 2,  name: 'Business Professional',  price: 2000, category: 'normal',     image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//l/i/black-full-rim-square-lenskart-air-fusion-la-e000127-c1-eyeglasses__dsc2456_27_08_2024.jpg',              description: 'Premium frames for professional environments' },
      { id: 3,  name: 'Blue Light Filter',      price: 1800, category: 'normal',     image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-sky-full-rim-square-air-essentials-la-e15417-w-c7-eyeglasses_g_6031_16_1_2026.jpg',                  description: 'Reduces digital screen strain and fatigue' },
      { id: 4,  name: 'Vintage Style Brown',    price: 2200, category: 'normal',     image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//v/i/black-full-rim-square-vincent-chase-classic-acetate-ls-e15666-c2-eyeglasses_img_9612_29_dec23.jpg',       description: 'Timeless design with modern comfort' },
      { id: 5,  name: 'Slim Metal Frame',       price: 2500, category: 'normal',     image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//v/i/black-full-rim-geometric-vincent-chase-sleek-steel-vc-e15478-c2-eyeglasses_g_9366_05_16_23.jpg',         description: 'Lightweight titanium construction' },
      { id: 6,  name: 'Cat Eye Trendy',         price: 1900, category: 'normal',     image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//l/i/silver-grey-transparent-full-rim-square-lenskart-air-fusion-la-e17017-c1-eyeglasses__dsc4915_28_05_2024_28_05_2024.jpg', description: 'Fashionable and elegant design' },
    ],
    sunglasses: [
      { id: 7,  name: 'UV Protection Black',    price: 3000, category: 'sunglasses', image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//v/i/grey-black-full-rim-rectangle-vincent-chase-polarized-vc-sun-metal-vcs000465-sunglasses__dsc1197_28_01_2025.jpg', description: '100% UV protection for outdoor activities' },
      { id: 8,  name: 'Polarized Blue Lens',    price: 3500, category: 'sunglasses', image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//v/i/silver-black-sky-blue-mirror-full-rim-aviator-shape-vincent-chase-polarized-the-metal-edit-vc-s11075-c7-polarized-sunglasses_vincent-chase-polarized-vc-s11075-c7-sunglasses_sunglasses_g_4936_1_1_5july23.jpg', description: 'Eliminates glare from reflective surfaces' },
      { id: 9,  name: 'Aviator Gold',           price: 4000, category: 'sunglasses', image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-s158-vintage-1-c3-sunglasses_g_8599_16_08_2023.jpg',                                                                                 description: 'Classic pilot style with modern lens technology' },
      { id: 10, name: 'Wayfarer Brown Shades',  price: 3200, category: 'sunglasses', image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//j/i/gold-tortoise-brown-full-rim-aviator-john-jacobs-jj-rhapsody-jj-s15328-c1-sunglasses_g_3001_02_13_23.jpg',                         description: 'Versatile warm tone for all face shapes' },
      { id: 11, name: 'Oversized Mirror',       price: 3800, category: 'sunglasses', image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vcs000557-c1-black-sunglasses_dsc9610_28_01_2025.jpg',                                                                                    description: 'Trendy oversized design with mirrored lens' },
      { id: 12, name: 'Sports Wrap Around',     price: 2800, category: 'sunglasses', image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//j/i/black-grey-full-rim-rectangle-john-jacobs-jj-tints-jj-s16886-c1-sunglasses_img_0818_15_03_2024.jpg',                               description: 'Perfect for sports and outdoor adventures' },
    ],
    swim: [
      { id: 13, name: 'Clear Water Vision',     price: 1200, category: 'swim',       image: 'https://contents.mediadecathlon.com/p2189925/sq/k$688077231dded81ddd94e5b63b6266a3/%E0%B9%81%E0%B8%A7%E0%B9%88%E0%B8%99%E0%B8%95%E0%B8%B2%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%A3%E0%B8%B8%E0%B9%88%E0%B8%99-%E0%B8%82%E0%B8%99%E0%B8%B2%E0%B8%94-%E0%B9%80%E0%B8%A5%E0%B8%99%E0%B8%AA%E0%B9%8C%E0%B9%83%E0%B8%AA-%E0%B8%AA%E0%B8%B5%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B9%80%E0%B8%17%E0%B8%B4%E0%B8%99-8854144.jpg?f=480x480&format=auto', description: 'Crystal clear underwater visibility' },
      { id: 14, name: 'Anti-Fog Premium',       price: 1500, category: 'swim',       image: 'https://contents.mediadecathlon.com/p2562746/sq/k$5c71d7b4aa422c07521596a62975c5e4/%E0%B9%81%E0%B8%A7%E0%B9%88%E0%B8%99%E0%B8%95%E0%B8%B2%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%99%E0%B9%89%E0%B8%B3-%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%94%E0%B9%85%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B9%88%E0%B8%99-%E0%B8%AA%E0%B8%B5%E0%B8%9F%E0%B9%89%E0%B8%B2-%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%A7-8876903.jpg?f=480x480&format=auto', description: 'Advanced anti-fog coating technology' },
      { id: 15, name: 'Professional Racing',    price: 2000, category: 'swim',       image: 'https://contents.mediadecathlon.com/p2042633/sq/k$78ba777fac91f6f6cb6def454009d9f2/%E0%B9%81%E0%B8%A7%E0%B9%88%E0%B8%99%E0%B8%95%E0%B8%B2%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B9%80%E0%B8%A5%E0%B8%99%E0%B8%AA%E0%B9%8C%E0%B9%83%E0%B8%AA%E0%B8%82%E0%B8%99%E0%B8%B2%E0%B8%94%E0%B9%80%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B8%A2%E0%B8%A3%E0%B8%B8%E0%B9%88%E0%B8%99-%E0%B8%AA%E0%B8%B5%E0%B9%80%E0%B8%94%E0%B8%B2-8616684.jpg?f=480x480&format=auto', description: 'Hydrodynamic design for competitive swimmers' },
      { id: 16, name: 'Kids Comfortable Fit',   price:  800, category: 'swim',       image: 'https://contents.mediadecathlon.com/p2449476/k$493e3e3e833887577256d6b753bd5e58/swimming-goggles-soft-clear-lenses-size-small-blue-yellow-decathlon-8797654.jpg?f=768x0&format=auto', description: 'Safe and comfortable for children' },
      { id: 17, name: 'Competitive Speed',      price: 2500, category: 'swim',       image: 'https://contents.mediadecathlon.com/p3066098/sq/k$2819f58cc6ea64def5fc201a7ff43d55/%E0%B9%81%E0%B8%A7%E0%B9%88%E0%B8%99%E0%B8%95%E0%B8%B2%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B9%82%E0%B8%9E%E0%B8%A5%E0%B8%B2%E0%B9%84%E0%B8%A3%E0%B8%8B%E0%B9%8C%E0%B8%A3%E0%B8%B8%E0%B9%88%E0%B8%99-%E0%B8%AA%E0%B8%B5%E0%B8%94%E0%B8%B4%E0%B8%B2-%E0%B9%80%E0%B8%97%E0%B8%B2-8982501.jpg?f=480x480&format=auto', description: 'Designed for competitive swimmers' },
      { id: 18, name: 'Leisure Pool Goggles',   price: 1300, category: 'swim',       image: 'https://contents.mediadecathlon.com/p2030783/sq/k$1112ea055c7486431a80526b26fe04b9/%E0%B9%81%E0%B8%A7%E0%B9%88%E0%B8%99%E0%B8%95%E0%B8%B2%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B9%80%E0%B8%A5%E0%B8%99%E0%B8%AA%E0%B9%8C%E0%B9%83%E0%B8%AA%E0%B8%82%E0%B8%99%E0%B8%B2%E0%B8%94-%E0%B8%A3%E0%B8%B8%E0%B9%88%E0%B8%99-%E0%B8%AA%E0%B8%B5%E0%B8%94%E0%B8%B4%E0%B8%B2-8669830.jpg?f=480x480&format=auto', description: 'Perfect for casual pool swimming' },
    ],
    kids: [
      { id: 19, name: 'Pink Cute Frames',       price:  900, category: 'kids',       image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//h/i/pink-transparent-pink-tortoise-full-rim-round-kids--8-12-yrs--hooper-flexi-hooper-hp-e15083l-c2-eyeglasses_pink-transparent-pink-tortoise-full-rim-round-kids-(8-12-yrs)-hooper-flexi-hooper-hp-e15083l-c2-eyeglasses_g_5310_9_21_22_22_march23.jpg.jpg',   description: 'Colorful and fun for active kids' },
      { id: 20, name: 'Blue Power Design',      price: 1100, category: 'kids',       image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//h/i/kids-glasses:-sky-blue-full-rim-wayfarer-hooper-8-12-yrs-tr-essentials-hp-e17319-l-c1-eyeglasses_o_dsc9531.jpg',                                                                                     description: 'Kid-approved trendy design' },
      { id: 21, name: 'Rainbow Flexible',       price: 1000, category: 'kids',       image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//h/i/blue-transparent-pink-purple-full-rim-round-kids--5-8-yrs--hooper-flexi-hooper-hp-e15083m-c3-eyeglasses_blue-transparent-pink-purple-full-rim-round-kids-(5-8-yrs)-hooper-flexi-hooper-hp-e15083m-c3-eyeglasses_g_8787_9_21_22_22_march23.jpg.jpg', description: 'Flexible frames that bend without breaking' },
      { id: 22, name: 'Mini Aviator Cool',      price: 1300, category: 'kids',       image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//h/i/kids-glasses:-black-blue-full-rim-rectangle-hooper-8-12-yrs-tr-essentials-hp-e17320-l-c2-eyeglasses_o_dsc9450.jpg',                                                                                  description: 'Scaled-down classic pilot style' },
      { id: 23, name: 'Sparkle Star Design',    price:  950, category: 'kids',       image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//h/i/kids-glasses:-purple-full-rim-wayfarer-hooper-5-8-yrs-tr-essentials-hp-e17319-m-c2-eyeglasses_o_dsc9378.jpg',                                                                                       description: 'Sparkling accents kids will love' },
      { id: 24, name: 'Dino Adventure',         price: 1200, category: 'kids',       image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//h/i/kids-glasses:-blue-sky-blue-full-rim-round-kids--8-12-yrs--hooper-flexi-hooper-hp-e10003-c2_hooper-hp-e10003-c2-eyeglasses_g_5789_22_march23.jpg.jpg',                                             description: 'Fun themed design for imagination' },
    ],
  };

  const categories = [
    { key: 'normal',     name: 'Daily Wear',   description: 'Comfortable for everyday use' },
    { key: 'sunglasses', name: 'Sunglasses',   description: 'UV protection & style' },
    { key: 'swim',       name: 'Swim Glasses', description: 'For water activities' },
    { key: 'kids',       name: 'Kids Glasses', description: 'Designed for children' },
  ];

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      return existing
        ? prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i)
        : [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id)      => setCart(prev => prev.filter(i => i.id !== id));
  const updateQuantity = (id, qty) => qty <= 0 ? removeFromCart(id) : setCart(prev => prev.map(i => i.id === id ? { ...i, quantity: qty } : i));

  const cartTotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const cartCount = cart.reduce((s, i) => s + i.quantity, 0);

  const handleCheckoutChange = (e) => {
    const { name, value } = e.target;

    if (name === 'cardNumber') {
      const digits = value.replace(/\D/g, '').slice(0, 16);
      const formatted = digits.replace(/(.{4})/g, '$1 ').trim();
      setCheckoutForm(prev => ({ ...prev, cardNumber: formatted }));
      if (checkoutErrors.cardNumber) setCheckoutErrors(prev => ({ ...prev, cardNumber: '' }));
      return;
    }
    if (name === 'expiry') {
      const digits = value.replace(/\D/g, '').slice(0, 4);
      const formatted = digits.length > 2 ? digits.slice(0, 2) + '/' + digits.slice(2) : digits;
      setCheckoutForm(prev => ({ ...prev, expiry: formatted }));
      if (checkoutErrors.expiry) setCheckoutErrors(prev => ({ ...prev, expiry: '' }));
      return;
    }
    if (name === 'cvv') {
      const digits = value.replace(/\D/g, '').slice(0, 4);
      setCheckoutForm(prev => ({ ...prev, cvv: digits }));
      if (checkoutErrors.cvv) setCheckoutErrors(prev => ({ ...prev, cvv: '' }));
      return;
    }
    if (name === 'phone' || name === 'postalCode') {
      const digits = value.replace(/\D/g, '');
      const sliced = name === 'phone' ? digits.slice(0, 10) : digits.slice(0, 6);
      setCheckoutForm(prev => ({ ...prev, [name]: sliced }));
      if (checkoutErrors[name]) setCheckoutErrors(prev => ({ ...prev, [name]: '' }));
      return;
    }

    setCheckoutForm(prev => ({ ...prev, [name]: value }));
    if (checkoutErrors[name]) setCheckoutErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateCheckout = () => {
    const errors = {};
    if (!checkoutForm.fullName.trim())        errors.fullName      = 'Full name is required';
    if (!checkoutForm.email.trim())          errors.email         = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(checkoutForm.email))
                                             errors.email         = 'Enter a valid email address';
    if (!checkoutForm.phone.trim())          errors.phone         = 'Phone number is required';
    else if (!/^[6-9]\d{9}$/.test(checkoutForm.phone))
                                             errors.phone         = 'Enter a valid 10-digit Indian mobile number (starts with 6-9)';
    if (!checkoutForm.streetAddress.trim())  errors.streetAddress = 'Street address is required';
    if (!checkoutForm.city.trim())           errors.city          = 'City is required';
    if (!checkoutForm.postalCode.trim())     errors.postalCode    = 'Postal code is required';
    else if (!/^\d{6}$/.test(checkoutForm.postalCode))
                                             errors.postalCode    = 'Enter a valid 6-digit postal code';

    if (paymentMethod === 'card') {
      const rawCard = checkoutForm.cardNumber.replace(/\s/g, '');
      if (!rawCard)                          errors.cardNumber    = 'Card number is required';
      else if (!/^\d{16}$/.test(rawCard))    errors.cardNumber    = 'Enter a valid 16-digit card number';

      if (!checkoutForm.expiry.trim())       errors.expiry        = 'Expiry date is required';
      else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(checkoutForm.expiry))
                                             errors.expiry        = 'Enter expiry in MM/YY format';
      else {
        const [mm, yy] = checkoutForm.expiry.split('/');
        const expDate  = new Date(2000 + parseInt(yy), parseInt(mm) - 1, 1);
        const today    = new Date(); today.setDate(1);
        if (expDate < today)                 errors.expiry        = 'Card has expired';
      }

      if (!checkoutForm.cvv.trim())          errors.cvv           = 'CVV is required';
      else if (!/^\d{3,4}$/.test(checkoutForm.cvv))
                                             errors.cvv           = 'CVV must be 3 or 4 digits';
      if (!checkoutForm.cardholderName.trim()) errors.cardholderName = 'Cardholder name is required';
    }

    if (paymentMethod === 'upi') {
      if (!checkoutForm.upiId.trim())        errors.upiId         = 'UPI ID is required';
      else if (!/^[\w.\-]+@[\w]+$/.test(checkoutForm.upiId))
                                             errors.upiId         = 'Enter a valid UPI ID (e.g. name@upi)';
    }

    return errors;
  };

  const processPayment = () => {
    const errors = validateCheckout();
    if (Object.keys(errors).length) {
      setCheckoutErrors(errors);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const orderId      = 'AYL' + Math.random().toString(36).substr(2, 9).toUpperCase();
    const deliveryDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
                          .toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });

    const newOrder = {
      orderId,
      status:       'confirmed',
      deliveryDate,
      orderDate:    new Date().toLocaleDateString('en-IN'),
      timestamp:    new Date().toISOString(),
      items:        cart,
      subtotal:     cartTotal,
      tax:          Math.round(cartTotal * 0.18),
      total:        cartTotal + Math.round(cartTotal * 0.18),
      customerInfo: {
        fullName: checkoutForm.fullName,
        email: checkoutForm.email,
        phone: checkoutForm.phone,
        address: `${checkoutForm.streetAddress}, ${checkoutForm.city} - ${checkoutForm.postalCode}`
      }
    };

    try {
      const existing = JSON.parse(localStorage.getItem('ayushlenses_orders') || '[]');
      const updated  = [...existing, newOrder];
      localStorage.setItem('ayushlenses_orders', JSON.stringify(updated));
      console.log(' Order saved to localStorage:', updated);
    } catch (err) {
      console.error('❌ Order save failed:', err);
    }

    setOrderStatus(newOrder);
    setCart([]);
    setCheckoutForm({ fullName: '', email: '', phone: '', streetAddress: '', city: '', postalCode: '', cardNumber: '', expiry: '', cvv: '', cardholderName: '', upiId: '' });
    setCheckoutErrors({});
    setCurrentPage('order');
  };

  const handleSearch  = (query) => {
    setSearchQuery(query);
    if (!query.trim()) { setSearchResults([]); return; }
    const all     = Object.values(products).flat();
    const results = all.filter(p =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };
  const performSearch = () => { if (searchQuery.trim()) setCurrentPage('search'); };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
    if (contactErrors[name]) setContactErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateContact = () => {
    const errors = {};
    if (!contactForm.name.trim())    errors.name    = 'Full name is required';
    if (!contactForm.email.trim())   errors.email   = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email))
                                     errors.email   = 'Enter a valid email address';
    if (!contactForm.phone.trim())   errors.phone   = 'Phone number is required';
    else if (!/^[6-9]\d{9}$/.test(contactForm.phone.replace(/\D/g, '')))
                                     errors.phone   = 'Enter a valid 10-digit Indian mobile number (starting with 6-9)';
    if (!contactForm.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const errors = validateContact();
    if (Object.keys(errors).length) { setContactErrors(errors); return; }

    const msg = {
      id:        'MSG' + Math.random().toString(36).substr(2, 9).toUpperCase(),
      name:      contactForm.name,
      email:     contactForm.email,
      phone:     contactForm.phone,
      message:   contactForm.message,
      date:      new Date().toLocaleDateString('en-IN'),
      timestamp: new Date().toISOString(),
    };

    try {
      const existing = JSON.parse(localStorage.getItem('ayushlenses_messages') || '[]');
      const updated  = [...existing, msg];
      localStorage.setItem('ayushlenses_messages', JSON.stringify(updated));
      console.log(' Message saved to localStorage:', updated);
    } catch (err) {
      console.error(' Message save failed:', err);
    }

    setContactSuccess(true);
    setContactForm({ name: '', email: '', phone: '', message: '' });
    setContactErrors({});

    setTimeout(() => setContactSuccess(false), 5000);
  };

  const headerProps = { setCurrentPage, searchQuery, handleSearch, performSearch, cartCount, mobileMenuOpen, setMobileMenuOpen };
  const fallback = 'https://images.unsplash.com/photo-1508296695146-367ec3be0d35?w=600&h=600&fit=crop&q=80';

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition group">
      <div className="relative w-full h-72 bg-gray-100 overflow-hidden flex items-center justify-center p-4">
        <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
             onError={e => { e.target.src = fallback; }} />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">In Stock</div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-4 h-10 overflow-hidden text-ellipsis line-clamp-2">{product.description}</p>
        <span className="text-2xl font-bold text-blue-600">₹{product.price.toLocaleString('en-IN')}</span>
        <p className="text-xs text-gray-400 mb-4">Inclusive of all taxes</p>
        <button onClick={() => addToCart(product)} className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 active:scale-95 transition focus:outline-none">
          + Add to Cart
        </button>
      </div>
    </div>
  );

  const ErrMsg = ({ msg }) => msg ? <p className="text-red-500 text-sm mt-1"> {msg}</p> : null;
  const inputCls = (err) =>
    `w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600 ${err ? 'border-red-400 bg-red-50' : 'border-gray-300'}`;

  if (currentPage === 'home') return (
    <div className="min-h-screen bg-gray-50">
      <Header {...headerProps} />
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">See the World Perfectly</h1>
          <p className="text-xl text-gray-600">Discover premium eyewear for every moment of your life</p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-6">
          {categories.map(cat => (
            <button key={cat.key} onClick={() => setCurrentPage(cat.key)}
              className="group bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition text-left focus:outline-none">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">{cat.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{cat.description}</p>
              <div className="flex items-center gap-1 text-blue-600 font-semibold group-hover:translate-x-2 transition">
                Explore <ChevronRight className="w-4 h-4" />
              </div>
            </button>
          ))}
        </div>
      </section>
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div><div className="text-4xl mb-3"></div><h4 className="font-bold text-gray-900 mb-1">Fast Delivery</h4><p className="text-gray-600 text-sm">Delivered in 3-5 business days</p></div>
            <div><div className="text-4xl mb-3"></div><h4 className="font-bold text-gray-900 mb-1">100% Authentic</h4><p className="text-gray-600 text-sm">All products are genuine and certified</p></div>
            <div><div className="text-4xl mb-3"></div><h4 className="font-bold text-gray-900 mb-1">Easy Returns</h4><p className="text-gray-600 text-sm">30-day return policy, no questions asked</p></div>
          </div>
        </div>
      </section>
    </div>
  );

  if (currentPage === 'about') return (
    <div className="min-h-screen bg-gray-50">
      <Header {...headerProps} />
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">About AyushLenses</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">At AyushLenses, we believe that premium eyewear should be accessible to everyone. Our mission is to provide high-quality glasses for every occasion — from daily wear to adventure.</p>
              <p className="text-gray-600">We are dedicated to helping you see the world clearly and comfortably, with styles that suit your lifestyle.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us</h3>
              <ul className="space-y-2 text-gray-600">
                {['Premium quality glasses for all ages','Wide variety of styles and categories','Affordable prices with guaranteed authenticity','Fast and reliable delivery','Excellent customer service','30-day return policy'].map(t => (
                  <li key={t} className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" />{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  if (currentPage === 'contact') return (
    <div className="min-h-screen bg-gray-50">
      <Header {...headerProps} />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {[
              { Icon: MapPin, title: 'Address', lines: ['AyushLenses Store', 'Nashik, Maharashtra', 'India - 422001'] },
              { Icon: Phone,  title: 'Phone',   lines: ['+91 8765432100', '+91 9876543210'] },
              { Icon: Mail,   title: 'Email',   lines: ['support@ayushlenses.com', 'info@ayushlenses.com'] },
            ].map(({ Icon, title, lines }) => (
              <div key={title} className="bg-white rounded-lg border border-gray-200 p-6 flex gap-4">
                <Icon className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{title}</h4>
                  {lines.map(l => <p key={l} className="text-gray-600 text-sm">{l}</p>)}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            {contactSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-green-800">Message sent successfully!</p>
                  <p className="text-green-700 text-sm mt-1">Thank you for reaching out. Your message has been saved to database logs.</p>
                </div>
              </div>
            )}
            <form onSubmit={handleContactSubmit} className="space-y-4" noValidate>
              <div>
                <label className="block text-gray-900 font-medium mb-1">Full Name</label>
                <input name="name" type="text" value={contactForm.name} onChange={handleContactChange}
                  placeholder="Your full name" className={inputCls(contactErrors.name)} />
                {contactErrors.name && <p className="text-red-500 text-sm mt-1"> {contactErrors.name}</p>}
              </div>
              <div>
                <label className="block text-gray-900 font-medium mb-1">Email</label>
                <input name="email" type="email" value={contactForm.email} onChange={handleContactChange}
                  placeholder="your@email.com" className={inputCls(contactErrors.email)} />
                {contactErrors.email && <p className="text-red-500 text-sm mt-1">{contactErrors.email}</p>}
              </div>
              <div>
                <label className="block text-gray-900 font-medium mb-1">Phone Number</label>
                <input name="phone" type="tel" value={contactForm.phone} onChange={handleContactChange}
                  placeholder="10-digit mobile number" maxLength={10} className={inputCls(contactErrors.phone)} />
                {contactErrors.phone ? <p className="text-red-500 text-sm mt-1"> {contactErrors.phone}</p> : <p className="text-gray-400 text-xs mt-1">Indian mobile layout config model</p>}
              </div>
              <div>
                <label className="block text-gray-900 font-medium mb-1">Message</label>
                <textarea name="message" value={contactForm.message} onChange={handleContactChange}
                  placeholder="How can we help you?" rows={5} className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600 resize-none ${contactErrors.message ? 'border-red-400 bg-red-50' : 'border-gray-300'}`} />
                {contactErrors.message && <p className="text-red-500 text-sm mt-1"> {contactErrors.message}</p>}
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition focus:outline-none">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );

  if (currentPage === 'search') return (
    <div className="min-h-screen bg-gray-50">
      <Header {...headerProps} />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button onClick={() => setCurrentPage('home')} className="flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium mb-6 transition focus:outline-none"><ArrowLeft className="w-5 h-5" /> Back to Home</button>
        <h2 className="text-3xl font-bold text-gray-900 mb-1">Search Results</h2>
        <p className="text-gray-500 mb-8">{searchResults.length} results for "<span className="font-semibold text-blue-600">{searchQuery}</span>"</p>
        {searchResults.length === 0 ? (
          <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-gray-700 text-lg font-semibold mb-6">No products found</p>
            <button onClick={() => setCurrentPage('home')} className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg focus:outline-none">Back to Home</button>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">{searchResults.map(p => <ProductCard key={p.id} product={p} />)}</div>
        )}
      </section>
    </div>
  );

  if (categories.map(c => c.key).includes(currentPage)) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header {...headerProps} />
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <button onClick={() => setCurrentPage('home')} className="flex items-center gap-2 text-gray-500 hover:text-blue-600 font-medium mb-4 focus:outline-none"><ArrowLeft className="w-4 h-4" /> Back to Home</button>
            <h2 className="text-3xl font-bold text-gray-900">{categories.find(c => c.key === currentPage).name}</h2>
            <p className="text-gray-500 mt-1">{categories.find(c => c.key === currentPage).description}</p>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">{products[currentPage].map(p => <ProductCard key={p.id} product={p} />)}</div>
        </section>
      </div>
    );
  }

  if (currentPage === 'cart') return (
    <div className="min-h-screen bg-gray-50">
      <Header {...headerProps} />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h2>
        {cart.length === 0 ? (
          <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
            <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 text-lg mb-6">Your cart is empty</p>
            <button onClick={() => setCurrentPage('home')} className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg focus:outline-none">Continue Shopping</button>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
              {cart.map((item, idx) => (
                <div key={item.id} className={`flex items-center gap-4 p-6 ${idx !== cart.length - 1 ? 'border-b border-gray-200' : ''}`}>
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 shrink-0 flex items-center justify-center p-2">
                    <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain mix-blend-multiply" onError={e => { e.target.src = fallback; }} />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900">{item.name}</p>
                    <p className="text-gray-500 text-sm">₹{item.price.toLocaleString('en-IN')}</p>
                  </div>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 text-gray-600 hover:bg-gray-100 focus:outline-none"><Minus className="w-4 h-4" /></button>
                    <span className="px-4 py-2 font-semibold text-gray-900">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 text-gray-600 hover:bg-gray-100 focus:outline-none"><Plus className="w-4 h-4" /></button>
                  </div>
                  <span className="font-bold text-gray-900 w-24 text-right">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:bg-red-50 p-2 rounded-lg focus:outline-none"><Trash2 className="w-5 h-5" /></button>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>
              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200 text-gray-600">
                <div className="flex justify-between"><span>Subtotal</span><span>₹{cartTotal.toLocaleString('en-IN')}</span></div>
                <div className="flex justify-between"><span>Shipping</span><span className="text-green-600 font-medium">Free</span></div>
                <div className="flex justify-between"><span>Tax (18%)</span><span>₹{Math.round(cartTotal * 0.18).toLocaleString('en-IN')}</span></div>
              </div>
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold text-gray-900">Total</span>
                <span className="text-3xl font-bold text-blue-600">₹{(cartTotal + Math.round(cartTotal * 0.18)).toLocaleString('en-IN')}</span>
              </div>
              <button onClick={() => setCurrentPage('checkout')} className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 text-lg focus:outline-none">Proceed to Checkout</button>
            </div>
          </>
        )}
      </section>
    </div>
  );

  if (currentPage === 'checkout') return (
    <div className="min-h-screen bg-gray-50">
      <Header {...headerProps} />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h2>

        {Object.keys(checkoutErrors).length > 0 && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <span className="text-red-500 text-lg mt-0.5"></span>
            <div>
              
              <p className="text-red-600 text-sm mt-1">All required fields must be filled in correctly.</p>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">

            {/* ── Delivery Address ── */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Delivery Address</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-1 text-sm">Full Name <span className="text-red-500">*</span></label>
                  <input name="fullName" type="text" placeholder="Your full name"
                    value={checkoutForm.fullName} onChange={handleCheckoutChange} className={inputCls(checkoutErrors.fullName)} />
                  <ErrMsg msg={checkoutErrors.fullName} />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1 text-sm">Email Address <span className="text-red-500">*</span></label>
                  <input name="email" type="email" placeholder="your@email.com"
                    value={checkoutForm.email} onChange={handleCheckoutChange} className={inputCls(checkoutErrors.email)} />
                  <ErrMsg msg={checkoutErrors.email} />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1 text-sm">Phone Number <span className="text-red-500">*</span></label>
                  <input name="phone" type="tel" placeholder="10-digit mobile (e.g. 9876543210)"
                    value={checkoutForm.phone} onChange={handleCheckoutChange} maxLength={10} className={inputCls(checkoutErrors.phone)} />
                  {checkoutErrors.phone ? <ErrMsg msg={checkoutErrors.phone} /> : <p className="text-gray-400 text-xs mt-1">Indian number starting with 6, 7, 8 or 9</p>}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1 text-sm">Street Address <span className="text-red-500">*</span></label>
                  <input name="streetAddress" type="text" placeholder="House no., street, area"
                    value={checkoutForm.streetAddress} onChange={handleCheckoutChange} className={inputCls(checkoutErrors.streetAddress)} />
                  <ErrMsg msg={checkoutErrors.streetAddress} />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-1 text-sm">City <span className="text-red-500">*</span></label>
                    <input name="city" type="text" placeholder="City"
                      value={checkoutForm.city} onChange={handleCheckoutChange} className={inputCls(checkoutErrors.city)} />
                    <ErrMsg msg={checkoutErrors.city} />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1 text-sm">Postal Code <span className="text-red-500">*</span></label>
                    <input name="postalCode" type="text" placeholder="6-digit PIN"
                      value={checkoutForm.postalCode} onChange={handleCheckoutChange} maxLength={6} className={inputCls(checkoutErrors.postalCode)} />
                    <ErrMsg msg={checkoutErrors.postalCode} />
                  </div>
                </div>
              </div>
            </div>

            {/* ── Payment Method ── */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Payment Method</h3>
              <div className="space-y-3">
                <label onClick={() => setPaymentMethod('card')}
                  className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition ${paymentMethod === 'card' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-400'}`}>
                  <input type="radio" name="payment" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} className="w-5 h-5 accent-blue-600" />
                  <span className="font-medium text-gray-900">Credit / Debit Card</span>
                </label>
                <label onClick={() => setPaymentMethod('upi')}
                  className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition ${paymentMethod === 'upi' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-400'}`}>
                  <input type="radio" name="payment" checked={paymentMethod === 'upi'} onChange={() => setPaymentMethod('upi')} className="w-5 h-5 accent-blue-600" />
                  <span className="font-medium text-gray-900">UPI / Net Banking</span>
                </label>
              </div>
            </div>

            {/* ── Card Details ── */}
            {paymentMethod === 'card' && (
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Card Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-1 text-sm">Card Number <span className="text-red-500">*</span></label>
                    <input name="cardNumber" type="text" placeholder="1234 5678 9012 3456"
                      value={checkoutForm.cardNumber} onChange={handleCheckoutChange} maxLength={19} className={`${inputCls(checkoutErrors.cardNumber)} font-mono`} />
                    <ErrMsg msg={checkoutErrors.cardNumber} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-1 text-sm">Expiry (MM/YY) <span className="text-red-500">*</span></label>
                      <input name="expiry" type="text" placeholder="MM/YY"
                        value={checkoutForm.expiry} onChange={handleCheckoutChange} maxLength={5} className={inputCls(checkoutErrors.expiry)} />
                      <ErrMsg msg={checkoutErrors.expiry} />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-1 text-sm">CVV <span className="text-red-500">*</span></label>
                      <input name="cvv" type="text" placeholder="3-4 digits"
                        value={checkoutForm.cvv} onChange={handleCheckoutChange} maxLength={4} className={inputCls(checkoutErrors.cvv)} />
                      <ErrMsg msg={checkoutErrors.cvv} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1 text-sm">Cardholder Name <span className="text-red-500">*</span></label>
                    <input name="cardholderName" type="text" placeholder="Name on card"
                      value={checkoutForm.cardholderName} onChange={handleCheckoutChange} className={inputCls(checkoutErrors.cardholderName)} />
                    <ErrMsg msg={checkoutErrors.cardholderName} />
                  </div>
                </div>
              </div>
            )}

            {/* ── UPI ── */}
            {paymentMethod === 'upi' && (
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">UPI / Net Banking</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-1 text-sm">UPI ID <span className="text-red-500">*</span></label>
                    <input name="upiId" type="text" placeholder="name@upi"
                      value={checkoutForm.upiId} onChange={handleCheckoutChange} className={inputCls(checkoutErrors.upiId)} />
                    <ErrMsg msg={checkoutErrors.upiId} />
                  </div>
                  <p className="text-sm text-gray-500">You will be redirected to your UPI app to complete payment.</p>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 h-fit">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h3>
            <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
              {cart.map(item => (
                <div key={item.id} className="flex gap-3">
                  <div className="w-14 h-14 rounded-lg object-cover shrink-0 overflow-hidden bg-gray-50 flex items-center justify-center p-1">
                    <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain mix-blend-multiply" onError={e => { e.target.src = fallback; }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-900 font-medium text-sm truncate">{item.name}</p>
                    <p className="text-gray-500 text-xs">Qty: {item.quantity}</p>
                    <p className="font-semibold text-gray-900 text-sm">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-2 mb-6 pb-6 border-b border-gray-200 text-sm text-gray-600">
              <div className="flex justify-between"><span>Subtotal</span><span>₹{cartTotal.toLocaleString('en-IN')}</span></div>
              <div className="flex justify-between"><span>Shipping</span><span className="text-green-600">Free</span></div>
              <div className="flex justify-between"><span>Tax (18%)</span><span>₹{Math.round(cartTotal * 0.18).toLocaleString('en-IN')}</span></div>
            </div>
            <div className="flex justify-between items-center mb-6">
              <span className="font-bold text-gray-900">Total</span>
              <span className="text-2xl font-bold text-blue-600">₹{(cartTotal + Math.round(cartTotal * 0.18)).toLocaleString('en-IN')}</span>
            </div>
            <button onClick={processPayment} className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 active:scale-95 transition focus:outline-none">
              Complete Payment
            </button>
            <p className="text-xs text-gray-400 text-center mt-3">Your payment info is secure and encrypted</p>
          </div>
        </div>
      </section>
    </div>
  );

  if (currentPage === 'order' && orderStatus) return (
    <div className="min-h-screen bg-gray-50">
      <Header {...headerProps} />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 rounded-full p-3"><Check className="w-8 h-8 text-green-600" /></div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h2>
          <p className="text-gray-600">Thank you! Your order has been placed and saved successfully.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Order Details</h3>
              <div className="grid grid-cols-2 gap-6 mb-6 pb-6 border-b border-gray-200">
                {[
                  ['Order ID',       orderStatus.orderId],
                  ['Order Date',     orderStatus.orderDate],
                  ['Est. Delivery',  orderStatus.deliveryDate],
                  ['Total',          `₹${orderStatus.total.toLocaleString('en-IN')}`],
                ].map(([label, val]) => (
                  <div key={label}>
                    <p className="text-sm text-gray-500 mb-1">{label}</p>
                    <p className="font-bold text-gray-900">{val}</p>
                  </div>
                ))}
              </div>
              <h4 className="font-bold text-gray-900 mb-4">Items Ordered</h4>
              <div className="space-y-3">
                {orderStatus.items.map(item => (
                  <div key={item.id} className="flex gap-3 py-3 border-b border-gray-100 last:border-0">
                    <div className="w-16 h-16 rounded-lg object-cover shrink-0 overflow-hidden bg-gray-50 flex items-center justify-center p-1">
                      <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain mix-blend-multiply" onError={e => { e.target.src = fallback; }} />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
                      <p className="text-gray-500 text-xs">Quantity: {item.quantity}</p>
                      <p className="text-blue-600 font-bold text-sm mt-1">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Delivery Status</h3>
              <div className="space-y-2">
                {[
                  { icon: <Check className="w-5 h-5 text-green-600" />, bg: 'bg-green-100', label: 'Order Confirmed',    sub: 'Successfully placed', line: 'bg-green-300' },
                  { icon: <Check className="w-5 h-5 text-green-600" />, bg: 'bg-green-100', label: 'Ready for Shipment', sub: 'Package being prepared', line: 'bg-blue-200' },
                  { icon: <Truck className="w-5 h-5 text-blue-600" />,  bg: 'bg-blue-100',  label: 'On the Way',         sub: `Expected by ${orderStatus.deliveryDate}`, line: null },
                ].map(({ icon, bg, label, sub, line }, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full ${bg} flex items-center justify-center`}>{icon}</div>
                      {line && <div className={`w-0.5 h-10 ${line} my-1`} />}
                    </div>
                    <div className="pt-2">
                      <p className="font-bold text-gray-900">{label}</p>
                      <p className="text-sm text-gray-500">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 h-fit">
            <h3 className="text-lg font-bold text-gray-900 mb-4">What's Next?</h3>
            <div className="space-y-4 mb-6 text-sm">
              {[
                ['1','Check email','Confirmation email sent'],
                ['2','Track shipment','Real-time updates'],
                ['3','Receive package','Sign for delivery']
              ].map(([n,t,s]) => (
                <div key={n} className="flex gap-3">
                  <span className="text-blue-600 font-bold">{n}</span>
                  <div><p className="font-medium text-gray-900">{t}</p><p className="text-gray-500 text-xs">{s}</p></div>
                </div>
              ))}
            </div>
            <button onClick={() => setCurrentPage('home')} className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition mb-3 focus:outline-none">
              Continue Shopping
            </button>
            <button className="w-full border-2 border-blue-600 text-blue-600 font-bold py-3 rounded-lg hover:bg-blue-50 transition focus:outline-none">
              Track Order
            </button>
            <p className="text-xs text-gray-400 text-center mt-6">
              Questions? <span onClick={() => setCurrentPage('contact')} className="text-blue-600 font-semibold cursor-pointer hover:underline">Contact Us</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
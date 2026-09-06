'use client';

import React, { useState, useMemo } from 'react';
import { menuItems, menuCategories } from '@/data/menuData';
import { MenuCategory } from '@/types/menu';
import { SearchIcon, ChefHatIcon, SparklesIcon, PhoneIcon } from './icons';
import { restaurantInfo } from '@/data/restaurantInfo';

interface MenuSectionProps {
  initialCategory?: MenuCategory;
  showTitle?: boolean;
}

export default function MenuSection({ initialCategory = 'all', showTitle = true }: MenuSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="menu" className="py-16 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Optional when rendered in dedicated page) */}
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEF3C7] text-[#D97706] text-xs font-bold uppercase tracking-wider mb-2">
              <SparklesIcon className="w-3.5 h-3.5" />
              <span>Authentic Recipe &amp; Best Prices</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D3823] font-serif">
              Our South Indian Menu
            </h2>
            <div className="w-20 h-1 bg-[#D97706] mx-auto rounded-full my-3" />
            <p className="text-gray-600 text-sm sm:text-base">
              Explore all 42 authentic South Indian delights prepared fresh with traditional ingredients, aromatic ghee, and pure dairy butter.
            </p>
          </div>
        )}

        {/* Search & Category Filter Controls */}
        <div className="space-y-4 mb-10">
          {/* Quick Search */}
          <div className="max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
              <SearchIcon className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Dosa, Butter, Cheese, Mysore, Idli..."
              className="w-full pl-10 pr-4 py-3 rounded-full border border-[#E5E0D5] bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0D3823] focus:border-transparent text-sm shadow-xs transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs text-gray-400 hover:text-gray-600 font-semibold"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto py-2 no-scrollbar">
            {menuCategories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as MenuCategory)}
                  className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#0D3823] text-white shadow-md ring-2 ring-[#D97706]/40'
                      : 'bg-white text-gray-700 hover:bg-[#FAF6ED] border border-[#E5E0D5]'
                  }`}
                >
                  {cat.name} ({cat.count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 px-1">
          <p className="text-xs sm:text-sm text-gray-500">
            Showing <strong className="text-gray-800">{filteredItems.length}</strong> items
            {searchQuery && <span> matching &ldquo;{searchQuery}&rdquo;</span>}
          </p>
          <a
            href={`tel:${restaurantInfo.phones.primary}`}
            className="text-xs font-semibold text-[#EA580C] hover:underline flex items-center gap-1"
          >
            <PhoneIcon className="w-3.5 h-3.5" />
            <span>Call to Order</span>
          </a>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`relative rounded-2xl p-4 sm:p-5 transition-all duration-200 border flex flex-col justify-between ${
                  item.isSpecial
                    ? 'bg-gradient-to-br from-[#FEF3C7] via-white to-[#FEF3C7]/40 border-[#D97706] shadow-md ring-2 ring-[#D97706]/30'
                    : 'bg-white border-[#E8E2D8] hover:border-[#D97706]/50 shadow-xs hover:shadow-md'
                }`}
              >
                {/* Header with Title and Price */}
                <div>
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-gray-900 text-base sm:text-lg font-sans">
                        {item.name}
                      </h3>
                      {item.isSpecial && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-[#EA580C] text-white">
                          <ChefHatIcon className="w-3 h-3" />
                          Special
                        </span>
                      )}
                    </div>
                    {/* Price with Indian Rupee symbol */}
                    <div className="shrink-0 text-right">
                      <span className="text-lg sm:text-xl font-extrabold text-[#0D3823] whitespace-nowrap">
                        ₹{item.price}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  {item.description && (
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Tags and Quick Action Footer */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-2 mt-auto">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {item.tags?.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-medium bg-[#F3F4F6] text-gray-600 px-2 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                    {item.pieces && (
                      <span className="text-[10px] font-semibold bg-[#EBF5EE] text-[#0D3823] px-2 py-0.5 rounded-md">
                        {item.pieces} pieces
                      </span>
                    )}
                  </div>
                  
                  <a
                    href={`tel:${restaurantInfo.phones.primary}`}
                    aria-label={`Order ${item.name}`}
                    className="text-[11px] font-bold text-[#EA580C] hover:text-[#C2410C] shrink-0 hover:underline"
                  >
                    Order Now →
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-gray-300 p-8">
            <p className="text-gray-500 text-base mb-2">No items found matching your search.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="text-sm font-bold text-[#0D3823] underline"
            >
              Reset filters &amp; view all dishes
            </button>
          </div>
        )}

        {/* Note on Authenticity from Menu */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-[#FAF6ED] border border-[#ECE5D8] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#0D3823]">
              ✨ All Dosas &amp; Idlis are served with hot fragrant sambar and freshly prepared coconut &amp; tomato chutneys.
            </p>
            <p className="text-xs text-gray-600">
              Customizable with extra butter, cheese, ghee, or spice levels upon request at our Sarsuna outlet.
            </p>
          </div>
          <a
            href={`tel:${restaurantInfo.phones.primary}`}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#EA580C] hover:bg-[#C2410C] shadow-sm transition-all"
          >
            <PhoneIcon className="w-4 h-4" />
            <span>Call {restaurantInfo.phones.display1}</span>
          </a>
        </div>

      </div>
    </section>
  );
}

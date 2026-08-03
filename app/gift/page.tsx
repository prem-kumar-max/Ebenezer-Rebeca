'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Heart, ShoppingBag } from 'lucide-react'
import { GIFT_PRODUCTS } from '@/lib/gift-products'

export default function GiftPage() {
  const [selectedGift, setSelectedGift] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = [...new Set(GIFT_PRODUCTS.map(p => p.category))]
  
  const filteredProducts = GIFT_PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = !selectedCategory || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const selectedProduct = GIFT_PRODUCTS.find(p => p.id === selectedGift)

  return (
    <main className="relative min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              href="/#home"
              className="flex items-center gap-2 text-foreground/70 transition hover:text-foreground"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="text-sm">Back</span>
            </Link>
            <h1 className="font-script text-2xl text-primary sm:text-3xl">Wedding Gifts</h1>
            <div className="w-12" />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <input
            type="text"
            placeholder="Search gifts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-primary/50 focus:ring-2 focus:ring-lavender-soft"
          />
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                selectedCategory === null
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-border bg-background text-foreground hover:bg-muted'
              }`}
            >
              All
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-border bg-background text-foreground hover:bg-muted'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setSelectedGift(product.id)}
              className={`group relative cursor-pointer rounded-2xl border-2 transition ${
                selectedGift === product.id
                  ? 'border-gold bg-gold/5'
                  : 'border-border hover:border-gold/50 hover:bg-muted/50'
              }`}
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden rounded-t-xl bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition group-hover:scale-110"
                />
                {selectedGift === product.id && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <Heart className="h-8 w-8 fill-gold text-gold" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="mb-2 text-xs uppercase tracking-wide-lux text-muted-foreground">
                  {product.category}
                </p>
                <h3 className="mb-2 line-clamp-2 font-body text-sm font-semibold text-foreground">
                  {product.name}
                </h3>
                <p className="mb-4 line-clamp-2 text-xs text-muted-foreground">
                  {product.description}
                </p>
                <div className="mb-3 flex items-baseline justify-between">
                  <span className="font-script text-2xl text-gold">₹{product.price.toLocaleString()}</span>
                  <ShoppingBag className="h-4 w-4 text-muted-foreground transition group-hover:text-foreground" />
                </div>
                <a
                  href={product.flipkartLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="block w-full rounded bg-gold px-3 py-2 text-center text-xs font-semibold text-white hover:bg-purple-900 transition"
                >
                  View on Online
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-muted-foreground">No gifts found matching your search.</p>
          </div>
        )}
      </div>

      {/* Selected Gift Summary */}
      {selectedProduct && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed bottom-0 left-0 right-0 border-t border-border bg-background/95 backdrop-blur-md"
        >
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 flex-shrink-0 rounded-lg border border-border overflow-hidden bg-muted">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide-lux text-muted-foreground">
                    Selected Gift
                  </p>
                  <h3 className="text-lg font-semibold text-foreground">{selectedProduct.name}</h3>
                  <p className="font-script text-2xl text-gold">₹{selectedProduct.price.toLocaleString()}</p>
                </div>
              </div>
              <Link
                href={`/?gift=${encodeURIComponent(selectedProduct.name)}&price=${selectedProduct.price}#rsvp`}
                className="px-6 py-3 bg-gold text-background rounded-lg font-semibold hover:bg-gold/90 transition-colors whitespace-nowrap"
              >
                Continue to RSVP
              </Link>
            </div>
          </div>
        </motion.div>
      )}

      {/* Add padding to prevent overlap with fixed summary */}
      {selectedProduct && <div className="h-32" />}
    </main>
  )
}

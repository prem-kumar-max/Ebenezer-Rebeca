'use client'

import { useRef, useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Heart } from 'lucide-react'
import { Reveal, SectionTitle, FloralCorner } from './ui'
import emailjs from '@emailjs/browser';


export function Rsvp() {
const [submitted, setSubmitted] = useState(false)
const [giftItem, setGiftItem] = useState('')
const [customGift, setCustomGift] = useState('') 
const [loading, setLoading] = useState(false) 
const form = useRef<HTMLFormElement>(null);
const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()

  if (giftItem === 'other' && customGift.trim() === '') {
    alert('Please enter your gift.')
    return
  }

  setLoading(true)

  const formData = new FormData(form.current!)

  const templateParams = {
    name: formData.get('name'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    guests: formData.get('guests'),
    attend: formData.get('attend'),
    gift: giftItem === 'other' ? customGift : giftItem,
    message: formData.get('message'),
  }

  try {
    // Email to Admin
    await emailjs.send(
      'service_mqe0f4m',
      'template_oz37ezy',
      templateParams,
      'YZKhU8K0B8Nd_IUhA'
    )

    // Auto Reply to Guest
    await emailjs.send(
      'service_mqe0f4m',
      'template_an2ibya',
      templateParams,
      'YZKhU8K0B8Nd_IUhA'
    )

    setSubmitted(true)
    form.current?.reset()
    setGiftItem('')
    setCustomGift('')
  } catch (error) {
    console.error(error)
    alert('Failed to send RSVP.')
  } finally {
    setLoading(false)
  }
}

//   const onSubmit = (e: FormEvent<HTMLFormElement>) => {
//   e.preventDefault()

//   if (giftItem === 'other' && customGift.trim() === '') {
//     alert('Please enter your gift.')
//     return
//   }

//   const finalGift =
//     giftItem === 'other' ? customGift.trim() : giftItem

//   console.log({
//     gift: finalGift,
//   })

//   setSubmitted(true)
// }

  const inputClass =
    'w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-base text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-primary/50 focus:ring-2 focus:ring-lavender-soft'
  const labelClass = 'mb-2 block text-xs uppercase tracking-wide-lux text-muted-foreground'

  return (
    <section id="rsvp" className="relative overflow-hidden bg-background py-24 sm:py-32">
      <FloralCorner position="top-right" opacity={0.55} size={230} />
      <FloralCorner position="bottom-left" opacity={0.55} size={230} />

      <div className="relative z-10 mx-auto max-w-2xl px-6">
        <SectionTitle eyebrow="Kindly respond" title="Will You Join Us?" />

        <Reveal delay={0.1} className="mt-14">
          <div className="relative rounded-3xl border border-border bg-cream px-6 py-10 shadow-xl shadow-primary/10 sm:px-12">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center py-10 text-center"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.1 }}
                    className="flex h-20 w-20 items-center justify-center rounded-full border border-gold-soft/60 bg-background text-primary"
                  >
                    <Check className="h-9 w-9" strokeWidth={1.5} />
                  </motion.span>
                  <h3 className="mt-6 font-script text-5xl text-primary">Thank You!</h3>
                  <p className="mt-3 max-w-sm text-pretty font-body text-lg leading-relaxed text-muted-foreground">
                    Your response has been received with joy. We can&apos;t wait to celebrate this
                    blessed day together with you.
                  </p>
                  <Heart className="mt-6 h-6 w-6 animate-floaty fill-current text-gold" strokeWidth={1} />
                </motion.div>
              ) : (
                <motion.form
                    ref={form}
                    key="form"
                  onSubmit={onSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5"
                >
                  <div>
                    <label className={labelClass} htmlFor="name">
                      Full Name
                    </label>
                    <input id="name" name="name" required className={inputClass} placeholder="Your name" />
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelClass} htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        className={inputClass}
                        placeholder="+91"
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="email">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className={inputClass}
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelClass} htmlFor="guests">
                        Number of Guests
                      </label>
                      <select id="guests" name="guests" defaultValue="1" required className={inputClass}>
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                          <option key={n} value={n}>
                            {n}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="attend">
                        Will You Attend?
                      </label>
                      <select id="attend" name="attend" defaultValue="yes" required className={inputClass}>
                        <option value="yes">Joyfully Accept</option>
                        <option value="no">Regretfully Decline</option>
                      </select>
                    </div>
                  </div>
  <div>
    <label className={labelClass} htmlFor="giftItem">
      Wedding Gift Inventory
    </label>

    <select
  id="giftItem"
  name="giftItem"
  value={giftItem}
  onChange={(e) => setGiftItem(e.target.value)}
  className={inputClass}
  required
>
  <option value="">Select a Gift</option>

  <option value="Bed">Bed</option>
  <option value="Sofa">Sofa</option>
  <option value="TV">TV</option>
  <option value="Geyser">Geyser</option>
  <option value="Microwave">Microwave</option>
  <option value="Utensils">Utensils</option>
  <option value="Coffee Mugs">Coffee Mugs</option>
  <option value="Cookware Set">Cookware Set</option>
  <option value="Coasters">Coasters</option>
  <option value="Dining Table & Chairs">Dining Table & Chairs</option>
  <option value="Wardrobe / Closet">Wardrobe / Closet</option>
  <option value="Refrigerator">Refrigerator</option>
  <option value="Washing Machine">Washing Machine</option>
  <option value="Mixer / Blender">Mixer / Blender</option>
  <option value="Pressure Cooker / Rice Cooker">Pressure Cooker / Rice Cooker</option>
  <option value="Dinnerware Set">Dinnerware Set</option>
  <option value="Cutlery Set">Cutlery Set</option>
  <option value="Bedsheets & Pillow Covers">Bedsheets & Pillow Covers</option>
  <option value="Comforter / Quilt">Comforter / Quilt</option>
  <option value="Towels Set">Towels Set</option>
  <option value="Curtains">Curtains</option>
  <option value="Rugs / Carpets">Rugs / Carpets</option>
  <option value="Lamps / Night Lights">Lamps / Night Lights</option>
  <option value="Wall Clock">Wall Clock</option>
  <option value="Photo Frames">Photo Frames</option>
  <option value="Indoor Plants / Planters">Indoor Plants / Planters</option>
  <option value="Decorative Showpieces">Decorative Showpieces</option>
  <option value="Candle Set / Diffuser">Candle Set / Diffuser</option>
  <option value="Bluetooth Speaker">Bluetooth Speaker</option>
  <option value="Water Purifier">Water Purifier</option>

  <option value="other">Other (Type Your Gift)</option>
</select>

  {giftItem === 'other' && (
  <div>
    <label className={labelClass} htmlFor="customGift">
      Custom Gift
    </label>

    <input
      id="customGift"
      name="customGift"
      type="text"
      value={customGift}
      onChange={(e) => setCustomGift(e.target.value)}
      className={inputClass}
      placeholder="Enter your gift"
      required={giftItem === 'other'}
    />
  </div>
)}
</div>
                  <div>
                    <label className={labelClass} htmlFor="message">
                      A Message for the Couple
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className={`${inputClass} resize-none`}
                      placeholder="Your blessings and wishes..."
                    />
                  </div>

                  <button
  type="submit"
  disabled={loading}
  className="w-full rounded-full bg-primary px-6 py-4 text-xs uppercase tracking-luxury text-primary-foreground transition hover:opacity-90 disabled:opacity-50"
>
  {loading ? 'Sending...' : 'Send RSVP'}
</button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

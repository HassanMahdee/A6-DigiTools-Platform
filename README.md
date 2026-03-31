STATE
  products []
  cart []
  activeSection "products" | "cart"


COMPONENTS

  Navbar done
    logo, nav links done
    cart icon + count done
    login btn + get started btn done

  Banner
    bullet badge done
    heading done
    description done
    image done
    get started btn + demo video btn done

  Stats
    3 stats, purple bar done

  MainSection
    heading, description
    Products | Cart (n) toggle buttons
    Products view → 3col grid of cards
    Cart view → cart list

    ProductCard
      icon, special tag, name, description, price, features
      click Buy Now → add to cart, change btn text

    CartView
      empty → empty state message
      has items → list, total, checkout btn

    CartItem
      icon, name, price
      Remove btn

  Steps
    static

  Pricing
    static, middle tier highlighted

  CTA
    static

  Footer
    logo, link columns, socials done


HANDLERS

  tabToggle
    switch activeSection

  addToCart
    already in cart → toast, return
    else → add, toast

  removeFromCart
    filter out by id, toast

  checkout
    clear cart, back to products, toast

  getStarted + exploreProducts
    scroll to products

CHECKLIST

  [ ] setup — vite, tailwind, daisyui, toastify
  [ ] products.json
  [ ] state + handlers in App.jsx
  [ ] Navbar
  [ ] Banner
  [ ] Stats
  [ ] ProductCard + grid
  [ ] ProductModal
  [ ] CartView + CartItem
  [ ] Toggle
  [ ] Steps
  [ ] Pricing
  [ ] CTA
  [ ] Footer
  [ ] Toastify
  [ ] Responsive
  [ ] 8 commits
  [ ] README
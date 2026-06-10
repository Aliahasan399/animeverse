/* ============================================================
   AnimeVerse — Shared Utilities & State
   Handles cart, wishlist, navigation, and UI helpers.
   ============================================================ */

const AnimeVerse = (() => {
  'use strict';

  // ─── DOM Refs (populated on init) ──────────────────────
  let cartBadge, wishlistBadge, navToggle, navMenu, toastContainer;

  // ─── Storage Keys ──────────────────────────────────────
  const CART_KEY = 'animeverse_cart';
  const WISHLIST_KEY = 'animeverse_wishlist';

  // ─── State ─────────────────────────────────────────────
  let cartItems = [];
  let wishlistIds = [];

  // ─── Init ──────────────────────────────────────────────
  function init() {
    cartBadge = document.getElementById('cartBadge');
    wishlistBadge = document.getElementById('wishlistBadge');
    navToggle = document.getElementById('navToggle');
    navMenu = document.getElementById('navMenu');
    toastContainer = document.getElementById('toastContainer');

    loadState();
    updateBadges();

    // Mobile nav toggle
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('open');
        document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
      });

      document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          navToggle.classList.remove('active');
          navMenu.classList.remove('open');
          document.body.style.overflow = '';
        });
      });
    }

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
      window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
      });
    }

    // Delegate cart + wishlist clicks on product grids
    document.addEventListener('click', (e) => {
      const addBtn = e.target.closest('.btn-add-cart');
      if (addBtn) {
        e.preventDefault();
        const id = parseInt(addBtn.dataset.id);
        if (id) addToCart(id, addBtn);
        return;
      }

      const wishBtn = e.target.closest('.wishlist-btn');
      if (wishBtn) {
        e.preventDefault();
        const id = parseInt(wishBtn.dataset.id);
        if (id) toggleWishlist(id, wishBtn);
        return;
      }
    });
  }

  // ─── LocalStorage ─────────────────────────────────────
  function loadState() {
    try {
      const c = localStorage.getItem(CART_KEY);
      cartItems = c ? JSON.parse(c) : [];
      const w = localStorage.getItem(WISHLIST_KEY);
      wishlistIds = w ? JSON.parse(w) : [];
    } catch { cartItems = []; wishlistIds = []; }
  }

  function saveCart() {
    localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
  }

  function saveWishlist() {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlistIds));
  }

  // ─── Badges ────────────────────────────────────────────
  function updateBadges() {
    const cartCount = cartItems.reduce((s, i) => s + i.qty, 0);
    if (cartBadge) {
      cartBadge.textContent = cartCount;
      if (cartCount > 0) {
        cartBadge.classList.add('bump');
        setTimeout(() => cartBadge.classList.remove('bump'), 300);
      }
    }
    if (wishlistBadge) {
      wishlistBadge.textContent = wishlistIds.length;
    }
  }

  // ─── Cart ──────────────────────────────────────────────
  function getCart() { return [...cartItems]; }

  function addToCart(productId, btnEl) {
    const product = findProduct(productId);
    if (!product) return;

    const existing = cartItems.find(item => item.id === productId);
    if (existing) {
      existing.qty += 1;
    } else {
      cartItems.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        qty: 1,
      });
    }

    saveCart();
    updateBadges();
    showToast(`🛒 ${product.name} added to cart`);

    // Button feedback
    if (btnEl) {
      const original = btnEl.innerHTML;
      btnEl.classList.add('added');
      btnEl.innerHTML = '✓ Added';
      setTimeout(() => {
        btnEl.classList.remove('added');
        btnEl.innerHTML = original;
      }, 1200);
    }
  }

  function removeFromCart(productId) {
    cartItems = cartItems.filter(item => item.id !== productId);
    saveCart();
    updateBadges();
  }

  function updateCartQty(productId, qty) {
    if (qty <= 0) {
      removeFromCart(productId);
      return;
    }
    const item = cartItems.find(i => i.id === productId);
    if (item) {
      item.qty = qty;
      saveCart();
      updateBadges();
    }
  }

  function clearCart() {
    cartItems = [];
    saveCart();
    updateBadges();
  }

  function getCartTotal() {
    return cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  function getCartCount() {
    return cartItems.reduce((s, i) => s + i.qty, 0);
  }

  // ─── Wishlist ──────────────────────────────────────────
  function getWishlist() { return [...wishlistIds]; }

  function toggleWishlist(productId, btnEl) {
    const idx = wishlistIds.indexOf(productId);
    if (idx > -1) {
      wishlistIds.splice(idx, 1);
      if (btnEl) btnEl.classList.remove('active');
      showToast(`♡ Removed from wishlist`);
    } else {
      wishlistIds.push(productId);
      if (btnEl) btnEl.classList.add('active');
      showToast(`♥ Added to wishlist`);
    }
    saveWishlist();
    updateBadges();
  }

  function isWishlisted(productId) {
    return wishlistIds.includes(productId);
  }

  // ─── Toast Notifications ───────────────────────────────
  function showToast(message, icon) {
    if (!toastContainer) {
      // Create container if missing
      toastContainer = document.createElement('div');
      toastContainer.id = 'toastContainer';
      toastContainer.className = 'toast-container';
      document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    const iconMatch = message.match(/^(\p{Emoji}|\w)\s*/u);
    const displayIcon = iconMatch?.[1] || '✓';
    const cleanMsg = message.replace(/^(\p{Emoji}|\w)\s*/u, '');
    toast.innerHTML = `
      <span class="toast-icon">${displayIcon}</span>
      <span class="toast-message">${cleanMsg}</span>
      <button class="toast-close" onclick="this.closest('.toast').remove()">✕</button>
    `;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('removing');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // ─── Star Renderer ─────────────────────────────────────
  function renderStars(rating) {
    const full = Math.floor(rating);
    const half = rating - full >= 0.5;
    let s = '';
    for (let i = 0; i < full; i++) s += '★';
    if (half) s += '★';
    for (let i = full + (half ? 1 : 0); i < 5; i++) s += '☆';
    return s;
  }

  // ─── Product Card Renderer ─────────────────────────────
  function renderProductCard(product) {
    const salePrice = product.originalPrice && product.originalPrice > product.price;
    const isWished = isWishlisted(product.id);

    return `
      <article class="product-card">
        <button class="wishlist-btn ${isWished ? 'active' : ''}" data-id="${product.id}" aria-label="Toggle wishlist">
          ${isWished ? '♥' : '♡'}
        </button>
        <div class="product-badges">
          ${product.badge ? `<span class="badge badge-${product.badge}">${product.badge === 'hot' ? '🔥 Hot' : product.badge === 'new' ? '✨ New' : product.badge === 'sale' ? (salePrice ? Math.round((1 - product.price/product.originalPrice) * 100) + '% OFF' : 'Sale') : ''}</span>` : ''}
          ${salePrice ? `<span class="badge badge-sale">${Math.round((1 - product.price/product.originalPrice) * 100)}% OFF</span>` : ''}
        </div>
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
        </div>
        <div class="product-body">
          <div class="product-category">${product.category || product.series || ''}</div>
          <h3 class="product-name"><a href="product.html?id=${product.id}">${product.name}</a></h3>
          <div class="product-rating">
            <span class="product-stars">${renderStars(product.rating || 4.5)}</span>
            ${product.rating || 4.5} (${product.reviews || 0})
          </div>
          <div class="product-footer">
            <span class="product-price">
              ${salePrice ? `<span class="original">$${product.originalPrice.toFixed(2)}</span>` : ''}
              $${product.price.toFixed(2)}
            </span>
            <button class="btn-add-cart" data-id="${product.id}">🛒 Add</button>
          </div>
        </div>
      </article>
    `;
  }

  // ─── Find Product (from global PRODUCTS if available) ──
  function findProduct(id) {
    if (typeof PRODUCTS !== 'undefined') {
      return PRODUCTS.find(p => p.id === id);
    }
    return null;
  }

  // ─── Public API ────────────────────────────────────────
  return {
    init,
    getCart,
    addToCart,
    removeFromCart,
    updateCartQty,
    clearCart,
    getCartTotal,
    getCartCount,
    getWishlist,
    toggleWishlist,
    isWishlisted,
    showToast,
    renderStars,
    renderProductCard,
    loadState,
  };
})();

// Auto-init on DOM ready
document.addEventListener('DOMContentLoaded', () => AnimeVerse.init());

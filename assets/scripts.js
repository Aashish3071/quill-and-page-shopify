
// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // Product Image Gallery
  const thumbnails = document.querySelectorAll('.thumbnail');
  const mainImage = document.querySelector('.book-cover img:first-child');
  
  if (thumbnails.length > 0 && mainImage) {
    thumbnails.forEach(function(thumb) {
      thumb.addEventListener('click', function() {
        const fullImageUrl = thumb.querySelector('img').getAttribute('data-full-image');
        mainImage.setAttribute('src', fullImageUrl);
        
        // Update active thumbnail
        thumbnails.forEach(function(t) {
          t.classList.remove('border-2', 'border-gold');
        });
        thumb.classList.add('border-2', 'border-gold');
      });
    });
  }
  
  // Product Tabs
  const tabTriggers = document.querySelectorAll('.tab-trigger');
  const tabContents = document.querySelectorAll('.tab-content');
  
  if (tabTriggers.length > 0) {
    tabTriggers.forEach(function(trigger) {
      trigger.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        
        // Remove active class from all triggers
        tabTriggers.forEach(function(t) {
          t.classList.remove('active', 'border-gold');
          t.classList.add('border-transparent', 'text-gray-500');
        });
        
        // Add active class to clicked trigger
        this.classList.add('active', 'border-gold');
        this.classList.remove('border-transparent', 'text-gray-500');
        
        // Hide all content
        tabContents.forEach(function(content) {
          content.classList.add('hidden');
        });
        
        // Show selected content
        document.getElementById(tabId).classList.remove('hidden');
      });
    });
  }
  
  // Star Rating
  const stars = document.querySelectorAll('.star-rating');
  let selectedRating = 0;
  
  if (stars.length > 0) {
    stars.forEach(function(star) {
      star.addEventListener('click', function() {
        const rating = parseInt(this.getAttribute('data-rating'));
        selectedRating = rating;
        
        stars.forEach(function(s, index) {
          if (index < rating) {
            s.classList.remove('text-gray-300');
            s.classList.add('text-gold');
            s.setAttribute('fill', 'currentColor');
          } else {
            s.classList.remove('text-gold');
            s.classList.add('text-gray-300');
            s.setAttribute('fill', 'none');
          }
        });
      });
    });
  }
  
  // Collection Filters
  const filterCheckboxes = document.querySelectorAll('input[id^="category-"]');
  
  if (filterCheckboxes.length > 0) {
    filterCheckboxes.forEach(function(checkbox) {
      checkbox.addEventListener('change', function() {
        const link = this.nextElementSibling.querySelector('a');
        if (link && this.checked) {
          window.location.href = link.href;
        }
      });
    });
  }
  
  // Collection Search
  const collectionSearch = document.getElementById('collection-search');
  const productCards = document.querySelectorAll('.product-card');
  
  if (collectionSearch && productCards.length > 0) {
    collectionSearch.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      
      productCards.forEach(function(card) {
        const title = card.querySelector('.product-title').textContent.toLowerCase();
        const author = card.querySelector('.product-author')?.textContent.toLowerCase() || '';
        
        if (title.includes(searchTerm) || author.includes(searchTerm)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
});

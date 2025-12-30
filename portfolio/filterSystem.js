// ========== FILTER SYSTEM JAVASCRIPT ==========
let originalOrder = [];

document.addEventListener('DOMContentLoaded', function() {
    console.log("Filter system initialized!");

    const container = document.getElementById('items-portfolio-unified');
    originalOrder = Array.from(container.querySelectorAll('.portfolio-item'));
    
    // State management
    const filterState = {
        role: 'all',
        category: 'all',
        game: 'all',
        sort: 'popular'
    };

    // Get all filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    const resetButton = document.querySelector('.reset-filters-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const resultsCount = document.getElementById('resultsCount');

    // Toggle More Filters
    document.getElementById('moreFiltersBtn').addEventListener('click', function() {
        const advancedFilters = document.getElementById('advancedFilters');
        const isVisible = advancedFilters.style.display === 'block';
        
        advancedFilters.style.display = isVisible ? 'none' : 'block';
        // this.textContent = isVisible ? 'More filters' : 'Less filters';
        this.classList.toggle('active');
    });

    // Quick Search
    document.getElementById('quickSearch').addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const items = document.querySelectorAll('.portfolio-item');
        let visibleItems = [];
        
        items.forEach(item => {
            const title = item.querySelector('.boxTitle').textContent.toLowerCase();
            
            // Récupère l'ID du popup associé
            const popupTrigger = item.querySelector('a[onclick*="openPopup"]');
            let description = '';
            
            if (popupTrigger) {
                // Extrait l'ID du popup depuis onclick="openPopup('popupGentleM8')"
                const onclickAttr = popupTrigger.getAttribute('onclick');
                const popupIdMatch = onclickAttr.match(/openPopup\(['"](.+?)['"]\)/);
                
                if (popupIdMatch) {
                    const popupId = popupIdMatch[1];
                    const popup = document.getElementById(popupId);
                    
                    if (popup) {
                        // Récupère le texte de la description dans .right-popup
                        const rightPopup = popup.querySelector('.right-popup');
                        if (rightPopup) {
                            description = rightPopup.textContent.toLowerCase();
                        }
                    }
                }
            }
            
            // Recherche dans le titre OU dans la description
            const matchesTitle = title.includes(searchTerm);
            const matchesDescription = description.includes(searchTerm);
            
            if (matchesTitle || matchesDescription) {
                item.style.display = 'block';
                item.classList.remove('hidden');
                visibleItems.push(item);
            } else {
                item.style.display = 'none';
                item.classList.add('hidden');
            }
        });
        
        // Applique le tri sur les résultats visibles
        sortItems(visibleItems);
        
        updateResultsCount();
    });

    // Quick Filter Presets
    document.querySelectorAll('.preset-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active from presets
            document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const preset = this.getAttribute('data-preset');
            
            switch(preset) {
                case 'all':
                    resetAllFilters();
                    break;
                case 'artist':
                    resetAllFilters();
                    clickFilter('role', 'artist');
                    break;
                case 'developer':
                    resetAllFilters();
                    clickFilter('role', 'developer');
                    break;
                case 'rocket-league':
                    resetAllFilters();
                    clickFilter('game', 'rocket-league');
                    break;
                case 'website':
                    resetAllFilters();
                    clickFilter('category', 'website');
                    break;
                case 'latest':
                    resetAllFilters();
                    clickFilter('sort', 'newest');
                    break;
            }
        });
    });

    function clickFilter(type, value) {
        const btn = document.querySelector(`[data-filter="${type}"][data-value="${value}"]`);
        if (btn) btn.click();
    }

    // Initialize
    applyFilters();

    // Add event listeners to all filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterType = this.getAttribute('data-filter');
            const filterValue = this.getAttribute('data-value');

            // Update active state for buttons in the same group
            const groupButtons = document.querySelectorAll(`[data-filter="${filterType}"]`);
            groupButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Update filter state
            filterState[filterType] = filterValue;

            // Apply filters
            applyFilters();
        });
    });

    // Reset all filters
    resetButton.addEventListener('click', function() {
        resetAllFilters();
    });

    function resetAllFilters()
    {
        // Reset state
        filterState.role = 'all';
        filterState.category = 'all';
        filterState.game = 'all';
        filterState.sort = 'popular';

        // Reset search bar
        const searchInput = document.getElementById('quickSearch');
        if (searchInput) {
            searchInput.value = '';
        }

        // Réaffiche tous les items (annule le filtre de recherche)
        const allItems = document.querySelectorAll('.portfolio-item');
        allItems.forEach(item => {
            item.style.display = 'block';
            item.classList.remove('hidden');
        });

        // Reset UI
        filterButtons.forEach(btn => {
            const filterType = btn.getAttribute('data-filter');
            const filterValue = btn.getAttribute('data-value');
            
            if (filterValue === 'all' || (filterType === 'sort' && filterValue === 'popular')) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Reset preset buttons
        const presetButtons = document.querySelectorAll('.preset-btn');
        presetButtons.forEach(btn => {
            if (btn.getAttribute('data-preset') === 'all') {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Apply filters
        applyFilters();
    }

    // Main filter function
    function applyFilters() {
        let visibleItems = [];

        portfolioItems.forEach(item => {
            const itemRole = item.getAttribute('data-role');
            const itemCategory = item.getAttribute('data-category');
            const itemGame = item.getAttribute('data-game');

            // Check if item matches all active filters
            const roleMatch = filterState.role === 'all' || itemRole === filterState.role;
            const categoryMatch = filterState.category === 'all' || itemCategory === filterState.category;
            const gameMatch = filterState.game === 'all' || itemGame === filterState.game;

            if (roleMatch && categoryMatch && gameMatch) {
                item.classList.remove('hidden');
                item.classList.add('show');
                visibleItems.push(item);
            } else {
                item.classList.add('hidden');
                item.classList.remove('show');
            }
        });

        // Sort visible items
        sortItems(visibleItems);

        // Update results count
        updateResultsCount(visibleItems.length);

        // Show "no results" message if needed
        showNoResultsMessage(visibleItems.length);
    }

    // Sort items by date
    function sortItems(items) {
        const container = document.getElementById('items-portfolio-unified');
        
        if (filterState.sort === 'popular') {
            // Utilise l'ordre d'origine sauvegardé
            originalOrder.forEach(item => {
                if (items.includes(item) && !item.classList.contains('hidden')) {
                    container.appendChild(item);
                }
            });
            return;
        }

        // Sort the items array
        items.sort((a, b) => {
            const dateA = a.getAttribute('data-date');
            const dateB = b.getAttribute('data-date');

            if (filterState.sort === 'newest') {
                return dateB.localeCompare(dateA); // Newest first
            } else {
                return dateA.localeCompare(dateB); // Oldest first
            }
        });

        // Reorder DOM elements
        items.forEach(item => {
            container.appendChild(item);
        });
    }

    // Update results counter
    function updateResultsCount() {
        const items = document.querySelectorAll('.portfolio-item');
        let count = 0;
        
        items.forEach(item => {
            // Compte les items visibles (pas hidden ET display != none)
            if (!item.classList.contains('hidden') && item.style.display !== 'none') {
                count++;
            }
        });
        
        resultsCount.textContent = count;
        
        // Add animation
        resultsCount.parentElement.style.animation = 'none';
        setTimeout(() => {
            resultsCount.parentElement.style.animation = 'fadeIn 0.5s ease';
        }, 10);
    }

    // Show "no results" message
    function showNoResultsMessage(count) {
        const container = document.getElementById('items-portfolio-unified');
        let noResultsMsg = document.querySelector('.no-results-message');

        if (count === 0) {
            if (!noResultsMsg) {
                noResultsMsg = document.createElement('div');
                noResultsMsg.className = 'no-results-message';
                noResultsMsg.innerHTML = `
                    <h3>No projects found</h3>
                    <p>Try adjusting your filters to see more results.</p>
                `;
                container.appendChild(noResultsMsg);
            }
        } else {
            if (noResultsMsg) {
                noResultsMsg.remove();
            }
        }
    }

    // Add smooth scroll animation for filter changes
    function smoothScrollToResults() {
        const portfolioSection = document.getElementById('items-portfolio-unified');
        portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Optional: Add keyboard shortcuts
    // document.addEventListener('keydown', function(e) {
    //     // Press 'R' to reset filters
    //     if (e.key === 'r' || e.key === 'R') {
    //         resetButton.click();
    //     }
    // });

    // Track filter usage for analytics (optional)
    function trackFilterUsage(filterType, filterValue) {
        console.log(`Filter used: ${filterType} = ${filterValue}`);
        // You can add Google Analytics or other tracking here
    }

    // Add filter usage tracking
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterType = this.getAttribute('data-filter');
            const filterValue = this.getAttribute('data-value');
            trackFilterUsage(filterType, filterValue);
        });
    });

    // Mobile optimization: close filter panel after selection on mobile
    if (window.innerWidth <= 768) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Add a small delay before scrolling to results
                setTimeout(smoothScrollToResults, 300);
            });
        });
    }

    // Add hover effects for portfolio items
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Performance optimization: debounce filter application
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Export for debugging
    window.filterDebug = {
        state: filterState,
        apply: applyFilters,
        reset: () => resetButton.click()
    };

    console.log("Filter system ready! Type 'filterDebug' in console for debugging tools.");
});

// Animation helper for portfolio items
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all portfolio items for entrance animations
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.portfolio-item');
    items.forEach(item => {
        observer.observe(item);
    });
});
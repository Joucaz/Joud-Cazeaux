// ========== ADVANCED FILTER FEATURES (OPTIONAL) ==========

// Feature 1: URL Parameters for Shareable Filter States
function initURLParameters() {
    // Read filters from URL on page load
    const urlParams = new URLSearchParams(window.location.search);
    
    if (urlParams.has('role')) {
        const roleButton = document.querySelector(`[data-filter="role"][data-value="${urlParams.get('role')}"]`);
        if (roleButton) roleButton.click();
    }
    
    if (urlParams.has('category')) {
        const categoryButton = document.querySelector(`[data-filter="category"][data-value="${urlParams.get('category')}"]`);
        if (categoryButton) categoryButton.click();
    }
    
    if (urlParams.has('game')) {
        const gameButton = document.querySelector(`[data-filter="game"][data-value="${urlParams.get('game')}"]`);
        if (gameButton) gameButton.click();
    }
}

// Update URL when filters change
function updateURL(filterState) {
    const params = new URLSearchParams();
    
    if (filterState.role !== 'all') params.set('role', filterState.role);
    if (filterState.category !== 'all') params.set('category', filterState.category);
    if (filterState.game !== 'all') params.set('game', filterState.game);
    if (filterState.sort !== 'newest') params.set('sort', filterState.sort);
    
    const newURL = params.toString() ? `${window.location.pathname}?${params.toString()}` : window.location.pathname;
    window.history.replaceState({}, '', newURL);
}

// Feature 2: Share Button
function addShareButton() {
    const shareButton = document.createElement('button');
    shareButton.className = 'share-filters-btn';
    shareButton.innerHTML = '🔗 Share Filters';
    shareButton.style.cssText = `
        display: block;
        margin: 1rem auto 0 auto;
        padding: 10px 25px;
        background: transparent;
        color: #fff;
        border: 2px solid rgba(255, 255, 255, 0.5);
        border-radius: 25px;
        font-size: 0.9em;
        cursor: pointer;
        transition: all 0.3s ease;
        font-family: 'Montserrat', sans-serif;
    `;
    
    shareButton.addEventListener('click', function() {
        const url = window.location.href;
        
        if (navigator.share) {
            navigator.share({
                title: 'Check out these projects!',
                url: url
            }).catch(() => {
                copyToClipboard(url);
            });
        } else {
            copyToClipboard(url);
        }
    });
    
    const filterSystem = document.querySelector('.filter-system');
    filterSystem.appendChild(shareButton);
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Link copied to clipboard!');
    });
}

// Feature 3: Notification System
function showNotification(message, duration = 3000) {
    // Remove existing notification
    const existing = document.querySelector('.filter-notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = 'filter-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: #e3b405;
        color: #171617;
        padding: 15px 25px;
        border-radius: 10px;
        font-weight: 600;
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, duration);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Feature 4: Collapsible Filter Groups (Mobile)
function makeFilterGroupsCollapsible() {
    const filterGroups = document.querySelectorAll('.filter-group');
    
    filterGroups.forEach((group, index) => {
        const title = group.querySelector('.filter-title');
        
        // Collapse all except first group on mobile
        if (window.innerWidth <= 768 && index > 0) {
            group.classList.add('collapsed');
        }
        
        title.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                group.classList.toggle('collapsed');
            }
        });
    });
}

// Feature 5: Filter Presets
function addFilterPresets() {
    const presets = [
        { name: '🎨 3D Artist Only', filters: { role: 'artist', category: 'all', game: 'all' } },
        { name: '💻 Developer Only', filters: { role: 'developer', category: 'all', game: 'all' } },
        { name: '🚀 Rocket League', filters: { role: 'all', category: 'all', game: 'rocket-league' } },
        { name: '🎮 Latest Games', filters: { role: 'all', category: 'game', game: 'all' } }
    ];
    
    const presetsContainer = document.createElement('div');
    presetsContainer.className = 'filter-presets';
    presetsContainer.innerHTML = '<h3 class="filter-title">Quick Filters</h3>';
    
    const presetsButtons = document.createElement('div');
    presetsButtons.className = 'filter-buttons';
    
    presets.forEach(preset => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn preset-btn';
        btn.textContent = preset.name;
        btn.addEventListener('click', () => applyPreset(preset.filters));
        presetsButtons.appendChild(btn);
    });
    
    presetsContainer.appendChild(presetsButtons);
    
    const filterSystem = document.querySelector('.filter-system');
    filterSystem.insertBefore(presetsContainer, filterSystem.firstChild);
}

function applyPreset(filters) {
    Object.keys(filters).forEach(filterType => {
        const button = document.querySelector(`[data-filter="${filterType}"][data-value="${filters[filterType]}"]`);
        if (button) button.click();
    });
    
    showNotification('Preset applied!');
}

// Feature 6: Search by Text
function addSearchBar() {
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.style.cssText = `
        margin: 1rem 0;
        text-align: center;
    `;
    
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = '🔍 Search projects...';
    searchInput.className = 'search-input';
    searchInput.style.cssText = `
        width: 100%;
        max-width: 500px;
        padding: 12px 20px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-radius: 25px;
        background: rgba(23, 22, 23, 0.6);
        color: #fff;
        font-size: 1em;
        font-family: 'Montserrat', sans-serif;
        transition: all 0.3s ease;
    `;
    
    searchInput.addEventListener('focus', function() {
        this.style.borderColor = '#e3b405';
        this.style.boxShadow = '0 0 10px rgba(227, 180, 5, 0.3)';
    });
    
    searchInput.addEventListener('blur', function() {
        this.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        this.style.boxShadow = 'none';
    });
    
    searchInput.addEventListener('input', debounce(function(e) {
        filterBySearch(e.target.value.toLowerCase());
    }, 300));
    
    searchContainer.appendChild(searchInput);
    
    const filterSystem = document.querySelector('.filter-system');
    const firstFilterGroup = filterSystem.querySelector('.filter-group');
    filterSystem.insertBefore(searchContainer, firstFilterGroup);
}

function filterBySearch(searchTerm) {
    const items = document.querySelectorAll('.portfolio-item');
    
    items.forEach(item => {
        const title = item.querySelector('.boxTitle').textContent.toLowerCase();
        const matches = title.includes(searchTerm);
        
        if (matches || searchTerm === '') {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Feature 7: View Mode Toggle (Grid / List)
function addViewModeToggle() {
    const toggleContainer = document.createElement('div');
    toggleContainer.className = 'view-mode-toggle';
    toggleContainer.style.cssText = `
        text-align: center;
        margin: 1rem 0;
    `;
    
    const gridBtn = document.createElement('button');
    gridBtn.className = 'view-btn active';
    gridBtn.innerHTML = '⊞ Grid';
    gridBtn.onclick = () => setViewMode('grid', gridBtn, listBtn);
    
    const listBtn = document.createElement('button');
    listBtn.className = 'view-btn';
    listBtn.innerHTML = '☰ List';
    listBtn.onclick = () => setViewMode('list', listBtn, gridBtn);
    
    const btnStyle = `
        padding: 8px 20px;
        margin: 0 5px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-radius: 20px;
        background: transparent;
        color: #fff;
        cursor: pointer;
        transition: all 0.3s ease;
    `;
    
    gridBtn.style.cssText = btnStyle;
    listBtn.style.cssText = btnStyle;
    
    toggleContainer.appendChild(gridBtn);
    toggleContainer.appendChild(listBtn);
    
    const portfolioContainer = document.getElementById('items-portfolio-unified');
    portfolioContainer.parentElement.insertBefore(toggleContainer, portfolioContainer);
}

function setViewMode(mode, activeBtn, inactiveBtn) {
    const container = document.getElementById('items-portfolio-unified');
    
    activeBtn.style.background = '#e3b405';
    activeBtn.style.color = '#171617';
    inactiveBtn.style.background = 'transparent';
    inactiveBtn.style.color = '#fff';
    
    if (mode === 'list') {
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.gap = '20px';
        
        const items = container.querySelectorAll('.portfolio-item');
        items.forEach(item => {
            item.style.width = '100%';
        });
    } else {
        container.style.display = 'flex';
        container.style.flexDirection = 'row';
        container.style.flexWrap = 'wrap';
        container.style.gap = '30px';
        
        const items = container.querySelectorAll('.portfolio-item');
        items.forEach(item => {
            item.style.width = '';
        });
    }
}

// Feature 8: Local Storage for Filter Preferences
function saveFilterPreferences(filterState) {
    localStorage.setItem('portfolioFilters', JSON.stringify(filterState));
}

function loadFilterPreferences() {
    const saved = localStorage.getItem('portfolioFilters');
    if (saved) {
        const filters = JSON.parse(saved);
        Object.keys(filters).forEach(filterType => {
            const button = document.querySelector(`[data-filter="${filterType}"][data-value="${filters[filterType]}"]`);
            if (button) button.click();
        });
        showNotification('Previous filters restored');
    }
}

// Utility: Debounce function
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

// Initialize All Features
document.addEventListener('DOMContentLoaded', function() {
    // Uncomment features you want to use:
    
    // initURLParameters();           // Share filters via URL
    // addShareButton();              // Add share button
    // makeFilterGroupsCollapsible(); // Collapsible on mobile
    // addFilterPresets();            // Quick filter presets
    // addSearchBar();                // Text search
    // addViewModeToggle();           // Grid/List view
    // loadFilterPreferences();       // Remember last filters
    
    console.log('Advanced features loaded! Uncomment to activate.');
});

// Export for use in other scripts
window.advancedFilters = {
    initURL: initURLParameters,
    addShare: addShareButton,
    addSearch: addSearchBar,
    addPresets: addFilterPresets,
    addViewToggle: addViewModeToggle,
    notify: showNotification
};
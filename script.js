function switchTab(tabId) {
    document.querySelectorAll('main').forEach(tab => {
        tab.style.display = 'none';
    });
    document.getElementById(tabId).style.display = 'block';
}
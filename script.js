
function switchTab(tabId) {
  document.querySelectorAll('.tab-section').forEach(tab => {
    tab.classList.remove('active');
  });
  document.querySelectorAll('.tab-icon').forEach(icon => {
    icon.classList.remove('active');
  });
  const activeTab = document.getElementById(tabId);
  if (activeTab) activeTab.classList.add('active');
  const tabIcons = document.querySelectorAll('.tab-icon');
  tabIcons.forEach((icon) => {
    if (icon.getAttribute('onclick').includes(tabId)) {
      icon.classList.add('active');
    }
  });
}

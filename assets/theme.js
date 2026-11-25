(() => {
  const storageKey = 'portfolio-theme';
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const root = document.documentElement;
  const themeColor = document.querySelector('meta[name="theme-color"]');
  let choice;
  let toggle;

  try {
    choice = localStorage.getItem(storageKey);
  } catch {
    // The theme still works on this page when storage is unavailable.
  }

  function applyTheme() {
    const dark = choice === 'dark' || (choice !== 'light' && systemTheme.matches);
    root.dataset.theme = dark ? 'dark' : 'light';
    themeColor.content = dark ? '#151515' : '#ffffff';
    toggle?.setAttribute('aria-pressed', String(dark));
  }

  applyTheme();
  systemTheme.addEventListener('change', applyTheme);

  document.addEventListener('DOMContentLoaded', () => {
    toggle = document.querySelector('.theme-toggle');
    applyTheme();
    toggle.hidden = false;
    toggle.addEventListener('click', () => {
      choice = root.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme();
      try {
        localStorage.setItem(storageKey, choice);
      } catch {
        // Retain the choice in memory for the current page.
      }
    });
  });
})();

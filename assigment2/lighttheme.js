document.addEventListener('DOMContentLoaded', () => {
  const themeSwitcher = document.getElementById('theme-switcher');
  const body = document.body;

  
  const savedTheme = localStorage.getItem('theme') || 'dark-theme';
  body.classList.add(savedTheme); 

  themeSwitcher.textContent = savedTheme === 'light-theme' ? '🌙' : '☀️';

 
  themeSwitcher.addEventListener('click', () => {
      const isLightTheme = body.classList.contains('light-theme');

      
      body.classList.toggle('light-theme', !isLightTheme);
      body.classList.toggle('dark-theme', isLightTheme);

      
      const newTheme = isLightTheme ? 'dark-theme' : 'light-theme';
      localStorage.setItem('theme', newTheme);

      
      themeSwitcher.textContent = isLightTheme ? '☀️' : '🌙';
  });
});

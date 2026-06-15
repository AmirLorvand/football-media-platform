// Get DOM elements
const root = document.getElementById('root');

// Import Header and Footer and Loader components
import Header from './components/modules/Header.js';
import Footer from './components/modules/Footer.js';
import Loader from './components/modules/Loader.js';

// Wait for DOMContentLoaded event before executing the script
document.addEventListener('DOMContentLoaded', () => {
  // Define routes
  const routes = [
    { path: '/', component: 'HomePage', css: 'home' },
    { path: '/profile', component: 'ProfilePage', css: 'profile' },
    { path: '/predict', component: 'PredictPage', css: 'predict' },
    { path: '/myTeam', component: 'MyTeamPage', css: 'myTeam' },
    { path: '/settings', component: 'SettingsPage', css: 'settings' },
    { path: '/privacy', component: 'PrivacyPage', css: 'privacy' },
    { path: '/signIn', component: 'SignInPage', css: 'signIn' },
    { path: '/signUp', component: 'SignUpPage', css: 'signUp' },
    {
      path: '/changePassword',
      component: 'ChangePasswordPage',
      css: 'changePassword',
    },
    { path: '/followers', component: 'FollowersPage', css: 'followers' },
    { path: '/followings', component: 'FollowingsPage', css: 'followings' },
    { path: '/search', component: 'SearchPage', css: 'search' },
  ];

  // Initial load of the content based on the current URL path
  navigateToPage(window.location.pathname);

  // Function to navigate to a page
  async function navigateToPage(path) {
    // find route object for this path
    const route = findRoute(path);

    // loadCssFile for this path
    loadCssFile(route.css);

    // Import the module dynamically based on the route
    await importModule(route.component);
  }

  // Function to find the route for a given path
  function findRoute(path) {
    const notFoundRoute = {
      path: '/404',
      component: 'NotFoundPage',
      css: 'notFound',
    };
    const matchedRoute = routes.find((route) => route.path === path);

    // Check if the matched route exists, otherwise return the notFoundRoute
    return matchedRoute || notFoundRoute;
  }

  // Function to load CSS file dynamically
  function loadCssFile(cssFile) {
    if (cssFile) {
      const cssPath = `./assets/css/${cssFile}.css`;

      // Remove the Old CSS file if it exists
      const existingStyle = document.getElementById('dynamic-style');
      if (existingStyle) {
        existingStyle.parentNode.removeChild(existingStyle);
      }

      // add css file for req page
      const style = document.createElement('link');
      style.id = 'dynamic-style';
      style.rel = 'stylesheet';
      style.href = cssPath;
      document.head.appendChild(style);
    } else {
      // Remove the Old CSS file if it exists
      const existingStyle = document.getElementById('dynamic-style');
      if (existingStyle) {
        existingStyle.parentNode.removeChild(existingStyle);
      }
    }
  }

  // Function to import module dynamically
  async function importModule(moduleFile) {
    // Show loader
    const loaderContent = await Loader.content();
    root.innerHTML = loaderContent;

    // load header and footer from header and footer components
    const HeaderContent = await Header.content();
    const FooterContent = await Footer.content();

    // load the req page component
    const module = await import(`./components/${moduleFile}.js`);
    const PageContent = await module.default.content();

    // Set content inside root container and remove loader
    root.innerHTML = `${HeaderContent}<main>${PageContent}</main>${FooterContent}`;
  }

  // Handle navigation changes for spa
  document.addEventListener('click', (event) => {
    if (
      event.target.tagName === 'A' &&
      event.target.getAttribute('href').startsWith('/')
    ) {
      event.preventDefault();
      const path = event.target.getAttribute('href');
      navigateToPage(path);
      history.pushState(null, null, path);
    }
  });

  // Handle back and forward buttons for spa
  window.addEventListener('popstate', () => {
    navigateToPage(window.location.pathname);
  });
});

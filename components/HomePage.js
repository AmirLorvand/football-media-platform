import Weather from './modules/Weather.js';
import LeagueTable from './modules/LeagueTable.js';
import Tweets from './modules/Tweets.js';

// Component for Home Page
async function content() {
  const title = 'Home | Football Media';
  document.title = title;

  let userLogin;
  async function fetchContent() {
    // get loggedInUser
    const auth = await fetch('http://localhost:8080/api/auth', {
      method: 'Get',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    });

    if (auth.status === 500) {
      userLogin = false;
    } else if (auth.status === 200) {
      userLogin = true;
    }
  }
  await fetchContent();

  return `
<div class="banner">
  <img src="../assets/images/twitterHeader.jpg" alt="twitterHeader" />
</div>
<div class="container">
  <div class="left-sidebar">
    ${await LeagueTable.content()}
  </div>
  <div class="tweetSection">
    ${await Tweets.content('ALL')}
  </div>
  <div class="right-sidebar">
    ${await Weather.content()}
  </div>
</div>`;
}

export default {
  content,
};

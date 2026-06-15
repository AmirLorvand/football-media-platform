// Weather Component
async function content() {
  let wether;
  async function fetchContent() {
    const resWether = await fetch(
      'https://api.weatherapi.com/v1/current.json?key=8d1867c0eb6447ea876202032240802&q=london'
    );
    wether = await resWether.json();
  }
  await fetchContent();

  return `
<section class="input-part">
  <p class="info-txt">
  </p>
  <div class="content">
    <h1 class='weatherTitle'>
      Can we play today?
    </h1>
  </div>
</section>
<img class='center-img' src="${wether.current.condition.icon}" alt="Weather Icon">
<section class="weather-part">
  <div class="weather">
    ${wether.current.condition.text}
  </div>
  <div class="temp">
    ${wether.current.feelslike_c}
    <sup>
      °
    </sup>
    C
  </div>
  <div class="location">
    <span>
      <i class="bi bi-geo-alt">
      </i>
      ${wether.location.name}, ${wether.location.country}
    </span>
  </div>
  <div class="bottom-details">
    <div class="humidity">
      ${wether.current.humidity}
      <div>
        <i class="bi bi-moisture">
        </i>
        Humidity
      </div>
    </div>
    <div class="localTime">
      <i class="bi bi-calendar-week">
      </i>
      ${wether.location.localtime}
    </div>
  </div>
</section>`;
}

export default { content };

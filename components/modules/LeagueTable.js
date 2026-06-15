// LeagueTable Component
async function content() {
  let footballLeagueList;
  async function fetchContent() {
    // get FootballLeague list
    const resFootballLeague = await fetch(
      'http://localhost:8080/api/footballLeague'
    );
    footballLeagueList = await resFootballLeague.json();
  }
  await fetchContent();

  return `<!-- Add the title for the chart -->
    <div class="title">
      England Football League
      <span>
        2024
        <img src="../assets/images/FootballMediaLogo.png" alt="" />
      </span>
    </div>
    <!-- Add the table for the chart -->
    <table class="table">
      <!-- Add the table header row -->
      <tr>
        <th class="th">
          Team
        </th>
        <th class="th">
          Points
        </th>
        <th class="th">
          Goals
        </th>
      </tr>
      <!-- Add the table data rows -->
      <!-- Use some static data for the example -->
      ${footballLeagueList
        .map((item) => {
          return `
      <tr>
        <td class="td">
          ${item.teamName}
        </td>
        <td class="td">
          ${item.points}
        </td>
        <td class="td">
          ${item.goals}
        </td>
      </tr>
      `;
        })
        .join('')}
    </table>`;
}

export default { content };

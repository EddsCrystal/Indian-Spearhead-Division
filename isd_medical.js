/*************************** Server info *****************************/
async function initializeData() {
  try {
    const response = await fetch('https://api.battlemetrics.com/servers/25083307');
    const data = await response.json();

    displayServerInfo(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


async function reloadData() {
  const reloadButton = document.getElementById('site_info_reload_button');
  const reloadButtonIcon = document.getElementById('site_info_reload_button_logo');

  reloadButtonIcon.classList.add('fa-spin');

  try {
    const response = await fetch('https://api.battlemetrics.com/servers/25083307');
    const data = await response.json();

    displayServerInfo(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {

    reloadButtonIcon.classList.remove('fa-spin');
  }
}

function displayServerInfo(data) 
{
  const serverStatusElement = document.getElementById('server_info_status_box');
  const playersOnlineElement = document.getElementById('server_info_players_box');
  const mapLoadedElement = document.getElementById('server_info_map_box');

  const serverStatus = data.data.attributes.status;
  const numberOfPlayers = data.data.attributes.players;
  const maxPlayers = data.data.attributes.maxPlayers;
  const mapLoaded = data.data.attributes.details.map;

  serverStatusElement.textContent = `Server status : ${serverStatus}`;
  playersOnlineElement.textContent = `Players online : ${numberOfPlayers}/${maxPlayers}`;
  mapLoadedElement.textContent = `Map : ${mapLoaded}`;

}

window.addEventListener('load', initializeData);

/*************************** Server info *****************************/
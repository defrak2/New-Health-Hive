

function searchWiki(wikiURL){
  const script = document.createElement('script');
  script.src = `${wikiURL}&callback=handleWikiResponse`;
  document.head.appendChild(script);

}
function handleWikiResponse(data) {
  console.log(data);
  if (data.query.search && data.query.search.length > 0) {
    data.query.search.forEach(search => {
      createWikiCard(search);
    });
  } else {
    console.log('No search results found');
  }
}


function createWikiCard(search) {
  console.log('Search object', search)
  const title = search.title;
  const snippet = search.snippet;
  const url = `https://en.wikipedia.org/wiki/${title}`;

  const wikiCard = document.createElement('div');
  wikiCard.innerHTML = `
    <h2>${title}</h2>
    <p>${snippet}</p>
    <a href="${url}" target="_blank">Read more on Wikipedia</a>
  `;
  document.getElementById('wiki-cards-container').appendChild(wikiCard);
}
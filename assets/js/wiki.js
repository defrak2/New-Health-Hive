

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
  <div class="card">
  <div class="card-content">
    <span class="card-title">${title}</span>
    <p>${snippet}</p>
  </div>
  <div class="card-action">
    <a href="${url}">Read more on Wikipedia</a>

  </div>
</div>
  `;
  document.getElementById('wiki-cards-container').appendChild(wikiCard);
}
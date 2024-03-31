export class Ui {
   displayGames(data) {
      let gamesCard = ``;
      for (let i = 0; i < data.length; i++) {
         gamesCard += `
         <div class="col-md-3">
         <div data-id="${data[i].id}"  class="card h-100 bg-transparent" role="button" ">
            <div  class="card-body">
               <div>
                  <img class="w-100" src="${data[i].thumbnail}" />
               </div>
               <div>
                  <div class="d-flex justify-content-between py-2">
                     <h6>${data[i].title}</h6>
                     <span class="badge text-bg-primary pt-2">Free</span>
                  </div>
                  <p class="card-text small text-center text-white">
                     ${data[i].short_description.split(" ", 8)}
                  </p>
               </div>
            </div>
            <div class="card-footer small d-flex justify-content-between">
               <span class="badge badge-color text-white">${data[i].genre}</span>
               <span class="badge badge-color text-white">${data[i].platform}</span>
            </div>
         </div>
      </div>
         `;
      }
      document.getElementById("gameData").innerHTML = gamesCard;
   }

   displayDetails(data) {
      const gameDetail = `
      <div class="col-md-4">
      <img src="${data.thumbnail}" class="w-100" alt="details" />
   </div>
   <div class="col-md-8">
      <h3>Title: ${data.title}</h3>
      <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
      <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
      <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
      <p class="small">${data.description}</p>
      <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
   </div>
      `;

      document.getElementById("detailsContent").innerHTML = gameDetail;
   }
}

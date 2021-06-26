import CONFIG from '../../globals/config'

const createRestoDetailTemplate = (resto) => `
  <h2 class="resto__title">${resto.name}</h2>
  
  <div class="resto__info">
  <h3>Information</h3>
    <h4>Tagline</h4>
    <p>${resto.name}</p>
    <h4>Release Date</h4>
    <p>${resto.city}</p>
  
    <h4>Rating</h4>
    <p>${resto.rating}</p>
  </div>
  
  <img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.title}"  style="width:100%"/>
  <div class="resto__overview">
    <h3>Overview</h3>
    <p>${resto.description}</p>
  </div>
`

const createRestaurantItemTemplate = (resto) => `
<div class="">		
<article id="card" class="card">
    <figure class="card-image">
    <img src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
    </figure>

    <div class="card-content">
        <header class="card-header">
            <h2>${resto.name}</h2>
            <h4>${resto.city}</h4>
                <p class="description-resto">
                ${resto.description}
                </p>
            <span>Rating: ${resto.rating}</span>
        </header>	
    </div>
    <a  href="${`/#/detail/${resto.id}`}" type="button" class="card-button">Lihat Restaurant</a>
</article>
</div>
  
  `

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export { createLikedButtonTemplate, createLikeButtonTemplate, createRestaurantItemTemplate, createRestoDetailTemplate }

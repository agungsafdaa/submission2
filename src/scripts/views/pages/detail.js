import UrlParser from '../../routes/url-parser'
import RestaurantSource from '../../data/restaurant-source'
import { createRestoDetailTemplate } from '../templates/templates-creator'
import LikeButtonInitiator from '../../utils/like-button-initiator'
const Detail = {
  async render () {
    return `
      <div id="detail" class="movie"></div>
      <div id="likeButtonContainer"></div>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const detail = await RestaurantSource.detailRestaurant(url.id)
    const restaurantContainers = document.querySelector('#detail')
    restaurantContainers.innerHTML += createRestoDetailTemplate(detail)
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        // eslint-disable-next-line no-undef
        id: detail.id,
        // eslint-disable-next-line no-undef
        title: detail.name,
        // eslint-disable-next-line no-undef
        overview: detail.description,
        // eslint-disable-next-line no-undef
        vote_average: detail.rating
      }
    })
    console.log(detail)
  }
}

export default Detail

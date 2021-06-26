import RestaurantSource from '../../data/restaurant-source'
import { createRestaurantItemTemplate } from '../templates/templates-creator'
const List = {
  async render () {
    return `
      <div class="landing">
      <img src="../images/heros/hero-image_4.jpg" style="width:100%; height: 100%;">
      <div class="container">
        <div class="info">
  
          <h1>Makan<span class="titik">Yuk.</span></h1>
          <p class="jumbo">Karena kami hanya menghadirkan Restaurant terbaik<br> hanya untuk anda.</p>
          <a  href="#" class="btn">Booking Sekarang</a>
        </div>
      </div>
    </div>
          <div class="kategori">
            <div id="posts" class="grid-container">
            </div>
      
        </div>
    
      `
  },

  async afterRender () {
    const restaurant = await RestaurantSource.listRestaurant()
    console.log(restaurant)
    const restaurantContainers = document.querySelector('#posts')
    restaurant.forEach((resto) => {
      restaurantContainers.innerHTML += createRestaurantItemTemplate(resto)
    })
  }

}
export default List

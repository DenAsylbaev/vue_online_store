<template>
    <div class="categories">
      <h2 class="categories_title">LOUNGE TO LATE NIGHT</h2>
        <ul class="categories-flex">
            <li class="categories-item categories-item-for_women">
              <router-link to="/catalog">
                <a href="#">
                  <div class="categories-item-text categories-item-text_for_women">
                    <p class="categories-item-subtitle">30% off</p>
                    <p class="categories-item-title">short & mini dresses</p>
                  </div>
                </a>
            </router-link>
            </li>
            <li class="categories-item categories-item-for_men">
              <router-link to="/catalog">
                <a href="#">
                  <div class="categories-item-text categories-item-text_for_men">
                    <p class="categories-item-subtitle">luxirous &amp;&nbsp;trendy</p>
                    <p class="categories-item-title">tops</p>
                  </div>
                </a>
              </router-link>
            </li>
            <li class="categories-item categories-item-for_kids">
              <router-link to="/catalog">
                <a href="#">
                  <div class="categories-item-text categories-item-text_for_kids">
                    <p class="categories-item-subtitle">new arrivals</p>
                    <p class="categories-item-title">accesories</p>
                  </div>
                </a>
              </router-link>
            </li>
            <li class="categories-item categories-item-accesories">
              <a href="#">
                <div class="categories-item-text categories-item-text_accesories">
                  <p class="categories-item-subtitle">hot deal</p>
                  <p class="categories-item-title">trends</p>
                </div>
              </a>
            </li>
        </ul>
    </div> 
</template>

<script>
    export default {
        name: 'categiriesComp'
    }
</script>
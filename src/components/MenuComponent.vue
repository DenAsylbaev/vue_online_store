    <template>
        <div>   
            <input type="checkbox" id="menu_checkbox" class="mobile-menu__checkbox">
            <label for="menu_checkbox" class="mobile-menu__btn"><span class="mobile-menu__icon"></span></label>
            <section class="menu">
            <h3 class="menu-window-title">menu</h3>
            <ul class="menu-list">
                <li class="menu-list-item">
                <ul class="menu-list-category">
                    <li><a href="#" class="menu-list-item-link">catalog</a></li>
                    <li class="menu-list-subcategory"><a class="menu-list-subcategory-link" href="#">Accessories</a></li>
                    <li class="menu-list-subcategory"><a class="menu-list-subcategory-link" href="#">Jackets & Coats</a></li>
                    <li class="menu-list-subcategory"><a class="menu-list-subcategory-link" href="#">Dresses</a></li>
                    <li class="menu-list-subcategory"><a class="menu-list-subcategory-link" href="#">Tops</a></li>
                    <li class="menu-list-subcategory"><a class="menu-list-subcategory-link" href="#">Shirts</a></li>
                </ul>
                </li>
                <li class="menu-list-item">
                <ul class="menu-list-category">
                    <li><a href="#" class="menu-list-item-link">support</a></li>
                    <li class="menu-list-subcategory"><a class="menu-list-subcategory-link" href="#">Contacts</a></li>
                    <li class="menu-list-subcategory"><a class="menu-list-subcategory-link" href="#">Services</a></li>
                    <li class="menu-list-subcategory"><a class="menu-list-subcategory-link" href="#">Delivery</a></li>
                    <li class="menu-list-subcategory"><a class="menu-list-subcategory-link" href="#">Payments & return</a></li>
                    <li class="menu-list-subcategory"><a class="menu-list-subcategory-link" href="#">Feedbacks</a></li>
                    <li class="menu-list-subcategory"><a class="menu-list-subcategory-link" href="#">Chats</a></li>
                </ul>
                </li>
            </ul>
            </section>
        </div>   
    </template>

<script>
    export default {
        name: 'MenuComponent'
    }
</script>
/* globals $ _ */
$(document).on('ready', onDocReady);

    function onDocReady(){
    $.getJSON('data/product.json', onProductData)
    .fail(function(){
        console.log('get.JSON on product.json failed');
        });
    }
    
    function onProductData(products){
          // initialize ui
        initializeUI(products);
        //show all products
        showProducts(products);
    }
    function initializeUI(products) {
        $('<ul>').attr('id', 'products').addClass('list-products').appendTo('main');
    }
    
    function showProducts(products) {
        //clear any products in dom
        $('#products').empty()
        .append(createProductListItems(products));
    }
    
    function createProductListItems(products) {
        return _.map(products, function(product){
            return $('<li>').addClass('li-product').data('product', product)
            .append(createProductImageDiv(`img/product/thumbs/${product.image}`, 'product-thumb'))
            .append(createProductsDetailsDiv(product.desc, product.price, product.stock))
        })
    }
    
    function createProductImageDiv(url, cssClass) {
        //use JQuery to create and return a div that wraps an image that uses the url as its src
    }
    
    function createProductsDetailsDiv(desc, price, stock) {
        //create div with child divs, one for each param, give each a unique class
    }
    
    function onProductClicked(event) {
        const product = $(event.currentTarget).data('product');
        showProductDetails(product);
    }
    
    function showProductDetails(product) {
        //create markup for product detail
        //show it in a popup
    }


//RECURSIVE SEARCH FUNCTION:
   // function search(coll, term) {
        //similar to filter. 
        //1.Create something to collect your output
        //2. iterate collection
        
        //base case: 1.is this a string?
        //           2. does it contain 'search' term
   // }
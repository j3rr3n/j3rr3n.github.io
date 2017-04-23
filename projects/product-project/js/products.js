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
        createSearch(products);
        searchClick(products);
        searchEnter(products);
        filteredItems(products);
        
    }
    function initializeUI(products) {
        $('<ul>').attr('id', 'products').addClass('list-products')
        .appendTo('main');
    }
    
    function showProducts(products) {
        //clear any products in dom
        $('#products').empty()
        .append(createProductListItems(products));
    }
    
    function createProductListItems(products) {
        return _.map(products, function(product){
            return $('<li>')
                        .addClass('li-product')
                        .data('product', product)
                        .append(createProductImageDiv(`img/product/thumbs/${product.image}`, 'product-thumb'))
                        .append(createProductsDetailsDiv(product.desc, product.price, product.stock, products))
                        .attr('data-target', '.bs-example-modal-lg').attr('data-toggle', 'modal')
                        .on('click', function(){
                            showProductDetails(product);
                        });
            });
    }
   
  function showProductDetails(products){
      return $('.modal-content')
      .empty()
      .append($('<div>').attr('id', 'product-desc').text(products.desc).css('font-weight', 'bold'))
      .append($('<div>').attr('id', 'product-price').text(`Price: $${products.price}`))
      .append($('<div>').attr('id', 'product-stock').text(`Stock: ${products.stock}`))
      .append($('<div>').attr('id', 'product-spec').text(`Spec: ${products.specs}`))
      .append($('<img>').attr('src', `img/product/${products.image}`));
  }
   
   
    
    function createProductImageDiv(url, cssClass) {
             //use JQuery to create and return a div that wraps an image that uses the url as its src
             return $('<div>').append($('<img>').attr('src', url));
    }
    
    
    
    function createProductsDetailsDiv(desc, price, stock, products) {
            //create div with child divs, one for each param, give each a unique class
            return $('<div>').attr('id', 'product-details')
            .append($('<div>').attr('id', 'product-desc').text(`${desc}`))
            .append($('<div>').attr('id', 'product-price').text(`Price: $${price}`))
            .append($('<div>').attr('id', 'product-stock').text(`In Stock: ${stock}`))
    }
    
    

    function createSearch(products){
         $('<div>')
            .attr('id', 'search-bar')
            .append($('<form>').addClass('flex-row').append($('<input>').addClass('textbox').attr('type', 'text'))
            .append($('<input>').addClass('clickme').attr('type', 'button').attr('value', "Search")))
            .appendTo('nav');
        }

    
            
    function searchClick(products){
    return $('.clickme').on('click', function(){
            showProducts(search(products, $('.textbox').val()));
            });
        }
            
    function searchEnter(products){
        return $('.textbox').on('keydown', function(event){
            if(event.which == 13 || event.keyCode == 13) {
            showProducts(search(products, $('.textbox').val()));
            event.preventDefault();
            }
        });
    }          
            
            
            
            
  function search(coll, term) {
    return _.reduce(coll, function(memo, value, pos, coll) {
        if(typeof value === 'object') {
            if(search(value, term).length) {
                memo.push(value);
            }
        } else {
            if(_.contains(value.toString().toLowerCase(), term.toLowerCase())) {
                memo.push(value);
            }
        } return memo
    }, []);
  }
   
   

      function filterProducts(products, type){
           showProducts(_.filter(products, function(product){
              return product.type === type;
          }))
      }
      
      function uniqueTypes(products){
          var allTypes = _.map(products, function(product){
              return product.type;
          });
          var filteredTypes = _.unique(allTypes);
          return filteredTypes;
      }
      
      function lowToHigh(products){
          return products.sort(function(a,b){
              return a.price - b.price;
          })
      }
      
      function highToLow(products){
          return products.sort(function(a,b){
              return lowToHigh(products).reverse();
          });
      }
      
      
      function filteredItems(products){
          $('.dropdown-menu').append($('<li>').attr('role', 'presentation')
          .append($('<a>').attr('role', 'menuitem').attr('tabindex', '-1').text('lowest-highest prices'))
          .on('click', function(){
              showProducts(lowToHigh(products));
          }));
          $('.dropdown-menu').append($('<li>').attr('role', 'presentation')
          .append($('<a>').attr('role', 'menuitem').attr('tabindex', '-1').text('highest-lowest prices'))
          .on('click', function(){
              showProducts(highToLow(products));
          }));
          $('.dropdown-menu').append($('<li>').attr('role', 'presentation')
          .append($('<a>').attr('role', 'menuitem').attr('tabindex', '-1').text('all products'))
          .on('click', function(){
              showProducts(products);
          }));
          return _.map(uniqueTypes(products), function(product){
             return $('.dropdown-menu').append($('<li>').attr('role', 'presentation').append($('<a>')
             .attr('role', 'menuitem').attr('tabindex', '-1').text(product)).on('click', function(){
                 filterProducts(products, product);
             }));
          });
      }
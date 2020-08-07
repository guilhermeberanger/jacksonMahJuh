//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}





jQuery('[data-app="product.buy-button"]').on('click', function() {
  var $productId = jQuery(this).attr('data-product');
  var $dataSession = jQuery("html").attr("data-session");
  var self = this;
  jQuery.ajax({
    method: "POST",
    url: "/web_api/cart/",
    contentType: "application/json; charset=utf-8",
    data: '{"Cart":{"session_id":"'+$dataSession+'","product_id":"'+$productId+'","quantity":1}}'
  }).done(function( response, textStatus, jqXHR ) {
    jQuery(self).text("Adicionado!")
   var qtdCart = parseInt(jQuery("[data-cart=amount]").html());
   jQuery("[data-cart=amount]").html(qtdCart + 1);
  }).fail(function( jqXHR, status, errorThrown ){
    var response = jQuery.parseJSON( jqXHR.responseText );
    // Exibe a mensagem de erro (estoque insuficiente, etc)
    alert(response.causes[0])
  });
})




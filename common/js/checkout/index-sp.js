
var searchBoxCountry = function() {

    $('#phone-select').on('click', function() {
        $(this).parent().parent().find('.country-list').addClass('show');
        $(this).parent().parent().find('.input-dropdown-mask').addClass('show');
    });

    $('.input-dropdown-mask').on('click', function(event) {
        if($('.row-input .country-list').hasClass('show')) {
            event.preventDefault();
            $('.country-list').removeClass('show');
            $('.input-dropdown-mask').removeClass('show');
        }
    });

    $('#country-list-scroll .list-cnt .item').on('click', function(event) {
        event.preventDefault();
        var $input_flag = $(this).find('.country-flag').find('.icon').html();
        var $input_num = $(this).find('.country-row-description').find('.phone-code').html();
        
        $('#phone-select').find('.icon').html($input_flag);
        $('#phone-select').find('#current-phone-code').html($input_num);
        $('.country-list').removeClass('show');
        $('.input-dropdown-mask').removeClass('show');
    });
};

var methodPayment = function() {
  $('input[name="pay"]').on('change', function() {
    if($(this).attr('name') === 'pay' && $(this).attr('id') === 'with-credid-card') {
      $('#form-credit-card').slideDown();
    } else {
      $('#form-credit-card').slideUp();
    }
  });
}

$(function() {
    methodPayment();
    searchBoxCountry();
});

var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 0; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /*when the select box is clicked, close any other select boxes,
    and open/close the current select box:*/
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
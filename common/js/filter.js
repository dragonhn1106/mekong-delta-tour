var acrdSidebar = function() {
	$('.box-toggle .toggle-tl').each(function(index, el) {
		$(this).on('click',function(event) {
			$(this).toggleClass('hide');
			$(this).next().slideToggle();
		});
	});
}

var fnLoadMore = function(elm,df) {
	$(elm).children('.item').slice(0, df).show();
	var hidden = $(elm).children('.item:hidden').length;
	if(hidden < 1) {
		$(elm).next('.btn-show-more').hide();
	}
	$('.btn-show-more a').not('.view').each(function(index, el) {
		$(this).on('click', function (event) {
	    event.preventDefault();
	    $(this).parent().prev().children('.item:hidden').slideDown();
	    $(this).parent().hide();
	  });
	});
}

$(function(){

    $.widget("ui.dragslider", $.ui.slider, {
        options: $.extend({},$.ui.slider.prototype.options,{rangeDrag:false}),

        _create: function() {
          $.ui.slider.prototype._create.apply(this,arguments);
          this._rangeCapture = false;
        },

        _mouseCapture: function( event ) { 
          var o = this.options;

          if ( o.disabled ) return false;

          if(event.target == this.range.get(0) && o.rangeDrag == true && o.range == true) {
            this._rangeCapture = true;
            this._rangeStart = null;
          }
          else {
            this._rangeCapture = false;
          }

          $.ui.slider.prototype._mouseCapture.apply(this,arguments);

          if(this._rangeCapture == true) {  
              this.handles.removeClass("ui-state-active").blur();   
          }

          return true;
        },

        _mouseStop: function( event ) {
          this._rangeStart = null;
          return $.ui.slider.prototype._mouseStop.apply(this,arguments);
        },

        _slide: function( event, index, newVal ) {
          if(!this._rangeCapture) { 
            return $.ui.slider.prototype._slide.apply(this,arguments);
          }

          if(this._rangeStart == null) {
            this._rangeStart = newVal;
          }

          var oldValLeft = this.options.values[0],
              oldValRight = this.options.values[1],
              slideDist = newVal - this._rangeStart,
              newValueLeft = oldValLeft + slideDist,
              newValueRight = oldValRight + slideDist,
              allowed;

          if ( this.options.values && this.options.values.length ) {
            if(newValueRight > this._valueMax() && slideDist > 0) {
              slideDist -= (newValueRight-this._valueMax());
              newValueLeft = oldValLeft + slideDist;
              newValueRight = oldValRight + slideDist;
            }

            if(newValueLeft < this._valueMin()) {
              slideDist += (this._valueMin()-newValueLeft);
              newValueLeft = oldValLeft + slideDist;
              newValueRight = oldValRight + slideDist;
            }

            if ( slideDist != 0 ) {
              newValues = this.values();
              newValues[ 0 ] = newValueLeft;
              newValues[ 1 ] = newValueRight;

              // A slide can be canceled by returning false from the slide callback
              allowed = this._trigger( "slide", event, {
                handle: this.handles[ index ],
                value: slideDist,
                values: newValues
              } );

              if ( allowed !== false ) {
                this.values( 0, newValueLeft, true );
                this.values( 1, newValueRight, true );
              }
              this._rangeStart = newVal;
            }
          }



        },


        /*
        //only for testing purpose
        value: function(input) {
            console.log("this is working!");
            $.ui.slider.prototype.value.apply(this,arguments);
        }
        */
    });


	$('#range-day').slider({
        range: true,
        min: 0,
        max: 100,
        step: 3,
        rangeDrag: true,
        values: [15, 100],
        create: function() {
            $('#dayMin').text(3 + " days" );
            $('#dayMax').text(100 + " days" );
        },
        slide: function( event, ui ) {
            $('#dayMin').text(ui.values[0] + " days" );
            $('#dayMax').text(ui.values[1] + " days" );
        }
    });

    $('#range-price').slider({
        range: true,
        min: 0,
        max: 9100,
        step: 3,
        rangeDrag: true,
        values: [1500, 9100],
        create: function() {
            $('#priceMin').text( "$" + 20 );
            $('#priceMax').text( "$" + 9100);
        },
        slide: function( event, ui ) {
            $('#priceMin').text( "$" + ui.values[0]);
            $('#priceMax').text( "$" + ui.values[1]);
        }
    });

    $('#range-price02').slider({
        range: true,
        min: 0,
        max: 1000,
        step: 3,
        rangeDrag: true,
        values: [0, 1000],
        create: function() {
            $('#price02Min').text( "$" + 0);
            $('#price02Max').text( "$" + 1000 + "+" );
        },
        slide: function( event, ui ) {
            $('#price02Min').text( "$" + ui.values[0]);
            $('#price02Max').text( "$" + ui.values[1] + "+" );
        }
    });

    // $('.filter-place-search').focusin(function() {
    //     $(this).parent().addClass('on-focus');
    // }).focusout(function() {
    //     $(this).parent().removeClass('on-focus');
    // });

    fnLoadMore('.region .list-label',6);
    fnLoadMore('.accommodation .list-label',7);
    fnLoadMore('.travel .list-label',7);
    acrdSidebar();
})
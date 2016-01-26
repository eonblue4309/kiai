var _$ = (function() {
  var el;

  return function(selector) {
    el = document.querySelectorAll(selector);

    var _classAPI = {
      has: function(testClass) {
        return !!~el[0].className.indexOf(testClass);
      },
      add: function(addClass) {
        if ( !_classAPI.has(addClass) ) {
          el[0].className += (el[0].className.length > 0 ? " " : "") + addClass;
        }
        return this;
      },
      remove: function(removeClass) {
        if ( _classAPI.has(removeClass) ) {
          var classArray = el[0].className.split(" ");
          var index = classArray.indexOf(removeClass);
          classArray.splice(index, 1);
          el[0].className = classArray.join(" ");
        }
        return this;
      },
      toggle: function(toogleClass) {
        _classAPI.has(toogleClass) ? _classAPI.remove(toogleClass) : _classAPI.add(toggleClass);
        return this;
      }
    };

    return {
      class: _classAPI
    };
  }
}());

// example
// _$(".selector").class.toggle("foobar");

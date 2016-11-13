// Abstract Factory design pattern
(function(win, $) {
  function RedCircle() {
    
  }
  //var RedCircle = function() {};
  RedCircle.prototype.create = function() {
    this.item = $('<div class="circle" style="background:red;"></div>');
    return this;
  };

  BlueCircle = function() {
    
  };

  BlueCircle.prototype.create = function() {
    this.item = $('<div class="circle" style="background:blue;"></div>');
    return this;
  };

  CircleFactory = function() {
    this.types = {};
    this.create = function(type) {
      return new this.types[type]().create();
    };

    this.register = function(type, cls) {
      if(cls.prototype.create) {
        this.types[type] = cls;
      }
    };
  };
  
  var CircleGeneratorSingleton = (function() {
    var instance;

    function init() {
      var _aCircle = [],
          _stage = $('.advert'),
          _cf = new CircleFactory();
          _cf.register('red', RedCircle);
          _cf.register('blue', BlueCircle);

      function _position(circle, left, top) {
        circle.css('left', left);
        circle.css('top', top);
      }

      function create(left, top, color) {
        var circle = _cf.create(color).item;
        _position(circle, left, top);
        return circle;
      }

      function add(circle) {
        _stage.append(circle);
        _aCircle.push(circle);
      }

      function index() {
        return _aCircle.length;
      }

      // using Revealing pattern
      return {
        index: index,
        create: create,
        add: add
      }; 
    }

    return {
      getInstance: function() {
        if(!instance) {
          instance = init();
        }
        return instance;
      }
    };
  })();

  $(win.document).ready(function() {
      $('.advert').click(function(e) {
        var cg = CircleGeneratorSingleton.getInstance();
        var circle = cg.create(e.pageX-5, e.pageY-5, "red");
        cg.add(circle);
      });

      $(document).keypress(function(e) {
        if (e.key == 'a') {
          var cg = CircleGeneratorSingleton.getInstance();
          var circle = cg.create(Math.floor(Math.random()*400), Math.floor(Math.random()*400), "blue");
          cg.add(circle);
        }
      });

  });
})(window, jQuery);
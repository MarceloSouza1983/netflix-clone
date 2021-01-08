/* window.loadPatternImages = function() {

    var _this = this;
    this.fileTemplate = "%.jpg";
    this.fileDirectory = "/img/";
    this.imageIndex = 0;
    
    this.loadImage = function loadImage(src, index) {
      var image = new Image();
      image.src = src.replace('%', index);
      image.onload = function() {
        _this.imageIndex++;
        _this.loadImage(_this.fileDirectory + _this.fileTemplate, _this.imageIndex);
        document.querySelector('.loaded-images').appendChild(image);
      };
      image.onerror = function(e) {
          var textNode = document.createTextNode('Loaded ' + _this.imageIndex + ' images from ' + src);
        document.querySelector('.loaded-images').appendChild(textNode);
        _this.errorOccurred(e)
      };
    };
  
    this.errorOccurred = function(error) {
      console.log(error);
    };
    
    this.loadImage(_this.fileDirectory + _this.fileTemplate, _this.imageIndex);
    
  }; */
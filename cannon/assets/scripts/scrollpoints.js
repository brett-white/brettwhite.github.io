$(document).on('scroll', function () {

  // Scroll logic
  $('.storyItem').each(function () {

    var $this  = $(this),
        itemID = $(this).attr(id);

    //scroll down
    if ($this.offset().top <= midPoint {
      $('.storyItem').not($this).removeClass('isActive').addClass('wasActive');
      $this.addClass('isActive');
    }

    //scroll up
    else if ($this.offset().top > midPoint && $this.hasClass('isActive') {
      $('.storyItem').not($this).removeClass('wasActive').addClass('isActive');
      $this.removeClass('isActive').addClass('wasActive');
    }

  });

});
(function($) {
  $.fn.renderTemplate = function(templatePath, data) {
    var $self = this;
    $.ajax({
      url : templatePath,
      dataType : 'text',
      success : function(source) {
        var template = Handlebars.compile(source);
        $self.append(template(data));
      }
    });
    return $self;
  };
})(jQuery);

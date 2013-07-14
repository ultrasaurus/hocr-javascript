
$(document).ready(function() {
    $(".ocrx_word").attr('style', function() {
        return Manuscript.bboxToStyle(this.title);
        });

});

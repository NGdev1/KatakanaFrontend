/**
 * Created by apple on 23.03.17.
 */
(function ($) {
    $.fn.filterTable = function filterTable(filter, cellClass, mutedClass) {
        $(this).find("tr").each(function () {
            let tr = $(this);
            let text = tr.find('.' + cellClass).text();
            if (text.indexOf(filter) > -1) {
                tr.removeClass(mutedClass);
            } else {
                tr.addClass(mutedClass);
            }
        });
    }
})(jQuery);


$('.ais-RefinementList-checkbox').change(function() {

    // Get all checked boxes
    var checkedVals = $('.ais-RefinementList-checkbox:checkbox:checked').map(function() {
        return "." + this.value;
    }).get();

    // If nothing checked, just show them all
    if (checkedVals.length == 0) {
        var selected = $(".ais-Hits-item");
    } else {
        // Filter elements on page
        var repos = $(".ais-Hits-item");
        repos.hide();

        // Only show those belonging to class
        var classes = checkedVals.join(", ");
        var selected = $(classes);
    }

    // Show those selected, update those found
    selected.show();
    $("#selected-count").text(selected.length);

});

// Add number of repos that we start with
$( document ).ready(function() {

    // Ensure we are at the top
    window.scrollTo(0, 0);

    // Ensure any cached checks are cleared
    $('input:checkbox').prop('checked', false)

    var repos = $(".ais-Hits-item");
    $("#selected-count").text(repos.length);

    $(".ais-SearchBox-input").off();
    $(".ais-SearchBox-input").on("input", function(e) {
      var input = $(this);
      var query = input.val().toLowerCase();

      // Only update if different
      if (input.data("lastval") != query) {
        input.data("lastval", query);

        // Hide those without term
        repos.show().filter(function() {
          text = $(this).attr("data-description") + " " + $(this).attr("data-language") + " " + $(this).attr("data-license");
          text = text.replace(/\s+/g, ' ');
          return !text.toLowerCase().includes(query);
        }).hide();
     }
   });
});

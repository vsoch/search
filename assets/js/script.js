
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
    var repos = $(".ais-Hits-item");
    $("#selected-count").text(repos.length);
});

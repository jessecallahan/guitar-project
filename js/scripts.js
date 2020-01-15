

  $(document).ready(function() {
    $("form#in").submit(function(event) {
      event.preventDefault();

      var secondString = $("input:radio[name=secondstring]:checked").val();

      var firstString = $("input:radio[name=firststring]:checked").val();

    // if (GuiTar == val "a2"){
    //     $(".output").append("F#")

    //     else {
            $(".output").append(secondString);
            $(".output").append(firstString);
        // }


    });

});
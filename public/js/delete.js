$(document).ready(function () {
  $(".delete").on("click", function (e) {
    e.preventDefault();

    if (confirm("Tas seguro mio?")) {
      $(this).closest(".form-delete").submit();
    }
  });
});

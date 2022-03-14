$(document).ready(function () {
  // start icon one in whatwedo
  $("#img1").click(function () {
    $("#img1").hide();
    $(".des").show();
  });
  $(".des").click(function () {
    $(".des").hide();
    $("#img1").show();
  });
  // end icon one in whatwedo

  // start icon two whatwedo
  $("#img2").click(function () {
    $("#img2").hide();
    $(".dev").show();
  });
  $(".dev").click(function () {
    $(".dev").hide();
    $("#img2").show();
  });
  // end icon two whatwedo

  // start icon3 whatwedo
  $("#img3").click(function () {
    $("#img3").hide();
    $(".prm").show();
  });
  $(".prm").click(function () {
    $(".prm").hide();
    $("#img3").show();
  });
  // end icon3 whatwedo

  // form start
  $(".submit").click(function (event) {
    let name = $(".name").val();
    let email = $(".email").val();
    let message = $(".message").val();
    let status = $(".status");
    status.empty();

    if (
      email.includes("@") &&
      email.includes(".") &&
      message > 10 &&
      name > 2
    ) {
      status.append("<div>Thanks your email has been received</div>");
    } else {
      event.preventDefault();
      status.append("<div>OOPs Not Valid");
    }
  });
});

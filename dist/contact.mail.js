//copyright (c) 2021 MathFlare LLC. - All rights reserved.
const form_id = "contact-form";
const data = {
  access_token: "0j8dsns3r0wo6wcwk89oobvi",
};
const onSuccess = () => {
  console.log("email sent successfully");
  $("#contact-form").append(`
            <p class="text-success m-2" id="success"><strong>Success!</strong> The email was sent successfully</p>
        `);
  sendButton.val("Send");
  sendButton.prop("disabled", false);
  $("#subj").val(null);
  $("#msg").val(null);
  setTimeout(function () {
    $("#success").remove();
  }, 8000);
};
const onError = (error) => {
  console.error("email was not sent successfully. " + error.error);
  $("#contact-form").append(`
                <p class="text-warning m-2">
                    the application encountered an error. 
                    Please try again later or <u id="refresh" class="text-white">refresh the page</u>. If the problem presists, please <a href="https://github.com/liquid-geometry/liquidgeometry/issues" class="text-white"><u>open a github issue</u></a>.
                </p>
        `);
  sendButton.val("Error! Refresh the Page");
  sendButton.prop("disabled", true);
  $("#subj").val(null);
  $("#msg").val(null);
  $("#refresh").click(
    (refresh = (e) => {
      e.preventDefault();
      location.reload();
    })
  );
};
const sendButton = $("#" + form_id + " [name='send']");
const send = () => {
  sendButton.val("Sending…");
  sendButton.prop("disabled", true);
  const subject = $("#" + form_id + " [name='subject']").val();
  const message = $("#" + form_id + " [name='text']").val();
  data["subject"] = subject;
  data["text"] = message;
  $.post("https://postmail.invotes.com/send", data, onSuccess).fail(onError);
  return false;
};
sendButton.on("click", send);
var $form = $("#" + form_id);
$form.submit(function (event) {
  event.preventDefault();
});
//copyright (c) 2021 MathFlare LLC. - All rights reserved.

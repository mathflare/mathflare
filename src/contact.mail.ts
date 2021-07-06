const form_id_js: string = "contact-form";
const data_js: any = {
    "access_token": "0j8dsns3r0wo6wcwk89oobvi"
};
const js_onSuccess = () => {
    console.log('message sent successfully');
    sendButton.value = 'Send';
    sendButton.disabled = false;
    (<HTMLParagraphElement>document.getElementById('user-message')).innerHTML = `<p class="text-success">Your message has been sent successfully. <br> We will get back to you soon.</p>`;
    (<HTMLFormElement>document.getElementById('contact-form')).reset()!;
}
const js_onError = (error: object) => { console.error(error); (<HTMLParagraphElement>document.getElementById('user-message')).innerHTML = `<p class="text-warning">The application encountered an error. Please <u onclick="refresh()" style="cursor: pointer;" class="text-white">refresh the page</u> and try again.</p>`; sendButton.value = 'Error!'; }
const sendButton: any = (<HTMLButtonElement>document.getElementById('send'))!;
const js_send = () => {
    sendButton.value = 'Sending…';
    sendButton.disabled = true;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            js_onSuccess();
        } else
            if (request.readyState == 4) {
                js_onError(request.response);
            }
    };
    var subject = (<HTMLInputElement>document.querySelector("#" + form_id_js + " [name='subject']")).value!;
    var message = (<HTMLTextAreaElement>document.querySelector("#" + form_id_js + " [name='text']")).value!;
    data_js['subject'] = subject;
    data_js['text'] = message;
    var params = toParams(data_js);
    request.open("POST", "https://postmail.invotes.com/send", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(params);
    return false;
}
sendButton.onclick = js_send;
const toParams = (data_js: any) => {
    var form_data = [];
    for (var key in data_js) {
        form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
    }
    return form_data.join("&");
}
var js_form: any = (<HTMLFormElement>document.getElementById(form_id_js))!;
js_form.addEventListener("submit", function (e: any) {
    e.preventDefault();
});
const refresh = () => {
    location.reload();
}
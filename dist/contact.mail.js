"use strict";
const form_id_js = "contact-form";
const data_js = {
    "access_token": "cji8to5eyo27kazz0db62sdb"
};
const js_onSuccess = () => {
    console.log('message sent successfully');
    sendButton.value = 'Send';
    sendButton.disabled = false;
    document.querySelector('#user-message').innerHTML = `<p class="text-success">Your message has been sent successfully. <br /> We will get back to you soon.</p>`;
    document.querySelector('#contact-form').reset();
};
const js_onError = (error) => {
    console.error(error);
    document.querySelector('#user-message').innerHTML = `<p class="text-warning">The application encountered an error. Please <u onclick="refresh()" style="cursor: pointer;" class="text-white">refresh the page</u> and try again.</p>`;
    sendButton.value = 'Error!';
};
const sendButton = document.querySelector('#send');
const js_send = () => {
    if (document.querySelector("#" + form_id_js + " [name='email']").value === ''
        || document.querySelector("#" + form_id_js + " [name='subject']").value === ''
        || document.querySelector("#" + form_id_js + " [name='text']").value === ''
        || !document.querySelector('#agree-to-tos').checked
        || document.querySelector('.h-captcha').children[0].getAttribute('data-hcaptcha-response') === '') {
        document.querySelector('#user-message').innerHTML = `<p class="text-warning">Please fill out all the required fields</p>`;
    }
    else {
        sendButton.value = 'Sending…';
        sendButton.disabled = true;
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState == 4 && request.status == 200) {
                js_onSuccess();
            }
            else if (request.readyState == 4) {
                js_onError(request.response);
            }
        };
        let subject = document.querySelector("#" + form_id_js + " [name='email']").value + " | " + document.querySelector("#" + form_id_js + " [name='subject']").value;
        let message = document.querySelector("#" + form_id_js + " [name='text']").value;
        data_js['subject'] = subject;
        data_js['text'] = message;
        let params = toParams(data_js);
        request.open("POST", "https://postmail.invotes.com/send", true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send(params);
        return false;
    }
};
sendButton.onclick = js_send;
const toParams = (data_js) => {
    let form_data = [];
    for (let key in data_js) {
        form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
    }
    return form_data.join("&");
};
const js_form = document.querySelector("#" + form_id_js);
js_form.addEventListener("submit", (event) => {
    event.preventDefault();
});
const refresh = () => {
    location.reload();
};

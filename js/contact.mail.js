    const form_id = "contact-form";
    const data = {
        "access_token": "477a54dwsqid4kqzmjj6dwx0"
    };
    const onSuccess = () => {
        console.log('email sent successfully')
    }
    const onError = (error) => {
        console.log('email was not sent successfully. ' + error)
    }
    const sendButton = $("#" + form_id + " [name='send']");
    const send = () => {
        sendButton.val('Sending…');
        sendButton.prop('disabled',true);
        const subject = $("#" + form_id + " [name='subject']").val();
        const message = $("#" + form_id + " [name='text']").val();
        data['subject'] = subject;
        data['text'] = message;
        $.post('https://postmail.invotes.com/send',
            data,
            onSuccess
        ).fail(onError);
        return false;
    }
    sendButton.on('click', send);
    var $form = $("#" + form_id);
    $form.submit(function( event ) {
        event.preventDefault();
    });
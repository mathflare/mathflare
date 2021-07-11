const {verify} = require('hcaptcha');
const secret = '0x04f252dB32B55bFc6dbaB40Bc2B229534fAcbA42';
const token = 'f905f0c2-dacd-408f-b39c-51c7aeace28f';
verify(secret, token)
  .then((data) => {
    if (data.success === true) {
      console.log('success!', data);
    } else {
      console.log('verification failed');
    }
  })
  .catch(console.error);
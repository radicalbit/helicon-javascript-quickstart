let resultSpan;
let host;
let tenant;
let clientId;
let displayName;
let payload;

window.onload = () => {
  resultSpan = document.getElementById('result');
  host = document.getElementById('host');
  tenant = document.getElementById('tenant');
  clientId = document.getElementById('clientId');
  displayName = document.getElementById('displayName');
  port = document.getElementById('port');
  protocol = document.getElementById('protocol');
  payload = document.getElementById('payload');
}

function onSubmit() {
  resultSpan.textContent = '';

  // check form validity
  const valid = validateForm();
  if(valid !== true) {
    resultSpan.append( valid.error);
    return;
  }

  // Create a new Helicon SDK istance
  const helicon = new Helicon.HeliconWriteClient(host.value, clientId.value, tenant.value, protocol.value, port.value, { trace: true });

  try {
    // get the payload value
    const record = JSON.parse(payload.value);

    // and send it to the stream
    helicon.write(displayName.value, record).then(
      () => { 
      resultSpan.append('Publish completed!');
      resultSpan.style.color = "green";
    
    },
      (errorMessage) => {
        resultSpan.append(errorMessage);
        resultSpan.style.color = "red";
      }
    );
  } catch (error) {
    resultSpan.append('Record malformed, please enter a valid JSON');
  }
}

function validateForm() {
  if (!tenant.value) {
    return { error: 'Please, fill a valid tenant value' };
  }
  if (!clientId.value) {
    return { error: 'Please, fill a valid clientId value' };
  }
  if (!displayName.value) {
    return { error: 'Please, fill a valid displayName value' };
  }
  return true;
}

function changeUrl(url) {
  window.history.pushState('', '', url);
}

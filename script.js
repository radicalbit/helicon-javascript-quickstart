let resultSpan;
let tenant;
let clientId;
let displayName;
let payload;

window.onload = () => {
  resultSpan = document.getElementById('result');
  tenant = document.getElementById('tenant');
  clientId = document.getElementById('clientId');
  displayName = document.getElementById('displayName');
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
  const helicon = new Helicon(tenant.value, clientId.value, { trace: true });

  try {
    // get the payload value
    const record = JSON.parse(payload.value);

    // and send it to the stream
    helicon.publish(displayName.value, record).then(
      () => { 
      resultSpan.append('Publish completed!');
      resultSpan.style.color = "green";
    
    },
      (errorMessage) => resultSpan.append(errorMessage)
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

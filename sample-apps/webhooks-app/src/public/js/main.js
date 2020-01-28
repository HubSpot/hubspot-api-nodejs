
function requestNotShownEventsCount() {
  return new Promise((resolve) => {
    $.getJSON("/webhooks/new", (data) => {
      const { notShownEventsCount } = data;
      resolve(notShownEventsCount);
    });
  });
}

async function displayNotShownEventsAlertIfNeed() {
  const notShownEventsCount = await requestNotShownEventsCount();
  if (notShownEventsCount > 0) {
    $('.alert-not-shown-events').show();
  }
}

$(document).ready(() => {
  $('.alert-not-shown-events').click(() => {
    document.location.reload();
    return false;
  });

  setInterval(displayNotShownEventsAlertIfNeed, 10000);
});

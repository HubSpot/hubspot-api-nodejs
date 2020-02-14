const execBatchButtonsIds = [
    '#batch-default-limiter',
    '#batch-default-limiter-and-retry',
    '#batch-retry',
    '#batch-wait-interceptor',
    '#batch-wait-interceptor-and-retry',
]

function patchClickEvent(elementId) {
    $(elementId).click(() => {
        execBatchButtonsIds.forEach((buttonId) => {
            $(buttonId).prop('disabled', true)
        })
        $('*').css('cursor', 'wait')
    })
}

$(document).ready(() => {
    execBatchButtonsIds.forEach(patchClickEvent)
})

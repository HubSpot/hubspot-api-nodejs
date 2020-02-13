async function setDisablePropertyForAllButtons(value) {
    await $('#batch-default-limiter').prop('disabled', value)
    await $('#batch-default-limiter-and-retry').prop('disabled', value)
    await $('#batch-retry').prop('disabled', value)
    await $('#batch-wait-interceptor').prop('disabled', value)
    await $('#batch-wait-interceptor-and-retry').prop('disabled', value)
}

$(document).ready(() => {
    $('#batch-default-limiter').click(async () => {
        await setDisablePropertyForAllButtons(true)
        $('*').css('cursor', 'wait')
    })
    $('#batch-default-limiter-and-retry').click(async () => {
        await setDisablePropertyForAllButtons(true)
        $('*').css('cursor', 'wait')
    })
    $('#batch-retry').click(async () => {
        await setDisablePropertyForAllButtons(true)
        $('*').css('cursor', 'wait')
    })
    $('#batch-wait-interceptor').click(async () => {
        await setDisablePropertyForAllButtons(true)
        $('*').css('cursor', 'wait')
    })
    $('#batch-wait-interceptor-and-retry').click(async () => {
        await setDisablePropertyForAllButtons(true)
        $('*').css('cursor', 'wait')
    })
})

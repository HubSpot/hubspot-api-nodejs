async function setDisablePropertyForAllButtons(value) {
    await $('#batch-default-limiter').prop('disabled', value)
    await $('#batch-retry').prop('disabled', value)
    await $('#batch-redis-limiter').prop('disabled', value)
}

$(document).ready(() => {
    $('#batch-default-limiter').click(async () => {
        await setDisablePropertyForAllButtons(true)
    })
    $('#batch-retry').click(async () => {
        await setDisablePropertyForAllButtons(true)
    })
    $('#batch-redis-limiter').click(async () => {
        await setDisablePropertyForAllButtons(true)
    })
})

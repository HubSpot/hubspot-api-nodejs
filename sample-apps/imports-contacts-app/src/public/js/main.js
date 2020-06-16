const REFRESH_PERIOD = 1000
let timeoutId

const getImportDetails = (id) => {
    return new Promise((resolve) => {
        $.getJSON(`/imports/${id}/internal`, (data) => {
            resolve(data)
        })
    })
}

const canPerformCancel = (state) => state !== 'CANCELED' && state !== 'DONE'

const updateImportDetails = async () => {
    const currentState = $('.import-state').text()

    if (canPerformCancel(currentState)) {
        const importId = $('.import-id').text()
        const { state, updatedAt, metadata } = await getImportDetails(importId)
        $('.import-state').text(state)
        $('.import-updated-at').text(new Date(updatedAt).toISOString())
        $('.import-metadata').text(JSON.stringify(metadata, null, 2))

        if (canPerformCancel(state)) {
            timeoutId = setTimeout(updateImportDetails, REFRESH_PERIOD)
        } else {
            $('#cancel-button').attr('disabled', true)
        }
    }
}

$(window).on('load', () => {
    timeoutId = setTimeout(updateImportDetails, REFRESH_PERIOD)
})

$(window).on('unload', () => {
    clearTimeout(timeoutId)
})

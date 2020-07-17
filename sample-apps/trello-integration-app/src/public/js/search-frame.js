$(document).ready(() => {
    const trelloCardsSource = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        remote: {
            url: '/trello/cards/search?q=%QUERY',
            wildcard: '%QUERY',
        },
    })
    // https://twitter.github.io/typeahead.js/examples/
    $('.typeahead')
        .typeahead(
            {
                hint: true,
                highlight: true,
                minLength: 1,
            },
            {
                name: 'trello-cards',
                display: 'name',
                source: trelloCardsSource,
                templates: {
                    empty: [
                        '<div class="empty-message">',
                        'Unable to find any Trello card that matches the current query',
                        '</div>',
                    ].join('\n'),
                },
            },
        )
        .on('typeahead:selected typeahead:autocompleted', (e, card) => {
            $('#cardId').val(card.id)
        })
})

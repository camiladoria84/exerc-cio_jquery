$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const adicionaTarefa = $('#nova-tarefa').val();
        if (adicionaTarefa.trim() !== "") {
            const novaTarefa = $(`<li style="display: none">${adicionaTarefa}</li>`);
            $(novaTarefa).appendTo('ul');
            novaTarefa.fadeIn();
            $('#nova-tarefa').val('');
        }
    });

    $('ul').on('click', 'li', function() {
        $(this).toggleClass('completed');
    })
})
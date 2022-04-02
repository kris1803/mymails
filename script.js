// mise à jour du compteur
function updateCount () {
    var messagesCount = $('.trash').length;
    $('#count').text(messagesCount);
}
updateCount();
// ajouter le event listener aux poubelles déjà présentes
$('.trash').click( function() {
        $(this).parent('.row').remove();
        // ajouter la class last row à la dernière ligne
        $('.row').last().addClass('last-row');
        updateCount();
});
// création d'un nouveau message
$('#btn-add').click( function(){
        var message = $('#add-message').val();
        // vérification du message entré
        if (message.length<1) {
            alert('Message absent');
            return;
        }
        // on enlève la classe  last-row à toutes les row avant de créer un message
        $('.row').removeClass('last-row');
        $('body').append(`<div class="row last-row">
        <img class="avatar" src="avatar-2.jpg">
        <div>
            <h6>Elise Watson</h6>
            <p>${message}</p>
        </div>
        <img class="trash" src="trash.png">
        </div>`);
        // on reset le champ de texte en haut
        $('#add-message').val('');
        updateCount();
        // ajout du event listener la derniere poubelle
        $('.trash').last().click( function() {
            $(this).parent().remove();
            $('.row').last().addClass('last-row');
            updateCount();
    });
    }
);
// fonction de recherche
function search () {
    // lire le nom cherché
    var name = $('#search').val();
    // on affiche tous les messages
    $('h6').each( function () {
        $(this).parent().parent().show();
        updatecount();
    });
    // si rien n'est rentré dans la recherche on s'arrete
    if (!name) {
        return;
    }
    // cacher les messages qui correspondent pas
    $('h6').each( function () {
        if ($(this).text() !== name) {
            $(this).parent().parent().hide();
        }
    });

    // reset le champ recherche
    $('#search').val('');
}
$('#searchButton').click(function() {
    search();
});
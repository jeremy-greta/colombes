<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Northwind Traders</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
</head>
<link rel="stylesheet" href="css/main.css">

<body class="container">

    <div class="jumbotron">
        <h1 class="display-4">Northwind Traders</h1>
        <p class="lead">Projet fil rouge en HTML, CSS, JS, PHP, et MySQL basé sur le jeu de données Nortwind.

            <?php
            include_once('team.php');
            $diff = (strtotime(date('Y-m-d')) - strtotime('2020-11-02')) / 60 / 60 / 24;
            echo 'Réalisé par ' . PRENOM . ', Daron Coder depuis ' . $diff . ' jours</p>';
            ?>

            <hr class="my-4">
        <p>Cliquer sur le bouton ci-dessous pour accéder au back-office (user et mot de passe requis) :</p>
        <a class="btn btn-success btn-lg" href="#" role="button">Connexion</a>
    </div>

    <h2>Membre de l'équipe</h2>
    <section id="team" class="d-flex flex-wrap justify-content-around">
        <?php
        $html = '';
        for ($i = 0; $i < count($member); $i++) {
            $html .= '<div class="card mb-3'
                . ($member[$i][2] === "F" ? ' bgGirl' : ' bgBoy')
                . '" style="width: 18rem";>';


            $html .= '<div class="card-body" >';
            $html .= '<h5 class="card-title">' . $member[$i][0] . '</h5>';
            $html .= '<p class="card-text">' . $member[$i][1] . ' ans</p>';

            $html .= '<p class="card-text">'
                . ($member[$i][3] ? ($member[$i][2] === "F" ? 'Mariée' : 'Marié') : 'Célibataire')
                . '</p>';

            $html .= '</div></div>';
        }
        echo $html;
        ?>
    </section>

    <h2>Nos références</h2>
    <section id="projects">
        <?php
        include_once('projects.php');
        ?>
    </section>


</body>

</html>
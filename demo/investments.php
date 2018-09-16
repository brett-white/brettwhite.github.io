<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Cannon Asset Managers</title>
    <meta name="robots" content="noindex">
    <meta name="googlebot" content="noindex">
    <?php include($_SERVER[ 'DOCUMENT_ROOT']. "/includes/styles.php"); ?>
    <link href="assets/styles/investments-graph.css" rel="stylesheet">
    <link href="assets/styles/investments.css" rel="stylesheet">
</head>
<body id="investments">
    <?php include($_SERVER[ 'DOCUMENT_ROOT']. "/includes/navbar.php"); ?>
    <main>
        <section class="graph">
            <?php include($_SERVER[ 'DOCUMENT_ROOT']. "/includes/investments-graph.php"); ?>
        </section>
        <section id="products">
            <div class="container">
                <ul class="investment-cards">
                    <?php include($_SERVER[ 'DOCUMENT_ROOT']. "/includes/investment-card.php"); ?>
                    <?php include($_SERVER[ 'DOCUMENT_ROOT']. "/includes/investment-card.php"); ?>
                    <?php include($_SERVER[ 'DOCUMENT_ROOT']. "/includes/investment-card.php"); ?>
                    <?php include($_SERVER[ 'DOCUMENT_ROOT']. "/includes/investment-card.php"); ?>
                    <?php include($_SERVER[ 'DOCUMENT_ROOT']. "/includes/investment-card.php"); ?>
                    <?php include($_SERVER[ 'DOCUMENT_ROOT']. "/includes/investment-card.php"); ?>
                    <?php include($_SERVER[ 'DOCUMENT_ROOT']. "/includes/investment-card.php"); ?>
                    <?php include($_SERVER[ 'DOCUMENT_ROOT']. "/includes/investment-card.php"); ?>
                    <?php include($_SERVER[ 'DOCUMENT_ROOT']. "/includes/investment-card.php"); ?>
                    <?php include($_SERVER[ 'DOCUMENT_ROOT']. "/includes/investment-card.php"); ?>
                    <?php include($_SERVER[ 'DOCUMENT_ROOT']. "/includes/investment-card.php"); ?>
                    <?php include($_SERVER[ 'DOCUMENT_ROOT']. "/includes/investment-card.php"); ?>
                    <?php include($_SERVER[ 'DOCUMENT_ROOT']. "/includes/investment-card.php"); ?>
                    <?php include($_SERVER[ 'DOCUMENT_ROOT']. "/includes/investment-card.php"); ?>
                </ul>
            </div>
        </section>
    </main>
    <?php include($_SERVER[ 'DOCUMENT_ROOT']. "/includes/footer.php"); ?>
</body>
</html>
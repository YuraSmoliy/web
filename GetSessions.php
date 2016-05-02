<?php
session_start();
?>
<!DOCTYPE html>
<html>
    <body>
        <?php
        $seColor=$_SESSION["color"];
        echo "color is ".$seColor;
        ?>
    </body>
</html>
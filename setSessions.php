<?php
session_start();
?>
<!DOCTYPE html>
    <html>
    <body>
        <?php
    $_SESSION["color"]="green";
echo "Session variables are set.";
  ?>  
</body>
    </html>

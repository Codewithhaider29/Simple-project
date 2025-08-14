<html>
    <head>
        <title>Document</title>
    </head>
<body>
    <?php
        $i;
        $j;
        for($i=1; $i<=5; $i++){
            for($j=1; $j<=5; $j++)
            if($i<=$j){
                echo '*';
            };
            echo '<br>';
        };

        for($i=5; $i>=1; $i--){
            for($j=5; $j>=1; $j--)
            if($i<=$j){
                echo '*';
            };
            echo '<br>';
        };



    ?>
    
</body>
</html>
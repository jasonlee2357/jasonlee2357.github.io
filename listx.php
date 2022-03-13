<?php
$ff = glob("data/*.json");
foreach ($ff as $value) {
	//$fn = str_replace("data/","",$value);
	$fn = $value;
	echo $fn."\n";
}
?>
<?php
$xml = simplexml_load_file("https://api.twitter.com/1/lists/statuses.xml?slug=design-students&owner_screen_name=studentdesigner");
foreach($xml->children() as $child)
	{
	echo $child . "<br />";
	}
?>
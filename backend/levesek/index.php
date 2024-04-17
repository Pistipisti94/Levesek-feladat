<?php
switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        require_once 'getLevesek.php';
        break;
    default:
        # code...
        break;
}
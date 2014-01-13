<?php

require_once 'NotORM.php';

$pdo = new PDO('mysql:dbname=master;host=localhost', 'root', '');

$db = new NotORM($pdo);

require 'Slim/Slim.php';

\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();

//Get Method to get the data from database

$app->get('/user(/:id)', function($id=null) use ($app, $db){
    
	
    if($id == null){
        $data = array();
        foreach($db->userinfo() as $p){
            $data[] = array(
                            'id' =>   $p['id'],
                            'fname' => $p['fname'],
                            'lname' =>  $p['lname'],
                            'email' =>  $p['email'],
							'address' =>  $p['address']
                        );
        }
    } else {
        
        $data = null;
        
        if($p = $db->userinfo()->where('id', $id)->fetch()){
            $data = array(
                           'id' =>   $p['id'],
                            'fname' => $p['fname'],
                            'lname' =>  $p['lname'],
                            'email' =>  $p['email'],
							'address' =>  $p['address']
                        );
        }
    }
    
    $app->response()->header('content-type','application/json');
    
    echo json_encode($data);
    
});

//Post method to insert data into database

$app->post('/user', function() use ($app, $db){
    
    $array = (array) json_decode($app->request()->getBody());

     $data = $db->userinfo()->insert($array);
     
     $app->response()->header('Content-Type', 'application/json');
 
     echo json_encode($data['id']);
     
});



//Put method to update the data into database

$app->put('/user/:id', function ($id) use ($app, $db) {
    
    $user = $db->userinfo()->where('id', $id);
    $data = null;
 
    if ($user->fetch()) {
        /*
         * We are reading JSON object received in HTTP request body and converting it to array
         */
        $post = (array) json_decode($app->request()->getBody());
 
        /*
         * Updating user
         */
        $data = $user->update($post);
    }
 
    $app->response()->header('Content-Type', 'application/json');
    echo json_encode($data);
});

//Delete method to delete the data into database
$app->delete('/user/:id', function ($id) use ($app, $db) {
    /*
     * Fetching user for deleting
     */
    $user = $db->userinfo()->where('id', $id);
 
    $data = null;
    if ($user->fetch()) {
        /*
         * Deleting user
         */
        $data = $user->delete();
    }
 
    $app->response()->header('Content-Type', 'application/json');
    echo json_encode($data);
});


$app->run();
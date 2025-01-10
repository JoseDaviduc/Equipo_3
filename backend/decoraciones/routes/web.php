<?php

use App\Http\Controllers\Api\DiseniopaqueteController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EventoController;

Route::get('/', function () {
    return view('welcome');
});

Route::resource('/eventos', EventoController::class);

//Lista de paquetes creados
Route::get('/paquetes', [DiseniopaqueteController::class, 'index']);

//Eliminar paquete
Route::delete('/dltpaquete/{evento}', [DiseniopaqueteController::class, 'destroy']);

Route::apiResource('diseniopaquetes', DiseniopaqueteController::class);

// Ruta para listar eventos
Route::get('/eventos', [EventoController::class, 'index'])->name('eventos.index');

// Ruta para guardar eventos
Route::post('/eventos', [EventoController::class, 'store'])->name('eventos.store');


//ruta para eliminar eventos
Route::delete('/eventos/{evento}', [EventoController::class, 'destroy']);
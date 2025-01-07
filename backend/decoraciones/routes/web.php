<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EventoController;

Route::get('/', function () {
    return view('welcome');
});

Route::resource('eventos', EventoController::class);

// Ruta para listar eventos
//Route::get('/eventos', [EventoController::class, 'index'])->name('eventos.index');

// Ruta para guardar eventos
//Route::post('/eventos', [EventoController::class, 'store'])->name('eventos.store');

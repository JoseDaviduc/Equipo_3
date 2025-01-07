<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Evento extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre_completo',
        'telefono',
        'correo',
        'fecha_evento',
        'hora_inicio',
        'duracion',
        'direccion',
        'tipo_evento'
    ];
}

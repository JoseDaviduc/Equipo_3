<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Evento extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre',
        'telefono',
        'correo',
        'fecha_evento',
        'hora_inicio',
        'direccion_evento',
        'tipo_evento',
        'numero_hora',
    ];
}

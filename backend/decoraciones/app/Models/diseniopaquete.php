<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class diseniopaquete extends Model
{
    use HasFactory;

    protected $table = 'diseniopaquete';

    protected $fillable = [
        'numero_telefono',
        'fecha_evento',
        'hora_evento',
        'duracion_evento',
        'ubicacion_evento',
        'decoracion_principal',
        'paquete_mampara_cuadrada',
        'paquete_mampara_circular',
        'tunel_de_luces_led',
        'telas_de_decoracion',
        'numero_de_colores_de_las_telas',
        'colores_de_las_telas',
        'paquete_de_sillones',
    ];
}

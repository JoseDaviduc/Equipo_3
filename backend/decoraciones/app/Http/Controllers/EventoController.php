<?php

namespace App\Http\Controllers;

use App\Models\Evento;
use Illuminate\Http\Request;

class EventoController extends Controller
{
    public function index()
    {
        $eventos = Evento::all();
        return view('eventos.index', compact('eventos'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'nombre_completo' => 'required',
            'telefono' => 'required',
            'correo' => 'required|email',
            'fecha_evento' => 'required|date',
            'hora_inicio' => 'required',
            'duracion' => 'required|integer',
            'direccion' => 'required',
            'tipo_evento' => 'required'
        ]);

        Evento::create($request->all());

        return redirect()->back()->with('success', 'Evento agendado correctamente');
    }
} 
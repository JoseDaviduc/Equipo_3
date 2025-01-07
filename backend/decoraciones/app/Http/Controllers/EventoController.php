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
            'nombre' => 'required',
            'telefono' => 'required',
            'correo' => 'required|email',
            'fecha_evento' => 'required|date',
            'hora_inicio' => 'required',
            'direccion_evento' => 'required',
            'tipo_evento' => 'required',
            'numero_hora' => 'required|integer'
        ]);

        Evento::create($request->all());
        Evento::create([
            'nombre' => $request->nombre_completo,
            'telefono' => $request->telefono,
            'correo' => $request->correo,
            'fecha_evento' => $request->fecha_evento,
            'hora_inicio' => $request->hora_inicio,
            'direccion_evento' => $request->direccion,
            'tipo_evento' => $request->tipo_evento,
            'numero_hora' => $request->duracion,
        ]);

        return redirect()->back()->with('success', 'Evento agendado correctamente');
    }
} 
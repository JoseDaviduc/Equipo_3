<?php

namespace App\Http\Controllers;

use App\Models\Evento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EventoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Obtener todos los eventos
        $eventos = DB::table('Eventos')->get();

        // Retornar la respuesta con los eventos dentro de un objeto 'data'
        return response()->json([
            'data' => $eventos
        ]);
    }

    public function GetBodas()
    {
        //
        $eventos = Evento::where('tipo_evento', 'bodas')->get();

        //DB::table('Eventos')->where('tipo_evento', 'bodas')->get();

        return $eventos;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $evento = Evento::create($request->all(
            ));
        return $evento;
    }

    /**
     * Display the specified resource.
     */
    public function show(Evento $evento)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Evento $evento)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Evento $evento)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Evento $evento)
    {
        // Eliminar el evento
        $evento->delete();

        // Retornar una respuesta indicando que la operación fue exitosa
        return response()->json([
            'message' => 'Evento eliminado exitosamente.'
        ], 200);
    }
}
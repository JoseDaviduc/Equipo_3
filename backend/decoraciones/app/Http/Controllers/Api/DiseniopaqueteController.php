<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Evento;
use App\Models\Diseniopaquete;
use Illuminate\Http\Request;

class DiseniopaqueteController extends Controller
{
    public function index()
    {

        $eventos = Diseniopaquete::all();

        return response()->json([
            'data' => $eventos
        ]);
    }


    public function store(Request $request)
    {
        $evento = Diseniopaquete::create($request->all());
        return response()->json($evento, 201); // 201 Created
    }

    public function show(Diseniopaquete $evento)
    {
        return response()->json($evento);
    }

    public function update(Request $request, Diseniopaquete $evento)
    {
        $evento->update($request->all());
        return response()->json($evento);
    }

    public function destroy(Diseniopaquete $evento)
    {
        $evento->delete();

        return response()->json([
            'message' => 'Paquete eliminado correctamente.'
        ], 201);
    }
}
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('diseniopaquete', function (Blueprint $table) {
            $table->id(); // Clave primaria autoincremental
            $table->string('numero_telefono');
            $table->string('fecha_evento');
            $table->string('hora_evento');
            $table->string('duracion_evento');
            $table->string('ubicacion_evento');
            $table->string('decoracion_principal')->nullable(); // Permite valores nulos
            $table->string('paquete_mampara_cuadrada')->nullable();
            $table->string('paquete_mampara_circular')->nullable();
            $table->string('tunel_de_luces_led')->nullable();
            $table->string('telas_de_decoracion')->nullable();
            $table->string('numero_de_colores_de_las_telas')->nullable();
            $table->string('colores_de_las_telas')->nullable();
            $table->string('paquete_de_sillones')->nullable();
            $table->timestamps(); // Crea campos created_at y updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('diseniopaquete');
    }
};

interface Evento {
    numero_telefono: string; // Changed to string to allow for different formats
    fecha_evento: string; // Keep as string for sending to API
    hora_evento: string;
    duracion_evento: string;
    ubicacion_evento: string;
    decoracion_principal: string | null; // Store name of selected option
    paquete_mampara_cuadrada: string | null;
    paquete_mampara_circular: string | null;
    tunel_de_luces_led: string| null;
    telas_de_decoracion: string | null;
    numero_de_colores_de_las_telas: string | null;
    colores_de_las_telas: string | null;
    paquete_de_sillones: string| null;
    total_a_pagar: number;
}

export { Evento };
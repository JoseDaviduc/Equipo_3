export interface Evento {
  nombre: string;
  telefono: string;
  correo: string;
  fecha_evento: string;
  hora_inicio: string;
  direccion_evento: string;
  tipo_evento: string;
  numero_hora: string;
}

export interface GetEvento {
  id: number;
  nombre: string;
  telefono: string;
  correo: string;
  fecha_evento: string;
  hora_inicio: string;
  direccion_evento: string;
  tipo_evento: string;
  numero_hora: string;
}


export interface getPaquetes {
  id: number;
  numero_telefono: string;
  fecha_evento: string;
  hora_evento: string;
  duracion_evento: string;
  ubicacion_evento: string;
  decoracion_principal: string;
  paquete_mampara_cuadrada: string;
  paquete_mampara_circular: string;
  tunel_de_luces_led: string;
  telas_de_decoracion: string | null;
  numero_de_colores_de_las_telas: string;
  colores_de_las_telas: string;
  paquete_de_sillones: string;
  total_a_pagar: number;
  created_at: string;
  updated_at: string;
}
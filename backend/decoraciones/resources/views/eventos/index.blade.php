<h1>Eventos Agendados</h1>
<table>
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Duración</th>
            <th>Dirección</th>
            <th>Tipo</th>
        </tr>
    </thead>
    <tbody>
        @foreach($eventos as $evento)
            <tr>
                <td>{{ $evento->nombre_completo }}</td>
                <td>{{ $evento->telefono }}</td>
                <td>{{ $evento->correo }}</td>
                <td>{{ $evento->fecha_evento }}</td>
                <td>{{ $evento->hora_inicio }}</td>
                <td>{{ $evento->duracion }}</td>
                <td>{{ $evento->direccion }}</td>
                <td>{{ $evento->tipo_evento }}</td>
            </tr>
        @endforeach
    </tbody>
</table>

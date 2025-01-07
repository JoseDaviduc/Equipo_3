<h1>Eventos Agendados</h1>
<table>
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Dirección</th>
            <th>Tipo</th>
            <th>Numero_hora</th>
        </tr>
    </thead>
    <tbody>
        @foreach($eventos as $evento)
            <tr>
                <td>{{ $evento->nombre }}</td>
                <td>{{ $evento->telefono }}</td>
                <td>{{ $evento->correo }}</td>
                <td>{{ $evento->fecha_evento }}</td>
                <td>{{ $evento->hora_inicio }}</td>
                <td>{{ $evento->direccion_evento }}</td>
                <td>{{ $evento->tipo_evento }}</td>
                <td>{{ $evento->numero_hora }}</td>
            </tr>
        @endforeach
    </tbody>
</table>

<form action="{{ route('eventos.store') }}" method="POST">
    @csrf
    <input type="text" name="nombre_completo" placeholder="Nombre completo" required>
    <input type="text" name="telefono" placeholder="Teléfono" required>
    <input type="email" name="correo" placeholder="Correo electrónico" required>
    <input type="date" name="fecha_evento" required>
    <input type="time" name="hora_inicio" required>
    <input type="number" name="duracion" placeholder="Duración (horas)" required>
    <input type="text" name="direccion" placeholder="Dirección del evento" required>
    <select name="tipo_evento">
        <option value="Cumpleaños">Cumpleaños</option>
        <option value="Boda">Boda</option>
        <option value="Conferencia">Conferencia</option>
    </select>
    <button type="submit">Enviar</button>
</form>

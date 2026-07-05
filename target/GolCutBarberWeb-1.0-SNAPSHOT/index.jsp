<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Gol Cut Barber - Agendamiento</title>
</head>
<body>
    <h1>Módulo de Agendamiento - Gol Cut Barber v2</h1>
    
    <!-- Formulario que envía los datos mediante POST al Servlet -->
    <form action="CitaServlet" method="POST">
        <label for="cliente">Nombre del Cliente:</label><br>
        <input type="text" id="cliente" name="nombreCliente" required><br><br>

        <label for="servicio">Servicio de Barbería:</label><br>
        <select id="servicio" name="tipoServicio">
            <option value="Corte Clásico">Corte Clásico</option>
            <option value="Corte + Barba">Corte + Barba</option>
            <option value="Barba Premium">Barba Premium</option>
        </select><br><br>

        <label for="fecha">Fecha y Hora:</label><br>
        <input type="datetime-local" id="fecha" name="fechaHora" required><br><br>

        <button type="submit">Agendar Cita (Método POST)</button>
    </form>

    <hr>
    
  <h3>Prueba del Sistema</h3>
    <a href="CitaServlet">Verificar estado del Servidor (Método GET)</a>
</body>
</html>
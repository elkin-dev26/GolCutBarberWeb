<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Cita Confirmada</title>
</head>
<body>
    <h1>Resumen del Agendamiento (Procesado con Éxito)</h1>
    <p>Los datos han sido recibidos por el servlet mediante el método POST de forma correcta.</p>
    
    <table border="1" cellpadding="10">
        <tr style="background-color: #eeeeee;">
            <th>Campo</th>
            <th>Información Registrada</th>
        </tr>
        <tr>
            <td><strong>Barbería:</strong></td>
            <td>Gol Cut Barber v2</td>
        </tr>
        <tr>
            <td><strong>Cliente:</strong></td>
            <!-- Elementos JSP para renderizar los atributos del Servlet -->
            <td><%= request.getAttribute("clienteData") %></td>
        </tr>
        <tr>
            <td><strong>Servicio solicitado:</strong></td>
            <td><%= request.getAttribute("servicioData") %></td>
        </tr>
        <tr>
            <td><strong>Fecha y Hora:</strong></td>
            <td><%= request.getAttribute("fechaData") %></td>
        </tr>
    </table>

    <br>
    <a href="index.jsp">Registrar una nueva cita</a>
</body>
</html>
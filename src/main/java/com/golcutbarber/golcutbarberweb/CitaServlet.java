package com.golcutbarber.golcutbarberweb;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "CitaServlet", urlPatterns = {"/CitaServlet"})
public class CitaServlet extends HttpServlet {

    // 1. MÉTODO GET: Se activa al hacer clic en el enlace de prueba
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        response.getWriter().println("<h1>[MÉTODO GET]</h1>");
        response.getWriter().println("<p>El Servlet de Gol Cut Barber v2 está respondiendo correctamente de forma síncrona.</p>");
        response.getWriter().println("<a href='index.jsp'>Volver al Formulario</a>");
    }

    // 2. MÉTODO POST: Recibe los datos del formulario de agendamiento
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        // Capturar los parámetros del formulario HTML
        String cliente = request.getParameter("nombreCliente");
        String servicio = request.getParameter("tipoServicio");
        String fechaHora = request.getParameter("fechaHora");

        // Guardar las variables en la petición para enviarlas a la vista
        request.setAttribute("clienteData", cliente);
        request.setAttribute("servicioData", servicio);
        request.setAttribute("fechaData", fechaHora);

        // Redireccionar el flujo hacia la página JSP de confirmación
        request.getRequestDispatcher("confirmacion.jsp").forward(request, response);
    }
}
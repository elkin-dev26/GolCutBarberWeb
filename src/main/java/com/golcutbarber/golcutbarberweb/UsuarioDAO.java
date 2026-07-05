package com.golcutbarber.golcutbarberweb;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class UsuarioDAO {

    public void registrarUsuario(String nombre, String password) {
        String sql = "INSERT INTO usuarios (nombre, contrasena, correo) VALUES (?, ?, ?)";
        
        try (Connection conn = Conexion.obtenerConexion();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            
            pstmt.setString(1, "ELKIN_PRUEBA_HOY_30_JUNIO");
            pstmt.setString(2, "12345");
            pstmt.setString(3, "prueba@mail.com");
            
            int filas = pstmt.executeUpdate();
            System.out.println("Filas insertadas: " + filas);

            if (conn != null) {
                java.sql.DatabaseMetaData meta = conn.getMetaData();
                System.out.println("DEBUG - CONECTADO A: " + meta.getURL());
            }
            
        } catch (SQLException e) {
            System.out.println("ERROR DE SQL: " + e.getMessage());
        }
    } // 

}
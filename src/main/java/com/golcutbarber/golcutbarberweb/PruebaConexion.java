package com.golcutbarber.golcutbarberweb;

import java.sql.Connection;
import java.sql.SQLException;

public class PruebaConexion {
    public static void main(String[] args) {
        try {
            Connection con = Conexion.obtenerConexion();
            if (con != null) {
                System.out.println("¡Conexión exitosa a la base de datos!");
                con.close();
            }
        } catch (SQLException e) {
            System.out.println("Error al conectar: " + e.getMessage());
        }
    }
}
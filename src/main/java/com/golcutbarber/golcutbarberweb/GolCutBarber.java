package com.golcutbarber.golcutbarberweb;

public class GolCutBarber {
    public static void main(String[] args) {
        try {
            // Esto obliga a Java a reconocer el Driver antes de llamar al DAO
            Class.forName("com.mysql.cj.jdbc.Driver");
            
            UsuarioDAO dao = new UsuarioDAO();
            dao.registrarUsuario("Elkin_Ramirez", "clave123");
            
        } catch (ClassNotFoundException e) {
            System.out.println("Error: No se encontró la clase del Driver: " + e.getMessage());
        }
    }
}

package otrosCodigo.Cuatro;

import java.util.Scanner;

public class comGneration {
public static void main(String[] args) { //Añade clse principal
		
	    Scanner s = new Scanner(System.in); //importamos la clas scanner 
	    
	    System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
	    String j1 = s.nextLine();
	    
	    System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): "); //
	    
	    String j2 = s.nextLine();
	    
	    if (j1 == j2) {
	      System.out.println("Empate");
	    } else {
	      int g = 2;
	      switch(j1) { //Adecuamos llaves que estan de mas o no coinciden 
	        case "piedra":
	          if (j2 == "tijeras") {
	            g = 1;
	          }
	          break;
	        case "papel":
	          if (j2 == "piedra") {
	            g = 2;
	          }
	          break; //Agregamos los brak;
	          
	        case "tijera":
	          if (j2.equals("papel")) {
	            g = 1;
	          }
	          break;
	      }
	      System.out.println("Gana el jugador " + g);
	    }
	  
	  
	}
}


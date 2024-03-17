
package trabalhojava;

import Source.Banco;
import Source.Cliente;

public class TrabalhoJava {

    public static void main(String[] args) {
        Cliente c1 = new Cliente("Fisico", "Maria", "123.456.789-00");
        Cliente c2 = new Cliente("Juridico", "Mariazinha Artimanhas", "12.345.678/0001-00");
        Cliente c3 = new Cliente("Fisico", "Leo", "948.432.255-09");
        Cliente c4 = new Cliente("Juridico", "Leon man product", "12.843.432/0001-00");
        
        // adicionando clientes no banco
        Banco banco = new Banco();
        banco.addCliente(c1);
        banco.addCliente(c2);
        banco.addCliente(c3);
        banco.addCliente(c4);

        banco.imprimirClientes();
      
        //depósito e saque
        c1.depositar(1000);
        c2.depositar(500);
        c3.depositar(800);        
        c4.depositar(80000);
        c1.sacar(300);
        c4.sacar(45739);

        System.out.println("\n\n\nDEPOIS DOS DEPOSITOS E SAQUES:\n");
        banco.imprimirClientes();
        
        
        // transferencia
        c1.transferir(200, c2);
        c4.transferir(21732,c3);

        System.out.println("\n\n\nDEPOIS DAS TRANSFERENCIAS:\n");
        banco.imprimirClientes();
        
        //remove
        banco.removeCliente(c2);
        
        System.out.println("\n\n\nDEPOIS DO REMOVE:\n");
        banco.imprimirClientes();
       
        
        // saldo total 
        System.out.println("\n\n\nSaldo total do banco: " + banco.getSaldoTotal());
        
        
    }
    
}

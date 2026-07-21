package com.cognizant.loan;
public class Loan {
    public String number;
    public String type;
    public double loan;
    public int emi;
    public int tenure;
    public Loan(String number,String type,double loan,int emi,int tenure){
        this.number=number; this.type=type; this.loan=loan; this.emi=emi; this.tenure=tenure;
    }
}
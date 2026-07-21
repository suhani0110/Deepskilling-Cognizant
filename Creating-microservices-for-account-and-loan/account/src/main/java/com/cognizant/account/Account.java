package com.cognizant.account;
public class Account {
    public String number;
    public String type;
    public double balance;
    public Account(String number,String type,double balance){
        this.number=number; this.type=type; this.balance=balance;
    }
}
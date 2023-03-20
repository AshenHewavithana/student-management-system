package com.ashen.student.exception;

public class StudentNotFoundException extends RuntimeException{
    public StudentNotFoundException(Long id){
        super("Could not find the user with Id " + id);
    }
}

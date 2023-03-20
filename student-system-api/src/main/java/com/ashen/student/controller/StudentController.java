package com.ashen.student.controller;

import com.ashen.student.exception.StudentNotFoundException;
import com.ashen.student.model.Student;
import com.ashen.student.repository.StudentRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class StudentController {

    Logger logger = LoggerFactory.getLogger(StudentController.class);
    @Autowired
    private StudentRepository studentRepository;

    @PostMapping("/student")
    Student newUser(@RequestBody Student newStudent){
        logger.trace("New Student Created!");
        return studentRepository.save(newStudent);
    }

    @GetMapping("/students")
    List<Student> getAllStudents() {
        logger.trace("All Students Listed!");
        return studentRepository.findAll();
    }

    @GetMapping("/student/{id}")
    Student getStudentById(@PathVariable Long id){
        logger.trace("Student found by ID");
        return studentRepository.findById(id).orElseThrow(() -> new StudentNotFoundException(id));
    }

    @PutMapping("/student/{id}")
    Student updateStudent(@RequestBody Student newStudent, @PathVariable Long id){
        logger.trace("Updated Student!");
        return studentRepository.findById(id).map(student -> {
            student.setId(newStudent.getId());
            student.setFirstname(newStudent.getFirstname());
            student.setLastname(newStudent.getLastname());
            student.setAddress(newStudent.getAddress());
            student.setDob(newStudent.getDob());
            student.setDegree(newStudent.getDegree());
            student.setCourses(newStudent.getCourses());
            return studentRepository.save(student);
        }).orElseThrow(()->new StudentNotFoundException(id));
    }

    @DeleteMapping("/student/{id}")
    String deleteStudent(@PathVariable Long id){
        logger.trace("Deleted Student!");
        if(!studentRepository.existsById(id)){
            throw new StudentNotFoundException(id);
        }
        studentRepository.deleteById(id);
        return "Student with ID " + id + " has been deleted successfully!";
    }
}

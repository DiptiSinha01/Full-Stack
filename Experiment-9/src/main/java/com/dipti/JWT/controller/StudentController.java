package com.dipti.JWT.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.dipti.JWT.usermodel.Student;

@RestController
public class StudentController {

  List<Student> students = new ArrayList<>(
      List.of(
          new Student(1, "Ramneek Kaur", 89),
          new Student(2, "Anurag Shalakya", 92)
      )
  );

  @GetMapping("/students")
  public List<Student> getStudents() {
      return students;
  }

  @PostMapping("/students")
  public Student addStudent(@RequestBody Student student) {
      students.add(student);
      return student;
  }
}

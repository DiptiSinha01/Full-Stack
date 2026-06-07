package com.sample.Rest.sample.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sample.Rest.sample.model.Student;
import com.sample.Rest.sample.repository.StudentRepository;

@Service

public class StudentService {
	@Autowired
    private StudentRepository repository;

    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    public Student saveStudent(Student student) {
        return repository.save(student);
    }
    
    @SuppressWarnings("deprecation")
	public Student getStudentById(int id) {
    	return repository.getById(id);
    }
    
    public List<Student> deleteStudentById(int id) {
        repository.deleteById(id);
        return repository.findAll();
    }

    public Student updateStudent(int id, Student student) {
        Student existing = repository.findById(id).orElse(null);

        if (existing != null) {
            existing.setName(student.getName());
            existing.setCourse(student.getCourse());
            return repository.save(existing);
        }

        return null;
    }
}

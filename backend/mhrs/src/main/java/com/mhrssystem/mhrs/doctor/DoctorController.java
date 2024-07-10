package com.mhrssystem.mhrs.doctor;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/doctors")
public class DoctorController 
{
    DoctorService doctorService;

    public DoctorController(DoctorService doctorService) 
    {
        this.doctorService = doctorService;
    }

    @GetMapping
    List<Doctor> findAll()
    {
        return doctorService.findAll();
    }

    @GetMapping("/{id}")
    Doctor findById(@PathVariable Long id)
    {
        Optional<Doctor> doctor = doctorService.findById(id);
        if(doctor.isEmpty())
        {
            throw new DoctorNotFoundException();
        }
        return doctor.get();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("")
    void create(@Valid @RequestBody Doctor doctor)
    {
        doctorService.save(doctor);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping("/{id}")
    void update(@Valid @RequestBody Doctor doctor, @PathVariable Long id)
    {
        doctorService.save(doctor);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    void delete(@PathVariable Long id)
    {
        doctorService.deleteById(id);
    }


    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("")
    void deleteAll()
    {
        doctorService.deleteAll();
    }


}

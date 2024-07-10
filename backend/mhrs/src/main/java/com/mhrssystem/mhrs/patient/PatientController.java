package com.mhrssystem.mhrs.patient;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/patients")
public class PatientController 
{
    PatientService patientService;
    
    public PatientController(PatientService patientService) 
    {
        this.patientService = patientService;
    }

    @GetMapping
    public ResponseEntity<List<Patient>> findAll()
    {
        List<Patient> patients = patientService.findAll();
        return new ResponseEntity<>(patients, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Patient> findById(@PathVariable Long id)
    {
        Optional<Patient> patient = patientService.findById(id);
        if(patient.isEmpty())
        {
            throw new PatientNotFoundException();
        }
        return new ResponseEntity<>(patient.get(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Void> create(@Valid @RequestBody Patient patient)
    {
        patientService.save(patient);
        return new ResponseEntity<>(HttpStatus.CREATED);   
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> update(@Valid @RequestBody Patient patient, @PathVariable Long id)
    {
        patientService.update(patient, id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) 
    {
        patientService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteAll() 
    {
        patientService.deleteAll();
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}

package com.mhrssystem.mhrs.patient;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class PatientService {
    private PatientRepository patientRepository;

    public PatientService(PatientRepository patientRepository) 
    {
        this.patientRepository = patientRepository;
    }

    public List<Patient> findAll()
    {
        return patientRepository.findAll();
    }

    public Optional<Patient> findById(Long id)
    {
        return patientRepository.findById(id);
    }

    public void save(Patient patient) 
    {
        patientRepository.save(patient);
    }

    public void update(Patient patient, Long id)
    {
        Patient patient1 = patientRepository.findById(id).orElseThrow(PatientNotFoundException::new);
        patient1.setName(patient.getName());
        patient1.setEmail(patient.getEmail());
        patient1.setPassword(patient.getPassword());
        patient1.setPhone(patient.getPhone());
        patientRepository.save(patient1);
    }

    public void deleteById(Long id) 
    {
        if (patientRepository.existsById(id)) 
        {
            patientRepository.deleteById(id);
        } 
        else 
        {
            throw new PatientNotFoundException();
        }
    }

    public void deleteAll() 
    {
        patientRepository.deleteAll();
    }
}

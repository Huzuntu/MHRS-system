package com.mhrssystem.mhrs.doctor;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;


@Service
public class DoctorService {

    private DoctorRepository doctorRepository;

    
    public DoctorService(DoctorRepository doctorRepository) {
        this.doctorRepository = doctorRepository;
    }

    public List<Doctor> findAll()
    {
        return doctorRepository.findAll();
    }

    public Optional<Doctor> findById(Long id)
    {
        return doctorRepository.findById(id);
    }

    // public Doctor findByName(String name)
    // {
    //     return doctorRepository.findByName(name);
    // }

    public List<Doctor> findByNameContaining(String name) 
    {
        return doctorRepository.findByNameContaining(name);
    }

    public void save(Doctor doctor) 
    {
        doctorRepository.save(doctor);
    }

    public void deleteById(Long id) 
    {
        if (doctorRepository.existsById(id)) 
        {
            doctorRepository.deleteById(id);
        } 
        else 
        {
            throw new DoctorNotFoundException();
        }
    }

    public void deleteAll() 
    {
        doctorRepository.deleteAll();
    }

}

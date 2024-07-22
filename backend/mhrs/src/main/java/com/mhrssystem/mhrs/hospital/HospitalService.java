package com.mhrssystem.mhrs.hospital;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
public class HospitalService 
{
    private HospitalRepository hospitalRepository;

    public HospitalService(HospitalRepository hospitalRepository) 
    {
        this.hospitalRepository = hospitalRepository;
    }

    public List<Hospital> findAll()
    {
        return hospitalRepository.findAll();
    }

    public Optional<Hospital> findById(Long id)
    {
        return hospitalRepository.findById(id);
    }
    
    public List<Hospital> findByNameContaining(String name)
    {
        return hospitalRepository.findByNameContaining(name);
    }

    public void save(Hospital hospital)
    {
        hospitalRepository.save(hospital);
    }

    public void deleteById(Long id)
    {
        if(hospitalRepository.existsById(id))
        {
            hospitalRepository.deleteById(id);
        }
        else
        {
            throw new HospitalNotFoundException();
        }
    }

    public void deleteAll()
    {
        hospitalRepository.deleteAll();
    }

}

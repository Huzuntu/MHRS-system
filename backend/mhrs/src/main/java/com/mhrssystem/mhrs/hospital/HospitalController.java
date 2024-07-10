package com.mhrssystem.mhrs.hospital;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/hospitals")
public class HospitalController 
{
    private HospitalService hospitalService;

    public HospitalController(HospitalService hospitalService) 
    {
        this.hospitalService = hospitalService;
    }

    @GetMapping
    public List<Hospital> findAll()
    {
        return hospitalService.findAll();
    }

    @GetMapping("/{id}")
    Hospital findById(@PathVariable Long id)
    {
        Optional<Hospital> hospital = hospitalService.findById(id);
        if(hospital.isEmpty())
        {
            throw new HospitalNotFoundException();
        }
        return hospital.get();
    }

    @GetMapping("/search")
    public List<Hospital> findByName(@RequestParam String name)
    {
        return hospitalService.findByNameContainingHospitals(name);
    }
    
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("")
    void create(@Valid @RequestBody Hospital hospital)
    {
        hospitalService.save(hospital);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping("/{id}")
    void update(@Valid @RequestBody Hospital hospital, @PathVariable Long id)
    {
        hospitalService.save(hospital);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    void delete(@PathVariable Long id)
    {
        hospitalService.deleteById(id);
    }


    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("")
    void deleteAll()
    {
        hospitalService.deleteAll();
    }
}

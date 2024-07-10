package com.mhrssystem.mhrs.patient;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.github.javafaker.Faker;

@Component
public class PatientDataLoader implements  CommandLineRunner
{
    private PatientRepository patientRepository;

    public PatientDataLoader(PatientRepository patientRepository) 
    {
        this.patientRepository = patientRepository;
    }

    @Override
    public void run(String... args) throws Exception
    {
        Faker faker = new Faker();
        Patient patient = new Patient(
            null,
            faker.name().fullName(),
            faker.internet().emailAddress(),
            faker.internet().password(),
            faker.phoneNumber().phoneNumber()
        );
    }
    
}


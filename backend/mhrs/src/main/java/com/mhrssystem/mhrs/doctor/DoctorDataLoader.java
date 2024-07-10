package com.mhrssystem.mhrs.doctor;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.github.javafaker.Faker;

@Component
public class DoctorDataLoader implements CommandLineRunner{
    private DoctorRepository doctorRepository;

    public DoctorDataLoader(DoctorRepository doctorRepository) 
    {
        this.doctorRepository = doctorRepository;
    }

    @Override
    public void run(String... args) throws Exception 
    {
        Faker faker = new Faker();

        for(int i = 0; i < 10; i++)
        {
            Doctor doctor = new Doctor(
                null, // ID will be auto-generated
                faker.name().fullName(),
                faker.internet().emailAddress(),
                faker.medical().medicineName(),
                faker.internet().password(),
                faker.phoneNumber().phoneNumber(),
                faker.company().name()
            );
            doctorRepository.save(doctor);
        }
    }
}
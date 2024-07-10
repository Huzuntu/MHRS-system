package com.mhrssystem.mhrs.hospital;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface HospitalRepository extends JpaRepository<Hospital, Long>
{
    List<Hospital> findByNameContainingHospitals(String name);
}

package com.mhrssystem.mhrs.doctor;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class DoctorNotFoundException extends RuntimeException
{
    public DoctorNotFoundException()
    {
        super("Doctor not found");
    }
}

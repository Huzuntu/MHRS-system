package com.mhrssystem.mhrs.appointment;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;

import jakarta.validation.Valid;

@Service
public class AppointmentService {
    private AppointmentRepository appointmentRepository;

    public AppointmentService() 
    {
        this.appointmentRepository = appointmentRepository;
    }

    public List<Appointment> findAll()
    {
        return appointmentRepository.findAll();
    }
    
    public Optional<Appointment> findById(Long id)
    {
        return appointmentRepository.findById(id);
    }

    public void save(Appointment appointment)
    {
        appointmentRepository.save(appointment);
    }

    public void update(Appointment appointment, Long id)
    {
        appointmentRepository.save(appointment);
    }

    public void deleteById(Long id)
    {
        if(appointmentRepository.existsById(id))
        {
            appointmentRepository.deleteById(id);
        }
        else
        {
            throw new AppointmentNotFoundException();
        }
    }

    public void deleteAll()
    {
        appointmentRepository.deleteAll();
    }
}

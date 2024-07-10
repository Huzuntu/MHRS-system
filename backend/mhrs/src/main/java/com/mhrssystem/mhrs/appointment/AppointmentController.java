package com.mhrssystem.mhrs.appointment;

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
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/appointments")
public class AppointmentController 
{
    private AppointmentService appointmentService;

    public AppointmentController(AppointmentService appointmentService) 
    {
        this.appointmentService = appointmentService;
    }

    @GetMapping
    List<Appointment> findAll()
    {
        return appointmentService.findAll();
    }
    
    @GetMapping("/{id}")
    Appointment findById(@PathVariable Long id)
    {
        Optional<Appointment> appointment = appointmentService.findById(id);
        if(appointment.isEmpty())
        {
            throw new AppointmentNotFoundException();
        }
        return appointment.get();
    }


    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping()
    void create(@Valid @RequestBody Appointment appointment)
    {
        appointmentService.save(appointment);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping("/{id}")
    void update(@Valid @RequestBody Appointment appointment, @PathVariable Long id)
    {
        appointmentService.save(appointment);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    void delete(@PathVariable Long id)
    {
        appointmentService.deleteById(id);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping()
    void deleteAll()
    {
        appointmentService.deleteAll();
    }
    

}

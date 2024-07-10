package com.mhrssystem.mhrs;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MhrsApplication {

	private static final Logger log = LoggerFactory.getLogger(MhrsApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(MhrsApplication.class, args);	
	}

}

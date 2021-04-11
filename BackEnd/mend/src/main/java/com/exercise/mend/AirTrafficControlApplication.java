package com.exercise.mend;

import org.dozer.DozerBeanMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.exercise.mend.models.AircraftResponse;

/**
 * The Class AirTrafficControlApplication.
 */
@SpringBootApplication
@EnableJpaRepositories
@EnableAutoConfiguration
public class AirTrafficControlApplication {

	
	/**
	 * The main method.
	 *
	 * @param args the arguments
	 */
	public static void main(String[] args) {
		SpringApplication.run(AirTrafficControlApplication.class, args);
	}
	
	/**
	 * Dozer bean mapper.
	 *
	 * @return the dozer bean mapper bean object
	 */
	@Bean
	public DozerBeanMapper dozerBeanMapper() {
	    return new DozerBeanMapper();
	}
	
	/**
	 * Aircraft response.
	 *
	 * @return the aircraft response bean
	 */
	@Bean
	public AircraftResponse aircraftResponse() {
	    return new AircraftResponse();
	}
	
	
}

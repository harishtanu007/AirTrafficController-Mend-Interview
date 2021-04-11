package com.exercise.mend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.exercise.mend.repository.models.AircraftDao;

/**
 * The Interface AircraftRepository.
 */
@Repository
public interface AircraftRepository extends JpaRepository<AircraftDao, Integer>{
}

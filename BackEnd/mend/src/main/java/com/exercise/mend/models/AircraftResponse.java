package com.exercise.mend.models;

import java.util.List;

/**
 * The Class AircraftResponse.
 */
public class AircraftResponse {
	
	/** The message. */
	private String message;
	
	/**
	 * Gets the message.
	 *
	 * @return the message
	 */
	public String getMessage() {
		return message;
	}

	/**
	 * Sets the message.
	 *
	 * @param message the new message
	 */
	public void setMessage(String message) {
		this.message = message;
	}

	/** The aircrafts. */
	private List<Aircraft> aircrafts;

	/**
	 * Gets the aircrafts.
	 *
	 * @return the aircrafts
	 */
	public List<Aircraft> getAircrafts() {
		return this.aircrafts;
	}

	/**
	 * Sets the aircraft response.
	 *
	 * @param aircrafts the new aircraft response
	 */
	public void setAircraftResponse(List<Aircraft> aircrafts) {
		this.aircrafts = aircrafts;
	}
	

}

package com.exercise.mend.exception;

import org.springframework.http.HttpStatus;

/**
 * The Class BadRequestException.
 */
public class BadRequestException extends RestServiceException{

    /** The Constant serialVersionUID. */
	private static final long serialVersionUID = 1L;

	/**
	 * Instantiates a new bad request exception.
	 *
	 * @param @param String error message
	 */
	public BadRequestException(String error) {
        super(error, HttpStatus.OK);
    }

}

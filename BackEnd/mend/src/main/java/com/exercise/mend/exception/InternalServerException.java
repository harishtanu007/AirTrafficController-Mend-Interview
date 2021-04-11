package com.exercise.mend.exception;

import org.springframework.http.HttpStatus;

/**
 * The Class InternalServerException.
 */
public class InternalServerException extends RestServiceException {


    /** The Constant serialVersionUID. */
	private static final long serialVersionUID = 1L;

	/**
	 * Instantiates a new internal server exception.
	 *
	 * @param String error message
	 */
	public InternalServerException(String error) {
        super(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

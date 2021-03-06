package com.exercise.mend.exception;

import org.springframework.http.HttpStatus;

/**
 * The Class QueueSizeException handles queue size related exceptions.
 */
public class QueueSizeException  extends RestServiceException {



	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = 1L;

	/**
	 * Instantiates a new queue size exception.
	 *
	 * @param String error messagee
	 */
	public QueueSizeException(String message) {
		super(message, HttpStatus.OK);
	}
}
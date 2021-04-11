package com.exercise.mend.exception;

/**
 * The Class ApplicationBootException handles system boot exception.
 */
public class ApplicationBootException extends Exception {

    /** The Constant serialVersionUID. */
	private static final long serialVersionUID = 1L;

	/**
	 * Instantiates a new application boot exception.
	 *
	 * @param @param String error message
	 */
	public ApplicationBootException(String message) {
        super(message);
       
    }
}

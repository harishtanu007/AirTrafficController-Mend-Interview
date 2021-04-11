package com.exercise.mend.exception;

import org.springframework.http.HttpStatus;

/**
 * The Class RestServiceException.
 */
public class RestServiceException extends RuntimeException {

    /** The Constant serialVersionUID. */
	private static final long serialVersionUID = 1L;
    
    /** The http status. */
    private HttpStatus httpStatus;

    /**
     * Instantiates a new rest service exception.
     *
     * @param @param String error message
     * @param httpStatus the http status
     */
    RestServiceException(String message, HttpStatus httpStatus) {
        super(message);
        this.httpStatus = httpStatus;
    }

    /**
     * Gets the http status.
     *
     * @return the http status
     */
    public HttpStatus getHttpStatus() {
        return httpStatus;
    }
}


package eu.ec.europa.inea.eustories.exceptions;

public class DataNotFoundException extends RuntimeException{

    public DataNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

    public DataNotFoundException(String message) {
        super(message);


    }
}

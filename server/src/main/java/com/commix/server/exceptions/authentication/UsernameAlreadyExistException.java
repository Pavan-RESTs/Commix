package com.commix.server.exceptions.authentication;

import com.commix.server.exceptions.CustomAuthenticationException;

public class UsernameAlreadyExistException extends CustomAuthenticationException {
    public UsernameAlreadyExistException(String message) {
        super(message);
    }
}

package com.commix.server.exceptions;

import com.commix.server.dto.ErrorResponseDTO;
import com.commix.server.exceptions.authentication.UsernameAlreadyExistException;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(AuthenticationException.class)
    public ResponseEntity<ErrorResponseDTO> authenticationExceptionHandler(
            AuthenticationException exception,
            HttpServletRequest request
    ) {
        HttpStatus status;
        String errorMessage;

        if (exception instanceof UsernameAlreadyExistException) {
            status = HttpStatus.CONFLICT;
            errorMessage = exception.getMessage();
        } else if (exception instanceof UsernameNotFoundException || exception instanceof BadCredentialsException) {
            status = HttpStatus.UNAUTHORIZED;
            errorMessage = "The credentials are invalid";
        } else {
            status = HttpStatus.BAD_REQUEST;
            errorMessage = exception.getMessage();
        }

        ErrorResponseDTO errorResponseDTO = new ErrorResponseDTO(
                status.value(),
                errorMessage,
                request.getRequestURI());

        return ResponseEntity.status(status).body(errorResponseDTO);
    }
}

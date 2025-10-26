package com.commix.server.controller;

import com.commix.server.dto.request.LoginRequestDTO;
import com.commix.server.dto.response.LoginResponseDTO;
import com.commix.server.model.UserModel;
import com.commix.server.service.AuthenticationService;
import com.commix.server.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    private JwtService jwtService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> login(@RequestBody LoginRequestDTO requestDTO) {
        authenticationService.login(requestDTO);
        String jwtToken = jwtService.generateToken(requestDTO.getUsername());
        LoginResponseDTO response = new LoginResponseDTO(requestDTO.getUsername(), jwtToken);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UserModel userModel) {
        authenticationService.register(userModel);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("/logout")
    public ResponseEntity<?> logout() {
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}

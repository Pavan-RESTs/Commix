package com.commix.server.service;

import com.commix.server.dto.request.LoginRequestDTO;
import com.commix.server.exceptions.authentication.UsernameAlreadyExistException;
import com.commix.server.model.UserModel;
import com.commix.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public void login(LoginRequestDTO requestDTO) {
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(
                        requestDTO.getUsername(),
                        requestDTO.getPassword()));
    }

    public void register(UserModel userModel) {
        userModel.setPassword(passwordEncoder.encode(userModel.getPassword()));
        if (userRepository.findByUsername(userModel.getUsername()) != null) {
            throw new UsernameAlreadyExistException("Username is unavailable!");
        }
        userRepository.save(userModel);
    }
}

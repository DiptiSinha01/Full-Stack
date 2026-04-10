package com.dipti.JWT.service;

import com.dipti.JWT.repository.UserRepository;
import com.dipti.JWT.usermodel.UserEntity;
import com.dipti.JWT.usermodel.UserPrincipal;


import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

//@Service
//@RequiredArgsConstructor
//public class MyUserDetailService implements UserDetailsService {
//    private final UserRepository repository;
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        UserEntity user = repository.findByUsername(username)
//                .orElseThrow(() -> new UsernameNotFoundException("Username not found"));
//
//        return new UserPrincipal(user);
//    }
//}

@Service
public class MyUserDetailService implements UserDetailsService {

    private final UserRepository repository;

    public MyUserDetailService(UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        UserEntity user = repository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("Username not found"));

        return new UserPrincipal(user);
    }
}
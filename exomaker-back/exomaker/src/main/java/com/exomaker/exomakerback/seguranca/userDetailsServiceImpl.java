package com.exomaker.exomakerback.seguranca;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.exomaker.exomakerback.model.Usuario;
import com.exomaker.exomakerback.repository.UsuarioRepository;

@Service
public class userDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private UsuarioRepository userRepository;
	

	@Override
	public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
		Optional<Usuario> user = userRepository.findAllByUsuario(userName);
		user.orElseThrow(() -> new UsernameNotFoundException(userName+" no found."));
		
		return user.map(UserDetailsImpl::new).get();	
	}
	
}

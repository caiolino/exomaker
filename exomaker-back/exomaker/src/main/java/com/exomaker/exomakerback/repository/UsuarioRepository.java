package com.exomaker.exomakerback.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.exomaker.exomakerback.model.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

	public Optional<Usuario> findAllByUsuario (String usuario);
	
	public List<Usuario> findAllByNomeContainingIgnoreCase (String nome);
	
}

package com.exomaker.exomakerback.repository;

import org.springframework.data.repository.CrudRepository;

import com.exomaker.exomakerback.model.Usuario;

public interface UsuarioRepository extends CrudRepository<Usuario, String>{
	Usuario findByLogin(String login);
}

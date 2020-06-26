package com.exomaker.exomakerback.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.exomaker.exomakerback.model.Contato;

@Repository
public interface ContatoRepository extends JpaRepository<Contato, Long>{
	

}

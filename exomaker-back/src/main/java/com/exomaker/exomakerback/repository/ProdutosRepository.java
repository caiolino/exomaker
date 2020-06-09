package com.exomaker.exomakerback.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.exomaker.exomakerback.model.Produtos;
import java.util.List;

@Repository
public interface ProdutosRepository extends JpaRepository<Produtos, Long> {
	
	public List<Produtos> findAllByNomeProdutoContainingIgnoreCase (String titulo);
	
}

package com.exomaker.exomakerback.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.exomaker.exomakerback.model.Produto;
import java.util.List;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {
	
	public List<Produto> findAllByNomeProdutoContainingIgnoreCase (String titulo);
	
	public List<Produto> findAllByCdPrecoContainingIgnoreCase (String preco);

	public List<Produto> findProdutoById (long id);
	
	
}

package com.exomaker.exomakerback.controller;

import com.exomaker.exomakerback.model.Produto;
import com.exomaker.exomakerback.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/produtos")
@CrossOrigin("*")
public class ProdutoController {
	
	@Autowired
	private ProdutoRepository repository;
		
	@GetMapping
	public ResponseEntity<List<Produto>> GetAll(){
		return ResponseEntity.ok(repository.findAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Produto> GetbyId(@PathVariable long id){
		return repository.findById(id)
				.map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@GetMapping("/produto/{produto}")
	public ResponseEntity<List<Produto>> Getbyproduto(@PathVariable String produto){
		return ResponseEntity.ok(repository.findAllByNomeProdutoContainingIgnoreCase(produto));
	}
	
	@GetMapping("/preco/{preco}")
	public ResponseEntity<List<Produto>> GetbyPreco(@PathVariable String preco){
		return ResponseEntity.ok(repository.findAllByCdPrecoContainingIgnoreCase(preco));
	}

	@PostMapping
	public ResponseEntity<Produto> post (@RequestBody Produto Produtos){
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(Produtos));
	}
	
	@PutMapping
	public ResponseEntity<Produto> put (@RequestBody Produto Produto){
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(Produto));
	}
	
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable long id) {
		repository.deleteById(id);
	}
	


}

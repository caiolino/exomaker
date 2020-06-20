package com.exomaker.exomakerback.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exomaker.exomakerback.model.Pedido;
import com.exomaker.exomakerback.model.Produto;
import com.exomaker.exomakerback.repository.PedidoRepository;
import com.exomaker.exomakerback.repository.ProdutoRepository;

@RestController
@RequestMapping("/pedido")
@CrossOrigin("*")
public class PedidoController {
	
	@Autowired
	private ProdutoRepository repository;
	
	@Autowired
	private PedidoRepository pedidoRepository;
	
	@GetMapping
	public ResponseEntity<List<Pedido>> GetAll(){
		return ResponseEntity.ok(pedidoRepository.findAll());
	}

}

package com.exomaker.exomakerback.model;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


@Entity
@Table(name="tb_pedido")
public class Pedido {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long pedido_id;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date date_pedido = new java.sql.Date(System.currentTimeMillis());
	
	@OneToMany
	private List<Produto> produto;

	public long getPedido_id() {
		return pedido_id;
	}

	public void setPedido_id(long pedido_id) {
		this.pedido_id = pedido_id;
	}

	public Date getDate_pedido() {
		return date_pedido;
	}

	public void setDate_pedido(Date date_pedido) {
		this.date_pedido = date_pedido;
	}

	public List<Produto> getProduto() {
		return produto;
	}

	public void setProduto(List<Produto> produto) {
		this.produto = produto;
	}
	
	

}

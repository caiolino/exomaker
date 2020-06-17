package com.exomaker.exomakerback.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.Email;

@Entity
@Table(name="tb_usuario")
public class Usuario {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long user_id;
	
	@Column(length = 100)
	@Size(min = 2, max = 100)
	@NotNull
	private String usuario;
	
	@Column(length = 100)
	@Size(min = 3, max = 100)
	@NotNull
	private String email;
	
	@Column(length = 100)
	@Size(min = 6, max = 100)
	@NotNull
	private String senha;
	
	@Column(length = 100)
	@Size(min = 2, max = 100)
	@NotNull
	private String nome;
	
	@NotNull
	@Column(length = 100)
	@Size(min = 1 , max = 100)
	private int cpf;
	
	@NotNull
	@Column(length = 100)
	@Size(min = 1 , max = 100)
	private int telefone;
	
	@Column(length = 100)
	@Size(min = 2, max = 100)
	@NotNull
	private String rua;
	
	@NotNull
	@Column(length = 1000000)
	@Size(min = 1 , max = 1000000)
	private int numero;
	
	@Column(length = 100)
	@Size(min = 2, max = 100)
	@NotNull
	private String complemento;
	
	@NotNull
	@Column(length = 100)
	@Size(min = 1 , max = 100)
	private int cep;
	

	public long getUser_id() {
		return user_id;
	}

	public void setUser_id(long user_id) {
		this.user_id = user_id;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public int getCpf() {
		return cpf;
	}

	public void setCpf(int cpf) {
		this.cpf = cpf;
	}

	public int getTelefone() {
		return telefone;
	}

	public void setTelefone(int telefone) {
		this.telefone = telefone;
	}

	public String getRua() {
		return rua;
	}

	public void setRua(String rua) {
		this.rua = rua;
	}

	public String getComplemento() {
		return complemento;
	}

	public void setComplemento(String complemento) {
		this.complemento = complemento;
	}

	public int getCep() {
		return cep;
	}

	public void setCep(int cep) {
		this.cep = cep;
	}	
	
	
	
}

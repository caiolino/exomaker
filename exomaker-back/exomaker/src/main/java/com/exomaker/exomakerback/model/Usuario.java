package com.exomaker.exomakerback.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
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
	
	@Column(unique = true, length = 100)
	@Size(min = 2, max = 100)
	@NotNull
	private String usuario;
	
	@Size(min = 6, max = 100)
	@NotNull
	private String senha;
	
	@Size(min = 2, max = 100)
	@NotNull
	private String nome;
	
	@Size(min = 6, max = 100)
	@NotNull
	@Email
	private String email;

	@Column(length = 11)
	@NotNull
	private long cpf;
	
	@Column(length = 100)
	@NotNull
	private long telefone;
	
	@Size(min = 2, max = 100)
	@NotNull
	private String cep;
	
	@Size(min = 2, max = 100)
	@NotNull
	private String rua;
	
	@Column(length = 10000)
	@NotNull
	private long numero;
	
	@Size(min = 2, max = 100)
	@NotNull
	private String complemento;
	
    @Column(columnDefinition = "boolean default false")
	@NotNull
	private boolean admin = false;
	

	public boolean isAdmin() {
		return admin;
	}

	public void setAdmin(boolean admin) {
		this.admin = admin;
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getCpf() {
		return cpf;
	}

	public void setCpf(long cpf) {
		this.cpf = cpf;
	}

	public long getTelefone() {
		return telefone;
	}

	public void setTelefone(long telefone) {
		this.telefone = telefone;
	}

	public String getRua() {
		return rua;
	}

	public void setRua(String rua) {
		this.rua = rua;
	}

	public long getNumero() {
		return numero;
	}

	public void setNumero(long numero) {
		this.numero = numero;
	}

	public long getUser_id() {
		return user_id;
	}

	public String getComplemento() {
		return complemento;
	}

	public void setComplemento(String complemento) {
		this.complemento = complemento;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}
	
}

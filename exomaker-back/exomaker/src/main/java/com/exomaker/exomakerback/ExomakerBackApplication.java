package com.exomaker.exomakerback;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class ExomakerBackApplication {

	public static void main(String[] args) {
		SpringApplication.run(ExomakerBackApplication.class, args);
		System.out.print(new BCryptPasswordEncoder().encode("123"));
	}

}

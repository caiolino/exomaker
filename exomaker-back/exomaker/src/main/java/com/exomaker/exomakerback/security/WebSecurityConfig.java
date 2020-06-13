package com.exomaker.exomakerback.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends  WebSecurityConfigurerAdapter{
	
	@Autowired
	private ImplementsUserDetailsServie UserDetailsService;
	
	@Override
	protected void configure(HttpSecurity http) throws Exception{
		http.cors();
		http.csrf().disable().authorizeRequests()
		//.antMatchers(HttpMethod.GET, "/**").permitAll()
		.antMatchers(HttpMethod.POST, "/**").permitAll()
		.antMatchers(HttpMethod.GET, "/produtos/*").hasRole("ADMIN")
		.anyRequest().authenticated()
		.and().formLogin()
        .loginPage("http://localhos:4200/login") 
        .loginProcessingUrl("/login").permitAll()	
		.and().logout().logoutRequestMatcher(new AntPathRequestMatcher("/logout"));
	}
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception{
		auth.userDetailsService(UserDetailsService)
		.passwordEncoder(new BCryptPasswordEncoder());
	
	}


}

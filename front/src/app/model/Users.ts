export class Users {

    public user_id: number;
    public usuario: string
    public senha: string;
    public nome: string;
    public email: string;
    public cpf: number;
    public telefone: number;
    public cep: string;
    public rua: string;
    public numero: number;
    public complemento: String;
}

export class UsersLogin {
    public usuario: string;
    public nome: string;
    public senha: string;
    public token: string;
    public admin: boolean;
}


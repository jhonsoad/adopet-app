export interface Post {

    idPost: number,
    imageName: string,
    petName: string,
    comment: string,
    idadePet: number,
    tamanhoPet: string,
    cidadePet: string,
    showModal?: boolean;
    showDeleteModal?: boolean;
    usuario: {

        id: number,
        nomeUsuario: string,
        telefoneUsuario: string,
        email: string

    }
}
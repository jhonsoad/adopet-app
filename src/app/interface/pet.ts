export interface Pet {

    imageName: string,
    image: File | null,
    comment: string,
    petName: string,
    idadePet: string,
    tamanhoPet: string,
    cidadePet: string,
    userId: number,

    usuarioLogin: {

        idUsuario: number

    }

}

export class User{
    id!:number;
    nom!:string;
    prenom!: string;
    email!:string;
    password!: string;
    adresse!:string;
    cni!:string;
    profil!:{
        libelle:string;
    };
    agence:{
        id:number;
        adresse:string;
        compte:{
            id:number;
            solde:string;
        };
    };
}
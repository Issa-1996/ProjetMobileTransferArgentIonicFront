export class Transaction{
    montant: string;
    depotClient:{
        nom: string;
        prenom:string;
        cni: string;
        telephone:string;
    };
    retraitClient:{
        nom: string;
        prenom:string;
        telephone:string;
    }
}
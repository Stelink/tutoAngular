export class AppareilService{
    appareils = [
        {
          name: 'Machine à laver',
          status: 'éteint'
        },
        {
          name: 'Téléviseur',
          status: 'allumé'
        },
        {
          name: 'Ordinateur',
          status: 'bite'
        }
      ];

    switchOnAll(){
        for(let appareil of this.appareils){
            appareil.status = 'allumé';
        }
    }

    switchOffAll(){
        for(let appareil of this.appareils){
            appareil.status = 'éteint';
        }
    }

    switchOnOne(index: number){
        this.appareils[index].status = 'allumé';
    }

    switchOffOne(index: number){
        this.appareils[index].status = 'éteint';
    }
}